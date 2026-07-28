import { ImageResponse } from "next/og";
import { portfolio } from "@/content/portfolio";

export const alt = portfolio.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const USER = portfolio.name.split(" ")[0].toUpperCase();

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "70px",
          background: "#e9e5d4",
          backgroundImage:
            "linear-gradient(#c3bfa2 1px, transparent 1px), linear-gradient(90deg, #c3bfa2 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Window */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            border: "2px solid #34352a",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(52,53,42,0.25)",
            background: "#f7f3e7",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 22px",
              background: "#7c7f52",
              color: "#f7f3e7",
              borderBottom: "2px solid #34352a",
              fontSize: "26px",
              fontFamily: "monospace",
            }}
          >
            <div style={{ display: "flex" }}>C:\{USER}\portfolio</div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ display: "flex", width: "30px", height: "26px", borderRadius: "7px", border: "2px solid #34352a", background: "#d8544d" }} />
            </div>
          </div>

          {/* Body */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "0 60px" }}>
            <div style={{ display: "flex", fontSize: "30px", color: "#6c6d58", fontFamily: "monospace" }}>
              hi! i&rsquo;m
            </div>
            <div style={{ display: "flex", fontSize: "92px", fontWeight: 800, color: "#df8a39", letterSpacing: "-2px", lineHeight: 1.05, marginTop: "6px" }}>
              {portfolio.name}
            </div>
            <div style={{ display: "flex", fontSize: "30px", color: "#6c6d58", fontFamily: "monospace", letterSpacing: "3px", marginTop: "14px" }}>
              {portfolio.role.toUpperCase()}
            </div>
            <div style={{ display: "flex", fontSize: "26px", color: "#34352a", marginTop: "26px", maxWidth: "820px", fontStyle: "italic" }}>
              &ldquo;{portfolio.headline}&rdquo;
            </div>
          </div>

          {/* Olive footer band */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 26px",
              background: "#7c7f52",
              color: "#f7f3e7",
              borderTop: "2px solid #34352a",
              fontSize: "24px",
              fontFamily: "monospace",
            }}
          >
            <div style={{ display: "flex" }}>{portfolio.seo.url.replace(/^https?:\/\//, "")}</div>
            <div style={{ display: "flex" }}>{portfolio.location}</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
