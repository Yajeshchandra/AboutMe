import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import CopyEmail from "@/components/copy-email";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.contactIntro}{" "}
          <Link href={DATA.contact.email ? `mailto:${DATA.contact.email}` : DATA.contact.social.GitHub.url} className="text-blue-500 hover:underline underline-offset-4">
            {DATA.contact.email ? "Send me an email" : "Find me on GitHub"}
          </Link>.
        </p>
        {DATA.contact.email && <CopyEmail email={DATA.contact.email} />}
      </div>
    </div>
  );
}

