import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function AreaPhotoGallery({ name, images }: { name: string; images: readonly string[] }) {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  useEffect(() => {
    if (activePhoto === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") setActivePhoto((value) => value === null ? 0 : (value + 1) % images.length);
      if (event.key === "ArrowLeft") setActivePhoto((value) => value === null ? 0 : (value - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [activePhoto, images.length]);

  return <><div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4" aria-label={`${name} scrollable photo collection`}>{images.map((image, index) => <Button key={`${image}-${index}`} type="button" variant="ghost" onClick={() => setActivePhoto(index)} className="group relative aspect-[4/3] h-auto w-[82vw] shrink-0 snap-start overflow-hidden rounded-none p-0 sm:w-[48%] lg:w-[32%]"><img src={image} alt={`${name} gallery view ${index + 1}`} loading="lazy" width={1600} height={1072} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute inset-0 bg-gallery-overlay opacity-60"/><Expand className="absolute bottom-4 right-4 text-primary-foreground"/></Button>)}</div>{activePhoto !== null && <div role="dialog" aria-modal="true" aria-label={`${name} photo gallery`} className="fixed inset-0 z-[100] flex flex-col bg-foreground text-background"><div className="flex h-20 items-center justify-between border-b border-background/15 px-5 sm:px-8"><div><span className="eyebrow text-accent">{name}</span><span className="ml-4 text-xs text-background/60">{activePhoto + 1} / {images.length}</span></div><Button aria-label="Close gallery" variant="heroOutline" size="icon" onClick={() => setActivePhoto(null)}><X/></Button></div><div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8"><img src={images[activePhoto]} alt={`${name} expanded view ${activePhoto + 1}`} width={1600} height={1072} className="max-h-full max-w-full object-contain"/><Button aria-label="Previous photo" variant="heroOutline" size="icon" className="absolute left-4 sm:left-8" onClick={() => setActivePhoto((activePhoto - 1 + images.length) % images.length)}><ChevronLeft/></Button><Button aria-label="Next photo" variant="heroOutline" size="icon" className="absolute right-4 sm:right-8" onClick={() => setActivePhoto((activePhoto + 1) % images.length)}><ChevronRight/></Button></div></div>}</>;
}