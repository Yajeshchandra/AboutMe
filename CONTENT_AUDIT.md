# Content audit

Research date: 9 October 2026. Personal facts also sourced from the resume supplied in this conversation.

## Template provenance
Cloned https://github.com/magicuidesign/portfolio at 5ef12e4c8bd0de3e22e89c2181ee77a35925ec8b. MIT license retained. Original Next.js 16 / React 19 / Tailwind 4 / Motion architecture, container, cards, dock and themes retained. Reference https://portfolio-magicui.vercel.app/ reviewed through web extraction. Browser inventory is empty; visual comparison is pending.

## Selected content and evidence
| Content | Evidence inspected | Dates and attribution | Decision |
|---|---|---|---|
| IndexIt | https://github.com/Yajeshchandra/indexit ; full README, package.json, backend/main.py, OCR and segmentation modules, export module, frontend structure, Git history | 8–14 September 2026 commits by Yajeshchandra; resume September 2026 | Include. Next.js, TypeScript, FastAPI, PaddleOCR, PyTorch, PDF editing. README React 18 conflicts with package React 19; omit version claims. No performance claims. |
| Tempest | https://github.com/Prabhat-Kr-Sahu/tempest_local_guard ; full tempest_mcp/README.md, pyproject.toml, rie/sync.py, lde/reachability.py, docs/lld architecture diagrams and tests inventory | Yajeshchandra merge commit in the accessible clone July 3, 2026; most clone commits by collaborator. Resume confirms internship work May–July 2026 | Include collaboratively, avoid sole ownership of individual public modules. Python, NetworkX, MCP, YAML policy configuration, local SQLite reports, AST graphs via graphify. |
| BERT price prediction | https://github.com/Yajeshchandra/Amazon-ML-Challenge ; full README, full notebook code, media and Git history | October 16, 2025 commit by Yajeshchandra; README explicitly names Yajesh Chandra among four members | Include as team project. PyTorch, BERT, scikit-learn, pandas, NumPy; quantile normalization, oversampling, mixed precision, checkpointing verified in notebook. |
| Motor health monitoring | https://github.com/Yajeshchandra/motor_health_monitor ; package and Python source, filters, ROS2 ESC subscription, Git log | October 24, 2024 commits by Yajesh | Reserve project. Python, ROS2, MAVLink, NumPy, FilterPy. Threshold-based detector, not validated predictive ML. Some modular collector code is placeholder. |
| Tech Mahindra | User task and supplied resume | May–July 2026 | Use resume title Software Intern; show Tempest POC work without unsupported performance figures. |
| Team Deimos | Supplied resume, https://github.com/Team-Deimos-IIT-Mandi and linked demo | August 2024–February 2026 includes earlier membership; lead-only dates not provided | Show combined role with clarification, not entire period as lead. |
| Education | User task and resume | IIT Mandi 2023–2027 expected; RWTH October 2025–February 2026 | Include. |

## Claims intentionally omitted or qualified
- Tempest 200k+ nodes: resume claim only, no benchmark artifact inspected. Omitted from public copy.
- Incremental Git-hash sync: design/resume describe it; current sync.py invokes graphify update --force and records branch/commit metadata. Do not claim demonstrated incremental speedups or unchanged-node retention.
- Scalable graph processing: bounded path reconstruction exists; no measured scaling result claimed.
- Amazon top 1% conflicts with README rank 219/~7000 (about top 3.1%). Neither percentage published.
- README official SMAPE 45.45 vs body 45.44; validation 42.34 and MAE 9.27 are self-reported, not reproduced. Omit numeric results from cards.
- Notebook fits quantile transform and oversamples before train/validation split; possible validation leakage. Weighted loss is defined but main training loop uses L1Loss. Do not describe weighted loss as the executed training objective.
- No fictional blog articles or inherited hackathon history. Resume achievements may be included with resume provenance, without independently verified prize/rank claims.

## Research exclusions
GitHub API listed 33 public repositories. Forks/course examples are not assumed original work. Inspected AdOA (question collection, excluded), simple-proxy (upstream product, excluded absent original contribution evidence), InterIIT-TechMeet-13.0 (PX4-based tree and README, excluded absent isolated contribution audit), and profile README. Relevant selected repositories were cloned into ignored .research for review; they are not shipped.

