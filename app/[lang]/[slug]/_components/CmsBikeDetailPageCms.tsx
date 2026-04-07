/**
 * CmsBikeDetailPageCms — live-CMS-backed bicycle detail page.
 *
 * Renders a CmsBikeDocument (the projected API shape from GET /api/bicycles).
 * This is the official replacement for CmsBikeDetailPage once the demo phase is over.
 * Data is fetched by the parent page.tsx and passed in as props.
 */
import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { getLocalizedPath } from "@/lib/routes";
import {
  type CmsBikeDocument,
  type NormalizedCmsGalleryItem,
  extractRichTextParagraphs,
  getPublicMediaUrl,
  normalizeCmsGalleryItems,
  resolveCmsString,
} from "@/lib/cms/bikes-api";
import { BikeSharedCta } from "./BikeSharedCta";
import { HeroImageLightbox } from "./HeroImageLightbox";
import { PrototypeStatusCard } from "./PrototypeStatusCard";

interface CmsBikeDetailPageCmsProps {
  locale: Locale;
  bike: CmsBikeDocument;
}

const CATEGORY_BADGE: Record<
  CmsBikeDocument["category"],
  Record<Locale, string>
> = {
  ebike: { es: "E-Bike", en: "E-Bike", ca: "E-Bike" },
  classic: { es: "Clásica", en: "Classic", ca: "Clàssica" },
  prototype: { es: "Prototipo", en: "Prototype", ca: "Prototip" },
};

function getSafeCategory(category: unknown): CmsBikeDocument["category"] {
  if (
    category === "ebike" ||
    category === "classic" ||
    category === "prototype"
  ) {
    return category;
  }
  return "classic";
}

