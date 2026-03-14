import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";

interface BikeCardProps {
  title: string;
  image: string;
  href: string;
  isUnderConstruction?: boolean;
  locale: Locale;
}

function BikeCard({
  title,
  image,
  href,
  isUnderConstruction,
  locale,
}: BikeCardProps) {
  if (isUnderConstruction) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-white">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-gray-900/40">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm">
            {locale === "es"
              ? "Próximamente"
              : locale === "en"
                ? "Coming Soon"
                : "Pròximament"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white drop-shadow-lg">{title}</h3>
        <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white/90 text-sm">
            {locale === "es"
              ? "Ver detalles"
              : locale === "en"
                ? "View details"
                : "Veure detalls"}
          </span>
          <svg
            className="w-4 h-4 text-white"
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

interface BicyclesPageProps {
  locale: Locale;
}

export function BicyclesPage({ locale }: BicyclesPageProps) {
  const translations = {
    es: {
      pageTitle: "Nuestras Bicicletas de Bambú",
      pageSubtitle:
        "Cada bicicleta es única, hecha a mano en Barcelona con bambú sostenible",
      ebikesSection: "EBIKES",
      classicSection: "CLASSIC",
      prototypesSection: "PROTOTYPES",
      customizableNote:
        "No trabajamos con stock. Cada bicicleta se fabrica a medida.",
      guaranteeNote: "7 años de garantía en el cuadro de bambú",
      ebikeMtb: "E-Bike Montaña",
      ebikeUrban: "E-Bike Urbana",
      ebikeGravel: "E-Bike Gravel",
      pushBike: "Bicicleta Sin Pedales",
      classicUrban: "Urbana Clásica",
      classicGravel: "Gravel Clásica",
      bmx: "BMX",
      tricycle: "Triciclo",
      cargoBike: "Cargo Bike",
    },
    en: {
      pageTitle: "Our Bamboo Bicycles",
      pageSubtitle:
        "Each bicycle is unique, handmade in Barcelona with sustainable bamboo",
      ebikesSection: "EBIKES",
      classicSection: "CLASSIC",
      prototypesSection: "PROTOTYPES",
      customizableNote: "We don't keep stock. Each bicycle is custom-made.",
      guaranteeNote: "7-year warranty on the bamboo frame",
      ebikeMtb: "Electric Mountain Bike",
      ebikeUrban: "Urban E-Bike",
      ebikeGravel: "E-Bike Gravel",
      pushBike: "Push Bike",
      classicUrban: "Classic Urban",
      classicGravel: "Classic Gravel",
      bmx: "BMX",
      tricycle: "Tricycle",
      cargoBike: "Cargo Bike",
    },
    ca: {
      pageTitle: "Les Nostres Bicicletes de Bambú",
      pageSubtitle:
        "Cada bicicleta és única, feta a mà a Barcelona amb bambú sostenible",
      ebikesSection: "EBIKES",
      classicSection: "CLASSIC",
      prototypesSection: "PROTOTYPES",
      customizableNote:
        "No treballem amb estoc. Cada bicicleta es fabrica a mida.",
      guaranteeNote: "7 anys de garantia al quadre de bambú",
      ebikeMtb: "E-Bike Muntanya",
      ebikeUrban: "E-Bike Urbana",
      ebikeGravel: "E-Bike Gravel",
      pushBike: "Bicicleta d'Equilibri",
      classicUrban: "Urbana Clàssica",
      classicGravel: "Gravel Clàssica",
      bmx: "BMX",
      tricycle: "Tricicle",
      cargoBike: "Cargo Bike",
    },
  };

  const t = translations[locale];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-[80vh]">
        <div className="grid lg:grid-cols-2 h-[80vh]">
          {/* Content Side */}
          <div className="relative overflow-hidden bg-primary-800 flex items-center justify-center py-20 lg:py-32 px-8 lg:px-16">
            {/* Decorative circles */}
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
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl mb-6">
                {t.pageTitle}
              </h1>
              <p className="text-xl text-white leading-relaxed">
                {t.pageSubtitle}
              </p>
              <div className="mt-10 flex items-center gap-3">
                <div className="h-px w-16 bg-primary-500" />
                <div className="h-2 w-2 rounded-full bg-primary-400" />
                <div className="h-px w-16 bg-primary-500" />
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] lg:h-auto">
            <img
              src="/assets/etikabikes.jpg"
              alt="Etika Bikes - Bamboo Bicycles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EBIKES Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container maxWidth="2xl">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-1 bg-primary-500 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-800">
                {t.ebikesSection}
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              {locale === "es" &&
                "Bicicletas eléctricas de bambú con tecnología avanzada para una movilidad urbana sostenible"}
              {locale === "en" &&
                "Electric bamboo bicycles with advanced technology for sustainable urban mobility"}
              {locale === "ca" &&
                "Bicicletes elèctriques de bambú amb tecnologia avançada per a una mobilitat urbana sostenible"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <BikeCard
              title={t.ebikeMtb}
              image="/assets/MTB/main.jpg"
              href={getFullPath("ebikeMtb", locale)}
              locale={locale}
            />
            <BikeCard
              title={t.ebikeUrban}
              image="/assets/E-bikeUrban/04092025-DSC02744.jpg"
              href={getFullPath("ebikeUrban", locale)}
              locale={locale}
            />
            <BikeCard
              title={t.ebikeGravel}
              image="/assets/bike-illustration.jpeg"
              href={getFullPath("ebikes", locale)}
              isUnderConstruction={true}
              locale={locale}
            />
          </div>
        </Container>
      </section>

      {/* CLASSIC Section */}
      <section className="py-20 lg:py-32 bg-secondary-50">
        <Container maxWidth="2xl">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-1 bg-secondary-500 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-800">
                {t.classicSection}
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              {locale === "es" &&
                "Bicicletas clásicas de bambú con diseño atemporal y construcción artesanal"}
              {locale === "en" &&
                "Classic bamboo bicycles with timeless design and artisan construction"}
              {locale === "ca" &&
                "Bicicletes clàssiques de bambú amb disseny atemporal i construcció artesanal"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <BikeCard
              title={t.pushBike}
              image="/assets/Push-bike/IMG_20251207_105148.jpg"
              href={getFullPath("pushBike", locale)}
              locale={locale}
            />
            <BikeCard
              title={t.classicUrban}
              image="/assets/bike-illustration.jpeg"
              href={getFullPath("classic", locale)}
              isUnderConstruction={true}
              locale={locale}
            />
            <BikeCard
              title={t.classicGravel}
              image="/assets/bike-illustration.jpeg"
              href={getFullPath("classic", locale)}
              isUnderConstruction={true}
              locale={locale}
            />
          </div>
        </Container>
      </section>

      {/* PROTOTYPES Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container maxWidth="2xl">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-1 bg-bamboo-500 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-bamboo-800">
                {t.prototypesSection}
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              {locale === "es" &&
                "Proyectos experimentales que exploran nuevas posibilidades del bambú en diferentes disciplinas"}
              {locale === "en" &&
                "Experimental projects exploring new possibilities of bamboo in different disciplines"}
              {locale === "ca" &&
                "Projectes experimentals que exploren noves possibilitats del bambú en diferents disciplines"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <BikeCard
              title={t.bmx}
              image="/assets/BMX/20240320_130249.jpg"
              href={getFullPath("bmx", locale)}
              locale={locale}
            />
            <BikeCard
              title={t.tricycle}
              image="/assets/tricycle.jpg"
              href={getFullPath("tricycle", locale)}
              locale={locale}
            />
            <BikeCard
              title={t.cargoBike}
              image="/assets/bike-illustration.jpeg"
              href={getFullPath("cargoBike", locale)}
              isUnderConstruction={true}
              locale={locale}
            />
          </div>
        </Container>
      </section>

      {/* Custom Note Section */}
      <section className="py-20 lg:py-28 bg-primary-50">
        <Container maxWidth="2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-800">
                  {locale === "es"
                    ? "Hecho a medida"
                    : locale === "en"
                      ? "Custom made"
                      : "Fet a mida"}
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                {locale === "es"
                  ? "Cada bicicleta es única"
                  : locale === "en"
                    ? "Each bicycle is unique"
                    : "Cada bicicleta és única"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Sin stock"
                        : locale === "en"
                          ? "No stock"
                          : "Sense estoc"}
                    </h3>
                    <p className="text-gray-600">{t.customizableNote}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Garantía"
                        : locale === "en"
                          ? "Warranty"
                          : "Garantia"}
                    </h3>
                    <p className="text-gray-600">{t.guaranteeNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
