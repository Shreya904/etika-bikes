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
    <section className="relative overflow-hidden border-b border-bamboo-200/70 bg-primary-800 py-20 shadow-[inset_0_-1px_0_rgba(222,205,163,0.45)] lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full border-2 border-white/5" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/5" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary-700/40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-bamboo-100/90 to-transparent" />
      </div>
      <Container maxWidth="2xl">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
            {locale === "es"
              ? "Hecho para ti"
              : locale === "ca"
                ? "Fet per a tu"
                : "Made for you"}
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">
            {localized(locale, title)}
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-white/75">
            {localized(locale, text)}
          </p>
          <a
            href={getLocalizedPath("contact", locale)}
            className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-800 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
          >
            {localized(locale, buttonLabel)}
          </a>
        </div>
      </Container>
    </section>
  );
}
