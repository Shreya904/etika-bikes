/**
 * BicyclesPageCms — live-CMS-backed bicycle listing page.
 */
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";
import {
  type CmsBikeDocument,
  type CmsBikeCategory,
  getPublicMediaUrl,
  resolveCmsString,
} from "@/lib/cms/bikes-api";

interface BicyclesPageCmsProps {
  locale: Locale;
  bikes: CmsBikeDocument[];
}

// ─── Category labels ──────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<CmsBikeCategory, Record<Locale, string>> = {
  ebike: { es: "EBIKES", en: "EBIKES", ca: "EBIKES" },
  classic: { es: "CLÁSICAS", en: "CLASSIC", ca: "CLÀSSIQUES" },
  prototype: { es: "PROTOTIPOS", en: "PROTOTYPES", ca: "PROTOTIPS" },
};

const CATEGORY_STYLES: Record<
  CmsBikeCategory,
  { bg: string; accent: string; heading: string }
> = {
  ebike: {
    bg: "bg-white",
    accent: "bg-primary-500",
    heading: "text-primary-800",
  },
  classic: {
    bg: "bg-secondary-50",
    accent: "bg-secondary-500",
    heading: "text-secondary-800",
  },
  prototype: {
    bg: "bg-white",
    accent: "bg-bamboo-500",
    heading: "text-bamboo-800",
  },
};

const CATEGORY_SUBTITLES: Record<CmsBikeCategory, Record<Locale, string>> = {
  ebike: {
    es: "Bicicletas eléctricas de bambú con tecnología avanzada para una movilidad urbana sostenible",
    en: "Electric bamboo bicycles with advanced technology for sustainable urban mobility",
    ca: "Bicicletes elèctriques de bambú amb tecnologia avançada per a una mobilitat urbana sostenible",
  },
  classic: {
    es: "Bicicletas clásicas de bambú con diseño atemporal y construcción artesanal",
    en: "Classic bamboo bicycles with timeless design and artisan construction",
    ca: "Bicicletes clàssiques de bambú amb disseny atemporal i construcció artesanal",
  },
  prototype: {
    es: "Proyectos experimentales que exploran nuevas posibilidades del bambú en diferentes disciplinas",
    en: "Experimental projects exploring new possibilities of bamboo in different disciplines",
    ca: "Projectes experimentals que exploren noves possibilitats del bambú en diferents disciplines",
  },
};

function getSafeCategory(category: unknown): CmsBikeCategory {
  if (
    category === "ebike" ||
    category === "classic" ||
    category === "prototype"
  ) {
    return category;
  }
  return "classic";
}

// ─── Bike card ────────────────────────────────────────────────────────────────

