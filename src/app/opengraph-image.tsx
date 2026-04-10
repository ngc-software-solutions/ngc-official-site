import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/data/metadata";

export const runtime = "edge";
export const alt = siteMetadata.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a1628",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      <img
        src={`${siteMetadata.url}/logos/logo.svg`}
        alt={siteMetadata.name}
        width={320}
        height={120}
      />
      <p
        style={{
          color: "#3b9eda",
          fontSize: "28px",
          fontWeight: 400,
          margin: 0,
        }}
      >
        {siteMetadata.tagline}
      </p>
    </div>,
    size,
  );
}
