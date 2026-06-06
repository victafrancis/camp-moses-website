import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import path from "path"

export const runtime = "nodejs"
export const alt = "Camp Moses - Discover Nature, Rediscover Your Soul"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const [logoBuffer, bgBuffer] = await Promise.all([
    readFile(path.join(process.cwd(), "public/logo/Camp Moses Logo.png")),
    readFile(path.join(process.cwd(), "public/philippine-mountains-forest-sunrise.jpg")),
  ])

  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`
  const bgSrc = `data:image/jpeg;base64,${bgBuffer.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Background photo */}
        <img
          src={bgSrc}
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(10,45,20,0.82) 100%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "48px",
          }}
        >
          {/* Logo */}
          <img
            src={logoSrc}
            style={{
              width: 148,
              height: 148,
              borderRadius: 74,
              backgroundColor: "white",
              padding: 10,
              marginBottom: 28,
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          />

          {/* Camp Moses */}
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-1px",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            Camp Moses
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.9)",
              fontSize: 26,
              fontWeight: 400,
              textAlign: "center",
              marginTop: 16,
              letterSpacing: "0.3px",
            }}
          >
            Discover Nature, Rediscover Your Soul
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              width: 56,
              height: 2,
              backgroundColor: "rgba(255,255,255,0.45)",
              marginTop: 28,
              marginBottom: 20,
            }}
          />

          {/* Location */}
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.7)",
              fontSize: 18,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Tapaz, Capiz · Philippines
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
