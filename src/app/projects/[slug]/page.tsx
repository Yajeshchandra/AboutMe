import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { CASE_STUDIES } from "@/data/case-studies";

const find = (s: string) => DATA.projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === s);

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = find((await params).slug);
  return { title: p ? `${p.title} case study` : "Not found", description: p?.description };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const s = (await params).slug;
  const project = find(s), study = CASE_STUDIES[s];
  if (!project || !study) notFound();
  return (
    <main id="main-content" className="flex flex-col gap-8">
      <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground">← Back to projects</Link>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">{project.title}</h1>
        <p className="text-sm text-muted-foreground">{project.dates}</p>
      </header>
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Problem</h2>
        <p className="text-muted-foreground">{study.problem}</p>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Approach</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">{study.approach.map((a) => <li key={a}>{a}</li>)}</ul>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Stack</h2>
        <div className="flex flex-wrap gap-2">{study.stack.map((t) => <span key={t} className="rounded-xl border px-3 py-1 text-sm">{t}</span>)}</div>
      </section>
      {study.result && (
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Result</h2>
          <p className="text-muted-foreground">{study.result}</p>
        </section>
      )}
      <div className="flex flex-wrap gap-3 text-sm">
        {project.links.filter((l) => l.type !== "Case study").map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{l.type}</a>)}
      </div>
    </main>
  );
}
