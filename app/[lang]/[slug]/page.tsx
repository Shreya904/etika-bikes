import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n";
import {
  resolveSlug,
  getAllSlugParams,
  type RouteKey,
} from "@/lib/slugResolver";
import { UnderConstruction } from "@/components/ui";
import { PhilosophyPage } from "./_components/PhilosophyPage";
import { BambooMaterialsPage } from "./_components/BambooMaterialsPage";
import { SelfBuildWorkshopPage } from "./_components/SelfBuildWorkshopPage";
import { CustomBikesPage } from "./_components/CustomBikesPage";
import { CarbonRepairPage } from "./_components/CarbonRepairPage";
import { FAQPage } from "./_components/FAQPage";
import { ContactPage } from "./_components/ContactPage";

// Ensure unrecognised slugs are handled at runtime, not just at build time
export const dynamicParams = true;

// All page component implementations have been extracted to ./_components/
// for better maintainability. This file now only handles routing.

// ─── Pages the client explicitly marked as "under construction" ───────────────
const UNDER_CONSTRUCTION: Set<RouteKey> = new Set([
  // Our Creations – all pages except ebikeMtb and ebikeUrban (which have content)
  "creations",
  "bicycles",
  "ebikes",
  "classic",
  "pushBike",
  "prototypes",
  "bmx",
  "tricycle",
  "cargoBike",
  "frames",
  "selfBuildKits",
  "accessories",

  // Workshop landing page only (subpages now have content)
  "workshop",

  // About pages
  "ourStory",

  // Top-level pages
  "about",
  "collaborations",
  "blog",
]);