export async function CmsBikeDetailPageCms({
  locale,
  bike,
}: CmsBikeDetailPageCmsProps) {
  const safeCategory = getSafeCategory(bike.category);
  const isPrototype = safeCategory === "prototype";

  // Resolve all potentially-localized string fields
  const title = resolveCmsString(bike.title, locale);
  const modelName = resolveCmsString(bike.modelName, locale);
  const heroAlt =
    resolveCmsString(bike.heroImage?.alt, locale) ||
    title ||
    "Etika Bikes bicycle";
  const rawPriceAmount = bike.priceInfo?.amount;
  const heroPriceAmount =
    typeof rawPriceAmount === "number" &&
    Number.isFinite(rawPriceAmount) &&
    rawPriceAmount > 0
      ? rawPriceAmount
      : null;
  const priceLabel = resolveCmsString(bike.priceInfo?.label, locale);
  const heroPriceLabel =
    priceLabel.trim() !== "" && priceLabel.trim().toLowerCase() !== "n/a"
      ? priceLabel
      : locale === "es"
        ? "Desde"
        : locale === "ca"
          ? "Des de"
          : "From";
  const heroFormattedPrice =
    heroPriceAmount !== null
      ? new Intl.NumberFormat(locale === "ca" ? "es-ES" : locale, {
          style: "currency",
          currency: bike.priceInfo?.currency ?? "EUR",
          maximumFractionDigits: 0,
        }).format(heroPriceAmount)
      : "";

  // Project rich text to paragraphs (handles localized LexicalDoc objects)
  const allParagraphs = extractRichTextParagraphs(bike.description, locale);
  // First paragraph used as the "lead" in the description section
  const leadParagraph = allParagraphs[0] ?? "";
  const bodyParagraphs = allParagraphs.slice(1);

  const heroSrc = getPublicMediaUrl(bike.heroImage?.url);
  const normalizedGallery = bike.gallery
    ? await normalizeCmsGalleryItems(bike.gallery, locale)
    : [];

  return (
    <div className="bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="min-h-[80vh]">
        <div className="grid h-[80vh] lg:grid-cols-2">
          {/* Text panel */}
          <div className="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-primary-900 via-primary-800 to-primary-700 px-8 py-20 lg:px-16 lg:py-32">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-600/20" />
              <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-primary-600/15" />
            </div>

            <div className="relative z-10 max-w-xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
                {CATEGORY_BADGE[safeCategory][locale]}
              </p>
              <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
                {title}
              </h1>
              {modelName && (
                <p className="mb-6 text-xl leading-relaxed text-primary-100">
                  {modelName}
                </p>
              )}
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                {bike.isAvailable === false && (
                  <span className="rounded-full border border-amber-500/40 bg-amber-600/30 px-4 py-2 text-amber-200">
                    {locale === "es"
                      ? "Próximamente"
                      : locale === "ca"
                        ? "Pròximament"
                        : "Coming soon"}
                  </span>
                )}
              </div>

              {heroFormattedPrice && (
                <div className="mt-6 inline-flex flex-col gap-4 rounded-xl border border-bamboo-200/70 bg-white/92 px-4 py-4 text-primary-900 shadow-lg backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bamboo-100 text-bamboo-700 shadow-sm">
                      <svg
                        className="h-4.5 w-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M5 7.5A2.5 2.5 0 017.5 5h9A2.5 2.5 0 0119 7.5V12l-4 4H7.5A2.5 2.5 0 015 13.5v-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M14.5 5L19 9.5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 9h4"
                        />
                      </svg>
                    </span>
                    <div className="leading-tight">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-600">
                        {heroPriceLabel}
                      </p>
                      <p className="text-lg font-bold text-primary-900">
                        {heroFormattedPrice}
                      </p>
                    </div>
                  </div>

                  <a
                    href={getLocalizedPath("contact", locale)}
                    className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-500"
                  >
                    {locale === "es"
                      ? "Contactar"
                      : locale === "ca"
                        ? "Contactar"
                        : "Contact us"}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-[80vh] overflow-hidden">
            <HeroImageLightbox src={heroSrc} alt={heroAlt} locale={locale} />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Description ──────────────────────────────────────────────────── */}
      {allParagraphs.length > 0 && (
        <section className="bg-white py-20 lg:py-24">
          <Container maxWidth="2xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                {leadParagraph && (
                  <p className="text-2xl font-bold leading-tight text-gray-900 lg:text-3xl">
                    {leadParagraph}
                  </p>
                )}
                {bodyParagraphs.length > 0 && (
                  <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
                    {bodyParagraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Hardcoded image preview */}
              <div className="aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/assets/etikabikes.jpg"
                  alt="Etika Bikes"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      {normalizedGallery.length > 0 && (
        <GallerySection
          gallery={normalizedGallery}
          isPrototype={isPrototype}
          locale={locale}
        />
      )}

      {/* ── Specifications ────────────────────────────────────────────────── */}
      {!isPrototype &&
        bike.specifications &&
        bike.specifications.length > 0 && (
          <SpecificationsSection specs={bike.specifications} locale={locale} />
        )}

      {/* Prototype card + shared CTA */}
      {isPrototype && <PrototypeStatusCard locale={locale} />}
      <BikeSharedCta locale={locale} />
    </div>
  );
}

// ─── Gallery section ──────────────────────────────────────────────────────────

function GallerySection({
  gallery,
  isPrototype,
  locale,
}: {
  gallery: NormalizedCmsGalleryItem[];
  isPrototype: boolean;
  locale: Locale;
}) {
  const items = [...gallery]
    .sort(
      (left, right) =>
        (left.order ?? Number.MAX_SAFE_INTEGER) -
        (right.order ?? Number.MAX_SAFE_INTEGER),
    )
    .slice(0, 5);
  const bg = isPrototype ? "bg-gray-100" : "bg-secondary-50";

  const title = isPrototype
    ? locale === "es"
      ? "Registro del prototipo"
      : locale === "ca"
        ? "Registre del prototip"
        : "Prototype log"
    : locale === "es"
      ? "Diseñada para cada detalle"
      : locale === "ca"
        ? "Dissenyada per a cada detall"
        : "Designed for every detail";

  const subtitle = isPrototype
    ? locale === "es"
      ? "Un proceso en evolución, documentado en cada etapa"
      : locale === "ca"
        ? "Un procés en evolució, documentat en cada etapa"
        : "An evolving build documented at every stage"
    : locale === "es"
      ? "Cada ángulo cuenta la historia del trabajo artesanal"
      : locale === "ca"
        ? "Cada angle explica la història del treball artesanal"
        : "Every angle tells the story of the craft";

  function renderGalleryMedia(
    item: NormalizedCmsGalleryItem,
    className: string,
  ) {
    const src = item.src;
    const alt = item.alt;

    if (!src) {
      return <div className={`${className} bg-gray-100`} />;
    }

    if (item.mediaKind === "video") {
      return (
        <video className={className} controls playsInline preload="metadata">
          <source src={src} />
          {alt ? <track kind="captions" label={alt} /> : null}
          Your browser does not support the video tag.
        </video>
      );
    }

    return <img src={src} alt={alt} className={className} />;
  }

  if (items.length === 1) {
    const item = items[0];
    return (
      <section className={`${bg} py-20 lg:py-24`}>
        <Container maxWidth="2xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-gray-500">{subtitle}</p>
          </div>
          <div className="mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl shadow-xl">
            {renderGalleryMedia(item, "h-full w-full object-cover")}
          </div>
        </Container>
      </section>
    );
  }

  if (items.length <= 3) {
    return (
      <section className={`${bg} py-20 lg:py-24`}>
        <Container maxWidth="2xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-gray-500">{subtitle}</p>
          </div>
          <div
            className={
              items.length === 2
                ? "grid grid-cols-2 gap-8"
                : "grid grid-cols-1 gap-6 md:grid-cols-3"
            }
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`${items.length <= 2 ? "aspect-video" : "aspect-4/3"} overflow-hidden rounded-2xl shadow-lg`}
              >
                {renderGalleryMedia(
                  item,
                  "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const [featured, ...rest] = items;
  const lastIsOdd = rest.length % 2 !== 0;

  return (
    <section className={`${bg} py-20 lg:py-24`}>
      <Container maxWidth="2xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-gray-500">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex justify-center lg:col-span-1">
            <div className="w-full max-w-sm aspect-9/16 overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
              {renderGalleryMedia(featured, "h-full w-full object-cover")}
            </div>
          </div>

          <div className="grid content-start grid-cols-2 gap-6 lg:col-span-2">
            {rest.map((item, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-lg${lastIsOdd && i === rest.length - 1 ? " col-span-2 aspect-8/3" : " aspect-4/3"}`}
              >
                {renderGalleryMedia(
                  item,
                  "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Specifications section ───────────────────────────────────────────────────

function SpecificationsSection({
  specs,
  locale,
}: {
  specs: NonNullable<CmsBikeDocument["specifications"]>;
  locale: Locale;
}) {
  const mid = Math.ceil(specs.length / 2);
  const left = specs.slice(0, mid);
  const right = specs.slice(mid);

  return (
    <section className="bg-white py-20 lg:py-32">
      <Container maxWidth="2xl">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-800">
                {locale === "es"
                  ? "Especificaciones"
                  : locale === "ca"
                    ? "Especificacions"
                    : "Specifications"}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              {locale === "es"
                ? "Componentes y Equipamiento"
                : locale === "ca"
                  ? "Components i Equipament"
                  : "Components & Equipment"}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                {left.map((spec, i) => (
                  <div key={i} className="border-l-4 border-primary-500 pl-4">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {resolveCmsString(spec.key, locale)}
                    </h3>
                    <p className="text-gray-600">
                      {resolveCmsString(spec.value, locale)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {right.map((spec, i) => (
                  <div key={i} className="border-l-4 border-primary-500 pl-4">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {resolveCmsString(spec.key, locale)}
                    </h3>
                    <p className="text-gray-600">
                      {resolveCmsString(spec.value, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
