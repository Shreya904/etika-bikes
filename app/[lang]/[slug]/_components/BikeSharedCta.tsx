import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { getLocalizedPath } from "@/lib/routes";

interface BikeSharedCtaProps {
  locale: Locale;
}

function localized(
  locale: Locale,
  value: { es: string; en: string; ca: string },
): string {
  return value[locale] ?? value.en;
}

export function BikeSharedCta({ locale }: BikeSharedCtaProps) {
  const title = {
    es: "Construyamos tu bicicleta ideal",
    en: "Let's build your ideal bicycle",
    ca: "Construim la teva bicicleta ideal",
  };

  const text = {
    es: "Diseñamos cada bici a medida. Cuéntanos tu idea y te ayudaremos a definir la configuración perfecta.",
    en: "Every bike is custom-built. Tell us your idea and we will help you define the perfect setup.",
    ca: "Dissenyem cada bici a mida. Explica'ns la teva idea i t'ajudarem a definir la configuració perfecta.",
  };

  const buttonLabel = {
    es: "Contactar",
    en: "Contact us",
    ca: "Contactar",
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary-800 via-primary-700 to-secondary-600 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary-500/20" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-secondary-500/20" />
      </div>
      <Container maxWidth="2xl">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold lg:text-4xl">
            {localized(locale, title)}
          </h2>
          <p className="mt-5 text-xl text-primary-100">
            {localized(locale, text)}
          </p>
          <a
            href={getLocalizedPath("contact", locale)}
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-900 transition-colors hover:bg-primary-50"
          >
            {localized(locale, buttonLabel)}
          </a>
        </div>
      </Container>
    </section>
  );
}
