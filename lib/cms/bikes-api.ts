/**
 * CMS API data layer for bicycles — async, server-side.
 *
 * Uses the custom GET /api/bicycles endpoint (see docs/CMS_REQUIREMENTS.md).
 * Server fetch: CMS_API_BASE_URL (never exposed to the browser).
 * Media <img src>: call getPublicMediaUrl() which uses NEXT_PUBLIC_CMS_API_BASE_URL.
 */
import { locales, type Locale } from "@/i18n";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CmsBikeCategory = "ebike" | "classic" | "prototype";
export type CmsBikeStatus = "draft" | "published" | "under-construction";
export type CmsMediaKind = "image" | "video";

/** Payload Lexical editor node (simplified). */
interface LexicalNode {
  type: string;
  text?: string;
  children?: LexicalNode[];
  tag?: string;
  [key: string]: unknown;
}

interface LexicalDoc {
  root: { type: "root"; children: LexicalNode[] };
}

/**
 * Bicycle document projected to a single locale.
 * Returned by GET /api/bicycles (custom endpoint).
 * Localized fields are already resolved to plain strings.
 */
/** Media reference as returned by the CMS: may be a plain string URL, a full
 * media document object, or a stripped object with just gridFsFileId. */
export type CmsMediaRef =
  | string
  | {
      url?: string;
      gridFsFileId?: string;
      mediaKind?: CmsMediaKind | string;
      alt?: string | Record<string, string>;
      [key: string]: unknown;
    }
  | null
  | undefined;

/**
 * A string field that may already be projected (plain string) or may still be
 * an unprojected localized object { es, en, ca }. Always pass through
 * resolveCmsString() before rendering.
 */
export type CmsStringRef =
  | string
  | Partial<Record<string, string>>
  | null
  | undefined;

/**
 * Resolves a CmsStringRef to a plain string for the given locale.
 * Falls back: requested locale → en → es → ca → first string found → "".
 */
export function resolveCmsString(input: unknown, locale: Locale): string {
  if (!input) return "";
  if (typeof input === "string") return input;
  if (typeof input !== "object" || Array.isArray(input)) return "";
  const obj = input as Record<string, unknown>;
  const preferred = obj[locale];
  if (typeof preferred === "string") return preferred;
  for (const fb of ["en", "es", "ca"] as const) {
    if (fb !== locale) {
      const v = obj[fb];
      if (typeof v === "string" && v) return v;
    }
  }
  // Last resort: first string value
  for (const v of Object.values(obj)) {
    if (typeof v === "string" && v) return v;
  }
  return "";
}

export interface CmsBikeDocument {
  id: string;
  status: CmsBikeStatus;
  internalName: string;
  /** Slug — may be a projected string or a localized object. Use resolveCmsString(). */
  slug: CmsStringRef;
  /** Title — may be projected string or localized object. Use resolveCmsString(). */
  title: CmsStringRef;
  category: CmsBikeCategory;
  /** Model name — usually invariant across locales, but may be a localized object. */
  modelName: CmsStringRef;
  heroImage: {
    /** Pass through getPublicMediaUrl(). */
    url: CmsMediaRef;
    /** Alt text — may be projected or localized object. Use resolveCmsString(). */
    alt: CmsStringRef;
  };
  gallery?: Array<{
    url: CmsMediaRef;
    /** Alt text — may be projected or localized object. Use resolveCmsString(). */
    alt: CmsStringRef;
    order?: number;
  }>;
  /**
   * Rich text — may be a Lexical doc, a plain string, or a localized object
   * { es: LexicalDoc, en: LexicalDoc, ca: LexicalDoc }.
   * Always pass with locale to extractRichTextParagraphs().
   */
  description: unknown;
  specifications?: Array<{
    /** Use resolveCmsString(). */
    key: CmsStringRef;
    /** Use resolveCmsString(). */
    value: CmsStringRef;
    order?: number;
  }>;
  priceInfo?: {
    /** May be localized. Use resolveCmsString(). */
    label?: CmsStringRef;
    amount?: number;
    currency?: string;
  };
  isAvailable?: boolean;
  order?: number;
  seo?: {
    metaTitle?: CmsStringRef;
    metaDescription?: CmsStringRef;
    keywords?: Array<{ value: string }>;
  };
  publishedAt?: string;
}

