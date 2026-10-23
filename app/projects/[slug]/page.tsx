import { notFound } from "next/navigation";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import { Metadata } from "next";
import { Card } from "@/app/components/card";
import { Article } from "../article";
import { siteConfig } from "@/app/site";

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
  const url = `/projects/${project.slug}`;
  const ogImage = "/opengraph-image";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: project.date,
      authors: [siteConfig.name],
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
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

  const pageUrl = `${siteConfig.url}/projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        url: pageUrl,
        ...(project.repository && {
          codeRepository: `https://github.com/${project.repository}`,
        }),
        author: {
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        datePublished: project.date,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: pageUrl },
        ],
      },
    ],
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

      <aside className="max-w-[65ch] px-4 mx-auto">
        <div className="p-6 border rounded-xl border-zinc-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Need something like this built?
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            I&apos;m open to full-time roles and freelance projects.
          </p>
          <div className="flex flex-col gap-3 mt-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              Work with me
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium border rounded-md duration-200 border-zinc-400 text-zinc-800 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300"
            >
              View resume
            </Link>
          </div>
        </div>
      </aside>

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

