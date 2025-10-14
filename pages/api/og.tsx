import { ImageResponse } from "next/og"

export const runtime = "edge"

export default async function handler() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontSize: 60,
        fontWeight: 600,
      }}
    >
      <div
        style={{
          color: "#000000",
          marginBottom: 20,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        tilekit
      </div>
      <div
        style={{
          color: "#000000",
          fontSize: 24,
          textAlign: "center",
          maxWidth: 800,
          lineHeight: 1.4,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        Modelfile-based SDK that enables developers to customize open models and agent experiences.
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
