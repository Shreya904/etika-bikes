"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { locales, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.lang as Locale;

  const getLocalizedPath = (locale: Locale) => {
    if (!pathname) return `/${locale}`;

    // Remove current locale from path and add new locale
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = locale;
    return `/${segments.join("/")}`;
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
