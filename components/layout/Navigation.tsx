"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n";
import { mainNavigation, type NavItem } from "@/lib/navigation";
import { getFullPath } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const t = useTranslations("nav");
  const params = useParams();
  const locale = params.lang as Locale;

  const handleMouseEnter = (labelKey: string) => {
    setOpenMenu(labelKey);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const renderDropdown = (items: NavItem[]) => {
    return (
      <div className="absolute left-0 top-full z-50 w-64 pt-2">
        <div className="overflow-hidden rounded-xl border border-bamboo-200/60 bg-white shadow-xl">
          <div className="bg-bamboo-50/50 py-1.5">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div key={item.labelKey} className="relative">
                  {hasChildren ? (
                    <div className="group/nested">
                      <div className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-800 transition-colors hover:bg-bamboo-100/80">
                        <Link
                          href={getFullPath(
                            item.route as keyof typeof import("@/lib/routes").routes,
                            locale,
                          )}
                          className="flex-1 font-medium"
                        >
                          {t(item.labelKey)}
                          {item.underConstruction && (
                            <span className="ml-2 text-xs font-normal text-gray-500">
                              ({t("underConstruction")})
                            </span>
                          )}
                        </Link>
                        <svg
                          className="h-3.5 w-3.5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <div className="invisible absolute left-full top-0 pl-1 opacity-0 transition-all group-hover/nested:visible group-hover/nested:opacity-100">
                        {renderDropdown(item.children!)}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={getFullPath(
                        item.route as keyof typeof import("@/lib/routes").routes,
                        locale,
                      )}
                      className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-bamboo-100/80 hover:text-gray-900"
                    >
                      {t(item.labelKey)}
                      {item.underConstruction && (
                        <span className="ml-2 text-xs text-gray-500">
                          ({t("underConstruction")})
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {mainNavigation.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openMenu === item.labelKey;

          return (
            <li
              key={item.labelKey}
              className="relative"
              onMouseEnter={() =>
                hasChildren && handleMouseEnter(item.labelKey)
              }
              onMouseLeave={handleMouseLeave}
            >
              {hasChildren ? (
                <>
                  <button
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                      isOpen
                        ? "bg-bamboo-50 text-primary-700"
                        : "text-gray-700 hover:bg-bamboo-50/50 hover:text-primary-700",
                    )}
                  >
                    {t(item.labelKey)}
                    {item.underConstruction && (
                      <span className="text-xs text-bamboo-400">*</span>
                    )}
                    <svg
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        isOpen && "rotate-180",
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
                  {isOpen && item.children && renderDropdown(item.children)}
                </>
              ) : (
                <Link
                  href={getFullPath(
                    item.route as keyof typeof import("@/lib/routes").routes,
                    locale,
                  )}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-bamboo-50/50 hover:text-primary-700"
                >
                  {t(item.labelKey)}
                  {item.underConstruction && (
                    <span className="ml-1 text-xs text-bamboo-400">*</span>
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
