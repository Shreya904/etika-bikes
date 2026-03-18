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
    <Fragment>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden"
        aria-label={tCommon("menu")}
      >
        <svg
          className="h-8 w-8 text-secondary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-full mt-2 lg:hidden",
          !isOpen && "hidden",
        )}
      >
        <div className="bg-white shadow-lg">
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 10rem)" }}
          >
            <div className="flex flex-col items-start p-4">
              {mainNavigation.map((item) => renderNavItem(item))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
