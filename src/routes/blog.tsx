import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import maraImage from "@/assets/mara-lioness.jpg";
import zanzibarImage from "@/assets/zanzibar-coast.jpg";
import walkingImage from "@/assets/south-luangwa-leopard.jpg";

export const Route = createFileRoute("/blog")({ head: () => ({ meta: [{ title: "Safari Journal | C&C Tour Company" }, { name: "description", content: "Read sample safari planning stories, seasonal guides and East African travel inspiration from C&C Tour Company." }, { property: "og:title", content: "Safari Journal | C&C Tour Company" }, { property: "og:description", content: "Ideas and field notes for planning a thoughtful African journey." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/blog" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/blog" }] }), component: BlogPage });

const stories = [
  { category: "Seasonal guide", title: "When to see the Great Migration", text: "A simple guide to how the herds move through the Serengeti and Maasai Mara through the year.", image: maraImage },
  { category: "Slow travel", title: "Why a walking safari changes everything", text: "Tracks, birdsong and small details reveal a different side of the bush when explored on foot.", image: walkingImage },
  { category: "Bush & beach", title: "Pairing safari with the Indian Ocean", text: "How to balance early game drives with unhurried days beside warm, clear water.", image: zanzibarImage },
] as const;

function BlogPage() { return <main><PageHero eyebrow="The C&C journal" title="Stories from the road." intro="Seasonal notes, thoughtful travel ideas and inspiration for journeys across Africa." image={maraImage}/><section className="section-space mx-auto max-w-7xl px-5 sm:px-8"><p className="mb-10 max-w-2xl text-sm leading-6 text-muted-foreground">These are editable sample articles ready to be replaced with your own travel stories.</p><div className="grid gap-8 lg:grid-cols-3">{stories.map((story) => <article key={story.title} className="group border-b border-border pb-7"><div className="aspect-[4/3] overflow-hidden"><img src={story.image} alt={story.title} loading="lazy" width={1600} height={1072} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/></div><p className="eyebrow mt-6 text-primary">{story.category}</p><h2 className="mt-3 font-display text-3xl">{story.title}</h2><p className="mt-3 leading-7 text-muted-foreground">{story.text}</p></article>)}</div><div className="mt-16 bg-secondary px-7 py-10 text-center"><h2 className="font-display text-4xl">Ready to write your own story?</h2><Link to="/contact" className={buttonVariants({ size: "xl", className: "mt-7" })}>Plan a journey <ArrowRight/></Link></div></section></main>; }