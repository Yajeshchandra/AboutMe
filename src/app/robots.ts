import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
export default function robots(): MetadataRoute.Robots {
 return {rules: {userAgent: "*", ...(process.env.NEXT_PUBLIC_SITE_URL ? {allow: "/"} : {disallow: "/"})}, ...(process.env.NEXT_PUBLIC_SITE_URL ? {sitemap: DATA.url + "/sitemap.xml"} : {})};
}
