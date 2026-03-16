import { Container } from "@/components/ui/Container";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import Link from "next/link";
import Image from "next/image";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";

type LocalizedCopy = {
  philosophy: {
    title: string;
    body1: string;
    body2: string;
    bullets: { label: string; text: string }[];
    imageAlt: string;
  };
  bamboo: {
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
    imageAlt: string;
  };
  craftsmanship: {
    title: string;
    body1: string;
    body2: string;
    imageAlt: string;
    stats: string[];
  };
  video: {
    title: string;
    subtitle: string;
    iframeTitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    workshop: string;
    custom: string;
    questionsPrefix: string;
    contact: string;
  };
};

const copy: Record<Locale, LocalizedCopy> = {
  en: {
    philosophy: {
      title: "Our Philosophy",
      body1:
        "The name Etika Bikes is no coincidence. We chose it because it reflects who we are and how we do things: with values, commitment and ethics.",
      body2:
        "Etika is, above all, a way of life that we apply every day - in how we design, produce and relate to people and to our environment. Every handmade bamboo bicycle we build is born from a deep conviction: another way of creating, consuming and moving is possible.",
      bullets: [
        {
          label: "Sustainability:",
          text: "Eco-friendly bamboo bicycles to care for the planet",
        },
        {
          label: "Innovation:",
          text: "Sustainable design with advanced technology",
        },
        {
          label: "Local production:",
          text: "Handmade bamboo bicycles made in Barcelona",
        },
      ],
      imageAlt: "Etika Bikes bamboo e-bike",
    },
    bamboo: {
      title: "Why Bamboo Bicycles?",
      subtitle: "Naturally strong. Incredibly sustainable.",
      items: [
        {
          title: "Strength comparable to steel",
          text: "Bamboo fibers can withstand loads of up to 40 kN/cm2, exceeding even steel. Our frames have been subjected to certified structural fatigue tests.",
        },
        {
          title: "Natural comfort",
          text: "Bamboo naturally absorbs vibrations from the ground, making irregularities less noticeable for smoother rides and greater comfort.",
        },
        {
          title: "Positive environmental impact",
          text: "Unlike steel or aluminum, bamboo grows without polluting extractive processes and can capture up to 35% more CO2 than other crops.",
        },
      ],
      imageAlt: "Sustainable bamboo forest and natural materials",
    },
    craftsmanship: {
      title: "Handmade in Barcelona",
      body1:
        "We manufacture our bicycles by hand in Barcelona, using bamboo grown in Catalonia and supporting a proximity-based economy rooted in the local territory and its people.",
      body2:
        "We combine traditional craftsmanship with advanced technologies such as 3D printing and parametric design to ensure precision, performance and durability in every bicycle.",
      imageAlt: "Barcelona workshop and local craftsmanship",
      stats: [
        "Energy savings vs. industrial materials",
        "Handcrafted in Barcelona",
        "More CO2 capture than other crops",
        "Each bicycle is unique",
      ],
    },
    video: {
      title: "Experience the Craft",
      subtitle:
        "Watch our artisans build handmade bamboo bicycles in Barcelona",
      iframeTitle: "Etika Bikes - Bamboo Bicycle Craftsmanship",
    },
    cta: {
      title: "Ready to Build Your Own?",
      subtitle:
        "Join our bamboo bicycle self-build workshop in Barcelona and create your own sustainable, handmade bicycle. No experience required.",
      workshop: "Join Our Workshop",
      custom: "Custom Made Bicycles",
      questionsPrefix: "Have questions?",
      contact: "Get in touch",
    },
  },
  es: {
    philosophy: {
      title: "Nuestra Filosofia",
      body1:
        "El nombre Etika Bikes no es casualidad. Lo elegimos porque refleja quienes somos y como hacemos las cosas: con valores, compromiso y etica.",
      body2:
        "Etika es, ante todo, una forma de vida que aplicamos cada dia: en como disenamos, producimos y nos relacionamos con las personas y con nuestro entorno. Cada bicicleta de bambu hecha a mano nace de una conviccion profunda: otra forma de crear, consumir y moverse es posible.",
      bullets: [
        {
          label: "Sostenibilidad:",
          text: "Bicicletas de bambu ecologicas para cuidar el planeta",
        },
        {
          label: "Innovacion:",
          text: "Diseno sostenible con tecnologia avanzada",
        },
        {
          label: "Produccion local:",
          text: "Bicicletas de bambu hechas a mano en Barcelona",
        },
      ],
      imageAlt: "E-bike de bambu de Etika Bikes",
    },
    bamboo: {
      title: "Por que bicicletas de bambu?",
      subtitle: "Naturalmente fuertes. Increiblemente sostenibles.",
      items: [
        {
          title: "Resistencia comparable al acero",
          text: "Las fibras de bambu pueden soportar cargas de hasta 40 kN/cm2, superando incluso al acero. Nuestros cuadros han sido sometidos a pruebas certificadas de fatiga estructural.",
        },
        {
          title: "Confort natural",
          text: "El bambu absorbe de forma natural las vibraciones del terreno, haciendo las irregularidades menos perceptibles para una conduccion mas suave y comoda.",
        },
        {
          title: "Impacto ambiental positivo",
          text: "A diferencia del acero o el aluminio, el bambu crece sin procesos extractivos contaminantes y puede capturar hasta un 35% mas de CO2 que otros cultivos.",
        },
      ],
      imageAlt: "Bosque de bambu sostenible y materiales naturales",
    },
    craftsmanship: {
      title: "Hechas a mano en Barcelona",
      body1:
        "Fabricamos nuestras bicicletas a mano en Barcelona, utilizando bambu cultivado en Cataluna y apoyando una economia de proximidad arraigada al territorio y a su gente.",
      body2:
        "Combinamos la artesania tradicional con tecnologias avanzadas como impresion 3D y diseno parametrico para garantizar precision, rendimiento y durabilidad en cada bicicleta.",
      imageAlt: "Taller de Barcelona y artesania local",
      stats: [
        "Ahorro energetico frente a materiales industriales",
        "Hecho a mano en Barcelona",
        "Mas captura de CO2 que otros cultivos",
        "Cada bicicleta es unica",
      ],
    },
    video: {
      title: "Vive la artesania",
      subtitle:
        "Mira como nuestros artesanos construyen bicicletas de bambu hechas a mano en Barcelona",
      iframeTitle: "Etika Bikes - Artesania de bicicletas de bambu",
    },
    cta: {
      title: "Listo para construir la tuya?",
      subtitle:
        "Unete a nuestro taller de autoconstruccion de bicicletas de bambu en Barcelona y crea tu propia bicicleta sostenible y artesanal. No se requiere experiencia.",
      workshop: "Unete a nuestro taller",
      custom: "Bicicletas a medida",
      questionsPrefix: "Tienes preguntas?",
      contact: "Ponte en contacto",
    },
  },
  ca: {
    philosophy: {
      title: "La nostra filosofia",
      body1:
        "El nom Etika Bikes no es casualitat. El vam triar perque reflecteix qui som i com fem les coses: amb valors, compromis i etica.",
      body2:
        "Etika es, sobretot, una manera de viure que apliquem cada dia: en com dissenyem, produim i ens relacionem amb les persones i amb el nostre entorn. Cada bicicleta de bambu feta a ma neix d'una conviccio profunda: una altra manera de crear, consumir i moure's es possible.",
      bullets: [
        {
          label: "Sostenibilitat:",
          text: "Bicicletes de bambu ecologiques per cuidar el planeta",
        },
        {
          label: "Innovacio:",
          text: "Disseny sostenible amb tecnologia avancada",
        },
        {
          label: "Produccio local:",
          text: "Bicicletes de bambu fetes a ma a Barcelona",
        },
      ],
      imageAlt: "E-bike de bambu d'Etika Bikes",
    },
    bamboo: {
      title: "Per que bicicletes de bambu?",
      subtitle: "Naturalment fortes. Increiblement sostenibles.",
      items: [
        {
          title: "Resistencia comparable a l'acer",
          text: "Les fibres de bambu poden suportar carregues de fins a 40 kN/cm2, superant fins i tot l'acer. Els nostres quadres han estat sotmesos a proves certificades de fatiga estructural.",
        },
        {
          title: "Confort natural",
          text: "El bambu absorbeix de manera natural les vibracions del terreny, fent les irregularitats menys perceptibles per a una conduccio mes suau i comoda.",
        },
        {
          title: "Impacte ambiental positiu",
          text: "A diferencia de l'acer o l'alumini, el bambu creix sense processos extractius contaminants i pot capturar fins a un 35% mes de CO2 que altres cultius.",
        },
      ],
      imageAlt: "Bosc de bambu sostenible i materials naturals",
    },
    craftsmanship: {
      title: "Fetes a ma a Barcelona",
      body1:
        "Fabriquem les nostres bicicletes a ma a Barcelona, utilitzant bambu cultivat a Catalunya i donant suport a una economia de proximitat arrelada al territori i a la seva gent.",
      body2:
        "Combinem l'artesania tradicional amb tecnologies avancades com la impressio 3D i el disseny parametric per garantir precisio, rendiment i durabilitat en cada bicicleta.",
      imageAlt: "Taller de Barcelona i artesania local",
      stats: [
        "Estalvi energetic respecte als materials industrials",
        "Fet a ma a Barcelona",
        "Mes captura de CO2 que altres cultius",
        "Cada bicicleta es unica",
      ],
    },
    video: {
      title: "Viu l'artesania",
      subtitle:
        "Mira com els nostres artesans construeixen bicicletes de bambu fetes a ma a Barcelona",
      iframeTitle: "Etika Bikes - Artesania de bicicletes de bambu",
    },
    cta: {
      title: "Preparat per construir la teva?",
      subtitle:
        "Uneix-te al nostre taller d'autoconstruccio de bicicletes de bambu a Barcelona i crea la teva propia bicicleta sostenible i artesanal. No cal experiencia.",
      workshop: "Uneix-te al nostre taller",
      custom: "Bicicletes a mida",
      questionsPrefix: "Tens preguntes?",
      contact: "Posa't en contacte",
    },
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = copy[locale] ?? copy.en;

  return (
    <div className="bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Section 1: Philosophy & Values (Image Left, Text Right) */}
      <section className="bg-white py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <div className="aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/E-bike.jpg"
                  alt={t.philosophy.imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-primary-800 lg:text-5xl">
                {t.philosophy.title}
              </h2>
              <p className="mt-6 text-lg text-gray-600">{t.philosophy.body1}</p>
              <p className="mt-4 text-lg text-gray-600">{t.philosophy.body2}</p>
              <div className="mt-8 space-y-4">
                {t.philosophy.bullets.map((bullet) => (
                  <div key={bullet.label} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-primary-800">
                        {bullet.label}
                      </span>{" "}
                      {bullet.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Why Bamboo (Text Left, Image Right) */}
      <section className="bg-primary-50 py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-4xl font-bold text-primary-800 lg:text-5xl">
                {t.bamboo.title}
              </h2>
              <p className="mt-6 text-xl font-medium text-primary-700">
                {t.bamboo.subtitle}
              </p>
              <div className="mt-8 space-y-6">
                {t.bamboo.items.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-primary-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/Bamboo forest.jpg"
                  alt={t.bamboo.imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Local Production & Craftsmanship (Image Left, Text Right) */}
      <section className="bg-white py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <div className="aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/Handmade.png"
                  alt={t.craftsmanship.imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-primary-800 lg:text-5xl">
                {t.craftsmanship.title}
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                {t.craftsmanship.body1}
              </p>
              <p className="mt-4 text-lg text-gray-600">
                {t.craftsmanship.body2}
              </p>
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">
                      90%
                    </div>
                    <div className="text-sm text-gray-600">
                      {t.craftsmanship.stats[0]}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      {t.craftsmanship.stats[1]}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">
                      35%
                    </div>
                    <div className="text-sm text-gray-600">
                      {t.craftsmanship.stats[2]}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">
                      Infinity
                    </div>
                    <div className="text-sm text-gray-600">
                      {t.craftsmanship.stats[3]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Massive Video Section */}
      <section
        className="min-h-screen flex items-center py-24 lg:py-32"
        style={{ backgroundColor: "#4d8233" }}
      >
        <Container maxWidth="2xl" className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white lg:text-6xl">
              {t.video.title}
            </h2>
            <p className="mt-6 text-xl text-white lg:text-2xl">
              {t.video.subtitle}
            </p>
          </div>
          <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-2xl bg-black shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/9R1uogyvcH8?autoplay=0&mute=0&controls=1&showinfo=0&rel=0"
              title={t.video.iframeTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </Container>
      </section>

      {/* Spacer between video and CTA */}
      <div className="h-20 bg-white"></div>

      {/* CTA Section */}
      <section className="bg-primary-800 py-16">
        <div className="px-8 py-0 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-primary-200">
              {t.cta.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Link
                href={getFullPath("selfBuildWorkshop", locale)}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary-800 transition-all hover:bg-primary-50 hover:shadow-lg"
              >
                {t.cta.workshop}
              </Link>
              <Link
                href={getFullPath("customBikes", locale)}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary-800"
              >
                {t.cta.custom}
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-primary-300">
                {t.cta.questionsPrefix}{" "}
                <Link
                  href={getFullPath("contact", locale)}
                  className="underline hover:text-white"
                >
                  {t.cta.contact}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to separate from footer */}
      <div className="h-12 bg-white"></div>
    </div>
  );
}
