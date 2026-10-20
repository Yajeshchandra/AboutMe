"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); })}
      className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
      aria-live="polite"
    >
      {copied ? "Copied!" : `Copy ${email}`}
    </button>
  );
}
