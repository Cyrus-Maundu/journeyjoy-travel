import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { countryDestinations } from "@/lib/travel-content";
import heroImage from "@/assets/samburu-giraffes.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({ meta: [{ title: "Africa Safari Destinations | C&C Tour Company" }, { name: "description", content: "Explore sample journeys across Kenya, Tanzania and Zambia with C&C Tour Company." }, { property: "og:title", content: "Africa Safari Destinations | C&C Tour Company" }, { property: "og:description", content: "Explore Kenya, Tanzania and Zambia through thoughtfully connected private journeys." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/destinations" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/destinations" }] }),
  component: DestinationsPage,
});

function DestinationsPage() { return <main><PageHero eyebrow="Where we travel" title="Africa, in all its wonder." intro="Choose a country, then explore the wild places, coastlines and journeys within it." image={heroImage}/><section className="section-space mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-16">{countryDestinations.map((country, index) => <article key={country.name} className="grid gap-8 border-b border-border pb-16 lg:grid-cols-2 lg:items-center"><div className={index % 2 ? "lg:order-2" : ""}><img src={country.image} alt={`${country.name} landscape`} loading="lazy" width={1600} height={1072} className="aspect-[16/11] w-full object-cover"/></div><div className="lg:px-10"><p className="eyebrow text-primary">{country.eyebrow}</p><h2 className="mt-4 font-display text-5xl">{country.name}</h2><p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">{country.description}</p><Link to="/destinations/$country" params={{ country: country.slug }} className={buttonVariants({ size: "xl", className: "mt-8" })}>Explore {country.name} <ArrowRight/></Link></div></article>)}</div></section></main>; }