export interface NormalizedCmsGalleryItem {
  src: string;
  alt: string;
  order?: number;
  mediaKind: CmsMediaKind;
  mimeType?: string;
}

// ─── Rich text helpers ────────────────────────────────────────────────────────

/**
 * Extracts plain-text paragraphs from a CMS description field.
 * Handles: plain string, Lexical doc, localized Lexical object { es, en, ca }.
 */
export function extractRichTextParagraphs(
  richText: unknown,
  locale: Locale,
): string[] {
  if (!richText) return [];

  // Resolve localized rich text: { es: LexicalDoc, en: LexicalDoc, ca: LexicalDoc }
  let resolved: unknown = richText;
  if (
    typeof richText === "object" &&
    richText !== null &&
    !("root" in richText) &&
    !("type" in richText)
  ) {
    const obj = richText as Record<string, unknown>;
    resolved = obj[locale] ?? obj.en ?? obj.es ?? obj.ca ?? null;
  }

  if (!resolved) return [];
  if (typeof resolved === "string") return resolved.trim() ? [resolved] : [];

  const root = (resolved as LexicalDoc).root;
  if (!root?.children) return [];

  function collectText(nodes: LexicalNode[]): string {
    return nodes
      .map((n) => (n.text ? n.text : n.children ? collectText(n.children) : ""))
      .join("");
  }

  const paragraphs: string[] = [];
  for (const node of root.children) {
    const text = collectText(node.children ?? []).trim();
    if (text) paragraphs.push(text);
  }
  return paragraphs;
}

// ─── Media URL helper ─────────────────────────────────────────────────────────

/**
 * Ensures a media URL is absolute so the browser can load it.
 *
 * The CMS custom endpoint projects `heroImage.url` differently depending on
 * whether it has already resolved the media document:
 *   - Plain string (absolute or root-relative) → use directly.
 *   - Media document object with a `url` string → use doc.url.
 *   - Media document object with only a `gridFsFileId` → build
 *       /api/media-file?id=<gridFsFileId> against the CMS origin.
 *   - Anything else (null, undefined, unknown) → return "".
 *
 * Reads NEXT_PUBLIC_CMS_API_BASE_URL so it works in both server and client
 * components.
 */
