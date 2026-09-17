import OpengraphImage from "./opengraph-image";
import { siteConfig } from "./site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpengraphImage;
