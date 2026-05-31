import { allProjects } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const projects = allProjects
		.filter((project) => project.published)
		.map((project) => ({
			url: `https://agniva.tech/projects/${project.slug}`,
			lastModified: project.date,
		}));

	const routes = [
		"",
		"/projects",
		"/about",
		"/contact",
		"/resume",
		"/skills",
	].map((route) => ({
		url: `https://agniva.tech${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...projects];
}
