import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import type { BikeMedia } from "@/lib/cms/bikes";

interface BikeGalleryProps {
  locale: Locale;
  media: BikeMedia[];
  variant: "finished" | "prototype";
}

export function localized(
  locale: Locale,
  value: { es: string; en: string; ca: string },
): string {
  return value[locale] ?? value.en;
}

export function renderMedia(
  media: BikeMedia,
  locale: Locale,
  className: string,
) {
  if (media.type === "video") {
    return (
      <video controls className={className} poster={media.poster}>
        <source src={media.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return (
    <img
      src={media.src}
      alt={localized(locale, media.alt)}
      className={className}
    />
  );
}

export function BikeGallery({ locale, media, variant }: BikeGalleryProps) {
  // Cap at 5 items
  const items = media.slice(0, 5);
  if (items.length === 0) return null;

  const bg = variant === "finished" ? "bg-secondary-50" : "bg-gray-100";

  const title =
    variant === "finished"
      ? locale === "es"
        ? "Diseñada para cada detalle"
        : locale === "ca"
          ? "Dissenyada per a cada detall"
          : "Designed for every detail"
      : locale === "es"
        ? "Registro del prototipo"
        : locale === "ca"
          ? "Registre del prototip"
          : "Prototype log";

  const subtitle =
    variant === "finished"
      ? locale === "es"
        ? "Cada ángulo cuenta la historia del trabajo artesanal"
        : locale === "ca"
          ? "Cada angle explica la història del treball artesanal"
          : "Every angle tells the story of the craft"
      : locale === "es"
        ? "Un proceso en evolución, documentado en cada etapa"
        : locale === "ca"
          ? "Un procés en evolució, documentat en cada etapa"
          : "An evolving build documented at every stage";

  // ── Flat landscape layout for 1–3 items (half the height of the tall layout)
  // matches BMX (3-col aspect-4/3) and push-bike (2-col aspect-video) reference pages
  if (items.length <= 3) {
    const colClass =
      items.length === 1
        ? "max-w-3xl mx-auto"
        : items.length === 2
          ? "grid grid-cols-2 gap-8"
          : "grid grid-cols-1 md:grid-cols-3 gap-6";

    const aspectClass = items.length <= 2 ? "aspect-video" : "aspect-4/3";

    return (
      <section className={`${bg} py-20 lg:py-32`}>
        <Container maxWidth="2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
          <div className={colClass}>
            {items.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className={`${aspectClass} overflow-hidden rounded-2xl shadow-lg`}
              >
                {renderMedia(
                  item,
                  locale,
                  "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // ── Tall layout for 4–5 items: vertical featured left + landscape grid right
  const featured = items[0];
  const gridItems = items.slice(1); // 3 or 4 items
  const lastIsOdd = gridItems.length % 2 !== 0;

  return (
    <section className={`${bg} py-20 lg:py-32`}>
      <Container maxWidth="2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Featured vertical — media[0] */}
          <div className="flex justify-center lg:col-span-1">
            <div className="w-full max-w-sm aspect-9/16 overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
              {renderMedia(featured, locale, "h-full w-full object-cover")}
            </div>
          </div>

          {/* Grid — right two columns; odd last item spans full row but keeps same height via aspect-8/3 */}
          <div className="grid grid-cols-2 gap-6 content-start lg:col-span-2">
            {gridItems.map((item, index) => {
              const spansAll = lastIsOdd && index === gridItems.length - 1;
              return (
                <div
                  key={`${item.src}-${index}`}
                  className={`overflow-hidden rounded-2xl shadow-lg${spansAll ? " col-span-2 aspect-8/3" : " aspect-4/3"}`}
                >
                  {renderMedia(
                    item,
                    locale,
                    "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
