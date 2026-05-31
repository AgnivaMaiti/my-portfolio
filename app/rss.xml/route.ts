import { allProjects } from "contentlayer/generated";
import { Feed } from "feed";

export async function GET() {
  const site_url = "https://agniva.tech";
  
  const feed = new Feed({
    title: "Agniva - Projects",
    description: "Computer Science student, AI-ML and Android dev enthusiast",
    id: site_url,
    link: site_url,
    language: "en",
    image: `${site_url}/og.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Agniva`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
    },
    author: {
      name: "Agniva",
      email: "contact@agniva.tech",
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
