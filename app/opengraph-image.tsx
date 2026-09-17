import { ImageResponse } from "next/server";
import { siteConfig } from "./site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card shown when the site is shared on LinkedIn, WhatsApp, X, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #000000 0%, #27272a 50%, #000000 100%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            padding: "10px 22px",
            borderRadius: 999,
            border: "2px solid #22c55e",
            color: "#86efac",
            fontSize: 28,
          }}
        >
          Open to jobs & freelance work
        </div>
        <div style={{ fontSize: 110, fontWeight: 700, marginTop: 40, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 48, color: "#d4d4d8", marginTop: 12 }}>
          {siteConfig.role}
        </div>
        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 48 }}>
          {`agniva.in · ${siteConfig.email}`}
        </div>
      </div>
    ),
    size,
  );
}