export function getPublicMediaUrl(input: unknown): string {
  const cmsBaseUrl =
    process.env.CMS_API_BASE_URL ??
    process.env.NEXT_PUBLIC_CMS_API_BASE_URL ??
    "";
  const cmsOrigin = cmsBaseUrl.replace(/\/api\/?$/, "");

  function resolveMediaUrl(value: unknown): string {
    if (typeof value === "string") {
      return value;
    }

    if (!value || typeof value !== "object") {
      return "";
    }

    const doc = value as Record<string, unknown>;
    if (typeof doc.url === "string") {
      return doc.url;
    }

    if (doc.url && typeof doc.url === "object") {
      const nestedUrl = resolveMediaUrl(doc.url);
      if (nestedUrl) {
        return nestedUrl;
      }
    }

    if (typeof doc.gridFsFileId === "string" && doc.gridFsFileId) {
      return `${cmsOrigin}/api/media-file?id=${encodeURIComponent(doc.gridFsFileId)}`;
    }

    return "";
  }

  const url = resolveMediaUrl(input);

  if (!url) return "";
  if (/^https?:\/\//.test(url)) return url;
  return `${cmsOrigin}${url.startsWith("/") ? "" : "/"}${url}`;
}

// ─── Media normalization helpers ─────────────────────────────────────────────

const VIDEO_EXT_RE = /\.(mp4|mov|webm|ogg|m4v|avi)$/i;

function asMediaObject(input: unknown): Record<string, unknown> | null {
  if (!input || typeof input !== "object") return null;
  return input as Record<string, unknown>;
}

function getNestedMediaObject(input: unknown): Record<string, unknown> | null {
  const media = asMediaObject(input);
  if (!media) return null;
  if (media.url && typeof media.url === "object") {
    return (media.url as Record<string, unknown>) ?? null;
  }
  return media;
}

function getMediaMimeType(input: unknown): string {
  const media = asMediaObject(input);
  if (!media) return "";

  if (typeof media.mimeType === "string") {
    return media.mimeType;
  }

  const nested = getNestedMediaObject(input);
  if (nested && nested !== media && typeof nested.mimeType === "string") {
    return nested.mimeType;
  }

  return "";
}

function getMediaType(input: unknown): string {
  const media = asMediaObject(input);
  if (!media) return "";

  if (typeof media.type === "string") {
    return media.type;
  }

  const nested = getNestedMediaObject(input);
  if (nested && nested !== media && typeof nested.type === "string") {
    return nested.type;
  }

  return "";
}

function getMediaKind(input: unknown): CmsMediaKind | "" {
  const media = asMediaObject(input);
  if (!media) return "";

  if (typeof media.mediaKind === "string") {
    const normalized = media.mediaKind.toLowerCase();
    if (normalized === "image" || normalized === "video") {
      return normalized;
    }
  }

  const nested = getNestedMediaObject(input);
  if (nested && nested !== media && typeof nested.mediaKind === "string") {
    const normalized = nested.mediaKind.toLowerCase();
    if (normalized === "image" || normalized === "video") {
      return normalized;
    }
  }

  return "";
}

function getMediaFilename(input: unknown): string {
  const media = asMediaObject(input);
  if (!media) return "";

  if (typeof media.filename === "string") {
    return media.filename;
  }

  const nested = getNestedMediaObject(input);
  if (nested && nested !== media && typeof nested.filename === "string") {
    return nested.filename;
  }

  return "";
}

function getKnownMediaId(input: unknown): string {
  const media = asMediaObject(input);
  if (!media) return "";

  for (const key of ["gridFsFileId", "id", "_id"] as const) {
    const value = media[key];
    if (typeof value === "string" && value) {
      return value;
    }
  }

  const nested = getNestedMediaObject(input);
  if (nested && nested !== media) {
    for (const key of ["gridFsFileId", "id", "_id"] as const) {
      const value = nested[key];
      if (typeof value === "string" && value) {
        return value;
      }
    }
  }

  return "";
}

function classifyMediaKindSync(
  mediaRef: unknown,
  src: string,
  knownVideoIds: ReadonlySet<string>,
): { mediaKind: CmsMediaKind | "unknown"; mimeType: string } {
  const mediaKind = getMediaKind(mediaRef);
  if (mediaKind === "video" || mediaKind === "image") {
    return { mediaKind, mimeType: getMediaMimeType(mediaRef) };
  }

  const mimeType = getMediaMimeType(mediaRef);
  if (mimeType.startsWith("video/")) {
    return { mediaKind: "video", mimeType };
  }
  if (mimeType.startsWith("image/")) {
    return { mediaKind: "image", mimeType };
  }

  const mediaType = getMediaType(mediaRef).toLowerCase();
  if (mediaType === "herovideo" || mediaType === "video") {
    return { mediaKind: "video", mimeType };
  }

  const filename = getMediaFilename(mediaRef);
  if (
    VIDEO_EXT_RE.test(filename) ||
    VIDEO_EXT_RE.test(src.split("?")[0] ?? "")
  ) {
    return { mediaKind: "video", mimeType };
  }

  const knownId = getKnownMediaId(mediaRef);
  if (knownId && knownVideoIds.has(knownId)) {
    return { mediaKind: "video", mimeType };
  }

  return { mediaKind: "unknown", mimeType };
}

function extractFilenameFromContentDisposition(value: string | null): string {
  if (!value) return "";

  const utf8Match = value.match(/filename\*=UTF-8''([^;]+)/i);
  if (utf8Match?.[1]) {
    try {
      return decodeURIComponent(utf8Match[1]);
    } catch {
      return utf8Match[1];
    }
  }

  const basicMatch = value.match(/filename="?([^";]+)"?/i);
  return basicMatch?.[1] ?? "";
}

