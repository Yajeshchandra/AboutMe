# Verification — 9 October 2026

## Executed successfully on the final code

- Dependency installation completed with npm; package-lock.json records resolved packages.
- npm run lint: exit 0, no warnings or errors.
- npm run typecheck: next typegen and tsc --noEmit, exit 0.
- npm run build: exit 0; nine static pages generated, retained dynamic blog routes.
- Development server started at http://127.0.0.1:3000.
- node scripts/verify.mjs http://127.0.0.1:3000: PASS after final source-link changes.
- HTTP checks cover identity/project content, one H1, unique IDs, valid anchor targets, no dead # links, empty blog state, hidden empty blog navigation, sample article 404, missing article-image 404, local media, optimized Next.js image responses, favicon, robots, sitemap, and both Open Graph PNG routes.
- git diff --check: no whitespace errors.
- Source scan found no inherited personal identity/project strings in src/, content/, public/, or README.md. Upstream copyright remains in LICENSE as required.
- Real MatBot and BERT images visually inspected for suitability. No generated replacement screenshots used.

## External links

Unauthenticated checks returned 200 for the profile, IIT Mandi, RWTH Aachen, IndexIt, Amazon ML Challenge, Autonomous-typing, IndexIt demo landing page and Team Deimos YouTube landing page. Playback and Drive permissions beyond the landing page were not verified.

Tempest and MatBot returned 404 both on GitHub web and unauthenticated API requests. Source links and card anchors are hidden until public URLs are supplied. Their descriptions remain supported by the supplied resume and accessible repository clones.

LinkedIn returned 999 (automated requests blocked); its exact URL is taken from the resume and requires manual verification. Email uses the resume's mailto address; no message sent.

## Limitations requiring a browser

Browser inventory returned no available browsers; in-app browser creation also reported unavailable. Desktop/mobile screenshots, visual comparison, overflow inspection, theme interaction, actual keyboard navigation, reduced-motion emulation, client-console checks and Lighthouse measurements could not be executed. No claim of pixel-identical layout or zero browser-console errors is made. Original template classes, responsive breakpoints and component structure were retained, with small accessibility and wrapping fixes.

Manual check: view at 320/375/768/1440 px, both themes, toggle reduced motion, tab through dock and links, expand experience rows, inspect every project and contact section, and compare against https://portfolio-magicui.vercel.app/.

## Dependency audit

Initial npm audit: 21 advisories including one critical category affecting Next.js. Updated Next.js and matching ESLint config to 16.4.0, retaining major 16. Final npm audit: 18 advisories (9 moderate, 9 high), mainly inherited content compilation, glob/lint and style-parser chains. No known Next.js advisory remains in the final audit result. This is not a clean security audit; dependency-chain remediation remains separate work. No force upgrades or framework downgrades were applied.

## Deployment

No deployment performed. README.md includes Vercel setup. Before deployment, supply the final domain, set NEXT_PUBLIC_SITE_URL, and rerun checks. Until configured, robots disallows crawling, metadata is noindex, and sitemap is empty.
