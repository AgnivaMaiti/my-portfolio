import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import { Metadata } from "next";
import { Card } from "@/app/components/card";
import { Article } from "../article";

const redis = Redis.fromEnv();

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const project = allProjects.find((project) => project.slug === params?.slug);
  if (!project) return;

  const title = project.title;
  const description = project.description;
  const ogImage = `https://agniva.tech/og.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: project.date,
      url: `https://agniva.tech/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  let views = 0;
  let relatedViews: Record<string, number> = {};
  try {
    views =
      (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;
  } catch (e) {
    console.error(`Failed to fetch views for project ${slug}:`, e);
  }

  const relatedProjects = allProjects
    .filter((p) => p.published && p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  if (relatedProjects.length > 0) {
    try {
      const v = await redis.mget<number[]>(
        ...relatedProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
      );
      relatedProjects.forEach((p, i) => {
        relatedViews[p.slug] = v[i] ?? 0;
      });
    } catch (e) {
      console.error(`Failed to fetch views for related projects:`, e);
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Agniva",
    },
    datePublished: project.date,
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc dark:prose-invert prose-quoteless">
        <Mdx code={project.body.code} />
      </article>

      {relatedProjects.length > 0 && (
        <div className="bg-zinc-100 dark:bg-black w-full py-12 pb-24 mt-12 border-t border-zinc-300 dark:border-zinc-800">
          <div className="max-w-4xl px-4 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl mb-8">
              More Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
              {relatedProjects.map((rp) => (
                <Card key={rp.slug}>
                  <Article project={rp} views={relatedViews[rp.slug] ?? 0} />
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