// ─── Static params: pre-render every locale × slug combination ────────────────
export function generateStaticParams() {
  return getAllSlugParams();
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const routeKey = resolveSlug(slug, locale);

  if (!routeKey) return {};

  // Philosophy page metadata
  if (routeKey === "philosophy") {
    const titles: Record<Locale, string> = {
      es: "Nuestra Filosofía | Bicicletas Artesanales de Bambú desde Barcelona – Etika Bikes",
      en: "Our Philosophy | Handmade Bamboo Bicycles from Barcelona – Etika Bikes",
      ca: "La Nostra Filosofia | Bicicletes Artesanals de Bambú des de Barcelona – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Descubre la filosofía de Etika Bikes: bicicletas artesanales de bambú desde Barcelona, combinando sostenibilidad, artesanía, innovación y movilidad responsable.",
      en: "Discover Etika Bikes' philosophy: handmade bamboo bicycles from Barcelona, combining sustainability, craftsmanship, innovation and responsible mobility.",
      ca: "Descobreix la filosofia d'Etika Bikes: bicicletes artesanals de bambú des de Barcelona, combinant sostenibilitat, artesania, innovació i mobilitat responsable.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Bamboo Materials page metadata
  if (routeKey === "bambooMaterials") {
    const titles: Record<Locale, string> = {
      es: "¿Por qué Bambú? | Bicicletas Sostenibles y Resistentes – Etika Bikes",
      en: "Why Bamboo Bicycles? | Sustainable and Strong Bicycles – Etika Bikes",
      ca: "Per què Bambú? | Bicicletes Sostenibles i Resistents – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Descubre por qué el bambú es el material perfecto para bicicletas: naturalmente fuerte como el acero, increíblemente sostenible y cómodo para pedalear.",
      en: "Discover why bamboo is the perfect material for bicycles: naturally strong as steel, incredibly sustainable and comfortable to ride.",
      ca: "Descobreix per què el bambú és el material perfecte per a bicicletes: naturalment fort com l'acer, increïblement sostenible i còmode per pedalejar.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Self-Build Workshop page metadata
  if (routeKey === "selfBuildWorkshop") {
    const titles: Record<Locale, string> = {
      es: "Taller de Auto-Construcción de Bicicletas de Bambú en Barcelona | Etika Bikes",
      en: "Bamboo Bicycle Self-Build Workshop in Barcelona | Etika Bikes",
      ca: "Taller d'Auto-Construcció de Bicicletes de Bambú a Barcelona | Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Construye tu propia bicicleta artesanal de bambú en Barcelona. Taller práctico con materiales naturales y guía experta.",
      en: "Build your own handmade bamboo bicycle in Barcelona. Practical workshop with natural materials and expert guidance.",
      ca: "Construeix la teva pròpia bicicleta artesanal de bambú a Barcelona. Taller pràctic amb materials naturals i guia experta.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Custom Bikes page metadata
  if (routeKey === "customBikes") {
    const titles: Record<Locale, string> = {
      es: "Bicicletas de Bambú Hechas a Medida | Diseño Personalizado en Barcelona – Etika Bikes",
      en: "Custom Made Bamboo Bicycles | Personalized Design in Barcelona – Etika Bikes",
      ca: "Bicicletes de Bambú Fetes a Mida | Disseny Personalitzat a Barcelona – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Diseñamos y construimos bicicletas de bambú personalizadas en Barcelona, combinando ergonomía, artesanía y sostenibilidad para crear tu bicicleta perfecta.",
      en: "We design and build custom bamboo bicycles in Barcelona, combining ergonomics, craftsmanship and sustainability to create your perfect bicycle.",
      ca: "Dissenyem i construïm bicicletes de bambú personalitzades a Barcelona, combinant ergonomia, artesania i sostenibilitat per crear la teva bicicleta perfecta.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Carbon Repair page metadata
  if (routeKey === "carbonRepair") {
    const titles: Record<Locale, string> = {
      es: "Reparación de Cuadros de Carbono en Barcelona | Etika Bikes",
      en: "Carbon Frame Repair in Barcelona | Etika Bikes",
      ca: "Reparació de Quadres de Carboni a Barcelona | Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Reparamos cuadros de carbono en Barcelona usando técnicas precisas y un enfoque sostenible para alargar la vida de tu bicicleta.",
      en: "We repair carbon frames in Barcelona using precise techniques and a sustainable approach to extend the life of your bicycle.",
      ca: "Reparem quadres de carboni a Barcelona utilitzant tècniques precises i un enfocament sostenible per allargar la vida de la teva bicicleta.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // FAQ page metadata
  if (routeKey === "faq") {
    const titles: Record<Locale, string> = {
      es: "Preguntas Frecuentes | Bicicletas de Bambú Artesanales – Etika Bikes",
      en: "Frequently Asked Questions | Handmade Bamboo Bicycles – Etika Bikes",
      ca: "Preguntes Freqüents | Bicicletes de Bambú Artesanals – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Respuestas a las preguntas más frecuentes sobre nuestras bicicletas artesanales de bambú: resistencia, cuidados, ventajas y sostenibilidad.",
      en: "Answers to the most frequently asked questions about our handmade bamboo bicycles: strength, care, advantages and sustainability.",
      ca: "Respostes a les preguntes més freqüents sobre les nostres bicicletes artesanals de bambú: resistència, cures, avantatges i sostenibilitat.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Contact page metadata
  if (routeKey === "contact") {
    const titles: Record<Locale, string> = {
      es: "Contacto | Visita Nuestro Taller y Tienda en Barcelona – Etika Bikes",
      en: "Contact | Visit Our Workshop and Store in Barcelona – Etika Bikes",
      ca: "Contacte | Visita el Nostre Taller i Botiga a Barcelona – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Contacta con Etika Bikes. Visita nuestro taller en L'Hospitalet o nuestra tienda Bamboo Bike Tours en Barcelona. Teléfono y email disponibles.",
      en: "Contact Etika Bikes. Visit our workshop in L'Hospitalet or our Bamboo Bike Tours store in Barcelona. Phone and email available.",
      ca: "Contacta amb Etika Bikes. Visita el nostre taller a l'Hospitalet o la nostra botiga Bamboo Bike Tours a Barcelona. Telèfon i email disponibles.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Under construction pages metadata
  if (UNDER_CONSTRUCTION.has(routeKey)) {
    const titles: Record<Locale, string> = {
      es: "Próximamente | Etika Bikes",
      en: "Coming Soon | Etika Bikes",
      ca: "Pròximament | Etika Bikes",
    };

    return {
      title: titles[locale] ?? titles.en,
      robots: { index: false },
    };
  }

  return {};
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function SlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  // Validate locale
  if (!locales.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const routeKey = resolveSlug(slug, locale);

  // Unknown slug → hard 404
  if (!routeKey) notFound();

  // Under-construction routes
  if (UNDER_CONSTRUCTION.has(routeKey)) {
    return <UnderConstruction />;
  }

  // About Us pages with content
  if (routeKey === "philosophy") {
    return <PhilosophyPage locale={locale} />;
  }

  if (routeKey === "bambooMaterials") {
    return <BambooMaterialsPage locale={locale} />;
  }

  // Workshop pages with content
  if (routeKey === "selfBuildWorkshop") {
    return <SelfBuildWorkshopPage locale={locale} />;
  }

  if (routeKey === "customBikes") {
    return <CustomBikesPage locale={locale} />;
  }

  if (routeKey === "carbonRepair") {
    return <CarbonRepairPage locale={locale} />;
  }

  // FAQ page
  if (routeKey === "faq") {
    return <FAQPage locale={locale} />;
  }

  // Contact page
  if (routeKey === "contact") {
    return <ContactPage locale={locale} />;
  }

  // All other recognised routes are not yet built – return 404 for now.
  // They will be replaced one by one during subsequent build phases.
  notFound();
}
