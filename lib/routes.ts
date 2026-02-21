import { type Locale } from "@/i18n";

/**
 * Route configuration with language-specific slugs
 */
export const routes = {
  home: {
    es: "/",
    en: "/",
    ca: "/",
  },

  // Our Creations
  creations: {
    es: "/creaciones-bicicletas-bambu",
    en: "/bamboo-bicycle-creations",
    ca: "/creacions-bicicletes-bambu",
  },

  // Bicycles
  bicycles: {
    es: "/bicicletas-bambu",
    en: "/bamboo-bicycles",
    ca: "/bicicletes-bambu",
  },

  // E-Bikes
  ebikes: {
    es: "/bicicletas-electricas-bambu",
    en: "/bamboo-e-bikes",
    ca: "/bicicletes-electriques-bambu",
  },
  ebikeMtb: {
    es: "/ebike-montana-bambu",
    en: "/bamboo-electric-mountain-bike",
    ca: "/ebike-muntanya-bambu",
  },
  ebikeUrban: {
    es: "/ebike-urbana-bambu",
    en: "/bamboo-urban-e-bike",
    ca: "/ebike-urbana-bambu",
  },

  // Classic
  classic: {
    es: "/bicicletas-clasicas-bambu",
    en: "/classic-bamboo-bicycles",
    ca: "/bicicletes-classiques-bambu",
  },
  pushBike: {
    es: "/bicicleta-sin-pedales-bambu",
    en: "/bamboo-balance-bike",
    ca: "/bicicleta-equilibri-bambu",
  },

  // Prototypes
  prototypes: {
    es: "/prototipos-bicicletas-bambu",
    en: "/bamboo-bike-prototypes",
    ca: "/prototips-bicicletes-bambu",
  },
  bmx: {
    es: "/bmx-bambu",
    en: "/bamboo-bmx",
    ca: "/bmx-bambu",
  },
  tricycle: {
    es: "/triciclo-bambu",
    en: "/bamboo-tricycle",
    ca: "/tricicle-bambu",
  },
  cargoBike: {
    es: "/cargo-bike-bambu",
    en: "/bamboo-cargo-bike",
    ca: "/cargo-bike-bambu",
  },

  // Frames, Kits, Accessories
  frames: {
    es: "/cuadros-bicicleta-bambu",
    en: "/bamboo-bicycle-frames",
    ca: "/quadres-bicicleta-bambu",
  },
  selfBuildKits: {
    es: "/kit-autoconstruccion-bicicleta-bambu",
    en: "/bamboo-bike-self-build-kit",
    ca: "/kit-autoconstruccio-bicicleta-bambu",
  },
  accessories: {
    es: "/accesorios-bicicleta-bambu",
    en: "/bamboo-bike-accessories",
    ca: "/accessoris-bicicleta-bambu",
  },

  // Workshop
  workshop: {
    es: "/taller-bicicletas-bambu",
    en: "/bamboo-bike-workshop",
    ca: "/taller-bicicletes-bambu",
  },
  selfBuildWorkshop: {
    es: "/taller-autoconstruccion-bicicleta-bambu",
    en: "/bamboo-bike-self-build-workshop",
    ca: "/taller-autoconstruccio-bicicleta-bambu",
  },
  customBikes: {
    es: "/bicicletas-bambu-a-medida",
    en: "/custom-bamboo-bicycles",
    ca: "/bicicletes-bambu-a-mida",
  },
  carbonRepair: {
    es: "/reparacion-cuadros-carbono",
    en: "/carbon-frame-repair",
    ca: "/reparacio-quadres-carboni",
  },

  // About
  about: {
    es: "/sobre-etika-bikes",
    en: "/about-etika-bikes",
    ca: "/sobre-etika-bikes",
  },
  ourStory: {
    es: "/historia-etika-bikes",
    en: "/etika-bikes-story",
    ca: "/historia-etika-bikes",
  },
  philosophy: {
    es: "/filosofia-valores",
    en: "/philosophy-values",
    ca: "/filosofia-valors",
  },
  bambooMaterials: {
    es: "/bambu-materiales",
    en: "/bamboo-materials",
    ca: "/bambu-materials",
  },
  faq: {
    es: "/preguntas-frecuentes",
    en: "/faq",
    ca: "/preguntes-frequents",
  },

  // Collaborations
  collaborations: {
    es: "/colaboraciones",
    en: "/collaborations",
    ca: "/colaboracions",
  },

  // Blog
  blog: {
    es: "/blog",
    en: "/blog",
    ca: "/blog",
  },

  // Contact
  contact: {
    es: "/contacto",
    en: "/contact",
    ca: "/contacte",
  },
} as const;

/**
 * Get localized path for a route
 */
export function getLocalizedPath(
  routeKey: keyof typeof routes,
  locale: Locale,
): string {
  return routes[routeKey][locale];
}

/**
 * Get full URL with locale prefix
 */
export function getFullPath(
  routeKey: keyof typeof routes,
  locale: Locale,
): string {
  return `/${locale}${routes[routeKey][locale]}`;
}
