"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { locales, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";
import { resolveSlug } from "@/lib/slugResolver";
import { getFullPath } from "@/lib/routes";

const FlagIcon = ({ locale }: { locale: Locale }) => {
  const flagImages = {
    es: "/assets/32px-Flag_of_Spain.svg.png",
    en: "/assets/32px-Flag_of_the_United_Kingdom_(3-5).svg.png",
    ca: "/assets/32px-Flag_of_Catalonia.svg.png",
  };

  return (
    <div className="relative h-4 w-4 overflow-hidden rounded-full">
      <Image
        src={flagImages[locale]}
        alt={`${locale} flag`}
        width={16}
        height={16}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

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
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all",
            currentLocale === locale
              ? "bg-primary-700 text-white shadow-sm"
              : "text-gray-600 hover:bg-bamboo-100 hover:text-gray-900",
          )}
        >
          <FlagIcon locale={locale} />
          <span>{locale.toUpperCase()}</span>
        </Link>
      ))}
    </div>
  );
}
