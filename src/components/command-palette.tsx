"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { DATA } from "@/data/resume";

type Cmd = { label: string; run: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const cmds = useMemo<Cmd[]>(() => {
    const go = (hash: string) => () => {
      if (location.pathname === "/") document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      else router.push("/" + hash);
    };
    const ext = (url: string) => () => { window.open(url, "_blank", "noopener,noreferrer"); };
    return [
      { label: "Go to Work", run: go("#work") },
      { label: "Go to Projects", run: go("#projects") },
      { label: "Go to Achievements", run: go("#achievements") },
      { label: "Go to Contact", run: go("#contact") },
      { label: "Open resume", run: ext(DATA.resumeUrl) },
      { label: "Copy email", run: () => { navigator.clipboard.writeText(DATA.contact.email); } },
      ...Object.values(DATA.contact.social)
        .filter((s) => s.url.startsWith("http") && s.name !== "Resume")
        .map((s) => ({ label: `Open ${s.name}`, run: ext(s.url) })),
    ];
  }, [router]);

  const shown = cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); }
      else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => { if (open) { setQ(""); setSel(0); input.current?.focus(); } }, [open]);

  if (!open) return null;
  const run = (c?: Cmd) => { if (c) { setOpen(false); c.run(); } };
  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 p-4 pt-[20vh]" onClick={() => setOpen(false)}>
      <div role="dialog" aria-label="Command palette" className="w-full max-w-md overflow-hidden rounded-xl border bg-background shadow-xl" onClick={(e) => e.stopPropagation()}>
        <input
          ref={input}
          value={q}
          onChange={(e) => { setQ(e.target.value); setSel(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, shown.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
            else if (e.key === "Enter") run(shown[sel]);
          }}
          placeholder="Type a command…"
          className="w-full border-b bg-transparent px-4 py-3 text-sm outline-none"
        />
        <ul className="max-h-72 overflow-y-auto p-1">
          {shown.length === 0 && <li className="px-3 py-2 text-sm text-muted-foreground">No results</li>}
          {shown.map((c, i) => (
            <li key={c.label}>
              <button type="button" onMouseEnter={() => setSel(i)} onClick={() => run(c)} className={`w-full rounded-lg px-3 py-2 text-left text-sm ${i === sel ? "bg-muted" : ""}`}>{c.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
