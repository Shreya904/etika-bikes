"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const params = useParams();
  const locale = params.lang as Locale;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-bamboo-200/40 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <Container maxWidth="2xl">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href={getFullPath("home", locale)}
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/logos/etika_main_logo.png"
              alt="Etika Bikes"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 justify-center lg:flex">
            <Navigation />
          </div>

          {/* Right Side: Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
