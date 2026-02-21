import { routes } from "@/lib/routes";
import { locales, type Locale } from "@/i18n";

export type RouteKey = keyof typeof routes;

/**
 * Builds a reverse map: { locale → { slug → routeKey } }
 * Used to resolve an incoming URL slug back to a known route key.
 */
function buildReverseMap(): Record<Locale, Record<string, RouteKey>> {
  const map = {} as Record<Locale, Record<string, RouteKey>>;

  for (const locale of locales) {
    map[locale] = {};
    for (const [key, localeSlugs] of Object.entries(routes) as [
      RouteKey,
      Record<Locale, string>,
    ][]) {
      const path = localeSlugs[locale];
      if (path && path !== "/") {
        // path is like "/bamboo-bicycle-frames", slug is "bamboo-bicycle-frames"
        const slug = path.replace(/^\//, "");
        map[locale][slug] = key;
      }
    }
  }

  return map;
}

const reverseMap = buildReverseMap();

/**
 * Resolves a URL slug + locale to a route key.
 * Returns null if the slug is not recognised.
 */
export function resolveSlug(slug: string, locale: Locale): RouteKey | null {
  return reverseMap[locale]?.[slug] ?? null;
}

/**
 * Generates all { lang, slug } param combinations for generateStaticParams.
 */
export function getAllSlugParams(): { lang: string; slug: string }[] {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const [, localeSlugs] of Object.entries(routes) as [
      RouteKey,
      Record<Locale, string>,
    ][]) {
      const path = localeSlugs[locale];
      if (path && path !== "/") {
        params.push({ lang: locale, slug: path.replace(/^\//, "") });
      }
    }
  }

  return params;
}
