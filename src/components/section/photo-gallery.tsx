import Image from "next/image";
import { DATA } from "@/data/resume";

export default function PhotoGallery() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Off-screen</h2>
      <p className="text-sm text-muted-foreground">Shot on Fujifilm.</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {DATA.photos.map((p) => (
          <div key={p.src} className="relative aspect-[4/5] overflow-hidden rounded-xl border">
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 200px, 50vw" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
