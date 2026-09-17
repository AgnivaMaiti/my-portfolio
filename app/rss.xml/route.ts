import { allProjects } from "contentlayer/generated";
import { Feed } from "feed";
import { siteConfig } from "../site";

export async function GET() {
  const site_url = siteConfig.url;

  const feed = new Feed({
    title: `${siteConfig.name} - Projects`,
    description: siteConfig.description,
    id: site_url,
    link: site_url,
    language: "en",
    image: `${site_url}/opengraph-image`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.name}`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
    },
    author: {
      name: siteConfig.name,
      email: siteConfig.email,
      link: site_url,
    },
  });

  allProjects
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date ?? new Date()).getTime() - new Date(a.date ?? new Date()).getTime())
    .forEach((project) => {
      feed.addItem({
        title: project.title,
        id: `${site_url}/projects/${project.slug}`,
        link: `${site_url}/projects/${project.slug}`,
        description: project.description,
        date: new Date(project.date ?? new Date()),
      });
    });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