function BikeCardCms({
  bike,
  locale,
}: {
  bike: CmsBikeDocument;
  locale: Locale;
}) {
  const safeCategory = getSafeCategory(bike.category);
  const imgSrc = getPublicMediaUrl(bike.heroImage?.url);
  const title = resolveCmsString(bike.title, locale);
  const modelName = resolveCmsString(bike.modelName, locale);
  const rawPriceAmount = bike.priceInfo?.amount;
  const priceAmount =
    typeof rawPriceAmount === "number" &&
    Number.isFinite(rawPriceAmount) &&
    rawPriceAmount > 0
      ? rawPriceAmount
      : null;
  const rawPriceLabel = resolveCmsString(bike.priceInfo?.label, locale).trim();
  const priceLabel =
    rawPriceLabel && rawPriceLabel.toLowerCase() !== "n/a"
      ? rawPriceLabel
      : locale === "es"
        ? "Desde"
        : locale === "ca"
          ? "Des de"
          : "From";
  const formattedPrice =
    priceAmount !== null
      ? new Intl.NumberFormat(locale === "ca" ? "es-ES" : locale, {
          style: "currency",
          currency: bike.priceInfo?.currency ?? "EUR",
          maximumFractionDigits: 0,
        }).format(priceAmount)
      : "";
  const heroAlt =
    resolveCmsString(bike.heroImage?.alt, locale) ||
    title ||
    "Etika Bikes bicycle";

  // Render under-construction bikes as simple cards (no link, only title, category, illustration)
  if (bike.status === "under-construction") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="aspect-4/3 overflow-hidden bg-gray-100">
          {/* Blurred overlay (less obvious) */}
          <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-black/20" />
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={heroAlt}
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src="/assets/bike-illustration.jpeg"
              alt="Under construction illustration"
              className="h-full w-full object-cover opacity-70"
            />
          )}
          {/* Under Construction tag (primary green) */}
          <div className="absolute right-4 top-4 z-20">
            <span className="rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
              {locale === "es"
                ? "En construcción"
                : locale === "ca"
                  ? "En construcció"
                  : "Under Construction"}
            </span>
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute left-4 top-4 z-20">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-800 shadow-sm backdrop-blur-sm">
            {CATEGORY_LABELS[safeCategory][locale]}
          </span>
        </div>
        {/* Title only */}
        <div className="absolute inset-x-0 bottom-0 p-6 z-20">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  // Published bikes retain current behavior
  const href = `/${locale}/${resolveCmsString(bike.slug, locale)}`;
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="aspect-4/3 overflow-hidden bg-gray-100">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={heroAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            <svg
              className="h-16 w-16 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Category badge */}
      <div className="absolute left-4 top-4">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-800 shadow-sm backdrop-blur-sm">
          {CATEGORY_LABELS[safeCategory][locale]}
        </span>
      </div>

      {formattedPrice && (
        <div className="absolute bottom-5 right-5 z-20 overflow-hidden rounded-xl border border-bamboo-200/70 bg-white/92 text-primary-900 shadow-lg backdrop-blur-sm">
          <div className="h-px w-full bg-linear-to-r from-transparent via-bamboo-300/80 to-transparent" />
          <div className="flex items-center gap-2 px-3 py-2.5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-bamboo-100 text-bamboo-700">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M7 14c2.5 0 4.5-2 4.5-4.5V8m0 1.5c0 2.5 2 4.5 4.5 4.5M12 8V5m0 14v-5"
                />
              </svg>
            </span>
            <div className="text-right leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">
                {priceLabel}
              </p>
              <p className="text-sm font-bold text-primary-900">
                {formattedPrice}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hover label */}
      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-300 group-hover:translate-y-0">
        <h3 className="text-xl font-bold text-white drop-shadow-lg">{title}</h3>
        {modelName && <p className="mt-1 text-sm text-white/80">{modelName}</p>}
        <div className="mt-2 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-sm text-white/90">
            {locale === "es"
              ? "Ver detalles"
              : locale === "ca"
                ? "Veure detalls"
                : "View details"}
          </span>
          <svg
            className="h-4 w-4 text-white"
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
      </div>
    </Link>
  );
}

// ─── No-bikes empty state ─────────────────────────────────────────────────────

