import { ImageResponse } from "next/og";
import { portfolio } from "@/content/portfolio";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c7f52",
          color: "#f7f3e7",
          fontSize: 16,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        {portfolio.initials}
      </div>
    ),
    { ...size },
  );
}
