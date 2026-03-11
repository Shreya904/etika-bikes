import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { useTranslations } from "next-intl";

interface TricyclePageProps {
  locale: Locale;
}

export function TricyclePage({ locale }: TricyclePageProps) {
  const t = useTranslations("tricycle");
  const common = useTranslations("common");

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Split Design */}
      <section className="min-h-[80vh]">
        <div className="grid lg:grid-cols-2 h-[80vh]">
          {/* Content Side */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 flex items-center justify-center py-20 lg:py-32 px-8 lg:px-16">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-primary-600/20" />
              <div className="absolute -right-24 bottom-1/3 h-96 w-96 rounded-full bg-bamboo-600/15" />
            </div>

            <div className="relative z-10 max-w-xl text-white">
              <div className="mb-4 flex items-center gap-3">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 16.94V13H5.08C5.45 16.41 7.61 19.62 11 18.94zM13 18.94c3.39.68 5.55-2.53 5.92-5.94H13v5.94z" />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
                  {locale === "es" && "Prototipo"}
                  {locale === "en" && "Prototype"}
                  {locale === "ca" && "Prototip"}
                </p>
              </div>
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl mb-6 leading-tight">
                {t("title")}
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                {t("subtitle")}
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Estabilidad"
                    : locale === "en"
                      ? "Stability"
                      : "Estabilitat"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Carga"
                    : locale === "en"
                      ? "Cargo"
                      : "Càrrega"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Sostenible"
                    : locale === "en"
                      ? "Sustainable"
                      : "Sostenible"}
                </span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] overflow-hidden">
            <img
              src="/assets/Tricycle/IMG_20231221_102722.jpg"
              alt="Bamboo Tricycle"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container maxWidth="2xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary-800">
                    {locale === "es"
                      ? "Movilidad Estable"
                      : locale === "en"
                        ? "Stable Mobility"
                        : "Mobilitat Estable"}
                  </span>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                  {t("description")}
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/assets/E-bike_tricycle.jpg"
                  alt="E-bike Tricycle"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section with Video */}
      <section className="py-20 lg:py-32 bg-primary-50">
        <Container maxWidth="2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {locale === "es"
                ? "Diseñado para la Estabilidad"
                : locale === "en"
                  ? "Designed for Stability"
                  : "Dissenyat per a l'Estabilitat"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === "es"
                ? "Tres ruedas de confianza para tus cargas urbanas"
                : locale === "en"
                  ? "Three wheels of confidence for your urban cargo"
                  : "Tres rodes de confiança per a les teves càrregues urbanes"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-full max-w-sm">
                <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster="/assets/Tricycle/IMG_20231221_102722.jpg"
                  >
                    <source
                      src="/assets/Tricycle/tricycle video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/Tricycle/IMG_20231221_102722.jpg"
                  alt="Bamboo Tricycle Front View"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/Tricycle/IMG_20231221_103541.jpg"
                  alt="Bamboo Tricycle Detail"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/tricycle.jpg"
                  alt="Bamboo Tricycle Side View"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/E-bike_tricycle.jpg"
                  alt="E-bike Tricycle Detail"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Prototype Note */}
      <section className="py-20 lg:py-32 bg-white">
        <Container maxWidth="2xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 via-white to-bamboo-50 rounded-3xl p-12 lg:p-16 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-100 to-bamboo-100 rounded-full mb-6">
                  <svg
                    className="w-16 h-16 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    <circle cx="12" cy="8" r="1.5" />
                    <path d="M12 11c-2 0-6 1-6 3v1h12v-1c0-2-4-3-6-3zm-3 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm4.5 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z" />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {locale === "es"
                    ? "Prototipo en Desarrollo"
                    : locale === "en"
                      ? "Prototype in Development"
                      : "Prototip en Desenvolupament"}
                </h2>
                <div className="h-1 w-24 bg-primary-400 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed text-center mb-6">
                  {locale === "es"
                    ? "Este triciclo de bambú representa nuestra exploración de la movilidad sostenible con mayor estabilidad y capacidad de carga. Perfecto para transporte urbano, entrega local o simplemente para aquellos que prefieren la estabilidad de tres ruedas."
                    : locale === "en"
                      ? "This bamboo tricycle represents our exploration of sustainable mobility with greater stability and load capacity. Perfect for urban transport, local delivery, or simply for those who prefer the stability of three wheels."
                      : "Aquest tricicle de bambú representa la nostra exploració de la mobilitat sostenible amb major estabilitat i capacitat de càrrega. Perfecte per a transport urbà, lliurament local o simplement per a aquells que prefereixen l'estabilitat de tres rodes."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  {t("comingSoon")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Carga pesada"
                      : locale === "en"
                        ? "Heavy load"
                        : "Càrrega pesada"}
                  </p>
                </div>
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Más estabilidad"
                      : locale === "en"
                        ? "More stability"
                        : "Més estabilitat"}
                  </p>
                </div>
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Uso urbano"
                      : locale === "en"
                        ? "Urban use"
                        : "Ús urbà"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 overflow-hidden">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-500/20" />
          <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-primary-400/15" />
        </div>

        <Container maxWidth="2xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {common("contactCTA")}
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              {common("contactDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                </svg>
                {locale === "es"
                  ? "Prototipo"
                  : locale === "en"
                    ? "Prototype"
                    : "Prototip"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
                {locale === "es"
                  ? "Carga"
                  : locale === "en"
                    ? "Cargo"
                    : "Càrrega"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.25-.87C8.59 17.42 11.5 13 17 13V8zM3.82 21.34C5.9 16.17 8 10 17 8l-1-5C6 5 3.82 16.17 3.82 21.34zM21.05 10.55C20.1 9.6 18.85 9 17.5 9c-1.35 0-2.6.6-3.55 1.55C12.9 11.6 12.3 12.85 12.3 14.2c0 1.35.6 2.6 1.55 3.55.95.95 2.2 1.55 3.55 1.55 1.35 0 2.6-.6 3.55-1.55.95-.95 1.55-2.2 1.55-3.55 0-1.35-.6-2.6-1.55-3.55z" />
                </svg>
                {locale === "es"
                  ? "Sostenible"
                  : locale === "en"
                    ? "Sustainable"
                    : "Sostenible"}
              </span>
            </div>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {common("contactButton")}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
