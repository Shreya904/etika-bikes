import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { useTranslations } from "next-intl";

interface BmxPageProps {
  locale: Locale;
}

export function BmxPage({ locale }: BmxPageProps) {
  const t = useTranslations("bmx");
  const common = useTranslations("common");

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Split Design */}
      <section className="min-h-[80vh]">
        <div className="grid lg:grid-cols-2 h-[80vh]">
          {/* Content Side */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 flex items-center justify-center py-20 lg:py-32 px-8 lg:px-16">
            {/* Decorative elements for extreme sports theme */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-600/10" />
              <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-bamboo-600/10" />
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
                    ? "Bambú"
                    : locale === "en"
                      ? "Bamboo"
                      : "Bambú"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Experimental"
                    : locale === "en"
                      ? "Experimental"
                      : "Experimental"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es" ? "BMX" : locale === "en" ? "BMX" : "BMX"}
                </span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] lg:h-auto">
            <img
              src="/assets/BMX/20240320_130249.jpg"
              alt="Bamboo BMX"
              className="w-full h-full object-cover"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    <circle cx="12" cy="8" r="1.5" />
                    <path d="M12 11c-2 0-6 1-6 3v1h12v-1c0-2-4-3-6-3zm-3 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm4.5 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z" />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-wider text-gray-800">
                    {locale === "es"
                      ? "Innovación"
                      : locale === "en"
                        ? "Innovation"
                        : "Innovació"}
                  </span>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                  {t("description")}
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/assets/BMX/closeup.jpg"
                  alt="BMX Closeup"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Gallery */}
      <section className="py-20 lg:py-32 bg-gray-100">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/assets/BMX/20240320_130249.jpg"
                alt="BMX Front View"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/assets/BMX/closeup.jpg"
                alt="BMX Closeup"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/assets/BMX/closeup2.jpg"
                alt="BMX Detail"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Prototype Note */}
      <section className="py-20 lg:py-32 bg-white">
        <Container maxWidth="2xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 via-white to-bamboo-50 rounded-3xl p-12 lg:p-16 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-bamboo-100 rounded-full mb-6">
                  <svg
                    className="w-16 h-16 text-gray-600"
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
                    ? "Prototipo Experimental"
                    : locale === "en"
                      ? "Experimental Prototype"
                      : "Prototip Experimental"}
                </h2>
                <div className="h-1 w-24 bg-gray-400 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed text-center mb-6">
                  {locale === "es"
                    ? "Este BMX de bambú es parte de nuestra línea de prototipos experimentales, donde exploramos nuevas posibilidades para el material bambú en diferentes disciplinas del ciclismo. Cada prototipo nos ayuda a perfeccionar nuestras técnicas y a expandir los límites de lo posible con materiales naturales."
                    : locale === "en"
                      ? "This bamboo BMX is part of our experimental prototype line, where we explore new possibilities for bamboo material in different cycling disciplines. Each prototype helps us refine our techniques and expand the boundaries of what's possible with natural materials."
                      : "Aquest BMX de bambú és part de la nostra línia de prototips experimentals, on explorem noves possibilitats per al material bambú en diferents disciplines del ciclisme. Cada prototip ens ajuda a perfeccionar les nostres tècniques i a expandir els límits del que és possible amb materials naturals."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  {t("comingSoon")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Desarrollo activo"
                      : locale === "en"
                        ? "Active development"
                        : "Desenvolupament actiu"}
                  </p>
                </div>
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.42z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Pruebas en curso"
                      : locale === "en"
                        ? "Testing in progress"
                        : "Proves en curs"}
                  </p>
                </div>
                <div className="p-6 bg-white/60 rounded-xl">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55L9.19 6.35zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">
                    {locale === "es"
                      ? "Próximamente"
                      : locale === "en"
                        ? "Coming soon"
                        : "Pròximament"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-800">
        <Container maxWidth="2xl">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              {locale === "es"
                ? "¿Interesado en este prototipo?"
                : locale === "en"
                  ? "Interested in this prototype?"
                  : "Interessat en aquest prototip?"}
            </h3>
            <p className="text-xl mb-8">
              {locale === "es"
                ? "Contáctanos para conocer más sobre nuestros prototipos y proyectos especiales"
                : locale === "en"
                  ? "Contact us to learn more about our prototypes and special projects"
                  : "Contacta'ns per conèixer més sobre els nostres prototips i projectes especials"}
            </p>
            <a
              href={
                locale === "es"
                  ? "/contacto"
                  : locale === "en"
                    ? "/contact"
                    : "/contacte"
              }
              className="inline-block bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              {common("contactUs")}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
