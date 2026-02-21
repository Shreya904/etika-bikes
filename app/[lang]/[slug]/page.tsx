import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n";
import {
  resolveSlug,
  getAllSlugParams,
  type RouteKey,
} from "@/lib/slugResolver";
import { UnderConstruction } from "@/components/ui";

// Ensure unrecognised slugs are handled at runtime, not just at build time
export const dynamicParams = true;

// ─── Pages the client explicitly marked as "under construction" ───────────────
const UNDER_CONSTRUCTION: Set<RouteKey> = new Set([
  // Our Creations – subpages
  "frames",
  "selfBuildKits",
  "accessories",
  // Workshop landing + all subpages (all content in preparation)
  "workshop",
  "selfBuildWorkshop",
  "customBikes",
  "carbonRepair",
  // Top-level pages
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

  if (!routeKey || !UNDER_CONSTRUCTION.has(routeKey)) return {};

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

  // All other recognised routes are not yet built – return 404 for now.
  // They will be replaced one by one during subsequent build phases.
  notFound();
}
