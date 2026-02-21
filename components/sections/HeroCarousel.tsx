"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";

const slides = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=1920&q=85&fit=crop&auto=format",
    alt: "Cyclist on a scenic mountain road surrounded by nature",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&fit=crop&auto=format",
    alt: "Bamboo forest — the raw material behind every Etika bicycle",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85&fit=crop&auto=format",
    alt: "Craftsman working on a handmade bicycle frame in a workshop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1920&q=85&fit=crop&auto=format",
    alt: "Bamboo bicycle leaning against a wall in Barcelona",
  },
];

const copy: Record<
  Locale,
  {
    slides: { eyebrow: string; headline: string; sub: string }[];
    cta1: string;
    cta2: string;
  }
> = {
  en: {
    slides: [
      {
        eyebrow: "Handmade in Barcelona",
        headline: "Ride something worth\nbelieving in.",
        sub: "Bamboo bicycles built by hand — sustainable, unique, and unmistakably yours.",
      },
      {
        eyebrow: "From the forest to the street",
        headline: "Nature is the\nbest engineer.",
        sub: "We source bamboo grown in Catalonia and turn it into frames that last a lifetime.",
      },
      {
        eyebrow: "Etika Workshop",
        headline: "Craft, not\nfactory.",
        sub: "Every joint wrapped by hand. Every frame tested and certified. Zero compromise.",
      },
      {
        eyebrow: "Build your own",
        headline: "Your bike,\nyour hands.",
        sub: "Join our self-build workshop and leave with a fully functional bamboo bicycle you made yourself.",
      },
    ],
    cta1: "Discover our bikes",
    cta2: "Visit the workshop",
  },
  es: {
    slides: [
      {
        eyebrow: "Fabricadas a mano en Barcelona",
        headline: "Pedalea algo en lo\nque creer.",
        sub: "Bicicletas de bambú hechas a mano — sostenibles, únicas e inconfundiblemente tuyas.",
      },
      {
        eyebrow: "Del bosque a la calle",
        headline: "La naturaleza es\nel mejor ingeniero.",
        sub: "Usamos bambú cultivado en Cataluña y lo convertimos en cuadros que duran toda la vida.",
      },
      {
        eyebrow: "Taller Etika",
        headline: "Artesanía,\nno fábrica.",
        sub: "Cada unión envuelta a mano. Cada cuadro probado y certificado. Sin concesiones.",
      },
      {
        eyebrow: "Construye la tuya",
        headline: "Tu bici,\ntus manos.",
        sub: "Únete a nuestro taller de autoconstrucción y vete con una bicicleta de bambú que hiciste tú mismo.",
      },
    ],
    cta1: "Descubre nuestras bicis",
    cta2: "Visita el taller",
  },
  ca: {
    slides: [
      {
        eyebrow: "Fetes a mà a Barcelona",
        headline: "Pedala alguna cosa\nen la qual creure.",
        sub: "Bicicletes de bambú fetes a mà — sostenibles, úniques i inconfusiblement teves.",
      },
      {
        eyebrow: "Del bosc al carrer",
        headline: "La natura és\nel millor enginyer.",
        sub: "Usem bambú conreat a Catalunya i el convertim en quadres que duren tota la vida.",
      },
      {
        eyebrow: "Taller Etika",
        headline: "Artesania,\nno fàbrica.",
        sub: "Cada unió embolicada a mà. Cada quadre provat i certificat. Sense concessions.",
      },
      {
        eyebrow: "Construeix la teva",
        headline: "La teva bici,\nles teves mans.",
        sub: "Uneix-te al nostre taller d'autoconstrucció i marxa amb una bicicleta de bambú que has fet tu mateix.",
      },
    ],
    cta1: "Descobreix les nostres bicis",
    cta2: "Visita el taller",
  },
};

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const params = useParams();
  const locale = (params.lang as Locale) ?? "en";
  const c = copy[locale] ?? copy.en;

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 400);
    },
    [current, transitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  const slide = c.slides[current];

  return (
    <section
      className="relative h-[82vh] min-h-150 w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay — heavy at bottom for text legibility, light at top for header */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" />
      {/* Extra left vignette for text contrast */}
      <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end pb-24 pl-8 pr-8 sm:pl-16 lg:pl-24 transition-opacity duration-400 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Slide counter + eyebrow */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-bamboo-300" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bamboo-300">
            {slide.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl whitespace-pre-line text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          {slide.headline}
        </h1>

        {/* Sub */}
        <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300 sm:text-lg">
          {slide.sub}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={getFullPath("creations", locale)}
            className="rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-900/40"
          >
            {c.cta1}
          </Link>
          <Link
            href={getFullPath("workshop", locale)}
            className="rounded-full border border-white/50 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/80 hover:bg-white/20"
          >
            {c.cta2}
          </Link>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-sm transition hover:bg-black/40 sm:left-6 lg:left-10"
      >
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-sm transition hover:bg-black/40 sm:right-6 lg:right-10"
      >
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators + slide count */}
      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4 sm:right-16 lg:right-24">
        {/* Count */}
        <span className="text-xs font-mono tracking-widest text-white/60">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-bamboo-300"
                  : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
