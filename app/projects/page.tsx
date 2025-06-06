import Link from "next/link";
import React from "react";
import { allProjects, Project } from "contentlayer/generated"; // Import Project type from contentlayer
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;

// Remove the local Project interface since we're using the one from contentlayer
// interface Project {
//   slug: string;
//   title: string;
//   description: string;
//   date?: string;
//   published: boolean;
//   repository?: string;
//   url?: string;
// }

export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p: Project) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc: Record<string, number>, v: number | null, i: number) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  console.log('Available projects:', allProjects.map((p: Project) => ({ slug: p.slug, published: p.published })));
  
  // Get only published projects for selection
  const publishedProjects = allProjects.filter((p: Project) => p.published);
  
  // Ensure we have enough projects and use safe fallbacks
  const featured = publishedProjects.find((project: Project) => project.slug === "Murmuration") || publishedProjects[0];
  
  const top2 = publishedProjects.find((project: Project) => project.slug === "Geeti") || 
               publishedProjects.find((project: Project) => project.slug === "checklist") || 
               publishedProjects.find((project: Project) => project.slug !== featured?.slug) ||
               publishedProjects[1] ||
               featured;
               
  const top3 = publishedProjects.find((project: Project) => project.slug === "Startup-Validator") || 
               publishedProjects.find((project: Project) => project.slug === "Resume-Analyzer") || 
               publishedProjects.find((project: Project) => 
                 project.slug !== featured?.slug && 
                 project.slug !== top2?.slug
               ) ||
               publishedProjects[2] ||
               featured;
  
  const sorted = publishedProjects
    .filter(
      (project: Project) =>
        project.slug !== featured?.slug &&
        project.slug !== top2?.slug &&
        project.slug !== top3?.slug,
    )
    .sort(
      (a: Project, b: Project) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].filter(Boolean).map((project: Project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_: Project, i: number) => i % 3 === 0)
              .map((project: Project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_: Project, i: number) => i % 3 === 1)
              .map((project: Project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_: Project, i: number) => i % 3 === 2)
              .map((project: Project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
