import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";
export const alt = "Blog post";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";
export default async function Image({params}: {params: Promise<{slug: string}>}) {
 const {slug} = await params;
 const post = allPosts.find(p => p._meta.path.replace(/\.mdx$/, "") === slug);
 if (!post) return new Response("Not found", {status: 404});
 return new ImageResponse(<div style={{display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, width: "100%", height: "100%", background: "#fafafa", color: "#171717"}}><div style={{fontSize: 28}}>{DATA.name}</div><div style={{fontSize: 60, marginTop: 24}}>{post.title}</div></div>, size);
}
