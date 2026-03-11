import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { useTranslations } from "next-intl";

interface EbikeMtbPageProps {
  locale: Locale;
}

export function EbikeMtbPage({ locale }: EbikeMtbPageProps) {
  const t = useTranslations("ebikeMtb");

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Split Design */}
      <section className="min-h-[80vh]">
        <div className="grid lg:grid-cols-2 h-[80vh]">
          {/* Content Side */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 flex items-center justify-center py-20 lg:py-32 px-8 lg:px-16">
            {/* Decorative elements for nature/adventure theme */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-600/20" />
              <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-primary-600/15" />
            </div>

            <div className="relative z-10 max-w-xl text-white">
              <div className="mb-4 flex items-center gap-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12 L12 5 L19 12 L12 8 Z M3 19 L12 10 L21 19 H3 Z"
                  />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
                  {locale === "es" && "E-Bike de Montaña"}
                  {locale === "en" && "Electric Mountain Bike"}
                  {locale === "ca" && "E-Bike de Muntanya"}
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
                    ? "Potencia"
                    : locale === "en"
                      ? "Power"
                      : "Potència"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Sostenible"
                    : locale === "en"
                      ? "Sustainable"
                      : "Sostenible"}
                </span>
                <span className="px-4 py-2 bg-primary-700/50 rounded-full border border-primary-500/30">
                  {locale === "es"
                    ? "Aventura"
                    : locale === "en"
                      ? "Adventure"
                      : "Aventura"}
                </span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] lg:h-auto">
            <img
              src="/assets/MTB/main.jpg"
              alt="Etika MTB E-Bike"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container maxWidth="2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-800">
                  {locale === "es"
                    ? "Naturaleza y Potencia"
                    : locale === "en"
                      ? "Nature & Power"
                      : "Naturalesa i Potència"}
                </span>
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                {t("intro")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t("description1")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("description2")}
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/assets/MTB/closeup.jpg"
                alt="MTB E-Bike Detail"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section with Video */}
      <section className="py-20 lg:py-32 bg-secondary-50">
        <Container maxWidth="2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {locale === "es"
                ? "Diseñada para la Aventura"
                : locale === "en"
                  ? "Designed for Adventure"
                  : "Dissenyada per a l'Aventura"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === "es"
                ? "Cada detalle cuenta en tu experiencia off-road"
                : locale === "en"
                  ? "Every detail matters in your off-road experience"
                  : "Cada detall compta en la teva experiència off-road"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vertical Video */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-full max-w-sm">
                <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster="/assets/MTB/front.jpg"
                  >
                    <source src="/assets/MTB/Modelo2.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/MTB/main.jpg"
                  alt="MTB E-Bike Detail"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/MTB/closeup-handle.jpg"
                  alt="MTB E-Bike Handle"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/MTB/back.jpg"
                  alt="MTB E-Bike Back View"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/MTB/tire.jpg"
                  alt="MTB E-Bike Tire Detail"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Components Section */}
      <section className="py-20 lg:py-32 bg-white">
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
                    : locale === "en"
                      ? "Specifications"
                      : "Especificacions"}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("componentsTitle")}
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Motor"
                        : locale === "en"
                          ? "Motor"
                          : "Motor"}
                    </h3>
                    <p className="text-gray-600">{t("motor")}</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Cambios"
                        : locale === "en"
                          ? "Gears"
                          : "Canvis"}
                    </h3>
                    <p className="text-gray-600">{t("gears")}</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Neumáticos"
                        : locale === "en"
                          ? "Tires"
                          : "Pneumàtics"}
                    </h3>
                    <p className="text-gray-600">{t("tires")}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Sillín"
                        : locale === "en"
                          ? "Saddle"
                          : "Selló"}
                    </h3>
                    <p className="text-gray-600">{t("saddle")}</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Horquilla"
                        : locale === "en"
                          ? "Fork"
                          : "Forquilla"}
                    </h3>
                    <p className="text-gray-600">{t("fork")}</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {locale === "es"
                        ? "Frenos"
                        : locale === "en"
                          ? "Brakes"
                          : "Frens"}
                    </h3>
                    <p className="text-gray-600">{t("brakes")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-300 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-10 h-10 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V12z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {locale === "es"
                        ? "Garantía Premium"
                        : locale === "en"
                          ? "Premium Warranty"
                          : "Garantia Premium"}
                    </h3>
                    <p className="text-lg text-primary-800 font-medium">
                      {t("warranty")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Power Note Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <Container maxWidth="2xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-white">
                    {locale === "es"
                      ? "Nota sobre Potencia"
                      : locale === "en"
                        ? "Power Note"
                        : "Nota sobre Potència"}
                  </h2>
                </div>
              </div>
              <div className="px-8 py-10">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t("powerNote")}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {locale === "es"
                    ? "Nuestro motor está optimizado para cumplir con la normativa europea, ofreciendo una experiencia de conducción potente y legal."
                    : locale === "en"
                      ? "Our motor is optimized to comply with European regulations, offering a powerful and legal driving experience."
                      : "El nostre motor està optimitzat per complir amb la normativa europea, oferint una experiència de conducció potent i legal."}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values & Customization */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-bamboo-50 to-white">
        <Container maxWidth="2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66 .15-.42A8.35 8.35 0 0 1 12 17l.19-.01A6.5 6.5 0 0 1 17 8zm-1.31 9.42A6.36 6.36 0 0 0 11.38 19h-.4a6.85 6.85 0 0 0-6.03 3.62l-.17.38 1.91.66 .15-.42A4.85 4.85 0 0 1 11 20l.19-.01a4.5 4.5 0 0 1 3.5-2.57z" />
                </svg>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-800">
                  {locale === "es"
                    ? "Valores"
                    : locale === "en"
                      ? "Values"
                      : "Valors"}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                {t("valuesTitle")}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="font-medium text-xl text-primary-900">
                  {t("valuesText")}
                </p>
                <p>{t("customText")}</p>
                <p className="font-medium">{t("customText2")}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.423l-6 5.847 1.416 8.252L12 18.902l-7.416 4.62L6 15.27 0 9.423l8.332-1.405L12 .587z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === "es"
                    ? "Tu Bicicleta, Tu Historia"
                    : locale === "en"
                      ? "Your Bike, Your Story"
                      : "La Teva Bicicleta, La Teva Història"}
                </h3>
              </div>
              <p className="text-xl text-center italic text-primary-800 leading-relaxed">
                {t("uniqueText")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-600 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary-600/20" />
          <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-secondary-500/20" />
        </div>
        <Container maxWidth="2xl">
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
            <div className="mb-8">
              <svg
                className="w-16 h-16 mx-auto block mb-6"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={0.5}
                  d="M5 12 L12 5 L19 12 L12 8 Z M3 19 L12 10 L21 19 H3 Z"
                />
              </svg>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {locale === "es"
                  ? "Lista para tu Próxima Aventura"
                  : locale === "en"
                    ? "Ready for Your Next Adventure"
                    : "Llesta per a la Teva Propera Aventura"}
              </h2>
            </div>
            <p className="text-xl lg:text-2xl leading-relaxed mb-8">
              {t("cta")}
            </p>
            <div className="flex justify-center gap-4 text-sm font-medium">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66 .15-.42A8.35 8.35 0 0 1 12 17l.19-.01A6.5 6.5 0 0 1 17 8z" />
                </svg>
                Bambú sostenible
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
                Motor potente
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                7 años garantía
              </span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
