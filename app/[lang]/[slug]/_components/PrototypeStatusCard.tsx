import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";

interface PrototypeStatusCardProps {
  locale: Locale;
}

export function PrototypeStatusCard({ locale }: PrototypeStatusCardProps) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container maxWidth="2xl">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-primary-50 via-white to-bamboo-50 rounded-3xl p-12 lg:p-16 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-primary-100 to-bamboo-100 rounded-full mb-6">
                <svg
                  className="w-16 h-16 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
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
                  ? "Este modelo representa nuestra exploración de nuevas formas de movilidad sostenible. Estamos validando la resistencia estructural, la geometría y el comportamiento del cuadro de bambú bajo condiciones reales de uso."
                  : locale === "en"
                    ? "This model represents our exploration of new forms of sustainable mobility. We are validating structural strength, geometry and behaviour of the bamboo frame under real-world conditions."
                    : "Aquest model representa la nostra exploració de noves formes de mobilitat sostenible. Estem validant la resistència estructural, la geometria i el comportament del quadre de bambú en condicions reals d'ús."}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                {locale === "es"
                  ? "Publicaremos las especificaciones completas y la disponibilidad en cuanto completemos esta fase de desarrollo."
                  : locale === "en"
                    ? "We will publish full specifications and availability once we complete this development phase."
                    : "Publicarem les especificacions completes i la disponibilitat quan completem aquesta fase de desenvolupament."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white/60 rounded-xl">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                </svg>
                <p className="text-sm font-semibold text-gray-700">
                  {locale === "es"
                    ? "Diseño artesanal"
                    : locale === "en"
                      ? "Handcrafted design"
                      : "Disseny artesanal"}
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
                    ? "En fase de pruebas"
                    : locale === "en"
                      ? "In testing phase"
                      : "En fase de proves"}
                </p>
              </div>
              <div className="p-6 bg-white/60 rounded-xl">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.25-.87C8.59 17.42 11.5 13 17 13V8zM3.82 21.34C5.9 16.17 8 10 17 8l-1-5C6 5 3.82 16.17 3.82 21.34zM21.05 10.55C20.1 9.6 18.85 9 17.5 9c-1.35 0-2.6.6-3.55 1.55C12.9 11.6 12.3 12.85 12.3 14.2c0 1.35.6 2.6 1.55 3.55.95.95 2.2 1.55 3.55 1.55 1.35 0 2.6-.6 3.55-1.55.95-.95 1.55-2.2 1.55-3.55 0-1.35-.6-2.6-1.55-3.55z" />
                </svg>
                <p className="text-sm font-semibold text-gray-700">
                  {locale === "es"
                    ? "Bambú sostenible"
                    : locale === "en"
                      ? "Sustainable bamboo"
                      : "Bambú sostenible"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
