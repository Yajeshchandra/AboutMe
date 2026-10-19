import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon, FolderCodeIcon } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

type Icon = ComponentType<{ className?: string }>;
type Project = { title: string; href?: string; dates: string; description: string; technologies: string[]; image?: string; video?: string; links: { type: string; href: string; icon: ReactNode }[] };
type Achievement = { title: string; dates: string; location: string; description: string; image?: string; links: { title: string; href: string; icon: ReactNode }[] };
interface Portfolio {
  name: string; initials: string; url: string; role: string; description: string; summary: string; personalNote: string; avatarUrl: string; avatarCrop: { objectPosition: string; transform: string };
  resumeUrl: string; blogEnabled: boolean; projectsIntro: string; achievementsIntro: string; contactIntro: string;
  skills: { category: string; items: string[] }[];
  navbar: { href: string; icon: Icon; label: string }[];
  contact: { email: string; social: Record<string, { name: string; url: string; icon: Icon; navbar: boolean }> };
  work: { company: string; href: string; linkLabel?: string; title: string; logoUrl: string; start: string; end: string; description: string }[];
  education: { school: string; href: string; degree: string; logoUrl: string; start: string; end: string }[];
  projects: Project[]; hackathons: Achievement[];
}
const source = (href: string) => ({ type: "Source", href, icon: <Icons.github className="size-3" /> });
// Leave unknown links empty: the UI omits them rather than creating broken links.
const resumeUrl = "";
// Add IndexIt's public HTTPS URL after deployment; the live link stays hidden until then.
const indexitLiveUrl = "";
export const DATA: Portfolio = {
  name: "Yajesh Chandra", initials: "YC",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  role: "Software Engineer | AI/ML & Systems",
  description: "I build software, explore machine learning, and make robots move.",
  personalNote: "Off-screen: photography, a love for Fujifilm, and motorcycles.",
  summary: "I'm a Computer Science student at IIT Mandi, graduating in 2027, with a semester at RWTH Aachen along the way. I've worked on security tools, AI-powered document processing, and rover autonomy. I like understanding what happens under the hood, then building something useful with it.",
  avatarUrl: "/profile.png", avatarCrop: { objectPosition: "50% 30%", transform: "translateX(-14%) scale(2.25)" }, resumeUrl, blogEnabled: false,
  projectsIntro: "Selected work in developer tools, applied machine learning, document processing.",
  achievementsIntro: "Selected achievements from university projects and technical competitions.",
  contactIntro: "Interested in software, applied ML, or building systems together? I'd be glad to connect.",
  skills: [
    { category: "Programming", items: ["Python", "C/C++", "TypeScript", "SQL"] },
    { category: "Backend & Web", items: ["FastAPI", "REST APIs", "Next.js", "React"] },
    { category: "AI & Data", items: ["PyTorch", "scikit-learn", "Transformers", "OpenCV"] },
    { category: "Systems & Tools", items: ["Git", "Linux", "Docker", "NetworkX", "MCP", "ROS/ROS2"] },
  ],
  navbar: [ { href: "/", icon: HomeIcon, label: "Home" }, { href: "/#projects", icon: FolderCodeIcon, label: "Projects" } ],
  contact: { email: "yajeshstan@gmail.com", social: {
    GitHub: { name: "GitHub", url: "https://github.com/Yajeshchandra", icon: Icons.github, navbar: true },
    LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/yajesh-chandra-810903252/", icon: Icons.linkedin, navbar: true },
    email: { name: "Email", url: "mailto:yajeshstan@gmail.com", icon: Icons.email, navbar: true },
    Resume: { name: "Resume", url: resumeUrl, icon: FileTextIcon, navbar: false },
  } },
  work: [
    { company: "Tech Mahindra", href: "https://www.techmahindra.com/", title: "Software Intern", logoUrl: "/logos/tech-mahindra.png", start: "May 2026", end: "Jul 2026", description: "Worked on Tempest, a local security analysis proof of concept for detecting paths from non-production code to production resources. The system combines AST-derived code graphs, NetworkX analysis, YAML policy configuration, and MCP tools, with local report storage and Git branch/commit tracking." },
    { company: "Team Deimos, IIT Mandi", href: "https://github.com/Team-Deimos-IIT-Mandi", linkLabel: "Team GitHub", title: "Software & Electrical Lead · Previously Software Member", logoUrl: "/logos/team-deimos.png", start: "Aug 2024", end: "Feb 2026", description: "Progressed from software team member to Software & Electrical Lead, coordinating a 15-member team across architecture, reviews, and integration. Developed robotic arm control and vision-based keyboard typing, and contributed to ROS2/Nav2 navigation, LiDAR gate detection, and terrain-aware speed control." },
  ],
  education: [
    { school: "Indian Institute of Technology Mandi", href: "https://www.iitmandi.ac.in/", degree: "B.Tech in Computer Science and Engineering", logoUrl: "/logos/iit-mandi.png", start: "2023", end: "2027 (expected)" },
    { school: "RWTH Aachen University", href: "https://www.rwth-aachen.de/", degree: "Exchange Semester · Winter 2025/26", logoUrl: "/logos/rwth-aachen.svg", start: "Oct 2025", end: "Feb 2026" },
  ],
  projects: [
    { title: "IndexIt", href: indexitLiveUrl || "https://github.com/Yajeshchandra/indexit", dates: "September 2026", description: "Built a PDF indexing platform with OCR, topic segmentation, and contextual heading generation. Added chunked uploads, weighted region selection, heading editing, and PDF exports with navigable bookmarks.", technologies: ["Next.js", "TypeScript", "FastAPI", "PaddleOCR", "PyTorch"], image: "/projects/indexit.svg", links: [source("https://github.com/Yajeshchandra/indexit"), ...(indexitLiveUrl ? [{ type: "Live demo", href: indexitLiveUrl, icon: <Icons.globe className="size-3" /> }] : []), {type: "Demo video", href: "https://drive.google.com/file/d/1USS9v9-3jsg5whN43nouNE4JH4suBks2/view", icon: <Icons.globe className="size-3" />} ] },
    { title: "Tempest", href: "https://github.com/Prabhat-Kr-Sahu/tempest_local_guard", dates: "May – July 2026", description: "Contributed to a local security analysis engine that traces non-production access to production resources. AST-derived graphs, reverse reachability, and configurable policies produce evidence paths through MCP tools.", technologies: ["Python", "NetworkX", "MCP", "YAML", "SQLite"], image: "/projects/tempest.svg", links: [source("https://github.com/Prabhat-Kr-Sahu/tempest_local_guard")] },
    { title: "Product Price Prediction", href: "https://github.com/Yajeshchandra/Amazon-ML-Challenge", dates: "October 2025", description: "Developed a team solution for Amazon ML Challenge 2025 using BERT regression on product catalog text. Investigated price skew with quantile normalization and oversampling, with mixed-precision training and checkpointed evaluation.", technologies: ["Python", "PyTorch", "BERT", "scikit-learn", "pandas"], image: "/projects/price-prediction.svg", links: [source("https://github.com/Yajeshchandra/Amazon-ML-Challenge")] },
    { title: "MatBot", href: "https://github.com/Yajeshchandra/matbot", dates: "May 2025", description: "Built a MATLAB troubleshooting assistant that retrieves documentation from Chroma and supplies context to Mistral-7B. A Streamlit chat interface accepts questions and error screenshots, with external search for additional context.", technologies: ["Python", "LangChain", "Mistral-7B", "ChromaDB", "Streamlit"], image: "/projects/matbot.svg", links: [source("https://github.com/Yajeshchandra/matbot")] },
  ],
  hackathons: [
    { title: "ARC 2026 · Round 1 Cleared", dates: "2026", location: "Team Deimos, IIT Mandi", description: "Cleared Round 1 of the ARC rover competition with Team Deimos, IIT Mandi.", links: [{ title: "Team GitHub", href: "https://github.com/Team-Deimos-IIT-Mandi/", icon: <Icons.github className="size-3" /> }] },
    { title: "Amazon ML Code 2025", dates: "October 2025", location: "Top 1%", description: "Placed in the top 1% with a team solution for product price prediction using BERT regression, quantile normalization, and mixed-precision training.", links: [{ title: "Source", href: "https://github.com/Yajeshchandra/Amazon-ML-Challenge", icon: <Icons.github className="size-3" /> }] },
    { title: "FrostHack · 1st Place", dates: "2025", location: "Robotics", description: "Won first place with TORTBOT, a computer-vision-based localization system for constrained environments.", links: [{ title: "Source", href: "https://github.com/Yajeshchandra/TORTBOT", icon: <Icons.github className="size-3" /> }] },
    { title: "HCL Hackathon · 1st Place", dates: "", location: "ZeroBlur", description: "Won first place with ZeroBlur, a camera application for blur detection and correction using on-device machine learning.", links: [{ title: "Source", href: "https://github.com/astrogeekdk/ZeroBlur", icon: <Icons.github className="size-3" /> }] },
    { title: "Inter IIT Tech Meet 13.0", dates: "", location: "IIT Mandi", description: "Participated in Inter IIT Tech Meet 13.0, working on UAV simulation with PX4 and Gazebo.", links: [{ title: "Source", href: "https://github.com/Yajeshchandra/InterIIT-TechMeet-13.0", icon: <Icons.github className="size-3" /> }] },
  ],
};
