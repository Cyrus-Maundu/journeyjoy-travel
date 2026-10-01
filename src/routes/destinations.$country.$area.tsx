import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Compass } from "lucide-react";
import { AreaPhotoGallery } from "@/components/area-photo-gallery";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { getTravelArea } from "@/lib/travel-content";

export const Route = createFileRoute("/destinations/$country/$area")({
  loader: ({ params }) => {
    const result = getTravelArea(params.country, params.area);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? `${loaderData.area.name}, ${loaderData.country.name} | C&C Tour Company` : "Travel Area Not Found | C&C Tour Company";
    const description = loaderData?.area.introduction ?? "Explore private African safari destinations with C&C Tour Company.";
    const path = `/destinations/${params.country}/${params.area}`;
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { property: "og:url", content: path }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: path }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "TouristDestination", name: loaderData?.area.name, description, containedInPlace: loaderData?.country.name }) }] };
  },
  component: AreaPage,
});

function AreaPage() {
  const { country, area } = Route.useLoaderData();
  return <main><PageHero eyebrow={`${country.name} · ${area.strapline}`} title={area.name} intro={area.introduction} image={area.image}/><section className="section-space mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"><div><p className="eyebrow text-primary">The experience</p><h2 className="section-title mt-4">A closer look at {area.name}.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{area.description}</p><p className="mt-5 text-sm leading-7 text-muted-foreground">This is editable sample destination information. Seasonal conditions, accommodation and routes will be tailored when your real tour programme is added.</p></div><aside className="border-y border-border py-7"><div className="flex gap-4 border-b border-border pb-6"><Compass className="mt-1 h-5 w-5 text-primary"/><div><p className="eyebrow text-primary">Best for</p><p className="mt-2 leading-7">{area.bestFor}</p></div></div><div className="flex gap-4 pt-6"><CalendarDays className="mt-1 h-5 w-5 text-primary"/><div><p className="eyebrow text-primary">Suggested stay</p><p className="mt-2 leading-7">{area.suggestedStay}</p></div></div></aside></div><div className="mt-20"><div className="mb-10"><p className="eyebrow text-primary">In photographs</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">More from {area.name}.</h2></div><AreaPhotoGallery name={area.name} images={area.gallery}/></div><div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 sm:flex-row sm:items-center"><div><p className="eyebrow text-primary">Your private journey</p><h2 className="mt-3 font-display text-3xl">Include {area.name} in your itinerary.</h2></div><Link to="/contact" className={buttonVariants({ size: "xl" })}>Start planning <ArrowRight/></Link></div></section></main>;
}