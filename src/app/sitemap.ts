import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!process.env.NEXT_PUBLIC_SITE_URL) return [];
  return [{url: DATA.url, priority: 1}, ...(DATA.blogEnabled && allPosts.length ? [{url: DATA.url + "/blog", priority: 0.6}, ...allPosts.map(post => ({url: DATA.url + "/blog/" + post._meta.path.replace(/\.mdx$/, ""), lastModified: new Date(post.publishedAt)}))] : [])];
}