function inferMimeTypeFromHeaders(headers: Headers): string {
  const contentType = headers.get("content-type") ?? "";
  if (contentType) {
    return contentType;
  }

  const filename = extractFilenameFromContentDisposition(
    headers.get("content-disposition"),
  );
  const lower = filename.toLowerCase();
  if (!lower) return "";
  if (lower.endsWith(".mp4")) return "video/mp4";
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".mov")) return "video/quicktime";
  if (lower.endsWith(".ogg") || lower.endsWith(".ogv")) return "video/ogg";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  return "";
}

function inferMimeTypeFromBytes(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 4) return "";

  // MP4/MOV family: [....]ftyp at bytes 4..7
  if (
    bytes.length >= 8 &&
    bytes[4] === 0x66 &&
    bytes[5] === 0x74 &&
    bytes[6] === 0x79 &&
    bytes[7] === 0x70
  ) {
    return "video/mp4";
  }

  // WebM/Matroska signature: 1A 45 DF A3
  if (
    bytes[0] === 0x1a &&
    bytes[1] === 0x45 &&
    bytes[2] === 0xdf &&
    bytes[3] === 0xa3
  ) {
    return "video/webm";
  }

  // Ogg container: "OggS"
  if (
    bytes[0] === 0x4f &&
    bytes[1] === 0x67 &&
    bytes[2] === 0x67 &&
    bytes[3] === 0x53
  ) {
    return "video/ogg";
  }

  return "";
}

async function enrichMimeTypeFromHead(src: string): Promise<string> {
  if (!src) return "";

  try {
    const headRes = await fetch(src, {
      method: "HEAD",
      next: { revalidate: 60 },
      cache: "force-cache",
    });

    if (headRes.ok) {
      const fromHead = inferMimeTypeFromHeaders(headRes.headers);
      if (fromHead) return fromHead;
    }

    // Some media endpoints (including proxy/download handlers) do not support
    // HEAD. Fall back to a tiny ranged GET and infer type from response headers.
    if (!headRes.ok && headRes.status !== 405 && headRes.status !== 501) {
      return "";
    }
  } catch {
    // Fall through to GET fallback below.
  }

  try {
    const getRes = await fetch(src, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
      next: { revalidate: 60 },
      cache: "force-cache",
    });
    if (!getRes.ok && getRes.status !== 206) return "";
    const fromHeaders = inferMimeTypeFromHeaders(getRes.headers);
    if (fromHeaders && fromHeaders !== "application/octet-stream") {
      return fromHeaders;
    }

    const bytes = await getRes.arrayBuffer();
    const fromBytes = inferMimeTypeFromBytes(bytes);
    if (fromBytes) return fromBytes;

    return fromHeaders;
  } catch {
    return "";
  }
}

/**
 * Normalize gallery media to a deterministic rendering shape.
 *
 * Classification precedence:
 * 1) mediaKind field from CMS media object
 * 2) mimeType starts with video/
 * 3) media type equals HeroVideo/video
 * 4) filename or URL extension indicates video
 * 5) known video IDs fallback (optional)
 *
 * For stripped refs where signals are missing, a HEAD request is used once to
 * enrich mime type before defaulting conservatively to image.
 */
