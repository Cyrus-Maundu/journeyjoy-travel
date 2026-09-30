import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { galleryGroups } from "@/lib/travel-content";

export function GalleryLightbox() {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const group = activeGroup === null ? null : galleryGroups[activeGroup];

  useEffect(() => {
    if (!group) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGroup(null);
      if (event.key === "ArrowRight") setActivePhoto((value) => (value + 1) % group.images.length);
      if (event.key === "ArrowLeft") setActivePhoto((value) => (value - 1 + group.images.length) % group.images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [group]);

  return <>
    <div className="grid gap-5 md:grid-cols-2">
      {galleryGroups.map((item, index) => <button key={item.name} type="button" onClick={() => { setActiveGroup(index); setActivePhoto(0); }} className="group relative aspect-[4/3] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <img src={item.cover} alt={`${item.name} travel gallery`} loading="lazy" width={1600} height={1072} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute inset-0 bg-gallery-overlay" />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-primary-foreground sm:p-8"><span><span className="eyebrow text-accent">3 photographs</span><span className="mt-2 block font-display text-3xl">{item.name}</span></span><Expand className="h-5 w-5" /></span>
      </button>)}
    </div>
    {group && <div role="dialog" aria-modal="true" aria-label={`${group.name} photo gallery`} className="fixed inset-0 z-[100] flex flex-col bg-foreground text-background">
      <div className="flex h-20 items-center justify-between border-b border-background/15 px-5 sm:px-8"><div><span className="eyebrow text-accent">{group.name}</span><span className="ml-4 text-xs text-background/60">{activePhoto + 1} / {group.images.length}</span></div><Button aria-label="Close gallery" variant="heroOutline" size="icon" onClick={() => setActiveGroup(null)}><X /></Button></div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8"><img src={group.images[activePhoto]} alt={`${group.name} view ${activePhoto + 1}`} width={1600} height={1072} className="max-h-full max-w-full object-contain" /><Button aria-label="Previous photo" variant="heroOutline" size="icon" className="absolute left-4 sm:left-8" onClick={() => setActivePhoto((value) => (value - 1 + group.images.length) % group.images.length)}><ChevronLeft /></Button><Button aria-label="Next photo" variant="heroOutline" size="icon" className="absolute right-4 sm:right-8" onClick={() => setActivePhoto((value) => (value + 1) % group.images.length)}><ChevronRight /></Button></div>
      <div className="flex justify-center gap-3 p-4">{group.images.map((image, index) => <button key={image} type="button" aria-label={`View photo ${index + 1}`} aria-current={index === activePhoto} onClick={() => setActivePhoto(index)} className="h-14 w-20 overflow-hidden border border-background/20 aria-[current=true]:border-accent"><img src={image} alt="" width={1600} height={1072} className="h-full w-full object-cover" /></button>)}</div>
    </div>}
  </>;
}