import { allProjects } from "contentlayer/generated";
import { MetadataRoute } from "next";
import { siteConfig } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = allProjects
    .filter((project) => project.published)
    .map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: project.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  const routes = [
    { path: "", priority: 1 },
    { path: "/contact", priority: 0.9 },
    { path: "/resume", priority: 0.9 },
    { path: "/projects", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/skills", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [...routes, ...projects];
}
