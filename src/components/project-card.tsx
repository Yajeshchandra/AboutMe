"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full aspect-[5/3] bg-muted flex flex-col items-center justify-center gap-2 p-6 text-center"><span className="text-sm font-medium text-muted-foreground">{alt}</span><span className="text-xs text-muted-foreground">Project preview</span></div>;
  }

  return (
    <Image
      width={640} height={384} sizes="(max-width: 640px) 100vw, 300px"
      src={src}
      alt={alt}
      className="w-full aspect-[5/3] h-auto object-cover bg-muted"
      onError={() => setImageError(true)}
    />
  );
}

function MediaLink({href, title, children}: {href?: string; title: string; children: React.ReactNode}) {
  return href ? <Link href={href} target="_blank" rel="noopener noreferrer" className="block" aria-label={`View ${title} source`}>{children}</Link> : <div>{children}</div>;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const reduceMotion = useReducedMotion();
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        <MediaLink href={href} title={title}>
          {video ? (
            <video
              src={video}
              autoPlay={!reduceMotion}
              controls={!!reduceMotion}
              loop
              muted
              playsInline
              className="w-full aspect-[5/3] object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full aspect-[5/3] bg-muted flex items-center justify-center p-6 text-center"><span className="text-sm font-medium text-muted-foreground">{title}</span></div>
          )}
        </MediaLink>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            {dates && <span className="text-xs text-muted-foreground">{dates}</span>}
          </div>
          {href && <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 border-t border-border pt-3 mt-1">
            {links.map((link) => (
              <Link
                key={link.type + link.href}
                href={link.href}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-1.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.icon}
                {link.type}
                <ArrowUpRight className="size-3" aria-hidden />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
