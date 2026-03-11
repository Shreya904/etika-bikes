import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { useTranslations } from "next-intl";

interface PushBikePageProps {
  locale: Locale;
}

export function PushBikePage({ locale }: PushBikePageProps) {
  const t = useTranslations("pushBike");
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
              <div className="absolute -right-24 bottom-1/3 h-96 w-96 rounded-full bg-primary-600/15" />
            </div>

            <div className="relative z-10 max-w-xl text-white">
              <div className="mb-4 flex items-center gap-3">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
                  {locale === "es" && "Para los más pequeños"}
                  {locale === "en" && "For the little ones"}
                  {locale === "ca" && "Per als més petits"}
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
                    ? "Natural"
                    : locale === "en"
                      ? "Natural"
                      : "Natural"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Equilibrio"
                    : locale === "en"
                      ? "Balance"
                      : "Equilibri"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Educativo"
                    : locale === "en"
                      ? "Educational"
                      : "Educatiu"}
                </span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] overflow-hidden">
            <img
              src="/assets/Push-bike/IMG_20251207_105148.jpg"
              alt="Bamboo Push Bike"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-bamboo-100 rounded-full mb-6">
                  <svg
                    className="w-5 h-5 text-bamboo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.25-.87C8.59 17.42 11.5 13 17 13V8zM3.82 21.34C5.9 16.17 8 10 17 8l-1-5C6 5 3.82 16.17 3.82 21.34zM21.05 10.55C20.1 9.6 18.85 9 17.5 9c-1.35 0-2.6.6-3.55 1.55C12.9 11.6 12.3 12.85 12.3 14.2c0 1.35.6 2.6 1.55 3.55.95.95 2.2 1.55 3.55 1.55 1.35 0 2.6-.6 3.55-1.55.95-.95 1.55-2.2 1.55-3.55 0-1.35-.6-2.6-1.55-3.55z" />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-wider text-bamboo-800">
                    {locale === "es"
                      ? "Aprendizaje Natural"
                      : locale === "en"
                        ? "Natural Learning"
                        : "Aprenentatge Natural"}
                  </span>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                  {t("description")}
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/assets/Push-bike/IMG_20251207_105214.jpg"
                  alt="Push Bike Side View"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Video & Image Section */}
      <section className="py-20 lg:py-32 bg-bamboo-50">
        <Container maxWidth="2xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video */}
            <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/assets/Push-bike/IMG_20251207_105148.jpg"
              >
                <source
                  src="/assets/Push-bike/handmade-bamboo-push-bike-made-in-barcelona.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Image */}
            <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/assets/Push-bike/IMG_20251207_105148.jpg"
                alt="Push Bike Front View"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container maxWidth="2xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-bamboo-50 via-white to-primary-50 rounded-3xl p-12 lg:p-16 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-bamboo-100 rounded-full mb-6">
                  <svg
                    className="w-16 h-16 text-bamboo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {locale === "es"
                    ? "Contenido en Desarrollo"
                    : locale === "en"
                      ? "Content in Development"
                      : "Contingut en Desenvolupament"}
                </h2>
                <div className="h-1 w-24 bg-bamboo-400 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  {t("comingSoon")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-bamboo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Más fotografías"
                      : locale === "en"
                        ? "More photos"
                        : "Més fotografies"}
                  </p>
                </div>
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-bamboo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Especificaciones"
                      : locale === "en"
                        ? "Specifications"
                        : "Especificacions"}
                  </p>
                </div>
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-bamboo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Opciones"
                      : locale === "en"
                        ? "Options"
                        : "Opcions"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary-600/20" />
          <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-primary-500/20" />
        </div>
        <Container maxWidth="2xl">
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
            <svg
              className="w-16 h-16 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              {locale === "es"
                ? "¿Interesado en esta bicicleta?"
                : locale === "en"
                  ? "Interested in this bike?"
                  : "Interessat en aquesta bicicleta?"}
            </h3>
            <p className="text-xl mb-8 leading-relaxed">
              {locale === "es"
                ? "Contáctanos para más información sobre nuestra bicicleta sin pedales de bambú"
                : locale === "en"
                  ? "Contact us for more information about our bamboo push bike"
                  : "Contacta'ns per a més informació sobre la nostra bicicleta d'equilibri de bambú"}
            </p>
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
