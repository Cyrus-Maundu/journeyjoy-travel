import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Binoculars, Compass, MapPin, Palmtree, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import heroImage from "@/assets/cc-safari-hero.jpg";
import amboseliImage from "@/assets/amboseli-elephants.jpg";
import dianiImage from "@/assets/diani-dhow.jpg";
import maraImage from "@/assets/mara-camp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C&C Tour Company | Curated Kenya Safaris & Escapes" },
      { name: "description", content: "Explore curated Kenya safaris, beach escapes and private journeys with C&C Tour Company." },
      { property: "og:title", content: "C&C Tour Company | Curated Kenya Safaris & Escapes" },
      { property: "og:description", content: "Explore curated Kenya safaris, beach escapes and private journeys." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "TravelAgency", name: "C&C Tour Company", description: "Curated East African safaris, beach escapes and private journeys.", areaServed: "East Africa" }) }],
  }),
  component: Index,
});

const featuredTours = [
  { title: "Mara Under Open Skies", place: "Maasai Mara", days: "5 days", price: "From $1,850", image: maraImage },
  { title: "Giants of Amboseli", place: "Amboseli", days: "4 days", price: "From $1,420", image: amboseliImage },
  { title: "Coast & Dhow Escape", place: "Diani Beach", days: "6 days", price: "From $1,190", image: dianiImage },
];

function Index() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src={heroImage} alt="Travelers watching elephants on the Kenyan savannah" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-44 sm:px-8 lg:pt-52">
          <p className="eyebrow flex items-center gap-5 text-accent"><span className="h-px w-12 bg-accent"/>Authentic East Africa</p>
          <h1 className="mt-7 max-w-4xl font-display text-6xl leading-[0.9] text-primary-foreground sm:text-8xl lg:text-9xl">Pure. Wild.<br /><em className="font-normal text-accent">Unforgettable.</em></h1>
          <p className="mt-8 max-w-xl text-base font-light leading-7 text-primary-foreground/85 sm:text-lg">Private safari journeys created with deep local knowledge, exceptional guides and the freedom to travel entirely at your own pace.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/tours" className={buttonVariants({ variant: "light", size: "xl" })}>Explore our tours <ArrowRight /></Link>
            <Link to="/contact" className={buttonVariants({ variant: "heroOutline", size: "xl" })}>Plan my journey</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 py-7 sm:grid-cols-4 sm:px-8">
          {[['12+','Handpicked routes'],['24/7','On-trip support'],['100%','Private journeys'],['4.9/5','Guest rating']].map(([value,label]) => <div key={label} className="px-3 py-3 text-center"><strong className="block font-display text-3xl font-normal text-foreground">{value}</strong><span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</span></div>)}
        </div>
      </section>

      <section className="border-b border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center"><div><p className="eyebrow text-primary">Guest recommended</p><div className="mt-2 flex items-center gap-2"><span className="flex text-accent">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span><strong className="font-display text-2xl font-normal">4.9 out of 5</strong></div></div><div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.14em]"><Link to="/reviews" className="hover:text-primary">Google Reviews</Link><Link to="/reviews" className="hover:text-primary">Tripadvisor</Link></div></div></section>

      <section className="section-space mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="eyebrow text-primary">The C&C way</p><h2 className="section-title mt-4">Africa, at your own pace.</h2></div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">No two journeys should feel the same. We pair thoughtful planning with exceptional local knowledge to create trips that feel effortless, personal and full of wonder.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {[{ icon: Compass, title: 'Designed around you', text: 'Every route is shaped by your pace, interests and travel style.' },{ icon: Binoculars, title: 'Closer to the wild', text: 'Exceptional guides and smaller camps bring every landscape to life.' },{ icon: Palmtree, title: 'From bush to beach', text: 'One seamless journey from golden plains to the Indian Ocean.' }].map(({icon: Icon,title,text}) => <article key={title} className="bg-background p-8 lg:p-10"><Icon className="h-8 w-8 text-primary" strokeWidth={1.4}/><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="section-space mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-accent">Featured escapes</p><h2 className="mt-4 font-display text-4xl sm:text-6xl">Where will you go next?</h2></div><Link to="/tours" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent hover:text-background">View all tours <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="mt-12 grid gap-7 lg:grid-cols-3">{featuredTours.map((tour) => <article key={tour.title} className="group"><div className="aspect-[4/5] overflow-hidden"><img src={tour.image} alt={`${tour.title} in ${tour.place}`} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="border-b border-background/20 py-5"><div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-background/65"><span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{tour.place}</span><span>{tour.days}</span></div><h3 className="mt-3 font-display text-3xl">{tour.title}</h3><p className="mt-3 text-sm text-accent">{tour.price} per person</p></div></article>)}</div>
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-5 sm:px-8"><div className="grid overflow-hidden bg-secondary lg:grid-cols-2"><img src={dianiImage} alt="Traditional dhow sailing off the Kenyan coast" loading="lazy" width={1200} height={912} className="h-full min-h-96 w-full object-cover" /><div className="flex flex-col justify-center p-8 sm:p-14 lg:p-16"><p className="eyebrow text-primary">A journey made for you</p><h2 className="section-title mt-4">Let’s start with a conversation.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">Tell us what draws you to Africa. We’ll turn your ideas into a considered, one-of-a-kind itinerary.</p><Link to="/contact" className={buttonVariants({ size: "xl", className: "mt-8 w-fit rounded-none" })}>Create my journey <ArrowRight /></Link></div></div></section>
    </main>
  );
}
