"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { locales, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";
import { resolveSlug } from "@/lib/slugResolver";
import { getFullPath } from "@/lib/routes";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.lang as Locale;

  const getLocalizedPath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;

    // Parse the current path
    const segments = pathname.split("/").filter(Boolean);

    // Handle homepage
    if (segments.length <= 1) {
      return `/${targetLocale}`;
    }

    // Extract current locale and slug
    const currentSlug = segments[1];

    // Resolve the route key from current slug and locale
    const routeKey = resolveSlug(currentSlug, currentLocale);

    if (routeKey) {
      // Generate proper localized path using the route key
      return getFullPath(routeKey, targetLocale);
    }

    // Fallback: simple replacement (for any edge cases)
    const newSegments = [...segments];
    newSegments[0] = targetLocale;
    return `/${newSegments.join("/")}`;
  };

  return (
    <div className="flex items-center gap-0.5 rounded-full bg-bamboo-50 p-0.5">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={cn(
            "rounded-full px-3 py-1.5 text-sm font-medium transition-all",
            currentLocale === locale
              ? "bg-primary-700 text-white shadow-sm"
              : "text-gray-600 hover:bg-bamboo-100 hover:text-gray-900",
          )}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