## Missing information
- Profile photo supplied by user as public/profile.png; face-and-shoulders crop applied non-destructively with CSS in the hero avatar.
- Public resume PDF/URL: not provided; configurable link remains hidden.
- Production domain: set NEXT_PUBLIC_SITE_URL before public deployment.
- Precise lead-only Team Deimos dates and individual Tempest ownership remain unspecified.
- Real screenshots for projects without media: consistent labeled placeholders used.

## Contact
Email yajeshstan@gmail.com and LinkedIn https://www.linkedin.com/in/yajesh-chandra-810903252/ from supplied resume. GitHub from task. Phone deliberately unnecessary for portfolio contact; not published.

## Additional selected projects
- MatBot successfully cloned at the supplied URL despite omission from the profile API listing. README, requirements, server/app.py, Embed-all/embed_pdf.py, and Streamlit main.py confirm Mistral-7B, BAAI/bge, Chroma, LangChain and retrieval. May 3–5, 2025 author commits match the resume. Include; no live URL verified. Repository screenshots available; page_1.png inspected and selected. No user database or credentials copied.
- Autonomous-typing: full README, ROS package structure, yolo_seg.py, keyboard_typing.py, multicontroller.py and stereo_vision sources inspected. January 2025 author commits confirm work. Include as robotic manipulation prototype, with ROS (not ROS2 for this source), YOLOv8, OpenCV, Pinocchio, Gazebo. Resume supports Team Deimos association. Generic keyboard textures and robot meshes are not suitable screenshots.
- Final selection: IndexIt, Tempest, BERT price prediction, MatBot, robotic manipulation (five projects). Motor monitor remains excluded from final selection in favor of deeper work.
- Achievements: show FrostHack 2025 and HCL Tech Hackathon first places as supplied in resume; omit prize amounts, team counts, and undated event year. These are user-attested, not independently verified.

## Asset review
MatBot page_1.png and BERT training_metrics.png were visually inspected and copied unchanged from repository documentation. They are repository illustrations, not newly reproduced experimental results. No project code, datasets, keys, or user databases are included in public/.

## Public availability
Unauthenticated HTTP and GitHub API checks both returned 404 for Tempest and MatBot, despite successful Git clones in this environment. Public availability is not established; evidence from these two clones cannot currently be reproduced by an unauthenticated visitor. Resume supports project attribution. Their source buttons and clickable card links are hidden to avoid dead public links. Restore href and Source entries only when public URLs are confirmed. LinkedIn returned automated-access status 999; retained the user-confirmed resume URL. Other rendered HTTPS destinations returned 200, including all three public project sources and both demo landing pages (video playback/access not verified).

## Inspected revisions
- IndexIt: 70d4b1e4f7237ab49384b0b1b86849a6d662bf44
- Tempest: 51552d2bfa370c91cf9c21edc24f3638a6a7ae2f
- Amazon ML Challenge: d9aba4c940d498473458a999b938c4e5f454b456
- MatBot: 46d00b69a091718f6b13b2196f68ba94c03a46ef
- Autonomous typing: 4d0c5cd7891a04f6275ea46fc9aa4879333895a6

## Dependency maintenance
Next.js and eslint-config-next updated from 16.1.1 to 16.4.0 within the same major, addressing the inherited Next.js advisories. Original application architecture remains. Final npm audit reports 18 advisories (9 moderate, 9 high) in inherited content-compilation/lint/style dependency chains. No force/downgrade fixes applied. See VALIDATION.md.

## Experience and education logos
Added locally hosted organization assets on 9 October 2026. Original proportions preserved using object-contain and a white backing for dark-mode contrast.
- Tech Mahindra: https://www.techmahindra.com/themes/custom/techm/logo-print.png (official brand website).
- Team Deimos: https://avatars.githubusercontent.com/u/121749545?v=4 (https://github.com/Team-Deimos-IIT-Mandi organization avatar).
- IIT Mandi: https://iitmandi.ac.in/images/logo_hires.png (official institute logo page https://iitmandi.ac.in/institute/iitmandilogo).
- RWTH Aachen: https://upload.wikimedia.org/wikipedia/commons/1/1e/RWTH_Logo_3.svg (source and attribution https://commons.wikimedia.org/wiki/File:RWTH_Logo_3.svg).

## Personal interests
User confirmed photography, love for Fujifilm, and motorcycles. Added a small personal line below the hero introduction; no camera ownership or specific riding history assumed. Hero and About copy shortened.
