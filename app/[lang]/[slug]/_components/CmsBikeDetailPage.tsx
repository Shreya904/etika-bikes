import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import type { CmsBike } from "@/lib/cms/bikes";
import { BikeGallery, localized } from "./BikeGallery";
import { BikeSharedCta } from "./BikeSharedCta";
import { PrototypeStatusCard } from "./PrototypeStatusCard";

interface CmsBikeDetailPageProps {
  locale: Locale;
  bike: CmsBike;
}

export function CmsBikeDetailPage({ locale, bike }: CmsBikeDetailPageProps) {
  const isPrototype = bike.type === "prototype";
  const description = bike.description.map((paragraph) =>
    localized(locale, paragraph),
  );

  return (
    <div className="bg-gray-50">
      <section className="min-h-[80vh]">
        <div className="grid h-[80vh] lg:grid-cols-2">
          <div className="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-primary-900 via-primary-800 to-primary-700 px-8 py-20 lg:px-16 lg:py-32">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-600/20" />
              <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-primary-600/15" />
            </div>

            <div className="relative z-10 max-w-xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
                {localized(locale, bike.badge)}
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
                {localized(locale, bike.title)}
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-primary-100">
                {localized(locale, bike.subtitle)}
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="rounded-full border border-primary-500/30 bg-primary-700/50 px-4 py-2">
                  {bike.type === "prototype"
                    ? locale === "es"
                      ? "Experimental"
                      : locale === "ca"
                        ? "Experimental"
                        : "Experimental"
                    : locale === "es"
                      ? "Artesanal"
                      : locale === "ca"
                        ? "Artesanal"
                        : "Handcrafted"}
                </span>
                <span className="rounded-full border border-primary-500/30 bg-primary-700/50 px-4 py-2">
                  Bamboo
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-[80vh] overflow-hidden">
            <img
              src={bike.heroImage}
              alt={localized(locale, bike.heroImageAlt)}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-2xl font-bold leading-tight text-gray-900 lg:text-3xl">
                {localized(locale, bike.shortDescription)}
              </p>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

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

      <BikeGallery
        locale={locale}
        media={bike.media}
        variant={isPrototype ? "prototype" : "finished"}
      />

      {!isPrototype && bike.specs && bike.specs.length > 0 && (
        <section className="bg-white py-20 lg:py-32">
          <Container maxWidth="2xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {locale === "es"
                    ? "Componentes y Equipamiento"
                    : locale === "ca"
                      ? "Components i Equipament"
                      : "Components & Equipment"}
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    {bike.specs
                      .slice(0, Math.ceil(bike.specs.length / 2))
                      .map((spec, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-primary-500 pl-4"
                        >
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {localized(locale, spec.label)}
                          </h3>
                          <p className="text-gray-600">
                            {localized(locale, spec.value)}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="space-y-6">
                    {bike.specs
                      .slice(Math.ceil(bike.specs.length / 2))
                      .map((spec, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-primary-500 pl-4"
                        >
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {localized(locale, spec.label)}
                          </h3>
                          <p className="text-gray-600">
                            {localized(locale, spec.value)}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {isPrototype && <PrototypeStatusCard locale={locale} />}

      <BikeSharedCta locale={locale} />
    </div>
  );
}
