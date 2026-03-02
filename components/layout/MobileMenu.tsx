"use client";

import { useState, Fragment } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n";
import { mainNavigation, type NavItem } from "@/lib/navigation";
import { getFullPath } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const params = useParams();
  const locale = params.lang as Locale;

  const toggleSubMenu = (labelKey: string) => {
    const newOpenMenus = new Set(openSubMenus);
    if (newOpenMenus.has(labelKey)) {
      newOpenMenus.delete(labelKey);
    } else {
      newOpenMenus.add(labelKey);
    }
    setOpenSubMenus(newOpenMenus);
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isSubMenuOpen = openSubMenus.has(item.labelKey);

    return (
      <div
        key={item.labelKey}
        className={cn("border-b border-bamboo-100", level > 0 && "ml-6")}
      >
        {hasChildren ? (
          <>
            <button
              onClick={() => toggleSubMenu(item.labelKey)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-gray-800 transition-colors hover:bg-bamboo-50"
            >
              <span>
                {t(item.labelKey)}
                {item.underConstruction && (
                  <span className="ml-2 text-xs font-normal text-bamboo-400">
                    ({t("underConstruction")})
                  </span>
                )}
              </span>
              <svg
                className={cn(
                  "h-5 w-5 text-primary-700 transition-transform",
                  isSubMenuOpen && "rotate-180",
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isSubMenuOpen && (
              <div className="bg-bamboo-50/50">
                {item.children?.map((child) => renderNavItem(child, level + 1))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={getFullPath(
              item.route as keyof typeof import("@/lib/routes").routes,
              locale,
            )}
            onClick={() => setIsOpen(false)}
            className="block px-5 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-bamboo-50 hover:text-primary-700"
          >
            {t(item.labelKey)}
            {item.underConstruction && (
              <span className="ml-2 text-xs text-bamboo-400">
                ({t("underConstruction")})
              </span>
            )}
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-primary-700 transition-colors hover:bg-bamboo-50 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 lg:hidden"
        aria-label={tCommon("menu")}
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex h-20 items-center justify-between border-b border-bamboo-200/40 bg-bamboo-50/30 px-5">
              <Link
                href={getFullPath("home", locale)}
                className="flex items-center transition-opacity hover:opacity-80"
              >
                <Image
                  src="/logos/etika_main_logo.png"
                  alt="Etika Bikes"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-primary-700 transition-colors hover:bg-bamboo-100"
                aria-label={tCommon("close")}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              className="overflow-y-auto"
              style={{ height: "calc(100vh - 5rem)" }}
            >
              {mainNavigation.map((item) => renderNavItem(item))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
