import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Bitcoinology Lab — Where Value, Trust, and Culture Converge";

export default async function Image() {
  const quintessential = await readFile(
    path.join(process.cwd(), "public/fonts/Quintessential-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "84px 96px",
          color: "white",
          background:
            "radial-gradient(ellipse 60% 80% at 22% 28%, rgba(91,155,213,0.22) 0%, rgba(91,155,213,0) 62%), " +
            "radial-gradient(ellipse 70% 60% at 88% 78%, rgba(14,74,132,0.5) 0%, rgba(14,74,132,0) 58%), " +
            "linear-gradient(132deg, #050E1C 0%, #0A1F3A 55%, #060F22 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div style={{ width: 56, height: 2, background: "#5B9BD5" }} />
          <span
            style={{
              fontSize: 24,
              color: "#5B9BD5",
              letterSpacing: "0.22em",
              fontWeight: 500,
            }}
          >
            VALUE, TRUST, SOCIETY
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Quintessential",
            fontSize: 148,
            color: "white",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 44,
          }}
        >
          Bitcoinology Lab
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 46,
            fontWeight: 500,
            color: "rgba(255,255,255,0.92)",
            letterSpacing: "-0.005em",
            lineHeight: 1.22,
          }}
        >
          <span>Where Value, Trust, and Culture&nbsp;</span>
          <span style={{ color: "#5B9BD5" }}>Converge.</span>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 52,
            borderTop: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.78)",
              letterSpacing: "0.04em",
            }}
          >
            HY-Bitcoinology · Hanyang University
          </span>
          <span
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.06em",
            }}
          >
            hy-bitcoinology.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Quintessential",
          data: quintessential,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
