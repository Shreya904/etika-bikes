"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";

const content = {
  en: {
    eyebrow: "Coming Soon",
    heading: "We're building something great.",
    body: "This page is still under construction. Our team is working on it and it will be ready soon. In the meantime, feel free to explore the rest of the site.",
    explore: "Explore other pages",
    links: [
      { label: "Our Creations", route: "creations" as const },
      { label: "Etika Workshop", route: "workshop" as const },
      { label: "About Us", route: "about" as const },
      { label: "Contact", route: "contact" as const },
    ],
  },
  es: {
    eyebrow: "Próximamente",
    heading: "Estamos construyendo algo genial.",
    body: "Esta página está en construcción. Nuestro equipo está trabajando en ella y estará lista pronto. Mientras tanto, te invitamos a explorar el resto del sitio.",
    explore: "Explora otras páginas",
    links: [
      { label: "Nuestras Creaciones", route: "creations" as const },
      { label: "Taller Etika", route: "workshop" as const },
      { label: "Sobre Nosotros", route: "about" as const },
      { label: "Contacto", route: "contact" as const },
    ],
  },
  ca: {
    eyebrow: "Pròximament",
    heading: "Estem construint alguna cosa genial.",
    body: "Aquesta pàgina està en construcció. El nostre equip hi està treballant i aviat estarà llesta. Mentrestant, t'animem a explorar la resta del lloc.",
    explore: "Explora altres pàgines",
    links: [
      { label: "Les Nostres Creacions", route: "creations" as const },
      { label: "Taller Etika", route: "workshop" as const },
      { label: "Sobre Nosaltres", route: "about" as const },
      { label: "Contacte", route: "contact" as const },
    ],
  },
};

