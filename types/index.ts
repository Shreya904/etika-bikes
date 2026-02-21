import { type Locale } from "@/i18n";

export interface PageParams {
  lang: Locale;
}

export interface PageProps {
  params: Promise<PageParams>;
}

export interface LayoutProps {
  children: React.ReactNode;
  params: Promise<PageParams>;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface LocalizedContent<T = string> {
  es: T;
  en: T;
  ca: T;
}
