# Yajesh Chandra — Portfolio

Personalized from the actual [Magic UI portfolio](https://github.com/magicuidesign/portfolio), upstream commit 5ef12e4c8bd0de3e22e89c2181ee77a35925ec8b. Original MIT license retained. This is a Next.js App Router project using React, TypeScript, Tailwind, shadcn/ui, Motion, and Content Collections. See CONTENT_AUDIT.md for evidence and attribution.

## Local development

Use Node.js 22 LTS and npm. From this directory:

```sh
npm ci
npm run dev -- --hostname 127.0.0.1
```

Open http://localhost:3000. If that port is busy, use the port printed by Next.js.

```sh
npm run lint
npm run typecheck
npm run build
npm start -- --hostname 127.0.0.1
```

Use package-lock.json as the active lockfile. The upstream pnpm lock is removed to avoid competing dependency resolutions. Next.js and matching ESLint config were updated within major 16 because the original 16.1.1 had known security advisories. No major framework upgrade was introduced.

## Update content

Edit src/data/resume.tsx. The Portfolio interface checks work, education, skill groups, projects, social profiles and achievements. All personal copy is centralized there.

- Set avatarUrl to a local photo in public/; empty means initials. Adjust avatarCrop for the CSS crop. The supplied original photo is preserved and served through Next.js image optimization.
- Set resumeUrl near the top of the config to a PDF path or confirmed URL; empty means hidden.
- Set indexitLiveUrl near the top of the config after IndexIt is deployed; empty keeps the live-demo button hidden and the project title linked to GitHub.
- Confirm or change email and LinkedIn in contact. Empty social URLs are hidden.
- Add project images under public/projects/ and update image. Missing media uses a consistent neutral placeholder.
- Set hackathons to an empty array to hide Achievements. The original component is retained under its upstream filename.
- Blog routes, MDX rendering and pagination remain. Add authored .mdx files to content/ with title, publishedAt, summary metadata (see content-collections.ts); set blogEnabled to true. The dock shows Blog only when posts exist. No sample articles are published.

## Vercel deployment

1. Push this customized source to a repository you own. The cloned origin points to Magic UI; change origin before pushing. Do not push .research, .validation, .env files, or node_modules.
2. Import your repository in Vercel and select the Next.js preset, Node.js 22, install command npm ci, and build command npm run build.
3. Set NEXT_PUBLIC_SITE_URL to your final HTTPS portfolio origin in Vercel environment variables. The variable is public and must not contain secrets.
4. Deploy, then verify the home page, theme toggle, project/contact links, /opengraph-image, /robots.txt and /sitemap.xml. Redeploy after changing the domain variable.

Without NEXT_PUBLIC_SITE_URL, metadata uses localhost and robots disallows crawling; sitemap is empty. No deployment or account changes have been made by this task.

## Content still needed

Public resume PDF/URL and final domain. Confirm lead-only Team Deimos dates if you want a separate leadership interval. CONTENT_AUDIT.md records conflicting/unverified metrics that were omitted from public copy.

## Verification

See VALIDATION.md for executed checks and remaining browser-only checks. The compact original layout, dock, cards, themes and motion are retained; reduced-motion preferences and keyboard labels were added. All four project cards use matching decorative vector covers; source and demo links appear beneath the card content.

Tempest and MatBot use repository URLs explicitly confirmed by the user; unauthenticated public access has not been verified. LinkedIn requires a manual visit to verify because it blocks automated checks.
