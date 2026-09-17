import { MetadataRoute } from "next";
import { siteConfig } from "./site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [{ src: "/favicon.png", sizes: "any", type: "image/png" }],
  };
}