function NoBikesState({ locale }: { locale: Locale }) {
  const text = {
    es: {
      eyebrow: "En preparación",
      heading: "Estamos cargando nuestras bicicletas",
      body: "Pronto encontrarás aquí nuestras creaciones de bambú. Mientras tanto, puedes explorar el resto del sitio o ponerte en contacto con nosotros.",
      cta: "Contáctanos",
    },
    en: {
      eyebrow: "Coming soon",
      heading: "We're loading our bicycles",
      body: "Our bamboo creations will appear here soon. In the meantime, feel free to explore the rest of the site or get in touch.",
      cta: "Contact us",
    },
    ca: {
      eyebrow: "En preparació",
      heading: "Estem carregant les nostres bicicletes",
      body: "Ben aviat trobaràs aquí les nostres creacions de bambú. Mentrestant, explora la resta del lloc o posa't en contacte amb nosaltres.",
      cta: "Contacta'ns",
    },
  }[locale];

  return (
    <section className="bg-bamboo-50/40 py-32">
      <Container maxWidth="md">
        <div className="mx-auto max-w-lg text-center">
          <span className="inline-block rounded-full border border-bamboo-300 bg-bamboo-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-bamboo-700">
            {text.eyebrow}
          </span>

          {/* Bamboo bicycle illustration */}
          <div className="mx-auto mt-10 w-full max-w-xs">
            <svg
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              aria-hidden="true"
            >
              {/* Ground */}
              <line
                x1="20"
                y1="195"
                x2="300"
                y2="195"
                stroke="#d4c5a9"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Rear wheel */}
              <circle
                cx="95"
                cy="168"
                r="40"
                stroke="#153d24"
                strokeWidth="5"
              />
              <circle cx="95" cy="168" r="8" fill="#153d24" />
              {/* Front wheel */}
              <circle
                cx="225"
                cy="168"
                r="40"
                stroke="#153d24"
                strokeWidth="5"
              />
              <circle cx="225" cy="168" r="8" fill="#153d24" />
              {/* Frame bamboo tubes */}
              <line
                x1="135"
                y1="158"
                x2="195"
                y2="103"
                stroke="#6b8c42"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <line
                x1="135"
                y1="158"
                x2="148"
                y2="98"
                stroke="#7a9e4e"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <line
                x1="150"
                y1="98"
                x2="195"
                y2="103"
                stroke="#6b8c42"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line
                x1="135"
                y1="158"
                x2="95"
                y2="166"
                stroke="#7a9e4e"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line
                x1="148"
                y1="98"
                x2="95"
                y2="166"
                stroke="#6b8c42"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <line
                x1="195"
                y1="103"
                x2="225"
                y2="166"
                stroke="#7a9e4e"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Handlebar */}
              <line
                x1="197"
                y1="103"
                x2="197"
                y2="83"
                stroke="#153d24"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1="180"
                y1="83"
                x2="214"
                y2="83"
                stroke="#153d24"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Saddle */}
              <line
                x1="148"
                y1="98"
                x2="148"
                y2="78"
                stroke="#153d24"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M136 78 Q148 72 160 78"
                stroke="#153d24"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Bamboo nodes */}
              <ellipse
                cx="162"
                cy="130"
                rx="6"
                ry="3"
                stroke="#5a7a36"
                strokeWidth="2"
              />
              <ellipse
                cx="178"
                cy="115"
                rx="6"
                ry="3"
                stroke="#5a7a36"
                strokeWidth="2"
              />
              <ellipse
                cx="141"
                cy="127"
                rx="5"
                ry="2.5"
                stroke="#5a7a36"
                strokeWidth="2"
              />
              {/* Spokes rear */}
              <line
                x1="95"
                y1="128"
                x2="95"
                y2="208"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <line
                x1="55"
                y1="168"
                x2="135"
                y2="168"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <line
                x1="67"
                y1="140"
                x2="123"
                y2="196"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <line
                x1="67"
                y1="196"
                x2="123"
                y2="140"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              {/* Spokes front */}
              <line
                x1="225"
                y1="128"
                x2="225"
                y2="208"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <line
                x1="185"
                y1="168"
                x2="265"
                y2="168"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <line
                x1="197"
                y1="140"
                x2="253"
                y2="196"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <line
                x1="197"
                y1="196"
                x2="253"
                y2="140"
                stroke="#153d24"
                strokeWidth="1.5"
                opacity="0.3"
              />
              {/* Bamboo leaf decorations */}
              <path
                d="M55 38 Q70 18 85 33 Q75 53 55 38Z"
                fill="#6b8c42"
                opacity="0.6"
              />
              <path
                d="M50 43 Q35 23 65 28 Q60 48 50 43Z"
                fill="#7a9e4e"
                opacity="0.5"
              />
              <path
                d="M248 33 Q263 13 278 28 Q268 48 248 33Z"
                fill="#6b8c42"
                opacity="0.6"
              />
              <path
                d="M243 38 Q228 18 258 23 Q253 43 243 38Z"
                fill="#7a9e4e"
                opacity="0.5"
              />
            </svg>
          </div>

          <h2 className="mt-8 text-2xl font-bold text-primary-900">
            {text.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            {text.body}
          </p>
          <Link
            href={getFullPath("contact", locale)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800"
          >
            {text.cta}
            <svg
              className="h-4 w-4"
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
          </Link>
        </div>
      </Container>
    </section>
  );
}

// ─── Category section ─────────────────────────────────────────────────────────

