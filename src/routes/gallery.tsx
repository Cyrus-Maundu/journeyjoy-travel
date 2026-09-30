import { createFileRoute } from "@tanstack/react-router";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { PageHero } from "@/components/page-hero";
import heroImage from "@/assets/zanzibar-coast.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "East Africa Photo Gallery | C&C Tour Company" }, { name: "description", content: "Browse grouped safari and coast photography from Kenya, Rwanda and the Indian Ocean." }, { property: "og:title", content: "East Africa Photo Gallery | C&C Tour Company" }, { property: "og:description", content: "Open each destination collection and explore related East African travel photography." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/gallery" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/gallery" }] }),
  component: GalleryPage,
});

function GalleryPage() { return <main><PageHero eyebrow="Field notes in photographs" title="A glimpse of what awaits." intro="Choose a destination to open its complete photo collection, then move through each related view." image={heroImage}/><section className="section-space mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-12 max-w-2xl"><p className="eyebrow text-primary">Explore by place</p><h2 className="section-title mt-4">Moments from the road.</h2></div><GalleryLightbox/></section></main>; }