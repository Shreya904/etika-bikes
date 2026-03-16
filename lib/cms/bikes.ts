import { type Locale } from "@/i18n";
import type { LocalizedContent } from "@/types";

export type BikeType = "classic" | "ebike" | "prototype";

export type BikeMedia = {
  type: "image" | "video";
  src: string;
  alt: LocalizedContent;
  poster?: string;
};

export type BikeSpecItem = {
  label: LocalizedContent;
  value: LocalizedContent;
};

export type CmsBike = {
  id: string;
  slug: LocalizedContent;
  type: BikeType;
  title: LocalizedContent;
  subtitle: LocalizedContent;
  badge: LocalizedContent;
  heroImage: string;
  heroImageAlt: LocalizedContent;
  shortDescription: LocalizedContent;
  description: LocalizedContent[];
  introImage?: string;
  introImageAlt?: LocalizedContent;
  media: BikeMedia[];
  specs?: BikeSpecItem[];
  prototypeNote?: {
    title: LocalizedContent;
    description: LocalizedContent;
  };
  cta?: {
    title: LocalizedContent;
    text: LocalizedContent;
  };
};

// ---------------------------------------------------------------------------
// DEMO DATA — remove the entries below once real CMS content is provided.
// To preview: visit /en/demo-classic-bamboo-ebike  and  /en/demo-bamboo-tricycle-prototype
// ---------------------------------------------------------------------------
const bikes: CmsBike[] = [
  // ── DEMO: finished e-bike — exercises the full Classic/Ebike template ───
  {
    id: "demo-ebike-classic-01",
    slug: {
      es: "demo-ebike-clasica-bambu",
      en: "demo-classic-bamboo-ebike",
      ca: "demo-ebike-classica-bambu",
    },
    type: "ebike",
    title: {
      es: "Etika Urban E-Bike Classic",
      en: "Etika Urban E-Bike Classic",
      ca: "Etika Urban E-Bike Classic",
    },
    subtitle: {
      es: "movilidad eléctrica con alma natural",
      en: "electric mobility with a natural soul",
      ca: "mobilitat elèctrica amb ànima natural",
    },
    badge: {
      es: "E-Bike",
      en: "E-Bike",
      ca: "E-Bike",
    },
    heroImage: "/assets/E-bikeUrban/04092025-DSC02744.jpg",
    heroImageAlt: {
      es: "Etika Urban E-Bike de bambú en Barcelona",
      en: "Etika Urban bamboo E-Bike in Barcelona",
      ca: "Etika Urban E-Bike de bambú a Barcelona",
    },
    shortDescription: {
      es: "Una e-bike urbana de bambú diseñada y construida a mano en Barcelona, que combina tecnología, confort y sostenibilidad.",
      en: "A bamboo urban e-bike designed and handbuilt in Barcelona, combining technology, comfort and sustainability.",
      ca: "Una e-bike urbana de bambú dissenyada i construïda a mà a Barcelona, que combina tecnologia, confort i sostenibilitat.",
    },
    description: [
      {
        es: "El cuadro de bambú de cultivo local absorbe las vibraciones del asfalto y ofrece una estética cálida y única que ninguna otra bicicleta eléctrica puede igualar.",
        en: "Its locally grown bamboo frame absorbs road vibrations and offers a warm, unique aesthetic that no other electric bicycle can match.",
        ca: "El seu quadre de bambú de cultiu local absorbeix les vibracions de l'asfalt i ofereix una estètica càlida i única que cap altra bicicleta elèctrica pot igualar.",
      },
      {
        es: "Cada detalle está pensado para ofrecer un equilibrio perfecto entre rendimiento, durabilidad y diseño artesanal. Ideal para moverse por la ciudad con estilo y cero emisiones.",
        en: "Every detail is designed to offer a perfect balance between performance, durability and artisan design — ideal for city riding with style and zero emissions.",
        ca: "Cada detall està dissenyat per oferir un equilibri perfecte entre rendiment, durabilitat i disseny artesanal — ideal per moure's per la ciutat amb estil i zero emissions.",
      },
    ],
    introImage: "/assets/E-bikeUrban/closeup.jpg",
    introImageAlt: {
      es: "Detalle cuadro de bambú Etika Urban E-Bike",
      en: "Etika Urban E-Bike bamboo frame detail",
      ca: "Detall quadre de bambú Etika Urban E-Bike",
    },
    // First entry should be the featured vertical media (video or portrait image).
    // The next four fill the 2×2 grid beside it.
    media: [
      {
        type: "video",
        src: "/assets/E-bikeUrban/Modelo1.mov",
        poster: "/assets/E-bikeUrban/04092025-DSC02744.jpg",
        alt: {
          es: "Vídeo Etika Urban E-Bike en movimiento",
          en: "Etika Urban E-Bike in motion video",
          ca: "Vídeo Etika Urban E-Bike en moviment",
        },
      },
      {
        type: "image",
        src: "/assets/E-bikeUrban/04092025-DSC02766.jpg",
        alt: {
          es: "Etika Urban E-Bike vista lateral",
          en: "Etika Urban E-Bike side view",
          ca: "Etika Urban E-Bike vista lateral",
        },
      },
      {
        type: "image",
        src: "/assets/E-bikeUrban/above-shot.jpg",
        alt: {
          es: "Etika Urban E-Bike vista cenital",
          en: "Etika Urban E-Bike overhead view",
          ca: "Etika Urban E-Bike vista zenital",
        },
      },
      {
        type: "image",
        src: "/assets/E-bikeUrban/back.jpg",
        alt: {
          es: "Etika Urban E-Bike vista trasera",
          en: "Etika Urban E-Bike rear view",
          ca: "Etika Urban E-Bike vista posterior",
        },
      },
      {
        type: "image",
        src: "/assets/E-bikeUrban/closeup2.jpg",
        alt: {
          es: "Uniones de bambú artesanales",
          en: "Handcrafted bamboo joints",
          ca: "Unions de bambú artesanals",
        },
      },
    ],
    specs: [
      {
        label: { es: "Motor", en: "Motor", ca: "Motor" },
        value: {
          es: "Bafang M420 – 250W, 80Nm",
          en: "Bafang M420 – 250W, 80Nm",
          ca: "Bafang M420 – 250W, 80Nm",
        },
      },
      {
        label: { es: "Cambios", en: "Gears", ca: "Canvis" },
        value: {
          es: "Shimano Nexus 7 velocidades",
          en: "Shimano Nexus 7-speed internal hub",
          ca: "Shimano Nexus 7 velocitats",
        },
      },
      {
        label: { es: "Neumáticos", en: "Tires", ca: "Pneumàtics" },
        value: {
          es: "Schwalbe Marathon Plus – antipinchazos",
          en: "Schwalbe Marathon Plus – puncture-resistant",
          ca: "Schwalbe Marathon Plus – antipunxades",
        },
      },
      {
        label: { es: "Sillín", en: "Saddle", ca: "Selló" },
        value: {
          es: "Brooks – elegancia y confort clásico",
          en: "Brooks – classic comfort and elegance",
          ca: "Brooks – elegància i confort clàssic",
        },
      },
      {
        label: { es: "Frenos", en: "Brakes", ca: "Frens" },
        value: {
          es: "Frenos de disco hidráulicos",
          en: "Hydraulic disc brakes",
          ca: "Frens de disc hidràulics",
        },
      },
      {
        label: {
          es: "Garantía cuadro",
          en: "Frame warranty",
          ca: "Garantia quadre",
        },
        value: {
          es: "7 años",
          en: "7 years",
          ca: "7 anys",
        },
      },
    ],
    cta: {
      title: {
        es: "Construyamos tu e-bike ideal",
        en: "Let's build your ideal e-bike",
        ca: "Construïm la teva e-bike ideal",
      },
      text: {
        es: "No tenemos stock: cada bicicleta se fabrica a medida según tus preferencias y necesidades.",
        en: "We don't hold stock — every bicycle is custom-built to your preferences and needs.",
        ca: "No tenim estoc — cada bicicleta es fabrica a mida segons les teves preferències i necessitats.",
      },
    },
  },

  // ── DEMO: prototype — exercises the Prototype template ─────────────────
  {
    id: "demo-tricycle-prototype-01",
    slug: {
      es: "demo-triciclo-bambu-prototipo",
      en: "demo-bamboo-tricycle-prototype",
      ca: "demo-tricicle-bambu-prototip",
    },
    type: "prototype",
    title: {
      es: "Triciclo de Bambú",
      en: "Bamboo Tricycle",
      ca: "Tricicle de Bambú",
    },
    subtitle: {
      es: "estabilidad, carga y movilidad urbana sostenible",
      en: "stability, cargo capacity and sustainable urban mobility",
      ca: "estabilitat, càrrega i mobilitat urbana sostenible",
    },
    badge: {
      es: "Prototipo",
      en: "Prototype",
      ca: "Prototip",
    },
    heroImage: "/assets/Tricycle/IMG_20231221_102722.jpg",
    heroImageAlt: {
      es: "Prototipo de triciclo de bambú Etika Bikes",
      en: "Etika Bikes bamboo tricycle prototype",
      ca: "Prototip de tricicle de bambú Etika Bikes",
    },
    shortDescription: {
      es: "Un prototipo de triciclo de bambú construido para explorar nuevas formas de movilidad urbana sostenible con mayor capacidad de carga y estabilidad.",
      en: "A bamboo tricycle prototype built to explore new forms of sustainable urban mobility with increased cargo capacity and stability.",
      ca: "Un prototip de tricicle de bambú construït per explorar noves formes de mobilitat urbana sostenible amb major capacitat de càrrega i estabilitat.",
    },
    description: [
      {
        es: "Este prototipo está siendo sometido a pruebas de carga, estabilidad en curva y resistencia del cuadro bajo condiciones urbanas reales.",
        en: "This prototype is undergoing load, cornering stability and frame endurance testing under real urban conditions.",
        ca: "Aquest prototip s'està sotmetent a proves de càrrega, estabilitat en corba i resistència del quadre en condicions urbanes reals.",
      },
    ],
    media: [
      {
        type: "video",
        src: "/assets/Tricycle/tricycle video.mp4",
        poster: "/assets/Tricycle/IMG_20231221_102722.jpg",
        alt: {
          es: "Vídeo triciclo de bambú en uso",
          en: "Bamboo tricycle in use video",
          ca: "Vídeo tricicle de bambú en ús",
        },
      },
      {
        type: "image",
        src: "/assets/Tricycle/IMG_20231221_102722.jpg",
        alt: {
          es: "Triciclo de bambú vista frontal",
          en: "Bamboo tricycle front view",
          ca: "Tricicle de bambú vista frontal",
        },
      },
      {
        type: "image",
        src: "/assets/Tricycle/IMG_20231221_103541.jpg",
        alt: {
          es: "Detalle estructura triciclo de bambú",
          en: "Bamboo tricycle frame detail",
          ca: "Detall estructura tricicle de bambú",
        },
      },
    ],
    prototypeNote: {
      title: {
        es: "Prototipo en fase de pruebas",
        en: "Prototype in testing phase",
        ca: "Prototip en fase de proves",
      },
      description: {
        es: "Estamos validando la resistencia estructural y el comportamiento del cuadro de bambú bajo carga real. Publicaremos las especificaciones completas y disponibilidad en cuanto completemos esta fase.",
        en: "We are validating structural strength and frame behaviour under real load. Full specifications and availability will be published once this phase is complete.",
        ca: "Estem validant la resistència estructural i el comportament del quadre de bambú sota càrrega real. Publicarem les especificacions completes i disponibilitat quan completem aquesta fase.",
      },
    },
    cta: {
      title: {
        es: "¿Te interesa este prototipo?",
        en: "Interested in this prototype?",
        ca: "T'interessa aquest prototip?",
      },
      text: {
        es: "Escríbenos y te avisaremos en cuanto esté disponible o si deseas ser beta tester.",
        en: "Write to us and we will let you know as soon as it is available, or if you would like to be a beta tester.",
        ca: "Escriu-nos i t'avisarem quan estigui disponible o si vols ser beta tester.",
      },
    },
  },
];

export function getBikeBySlug(slug: string, locale: Locale): CmsBike | null {
  return bikes.find((bike) => bike.slug[locale] === slug) ?? null;
}

export function getAllBikeSlugParams(): { lang: string; slug: string }[] {
  const params: { lang: string; slug: string }[] = [];

  for (const bike of bikes) {
    params.push({ lang: "es", slug: bike.slug.es });
    params.push({ lang: "en", slug: bike.slug.en });
    params.push({ lang: "ca", slug: bike.slug.ca });
  }

  return params;
}
