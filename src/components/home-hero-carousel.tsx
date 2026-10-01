import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import heroImage from "@/assets/cc-safari-hero.jpg";
import serengetiImage from "@/assets/serengeti-crossing.jpg";
import victoriaFallsImage from "@/assets/victoria-falls.jpg";

const slides = [
  { eyebrow: "Authentic East Africa", title: "Pure. Wild. Unforgettable.", text: "Private safari journeys shaped by deep local knowledge, exceptional guides and your own pace.", image: heroImage, alt: "Elephants crossing an East African savannah", action: "Explore our tours", to: "/tours" as const },
  { eyebrow: "The great migration", title: "Follow nature’s greatest story.", text: "Travel across Tanzania’s endless plains as the seasons, herds and predators shape every day.", image: serengetiImage, alt: "Wildebeest and zebra crossing the Serengeti at sunset", action: "Discover Tanzania", to: "/destinations/$country" as const, params: { country: "tanzania" } },
  { eyebrow: "Journey into Zambia", title: "Feel the wild, more deeply.", text: "Walk remote valleys, explore the Zambezi and stand before the wonder of Victoria Falls.", image: victoriaFallsImage, alt: "Victoria Falls surrounded by green forest and rainbow spray", action: "Discover Zambia", to: "/destinations/$country" as const, params: { country: "zambia" } },
] as const;

export function HomeHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const goTo = useCallback((index: number) => setActive((index + slides.length) % slides.length), []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return <section aria-roledescription="carousel" aria-label="Featured East African journeys" className="relative min-h-[92svh] overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    {slides.map((slide, index) => <div key={slide.title} aria-hidden={active !== index} className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${active === index ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}>
      <img src={slide.image} alt={active === index ? slide.alt : ""} width={1920} height={1088} fetchPriority={index === 0 ? "high" : "auto"} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 flex items-center"><div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-44 sm:px-8 lg:pt-52"><p className="eyebrow flex items-center gap-5 text-accent"><span className="h-px w-12 bg-accent"/>{slide.eyebrow}</p><h1 className="mt-7 max-w-4xl font-display text-6xl leading-[0.9] text-primary-foreground sm:text-8xl lg:text-9xl">{slide.title}</h1><p className="mt-8 max-w-xl text-base font-light leading-7 text-primary-foreground/85 sm:text-lg">{slide.text}</p><div className="mt-10 flex flex-wrap gap-3"><Link to={slide.to} params={"params" in slide ? slide.params : undefined} className={buttonVariants({ variant: "light", size: "xl" })}>{slide.action}</Link><Link to="/contact" className={buttonVariants({ variant: "heroOutline", size: "xl" })}>Plan my journey</Link></div></div></div>
    </div>)}
    <div className="absolute inset-x-0 bottom-7 z-20 mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><div className="flex gap-2">{slides.map((slide, index) => <Button key={slide.title} type="button" variant="ghost" size="icon" aria-label={`Show slide ${index + 1}: ${slide.title}`} aria-current={active === index} onClick={() => goTo(index)} className="h-8 w-8 rounded-none p-2 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"><span className={`block h-0.5 w-full ${active === index ? "bg-accent" : "bg-primary-foreground/50"}`}/></Button>)}</div><div className="flex gap-2"><Button type="button" variant="heroOutline" size="icon" aria-label="Previous slide" onClick={() => goTo(active - 1)}><ChevronLeft/></Button><Button type="button" variant="heroOutline" size="icon" aria-label="Next slide" onClick={() => goTo(active + 1)}><ChevronRight/></Button></div></div>
  </section>;
}