function CategorySection({
  category,
  bikes,
  locale,
}: {
  category: CmsBikeCategory;
  bikes: CmsBikeDocument[];
  locale: Locale;
}) {
  if (bikes.length === 0) return null;

  const { bg, accent, heading } = CATEGORY_STYLES[category];

  // Split bikes by status
  const publishedBikes = bikes.filter((b) => b.status === "published");
  const underConstructionBikes = bikes.filter(
    (b) => b.status === "under-construction",
  );

  return (
    <section className={`py-20 lg:py-32 ${bg}`}>
      <Container maxWidth="2xl">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-12 w-1 ${accent} rounded-full`} />
            <h2 className={`text-4xl lg:text-5xl font-bold ${heading}`}>
              {CATEGORY_LABELS[category][locale]}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            {CATEGORY_SUBTITLES[category][locale]}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Published bikes (with link) */}
          {publishedBikes.map((bike) => (
            <BikeCardCms key={bike.id} bike={bike} locale={locale} />
          ))}
          {/* Under-construction bikes (no link) */}
          {underConstructionBikes.map((bike) => (
            <BikeCardCms key={bike.id} bike={bike} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function BicyclesPageCms({ locale, bikes }: BicyclesPageCmsProps) {
  const t = {
    es: {
      pageTitle: "Nuestras Bicicletas de Bambú",
      pageSubtitle:
        "Cada bicicleta es única, hecha a mano en Barcelona con bambú sostenible",
      noContent: "Estamos añadiendo nuestras bicicletas. ¡Vuelve pronto!",
    },
    en: {
      pageTitle: "Our Bamboo Bicycles",
      pageSubtitle:
        "Each bicycle is unique, handmade in Barcelona with sustainable bamboo",
      noContent: "We're adding our bicycles. Check back soon!",
    },
    ca: {
      pageTitle: "Les Nostres Bicicletes de Bambú",
      pageSubtitle:
        "Cada bicicleta és única, feta a mà a Barcelona amb bambú sostenible",
      noContent: "Estem afegint les nostres bicicletes. Torna aviat!",
    },
  }[locale];

  // All bikes for each category (published and under-construction)
  const ebikeList = bikes.filter(
    (b) => getSafeCategory(b.category) === "ebike",
  );
  const classicList = bikes.filter(
    (b) => getSafeCategory(b.category) === "classic",
  );
  const prototypeList = bikes.filter(
    (b) => getSafeCategory(b.category) === "prototype",
  );

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[80vh]">
          {/* Content */}
          <div className="relative flex items-center justify-center overflow-hidden bg-primary-800 px-8 py-20 lg:px-16 lg:py-32">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full border-2 border-white/5" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/5" />
              <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary-700/40" />
            </div>

            <div className="relative z-10 max-w-xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
                {locale === "es" && "Nuestras creaciones"}
                {locale === "en" && "Our creations"}
                {locale === "ca" && "Les nostres creacions"}
              </p>
              <h1 className="mb-6 text-4xl font-bold lg:text-5xl xl:text-6xl">
                {t.pageTitle}
              </h1>
              <p className="text-xl leading-relaxed text-white">
                {t.pageSubtitle}
              </p>
              <div className="mt-10 flex items-center gap-3">
                <div className="h-px w-16 bg-primary-500" />
                <div className="h-2 w-2 rounded-full bg-primary-400" />
                <div className="h-px w-16 bg-primary-500" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-[80vh]">
            <img
              src="/assets/etikabikes.jpg"
              alt="Etika Bikes - Bamboo Bicycles"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bike listings grouped by category */}
      {bikes.length === 0 ? (
        <NoBikesState locale={locale} />
      ) : (
        <>
          <CategorySection category="ebike" bikes={ebikeList} locale={locale} />
          <CategorySection
            category="classic"
            bikes={classicList}
            locale={locale}
          />
          <CategorySection
            category="prototype"
            bikes={prototypeList}
            locale={locale}
          />
        </>
      )}

      {/* CTA — always shown */}
      <section className="relative overflow-hidden border-b border-bamboo-200/70 bg-primary-800 py-20 shadow-[inset_0_-1px_0_rgba(222,205,163,0.45)] lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full border-2 border-white/5" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/5" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary-700/40" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-bamboo-100/90 to-transparent" />
        </div>
        <Container maxWidth="2xl">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
              {locale === "es"
                ? "Hecho para ti"
                : locale === "ca"
                  ? "Fet per a tu"
                  : "Made for you"}
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              {locale === "es"
                ? "¿No encuentras lo que buscas?"
                : locale === "ca"
                  ? "No trobes el que busques?"
                  : "Can't find what you're looking for?"}
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/75">
              {locale === "es"
                ? "Todas nuestras bicicletas se fabrican a medida. Cuéntanos tu proyecto y lo hacemos realidad."
                : locale === "ca"
                  ? "Totes les nostres bicicletes es fabriquen a mida. Explica'ns el teu projecte i ho fem realitat."
                  : "All our bicycles are custom-made. Tell us about your project and we'll make it happen."}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={getFullPath("customBikes", locale)}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-800 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
              >
                {locale === "es"
                  ? "Bicicletas a medida"
                  : locale === "ca"
                    ? "Bicicletes a mida"
                    : "Custom bicycles"}
              </Link>
              <Link
                href={getFullPath("contact", locale)}
                className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                {locale === "es"
                  ? "Contáctanos"
                  : locale === "ca"
                    ? "Contacta'ns"
                    : "Contact us"}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
