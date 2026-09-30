import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { destinations } from "@/lib/travel-content";
import heroImage from "@/assets/samburu-giraffes.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({ meta: [{ title: "East Africa Destinations | C&C Tour Company" }, { name: "description", content: "Explore sample journeys across Kenya, Tanzania, Rwanda and the Indian Ocean with C&C Tour Company." }, { property: "og:title", content: "East Africa Destinations | C&C Tour Company" }, { property: "og:description", content: "Four remarkable regions, thoughtfully connected in private East African journeys." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/destinations" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/destinations" }] }),
  component: DestinationsPage,
});

function DestinationsPage() { return <main><PageHero eyebrow="Where we travel" title="East Africa, in all its wonder." intro="Follow the wildlife, the seasons and the stories across four extraordinary regions." image={heroImage}/><section className="section-space mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-16">{destinations.map((destination, index) => <article key={destination.name} className="grid gap-8 border-b border-border pb-16 lg:grid-cols-2 lg:items-center"><div className={index % 2 ? "lg:order-2" : ""}><img src={destination.image} alt={`${destination.name} landscape`} loading="lazy" width={1600} height={1072} className="aspect-[16/11] w-full object-cover"/></div><div className="lg:px-10"><p className="eyebrow text-primary">{destination.strapline}</p><h2 className="mt-4 font-display text-5xl">{destination.name}</h2><p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">{destination.description}</p><Link to="/contact" className={buttonVariants({ size: "xl", className: "mt-8" })}>Plan this journey <ArrowRight/></Link></div></article>)}</div></section></main>; }