export function UnderConstruction() {
  const params = useParams();
  const locale = (params.lang as Locale) ?? "en";
  const c = content[locale] ?? content.en;

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-bamboo-50/40 py-24">
      <Container maxWidth="md" className="text-center">
        {/* Eyebrow */}
        <span className="inline-block rounded-full border border-bamboo-300 bg-bamboo-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-bamboo-700">
          {c.eyebrow}
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary-800 sm:text-5xl lg:text-6xl">
          {c.heading}
        </h1>

        {/* Body */}
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg">
          {c.body}
        </p>

        {/* Illustration */}
        <div className="mx-auto mt-16 w-full max-w-md">
          <svg
            viewBox="0 0 480 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-hidden="true"
          >
            {/* Ground line */}
            <line
              x1="20"
              y1="240"
              x2="460"
              y2="240"
              stroke="#d4c5a9"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Scaffolding left tower */}
            <rect x="60" y="60" width="8" height="180" rx="3" fill="#153d24" />
            <rect x="120" y="60" width="8" height="180" rx="3" fill="#153d24" />
            {/* Scaffolding cross beams left */}
            <line
              x1="60"
              y1="100"
              x2="128"
              y2="100"
              stroke="#2d5f3f"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="60"
              y1="150"
              x2="128"
              y2="150"
              stroke="#2d5f3f"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="60"
              y1="200"
              x2="128"
              y2="200"
              stroke="#2d5f3f"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Diagonal braces left */}
            <line
              x1="60"
              y1="100"
              x2="128"
              y2="150"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <line
              x1="128"
              y1="100"
              x2="60"
              y2="150"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <line
              x1="60"
              y1="150"
              x2="128"
              y2="200"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <line
              x1="128"
              y1="150"
              x2="60"
              y2="200"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />

            {/* Scaffolding right tower */}
            <rect x="352" y="60" width="8" height="180" rx="3" fill="#153d24" />
            <rect x="412" y="60" width="8" height="180" rx="3" fill="#153d24" />
            {/* Cross beams right */}
            <line
              x1="352"
              y1="100"
              x2="420"
              y2="100"
              stroke="#2d5f3f"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="352"
              y1="150"
              x2="420"
              y2="150"
              stroke="#2d5f3f"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="352"
              y1="200"
              x2="420"
              y2="200"
              stroke="#2d5f3f"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Diagonal braces right */}
            <line
              x1="352"
              y1="100"
              x2="420"
              y2="150"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <line
              x1="420"
              y1="100"
              x2="352"
              y2="150"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <line
              x1="352"
              y1="150"
              x2="420"
              y2="200"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <line
              x1="420"
              y1="150"
              x2="352"
              y2="200"
              stroke="#4f7942"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />

            {/* Top beam spanning full width */}
            <rect x="52" y="52" width="376" height="14" rx="4" fill="#1a4d2e" />

            {/* Hanging rope/wire from top beam */}
            <line
              x1="240"
              y1="66"
              x2="240"
              y2="100"
              stroke="#c9b88a"
              strokeWidth="2"
              strokeDasharray="4 3"
            />

            {/* Bicycle frame — centered, bamboo tones */}
            {/* Rear wheel */}
            <circle
              cx="190"
              cy="195"
              r="40"
              stroke="#c9b88a"
              strokeWidth="5"
              fill="none"
            />
            <circle cx="190" cy="195" r="6" fill="#c9b88a" />
            {/* Spokes rear */}
            {[0, 45, 90, 135].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={190 + 6 * Math.cos(rad)}
                  y1={195 + 6 * Math.sin(rad)}
                  x2={190 + 34 * Math.cos(rad)}
                  y2={195 + 34 * Math.sin(rad)}
                  stroke="#d4c5a9"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Front wheel */}
            <circle
              cx="310"
              cy="195"
              r="40"
              stroke="#c9b88a"
              strokeWidth="5"
              fill="none"
            />
            <circle cx="310" cy="195" r="6" fill="#c9b88a" />
            {/* Spokes front */}
            {[0, 45, 90, 135].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={310 + 6 * Math.cos(rad)}
                  y1={195 + 6 * Math.sin(rad)}
                  x2={310 + 34 * Math.cos(rad)}
                  y2={195 + 34 * Math.sin(rad)}
                  stroke="#d4c5a9"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Frame tubes */}
            {/* Down tube: head tube to bottom bracket */}
            <line
              x1="295"
              y1="158"
              x2="225"
              y2="195"
              stroke="#b5a082"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Seat tube: bottom bracket up to seat */}
            <line
              x1="225"
              y1="195"
              x2="220"
              y2="140"
              stroke="#b5a082"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Top tube: seat to head */}
            <line
              x1="220"
              y1="140"
              x2="295"
              y2="140"
              stroke="#b5a082"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Chain stay */}
            <line
              x1="225"
              y1="195"
              x2="190"
              y2="195"
              stroke="#b5a082"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Seat stay */}
            <line
              x1="220"
              y1="140"
              x2="190"
              y2="195"
              stroke="#b5a082"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Fork */}
            <line
              x1="295"
              y1="158"
              x2="310"
              y2="195"
              stroke="#b5a082"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Saddle */}
            <rect x="206" y="133" width="28" height="6" rx="3" fill="#8b7254" />

            {/* Handlebar stem */}
            <line
              x1="295"
              y1="140"
              x2="302"
              y2="125"
              stroke="#8b7254"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              x1="296"
              y1="125"
              x2="314"
              y2="125"
              stroke="#8b7254"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Hard hat on top */}
            <ellipse cx="240" cy="102" rx="28" ry="10" fill="#c9b88a" />
            <rect
              x="218"
              y="86"
              width="44"
              height="18"
              rx="10"
              fill="#d4c5a9"
            />
            <rect
              x="212"
              y="100"
              width="56"
              height="5"
              rx="2.5"
              fill="#c9b88a"
            />

            {/* Wrench — top right area */}
            <g transform="translate(370, 78) rotate(-30)">
              <rect x="-3" y="0" width="6" height="28" rx="2" fill="#4f7942" />
              <circle
                cx="0"
                cy="-4"
                r="7"
                stroke="#4f7942"
                strokeWidth="4"
                fill="none"
              />
              <circle cx="0" cy="-4" r="3" fill="#faf8f4" />
            </g>
          </svg>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-16 h-px w-16 bg-bamboo-300" />

        {/* Explore links */}
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
          {c.explore}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {c.links.map((link) => (
            <Link
              key={link.route}
              href={getFullPath(link.route, locale)}
              className="rounded-full border border-primary-200 bg-white px-5 py-2 text-sm font-medium text-primary-700 transition-colors hover:border-primary-400 hover:bg-primary-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
