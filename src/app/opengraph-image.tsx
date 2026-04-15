import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/data/metadata";

export const runtime = "edge";
export const dynamic = "force-static";
export const alt = siteMetadata.seoTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0b1e2d",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        padding: "64px",
      }}
    >
      <img
        src={`${siteMetadata.url}/logos/logo.svg`}
        alt={siteMetadata.name}
        width={260}
        height={96}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <p
          style={{
            color: "#e8f1f8",
            fontSize: "42px",
            fontWeight: 700,
            margin: 0,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Desarrollo de Software a Medida
        </p>

        <p
          style={{
            color: "#7a9bb5",
            fontSize: "22px",
            fontWeight: 400,
            margin: 0,
            textAlign: "center",
          }}
        >
          {siteMetadata.tagline}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#259dc2",
          borderRadius: "999px",
          padding: "12px 32px",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          ngcsoftwaresolutions.com
        </p>
      </div>
    </div>,
    size,
  );
}