export async function normalizeCmsGalleryItems(
  gallery: NonNullable<CmsBikeDocument["gallery"]>,
  locale: Locale,
  options?: { knownVideoIds?: string[] },
): Promise<NormalizedCmsGalleryItem[]> {
  const knownVideoIds = new Set(options?.knownVideoIds ?? []);

  return Promise.all(
    gallery.map(async (item) => {
      const src = getPublicMediaUrl(item.url);
      const alt = resolveCmsString(item.alt, locale);

      const classified = classifyMediaKindSync(item.url, src, knownVideoIds);

      if (classified.mediaKind !== "unknown") {
        const needsVideoMimeEnrichment =
          classified.mediaKind === "video" && !classified.mimeType;
        const enrichedMimeType = needsVideoMimeEnrichment
          ? await enrichMimeTypeFromHead(src)
          : "";

        return {
          src,
          alt,
          order: item.order,
          mediaKind: classified.mediaKind,
          mimeType: classified.mimeType || enrichedMimeType || undefined,
        };
      }

      const enrichedMimeType = await enrichMimeTypeFromHead(src);
      const mediaKind: CmsMediaKind = enrichedMimeType.startsWith("video/")
        ? "video"
        : "image";

      return {
        src,
        alt,
        order: item.order,
        mediaKind,
        mimeType: enrichedMimeType || undefined,
      };
    }),
  );
}

// ─── Server-side fetch helpers ────────────────────────────────────────────────

function getServerBase(): string {
  const base = process.env.CMS_API_BASE_URL;
  if (!base) throw new Error("CMS_API_BASE_URL is not set");
  return base;
}

function extractCmsBikeDocs(data: unknown): CmsBikeDocument[] {
  if (!data || typeof data !== "object") return [];

  if (Array.isArray(data)) {
    return data as CmsBikeDocument[];
  }

  const obj = data as { docs?: unknown };
  if (Array.isArray(obj.docs)) {
    return obj.docs as CmsBikeDocument[];
  }

  if ("slug" in (data as Record<string, unknown>)) {
    return [data as CmsBikeDocument];
  }

  return [];
}

/**
 * Fetch a single published bicycle by its locale slug.
 * Returns null on 404, unreachable CMS, or any error.
 */
export async function fetchBikeBySlug(
  slug: string,
  locale: Locale,
): Promise<CmsBikeDocument | null> {
  try {
    const url =
      `${getServerBase()}/bicycles` +
      `?slug=${encodeURIComponent(slug)}&locale=${locale}&status=published`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data: unknown = await res.json();
    if (!data || typeof data !== "object" || "error" in data) return null;

    const docs = extractCmsBikeDocs(data);
    if (docs.length === 0) return null;

    const exactMatch = docs.find(
      (doc) => resolveCmsString(doc.slug, locale) === slug,
    );

    return exactMatch ?? null;
  } catch {
    return null;
  }
}

/**
 * Fetch all published bicycles sorted by the `order` field.
 * Returns [] on error or when the CMS is unreachable.
 */
export async function fetchAllBikes(
  locale: Locale,
): Promise<CmsBikeDocument[]> {
  try {
    const url =
      `${getServerBase()}/bicycles` +
      `?locale=${locale}&status=published&sort=order`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data: unknown = await res.json();
    return extractCmsBikeDocs(data);
  } catch {
    return [];
  }
}

/**
 * Fetch all published bike slugs across all locales for generateStaticParams.
 * Returns [] if the CMS is unreachable at build time.
 * Safe to call alongside `dynamicParams = true`.
 */
export async function getAllCmsBikeSlugsForStaticParams(): Promise<
  { lang: string; slug: string }[]
> {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of locales) {
    const bikes = await fetchAllBikes(locale);
    for (const bike of bikes) {
      const slug = resolveCmsString(bike.slug, locale);
      if (slug) params.push({ lang: locale, slug });
    }
  }
  return params;
}
