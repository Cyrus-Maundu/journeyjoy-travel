import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { getCountry } from "@/lib/travel-content";

export const Route = createFileRoute("/destinations/$country/")({
  loader: ({ params }) => {
    const country = getCountry(params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? `${loaderData.name} Safaris & Tours | C&C Tour Company` : "Destination Not Found | C&C Tour Company";
    const description = loaderData?.introduction ?? "Explore private African journeys with C&C Tour Company.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: `/destinations/${params.country}` }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `/destinations/${params.country}` }] };
  },
  component: CountryPage,
});

function CountryPage() {
  const country = Route.useLoaderData();
  return <main><PageHero eyebrow={country.eyebrow} title={`Discover ${country.name}.`} intro={country.introduction} image={country.image}/><section className="section-space mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow text-primary">Where to go</p><h2 className="section-title mt-4">Four places, one remarkable journey.</h2></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">{country.description}</p></div><div className="mt-14 grid gap-7 md:grid-cols-2">{country.areas.map((area) => <article key={area.slug} className="group border-b border-border pb-7"><Link to="/destinations/$country/$area" params={{ country: country.slug, area: area.slug }} className="block"><div className="aspect-[16/11] overflow-hidden"><img src={area.image} alt={`${area.name}, ${country.name}`} loading="lazy" width={1600} height={1072} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/></div><p className="eyebrow mt-6 text-primary">{area.strapline}</p><h2 className="mt-3 font-display text-4xl">{area.name}</h2><p className="mt-3 leading-7 text-muted-foreground">{area.introduction}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Explore this place <ArrowRight className="h-4 w-4"/></span></Link></article>)}</div><div className="mt-16 bg-secondary px-7 py-10 text-center sm:px-12"><p className="eyebrow text-primary">Designed around you</p><h2 className="mt-4 font-display text-4xl">Connect several regions in one private journey.</h2><Link to="/contact" className={buttonVariants({ size: "xl", className: "mt-7" })}>Plan {country.name} <ArrowRight/></Link></div></section></main>;
}