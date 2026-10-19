import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
export const alt = "Yajesh Chandra — Software Engineer, AI/ML & Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, width: "100%", height: "100%", background: "#fafafa", color: "#171717", fontFamily: "sans-serif"}}><div style={{fontSize: 28, marginBottom: 28}}>Portfolio</div><div style={{fontSize: 76, fontWeight: 700}}>{DATA.name}</div><div style={{fontSize: 32, color: "#666", marginTop: 28}}>{DATA.role}</div></div>, size);
}
