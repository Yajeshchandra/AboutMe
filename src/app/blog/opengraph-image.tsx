import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
export const alt = "Blog";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, width: "100%", height: "100%", background: "#fafafa", color: "#171717"}}><div style={{fontSize: 28}}>{DATA.name}</div><div style={{fontSize: 76, marginTop: 24}}>Blog</div></div>, size); }
