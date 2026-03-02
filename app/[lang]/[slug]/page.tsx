import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n";
import {
  resolveSlug,
  getAllSlugParams,
  type RouteKey,
} from "@/lib/slugResolver";
import { UnderConstruction } from "@/components/ui";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/FAQ/FAQAccordion";

// Ensure unrecognised slugs are handled at runtime, not just at build time
export const dynamicParams = true;

// ─── Philosophy Page Component ───────────────────────────────────────────────
function PhilosophyPage({ locale }: { locale: Locale }) {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-800 py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold lg:text-6xl">
              {locale === "es" && "Nuestra Filosofía"}
              {locale === "en" && "Our Philosophy"}
              {locale === "ca" && "La Nostra Filosofia"}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-primary-200">
              {locale === "es" &&
                "Bicicletas artesanales de bambú sostenibles desde Barcelona"}
              {locale === "en" &&
                "Sustainable handmade bamboo bicycles from Barcelona"}
              {locale === "ca" &&
                "Bicicletes artesanals de bambú sostenibles des de Barcelona"}
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-gray-700 lg:text-xl">
              {locale === "es" &&
                "El nombre Etika Bikes no es casualidad. Lo hemos elegido porque refleja quiénes somos y cómo hacemos las cosas: con valores, compromiso y ética. Etika es, sobre todo, una forma de vida que aplicamos cada día — en cómo diseñamos, producimos y nos relacionamos con las personas y con nuestro entorno. Cada bicicleta artesanal de bambú que construimos nace de una convicción profunda: otra forma de crear, consumir y moverse es posible."}
              {locale === "en" &&
                "The name Etika Bikes is no coincidence. We chose it because it reflects who we are and how we do things: with values, commitment and ethics. Etika is, above all, a way of life that we apply every day — in how we design, produce and relate to people and to our environment. Every handmade bamboo bicycle we build is born from a deep conviction: another way of creating, consuming and moving is possible."}
              {locale === "ca" &&
                "El nom Etika Bikes no és casualitat. L'hem triat perquè reflecteix qui som i com fem les coses: amb valors, compromís i ètica. Etika és, sobretot, una forma de vida que apliquem cada dia — en com dissenyem, produïm i ens relacionem amb les persones i amb el nostre entorn. Cada bicicleta artesanal de bambú que construïm neix d'una convicció profunda: una altra forma de crear, consumir i moure's és possible."}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700 lg:text-xl">
              {locale === "es" &&
                "Aspiramos a ofrecer una solución real para la movilidad urbana sostenible: accesible, funcional y en armonía con el entorno. Nuestras bicicletas no solo son hermosas y responsables, sino útiles y transformadoras en la vida cotidiana. Nuestros valores están alineados con los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas."}
              {locale === "en" &&
                "We aim to offer a real solution for sustainable urban mobility: accessible, functional and in harmony with the environment. Our bicycles are not only beautiful and responsible, but useful and transformative in everyday life. Our values are aligned with the United Nations Sustainable Development Goals (SDGs)."}
              {locale === "ca" &&
                "Aspirem a oferir una solució real per a la mobilitat urbana sostenible: accessible, funcional i en harmonia amb l'entorn. Les nostres bicicletes no només són boniques i responsables, sinó útils i transformadores en la vida quotidiana. Els nostres valors estan alineats amb els Objectius de Desenvolupament Sostenible (ODS) de les Nacions Unides."}
            </p>
          </div>
        </Container>
      </section>

      {/* Values Grid */}
      <section className="bg-primary-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            {/* Sustainability */}
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary-800">
                {locale === "es" &&
                  "Sostenibilidad – Bicicletas ecológicas de bambú para cuidar el planeta"}
                {locale === "en" &&
                  "Sustainability – Eco-friendly bamboo bicycles to care for the planet"}
                {locale === "ca" &&
                  "Sostenibilitat – Bicicletes ecològiques de bambú per cuidar el planeta"}
              </h2>
              <p className="text-gray-700">
                {locale === "es" &&
                  "Desde el cultivo del bambú hasta el montaje final, cada decisión que tomamos busca reducir nuestra huella ambiental sin comprometer la calidad ni el diseño."}
                {locale === "en" &&
                  "From bamboo cultivation to final assembly, every decision we make seeks to reduce our environmental footprint without compromising quality or design."}
                {locale === "ca" &&
                  "Des del cultiu del bambú fins al muntatge final, cada decisió que prenem busca reduir la nostra petjada ambiental sense comprometre la qualitat ni el disseny."}
              </p>
            </div>

            {/* Local Production */}
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary-800">
                {locale === "es" &&
                  "Producción local – Bicicletas artesanales de bambú hechas en Barcelona"}
                {locale === "en" &&
                  "Local production – Handmade bamboo bicycles made in Barcelona"}
                {locale === "ca" &&
                  "Producció local – Bicicletes artesanals de bambú fetes a Barcelona"}
              </h2>
              <p className="text-gray-700">
                {locale === "es" &&
                  "Fabricamos nuestras bicicletas a mano en Barcelona, utilizando bambú cultivado en Cataluña y apoyando una economía de proximidad arraigada en el territorio local y su gente."}
                {locale === "en" &&
                  "We manufacture our bicycles by hand in Barcelona, using bamboo grown in Catalonia and supporting a proximity-based economy rooted in the local territory and its people."}
                {locale === "ca" &&
                  "Fabriquem les nostres bicicletes a mà a Barcelona, utilitzant bambú cultivat a Catalunya i donant suport a una economia de proximitat arrelada al territori local i la seva gent."}
              </p>
            </div>

            {/* Innovation */}
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary-800">
                {locale === "es" &&
                  "Innovación – Diseño sostenible con tecnología avanzada"}
                {locale === "en" &&
                  "Innovation – Sustainable design with advanced technology"}
                {locale === "ca" &&
                  "Innovació – Disseny sostenible amb tecnologia avançada"}
              </h2>
              <p className="text-gray-700">
                {locale === "es" &&
                  "Combinamos la artesanía tradicional con tecnologías avanzadas como la impresión 3D y el diseño paramétrico para asegurar precisión, rendimiento y durabilidad en cada bicicleta."}
                {locale === "en" &&
                  "We combine traditional craftsmanship with advanced technologies such as 3D printing and parametric design to ensure precision, performance and durability in every bicycle."}
                {locale === "ca" &&
                  "Combinem l'artesania tradicional amb tecnologies avançades com la impressió 3D i el disseny paramètric per assegurar precisió, rendiment i durabilitat en cada bicicleta."}
              </p>
            </div>

            {/* Responsible Consumption */}
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary-800">
                {locale === "es" &&
                  "Consumo responsable – Bicicletas duraderas y reparables"}
                {locale === "en" &&
                  "Responsible consumption – Durable and repairable bicycles"}
                {locale === "ca" &&
                  "Consum responsable – Bicicletes duradores i reparables"}
              </h2>
              <p className="text-gray-700">
                {locale === "es" &&
                  "Diseñamos bicicletas pensadas para durar, para ser reparadas y para evolucionar contigo, ofreciendo una alternativa real a la producción en masa."}
                {locale === "en" &&
                  "We design bicycles meant to last, to be repaired and to evolve with you, offering a real alternative to mass production."}
                {locale === "ca" &&
                  "Dissenyem bicicletes pensades per durar, per ser reparades i per evolucionar amb tu, oferint una alternativa real a la producció en massa."}
              </p>
            </div>

            {/* Environmental Awareness */}
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary-800">
                {locale === "es" &&
                  "Consciencia ambiental colectiva – Redes para el cambio sostenible"}
                {locale === "en" &&
                  "Collective environmental awareness – Networks for sustainable change"}
                {locale === "ca" &&
                  "Consciència ambiental col·lectiva – Xarxes per al canvi sostenible"}
              </h2>
              <p className="text-gray-700">
                {locale === "es" &&
                  "Somos parte de redes como Barcelona + Sustainable, Pam a Pam y Biosphere, que promueven una economía local basada en valores."}
                {locale === "en" &&
                  "We are part of networks such as Barcelona + Sustainable, Pam a Pam and Biosphere, which promote a value-driven local economy."}
                {locale === "ca" &&
                  "Som part de xarxes com Barcelona + Sustainable, Pam a Pam i Biosphere, que promouen una economia local basada en valors."}
              </p>
            </div>

            {/* Passion for Bicycles */}
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary-800">
                {locale === "es" &&
                  "Pasión por las bicicletas – Movilidad activa, libre de emisiones"}
                {locale === "en" &&
                  "Passion for bicycles – Active, emission-free mobility"}
                {locale === "ca" &&
                  "Passió per les bicicletes – Mobilitat activa, lliure d'emissions"}
              </h2>
              <p className="text-gray-700">
                {locale === "es" &&
                  "Cada kilómetro recorrido en una bicicleta Etika es una declaración de intenciones y valores."}
                {locale === "en" &&
                  "Every kilometer ridden on an Etika bicycle is a statement of intent and values."}
                {locale === "ca" &&
                  "Cada quilòmetre recorregut en una bicicleta Etika és una declaració d'intencions i valors."}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// ─── Bamboo Materials Page Component ─────────────────────────────────────────
function BambooMaterialsPage({ locale }: { locale: Locale }) {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-800 py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold lg:text-6xl">
              {locale === "es" && "¿Por qué Bicicletas de Bambú?"}
              {locale === "en" && "Why Bamboo Bicycles?"}
              {locale === "ca" && "Per què Bicicletes de Bambú?"}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-2xl font-semibold text-primary-200">
              {locale === "es" &&
                "Naturalmente fuerte. Increíblemente sostenible."}
              {locale === "en" && "Naturally strong. Incredibly sustainable."}
              {locale === "ca" && "Naturalment fort. Increïblement sostenible."}
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            {/* Strength */}
            <div className="space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800">
                {locale === "es" && "Resistencia comparable al acero"}
                {locale === "en" && "Strength comparable to steel"}
                {locale === "ca" && "Resistència comparable a l'acer"}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "El bambú no solo es hermoso — es increíblemente fuerte. Sus fibras pueden soportar cargas de hasta 40 kN/cm², superando incluso al acero. Nuestros cuadros han sido sometidos a pruebas de fatiga estructural certificadas por INTI (Instituto Nacional de Tecnología Industrial, Argentina), reconocido por AENOR."}
                {locale === "en" &&
                  "Bamboo is not only beautiful — it is incredibly strong. Its fibers can withstand loads of up to 40 kN/cm², exceeding even steel. Our frames have been subjected to certified structural fatigue tests by INTI (National Institute of Industrial Technology, Argentina), recognized by AENOR."}
                {locale === "ca" &&
                  "El bambú no només és bonic — és increïblement fort. Les seves fibres poden suportar càrregues de fins a 40 kN/cm², superant fins i tot l'acer. Els nostres quadres han estat sotmesos a proves de fatiga estructural certificades per l'INTI (Institut Nacional de Tecnologia Industrial, Argentina), reconegut per AENOR."}
              </p>
            </div>

            {/* Lightweight */}
            <div className="space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800">
                {locale === "es" && "Ligero sin compromisos"}
                {locale === "en" && "Lightweight without compromise"}
                {locale === "ca" && "Lleuger sense compromisos"}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Gracias a su estructura tubular y fibras continuas, el bambú ofrece una excelente relación resistencia-peso: ligero pero sólido, firme pero flexible. Ideal para una conducción ágil y segura."}
                {locale === "en" &&
                  "Thanks to its tubular structure and continuous fibers, bamboo offers an excellent strength-to-weight ratio: light yet solid, firm yet flexible. Ideal for agile and safe riding."}
                {locale === "ca" &&
                  "Gràcies a la seva estructura tubular i fibres contínues, el bambú ofereix una excel·lent relació resistència-pes: lleuger però sòlid, ferm però flexible. Ideal per a una conducció àgil i segura."}
              </p>
            </div>

            {/* Natural Comfort */}
            <div className="space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800">
                {locale === "es" && "Comodidad natural"}
                {locale === "en" && "Natural comfort"}
                {locale === "ca" && "Comoditat natural"}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "El bambú absorbe naturalmente las vibraciones del suelo, haciendo que las irregularidades sean menos perceptibles. Esto resulta en viajes más suaves, menor fatiga y mayor comodidad, incluso en rutas largas o irregulares."}
                {locale === "en" &&
                  "Bamboo naturally absorbs vibrations from the ground, making irregularities less noticeable. This results in smoother rides, reduced fatigue and greater comfort, even on long or uneven routes."}
                {locale === "ca" &&
                  "El bambú absorbeix naturalment les vibracions del terra, fent que les irregularitats siguin menys perceptibles. Això resulta en viatges més suaus, menys fatiga i major comoditat, fins i tot en rutes llargues o irregulars."}
              </p>
            </div>

            {/* Environmental Impact */}
            <div className="space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800">
                {locale === "es" && "Impacto ambiental positivo"}
                {locale === "en" && "Positive environmental impact"}
                {locale === "ca" && "Impacte ambiental positiu"}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "A diferencia del acero, aluminio o fibra de carbono, el bambú crece sin procesos extractivos contaminantes. Requiere poca agua, no necesita químicos dañinos, regenera el suelo y puede capturar hasta un 35% más de CO₂ que otros cultivos."}
                {locale === "en" &&
                  "Unlike steel, aluminum or carbon fiber, bamboo grows without polluting extractive processes. It requires little water, no harmful chemicals, regenerates soil and can capture up to 35% more CO₂ than other crops."}
                {locale === "ca" &&
                  "A diferència de l'acer, alumini o fibra de carboni, el bambú creix sense processos extractius contaminants. Requereix poca aigua, no necessita químics nocius, regenera el sòl i pot capturar fins a un 35% més de CO₂ que altres cultius."}
              </p>
            </div>

            {/* Fast Growing */}
            <div className="space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800">
                {locale === "es" && "Crecimiento rápido, renovable y local"}
                {locale === "en" && "Fast-growing, renewable and local"}
                {locale === "ca" && "Creixement ràpid, renovable i local"}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Algunas variedades de bambú pueden crecer más de 10 metros en un solo año. En Etika Bikes, utilizamos bambú cultivado localmente en Cataluña, reduciendo aún más la huella ambiental de cada bicicleta."}
                {locale === "en" &&
                  "Some bamboo varieties can grow more than 10 meters in a single year. At Etika Bikes, we use bamboo grown locally in Catalonia, further reducing the environmental footprint of each bicycle."}
                {locale === "ca" &&
                  "Algunes varietats de bambú poden créixer més de 10 metres en un sol any. A Etika Bikes, utilitzem bambú cultivat localment a Catalunya, reduint encara més la petjada ambiental de cada bicicleta."}
              </p>
            </div>

            {/* Energy Efficient */}
            <div className="space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800">
                {locale === "es" && "Fabricación eficiente energéticamente"}
                {locale === "en" && "Energy-efficient manufacturing"}
                {locale === "ca" && "Fabricació eficient energèticament"}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Construir una bicicleta de bambú puede ahorrar hasta un 90% de energía en comparación con materiales industriales como el acero o el aluminio."}
                {locale === "en" &&
                  "Building a bamboo bicycle can save up to 90% of energy compared to industrial materials such as steel or aluminum."}
                {locale === "ca" &&
                  "Construir una bicicleta de bambú pot estalviar fins a un 90% d'energia en comparació amb materials industrials com l'acer o l'alumini."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Uniqueness Section */}
      <section className="bg-primary-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-xl bg-primary-600 mb-8">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
              {locale === "es" && "Cada bicicleta es única"}
              {locale === "en" && "Every bicycle is unique"}
              {locale === "ca" && "Cada bicicleta és única"}
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              {locale === "es" &&
                "Ninguna caña de bambú es igual a otra. Por eso cada bicicleta Etika es una pieza artesanal única, con su propia textura, personalidad y carácter."}
              {locale === "en" &&
                "No bamboo cane is the same as another. That is why every Etika bicycle is a unique handcrafted piece, with its own texture, personality and character."}
              {locale === "ca" &&
                "Cap canya de bambú és igual a una altra. Per això cada bicicleta Etika és una peça artesanal única, amb la seva pròpia textura, personalitat i caràcter."}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

// ─── Self-Build Workshop Page Component ──────────────────────────────────────
function SelfBuildWorkshopPage({ locale }: { locale: Locale }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh]">
        <div className="grid lg:grid-cols-2 h-[80vh]">
          {/* Content Side */}
          <div className="bg-primary-800 flex items-center justify-center py-20 lg:py-32 px-8 lg:px-16">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl mb-6">
                {locale === "es" &&
                  "Taller de Autoconstrucción de Bicicletas de Bambú en Barcelona"}
                {locale === "en" &&
                  "Bamboo Bicycle Self-Build Workshop in Barcelona"}
                {locale === "ca" &&
                  "Taller d'Autoconstrucció de Bicicletes de Bambú a Barcelona"}
              </h1>
              <p className="text-xl text-primary-200 leading-relaxed">
                {locale === "es" &&
                  "Construye tu propia bicicleta artesanal de bambú en Barcelona. Taller práctico con materiales naturales y guía experta."}
                {locale === "en" &&
                  "Build your own handmade bamboo bicycle in Barcelona. Practical workshop with natural materials and expert guidance."}
                {locale === "ca" &&
                  "Construeix la teva pròpia bicicleta artesanal de bambú a Barcelona. Taller pràctic amb materials naturals i guia experta."}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Bamboo bicycle workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Build Your Own Section */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
              {locale === "es" &&
                "Construye Tu Propia Bicicleta Artesanal de Bambú"}
              {locale === "en" && "Build Your Own Handmade Bamboo Bicycle"}
              {locale === "ca" &&
                "Construeix la Teva Pròpia Bicicleta Artesanal de Bambú"}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                {locale === "es" &&
                  "En el Taller de Autoconstrucción de Bicicletas de Bambú de Etika Bikes, te guiamos paso a paso para construir tu propia bicicleta artesanal utilizando bambú y materiales naturales."}
                {locale === "en" &&
                  "At the Etika Bikes Bamboo Bicycle Self-Build Workshop, we guide you step by step to build your own handmade bicycle using bamboo and natural materials."}
                {locale === "ca" &&
                  "Al Taller d'Autoconstrucció de Bicicletes de Bambú d'Etika Bikes, et guiem pas a pas per construir la teva pròpia bicicleta artesanal utilitzant bambú i materials naturals."}
              </p>
              <p>
                {locale === "es" &&
                  "No se requiere experiencia previa. Aprenderás todo el proceso, desde la preparación de los tubos de bambú hasta el montaje y acabado del cuadro."}
                {locale === "en" &&
                  "No previous experience is required. You will learn the entire process, from preparing bamboo tubes to assembling and finishing the frame."}
                {locale === "ca" &&
                  "No es requereix experiència prèvia. Aprendràs tot el procés, des de la preparació dels tubs de bambú fins al muntatge i acabat del quadre."}
              </p>
              <p>
                {locale === "es" &&
                  "Durante tres días intensivos de formación, trabajarás junto a nuestros artesanos, descubrirás las técnicas de construcción utilizadas en las bicicletas Etika Bikes y te llevarás a casa una bicicleta única y completamente funcional construida por ti con el apoyo de nuestro equipo."}
                {locale === "en" &&
                  "During three intensive training days, you will work alongside our artisans, discover the construction techniques used in Etika Bikes bicycles and take home a unique, fully functional bicycle built by you with the support of our team."}
                {locale === "ca" &&
                  "Durant tres dies intensius de formació, treballaràs al costat dels nostres artesans, descobriràs les tècniques de construcció utilitzades a les bicicletes Etika Bikes i et portaràs a casa una bicicleta única i completament funcional construïda per tu amb el suport del nostre equip."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning by Doing */}
      <section className="bg-primary-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" &&
                  "Aprender Haciendo, Construir con Conciencia"}
                {locale === "en" &&
                  "Learning by Doing, Building with Awareness"}
                {locale === "ca" && "Aprendre Fent, Construir amb Consciència"}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  {locale === "es" &&
                    "Trabajamos con bambú cultivado localmente y resinas de base biológica, reduciendo el impacto ambiental de cada cuadro."}
                  {locale === "en" &&
                    "We work with locally grown bamboo and bio-based resins, reducing the environmental impact of every frame."}
                  {locale === "ca" &&
                    "Treballem amb bambú cultivat localment i resines de base biològica, reduint l'impacte ambiental de cada quadre."}
                </p>
                <p>
                  {locale === "es" &&
                    "En el taller, utilizamos fibras naturales como el lino para reforzar las uniones, reemplazando materiales sintéticos y contaminantes."}
                  {locale === "en" &&
                    "In the workshop, we use natural fibers such as flax to reinforce the joints, replacing synthetic and polluting materials."}
                  {locale === "ca" &&
                    "Al taller, utilitzem fibres naturals com el lli per reforçar les unions, reemplaçant materials sintètics i contaminants."}
                </p>
                <p>
                  {locale === "es" &&
                    "Cada paso del proceso está diseñado para que comprendas cómo el diseño, la técnica y la sostenibilidad pueden coexistir. Más allá de construir una bicicleta, vivirás una experiencia colaborativa, práctica y arraigada en la cultura DIY y la conciencia material."}
                  {locale === "en" &&
                    "Each step of the process is designed so you understand how design, technique and sustainability can coexist. Beyond building a bicycle, you will live a collaborative, hands-on experience rooted in DIY culture and material awareness."}
                  {locale === "ca" &&
                    "Cada pas del procés està dissenyat perquè comprenguis com el disseny, la tècnica i la sostenibilitat poden coexistir. Més enllà de construir una bicicleta, viuràs una experiència col·laborativa, pràctica i arrelada en la cultura DIY i la consciència material."}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-800">
                  {locale === "es" && "Materiales Sostenibles"}
                  {locale === "en" && "Sustainable Materials"}
                  {locale === "ca" && "Materials Sostenibles"}
                </h3>
                <p className="mt-2 text-gray-700">
                  {locale === "es" &&
                    "Bambú local, fibras naturales y resinas ecológicas"}
                  {locale === "en" &&
                    "Local bamboo, natural fibers and eco-friendly resins"}
                  {locale === "ca" &&
                    "Bambú local, fibres naturals i resines ecològiques"}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-800">
                  {locale === "es" && "Experiencia Grupal"}
                  {locale === "en" && "Group Experience"}
                  {locale === "ca" && "Experiència Grupal"}
                </h3>
                <p className="mt-2 text-gray-700">
                  {locale === "es" &&
                    "Grupos pequeños con guía personalizada de artesanos"}
                  {locale === "en" &&
                    "Small groups with personalized guidance from artisans"}
                  {locale === "ca" &&
                    "Grups petits amb guia personalitzada d'artesans"}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* A Craft Experience in Barcelona */}
      <section className="bg-primary-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Bamboo bicycle workshop in Barcelona"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">
                    {locale === "es" && "Taller en Barcelona"}
                    {locale === "en" && "Workshop in Barcelona"}
                    {locale === "ca" && "Taller a Barcelona"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {locale === "es" &&
                      "L'Hospitalet de Llobregat - Donde nacen las bicicletas Etika"}
                    {locale === "en" &&
                      "L'Hospitalet de Llobregat - Where Etika bicycles are born"}
                    {locale === "ca" &&
                      "L'Hospitalet de Llobregat - On neixen les bicicletes Etika"}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" && "Una Experiencia Artesanal en Barcelona"}
                {locale === "en" && "A Craft Experience in Barcelona"}
                {locale === "ca" && "Una Experiència Artesanal a Barcelona"}
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  {locale === "es" &&
                    "El taller tiene lugar en nuestro espacio en L'Hospitalet de Llobregat, donde se construyen las bicicletas Etika."}
                  {locale === "en" &&
                    "The workshop takes place in our space in L'Hospitalet de Llobregat, where Etika bicycles are built."}
                  {locale === "ca" &&
                    "El taller té lloc al nostre espai a l'Hospitalet de Llobregat, on es construeixen les bicicletes Etika."}
                </p>
                <p>
                  {locale === "es" &&
                    "El ambiente es relajado, creativo y acogedor, con grupos pequeños para garantizar una orientación personalizada."}
                  {locale === "en" &&
                    "The atmosphere is relaxed, creative and welcoming, with small groups to ensure personalized guidance."}
                  {locale === "ca" &&
                    "L'ambient és relaxat, creatiu i acollidor, amb grups petits per garantir una orientació personalitzada."}
                </p>
                <p>
                  {locale === "es" &&
                    "Al final del taller, te llevarás a casa una bicicleta funcional de bambú adaptada a tus medidas corporales y estilo de conducción, construida con tus propias manos y con el apoyo de un equipo experimentado."}
                  {locale === "en" &&
                    "At the end of the workshop, you will take home a functional bamboo bicycle adapted to your body measurements and riding style, built with your own hands and supported by an experienced team."}
                  {locale === "ca" &&
                    "Al final del taller, et portaràs a casa una bicicleta funcional de bambú adaptada a les teves mides corporals i estil de conducció, construïda amb les teves pròpies mans i amb el suport d'un equip experimentat."}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included & Why */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" && "Qué Incluye el Taller"}
                {locale === "en" && "What the Workshop Includes"}
                {locale === "ca" && "Què Inclou el Taller"}
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    {locale === "es" &&
                      "Orientación técnica y supervisión por artesanos de Etika Bikes"}
                    {locale === "en" &&
                      "Technical guidance and supervision by Etika Bikes artisans"}
                    {locale === "ca" &&
                      "Orientació tècnica i supervisió per artesans d'Etika Bikes"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    {locale === "es" &&
                      "Todos los materiales: tubos de bambú, fibras naturales, resinas, herramientas y accesorios"}
                    {locale === "en" &&
                      "All materials: bamboo tubes, natural fibers, resins, tools and accessories"}
                    {locale === "ca" &&
                      "Tots els materials: tubs de bambú, fibres naturals, resines, eines i accessoris"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    {locale === "es" && "Ajuste del cuadro según tus medidas"}
                    {locale === "en" &&
                      "Frame adjustment according to your measurements"}
                    {locale === "ca" &&
                      "Ajust del quadre segons les teves mides"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    {locale === "es" &&
                      "Certificado de participación y personalización opcional del acabado"}
                    {locale === "en" &&
                      "Participation certificate and optional finish customization"}
                    {locale === "ca" &&
                      "Certificat de participació i personalització opcional de l'acabat"}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" &&
                  "Por Qué Construir tu Propia Bicicleta de Bambú"}
                {locale === "en" && "Why Build Your Own Bamboo Bicycle"}
                {locale === "ca" &&
                  "Per Què Construir la Teva Pròpia Bicicleta de Bambú"}
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    {locale === "es" &&
                      "Reduce tu huella ambiental utilizando materiales naturales y sostenibles"}
                    {locale === "en" &&
                      "Reduce your environmental footprint using natural and sustainable materials"}
                    {locale === "ca" &&
                      "Redueix la teva petjada ambiental utilitzant materials naturals i sostenibles"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    {locale === "es" &&
                      "Aprende un proceso técnico y artesanal a través de la práctica directa"}
                    {locale === "en" &&
                      "Learn a technical and artisanal process through hands-on practice"}
                    {locale === "ca" &&
                      "Aprèn un procés tècnic i artesanal a través de la pràctica directa"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    {locale === "es" &&
                      "Vive una experiencia auténtica, creativa y transformadora"}
                    {locale === "en" &&
                      "Live an authentic, creative and transformative experience"}
                    {locale === "ca" &&
                      "Viu una experiència autèntica, creativa i transformadora"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Editions */}
      <section className="bg-primary-800 py-16 mb-16">
        <Container maxWidth="2xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold lg:text-4xl">
              {locale === "es" && "Próximas Ediciones"}
              {locale === "en" && "Upcoming Editions"}
              {locale === "ca" && "Properes Edicions"}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-primary-200">
              <p>
                {locale === "es" &&
                  "Organizamos talleres durante todo el año en Barcelona y L'Hospitalet de Llobregat."}
                {locale === "en" &&
                  "We organize workshops throughout the year in Barcelona and L'Hospitalet de Llobregat."}
                {locale === "ca" &&
                  "Organitzem tallers durant tot l'any a Barcelona i l'Hospitalet de Llobregat."}
              </p>
              <p>
                {locale === "es" &&
                  "También ofrecemos ediciones privadas para grupos o colaboraciones con espacios creativos."}
                {locale === "en" &&
                  "We also offer private editions for groups or collaborations with creative spaces."}
                {locale === "ca" &&
                  "També oferim edicions privades per a grups o col·laboracions amb espais creatius."}
              </p>
              <p className="text-xl font-semibold text-white">
                {locale === "es" &&
                  "¿Interesado en construir tu bicicleta de bambú?"}
                {locale === "en" &&
                  "Interested in building your bamboo bicycle?"}
                {locale === "ca" &&
                  "Interessat a construir la teva bicicleta de bambú?"}
              </p>
              <p>
                {locale === "es" &&
                  "Contáctanos para conocer las próximas fechas, precios y opciones personalizadas."}
                {locale === "en" &&
                  "Contact us to learn about upcoming dates, pricing and custom options."}
                {locale === "ca" &&
                  "Contacta'ns per conèixer les properes dates, preus i opcions personalitzades."}
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+34672778731"
                className="inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +34 672 778 731
              </a>
              <a
                href="mailto:maga@etikabikes.com"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                maga@etikabikes.com
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// ─── Custom Made Bicycles Page Component ─────────────────────────────────────
function CustomBikesPage({ locale }: { locale: Locale }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh]">
        <div className="grid lg:grid-cols-2 h-[80vh]">
          {/* Content Side */}
          <div className="bg-primary-800 flex items-center justify-center py-20 lg:py-32 px-8 lg:px-16">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl mb-6">
                {locale === "es" &&
                  "Bicicletas de Bambú Hechas a Medida en Barcelona"}
                {locale === "en" && "Custom Made Bamboo Bicycles in Barcelona"}
                {locale === "ca" &&
                  "Bicicletes de Bambú Fetes a Mida a Barcelona"}
              </h1>
              <p className="text-xl text-primary-200 leading-relaxed">
                {locale === "es" &&
                  "Diseñamos y construimos bicicletas de bambú personalizadas en Barcelona, combinando ergonomía, artesanía y sostenibilidad."}
                {locale === "en" &&
                  "We design and build custom bamboo bicycles in Barcelona, combining ergonomics, craftsmanship and sustainability."}
                {locale === "ca" &&
                  "Dissenyem i construïm bicicletes de bambú personalitzades a Barcelona, combinant ergonomia, artesania i sostenibilitat."}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Custom bamboo bicycle design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Handmade Design */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
              {locale === "es" &&
                "Diseño Artesanal y Fabricación Personalizada"}
              {locale === "en" && "Handmade Design and Custom Fabrication"}
              {locale === "ca" &&
                "Disseny Artesanal i Fabricació Personalitzada"}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                {locale === "es" &&
                  "En Etika Bikes, diseñamos y construimos bicicletas de bambú exclusivas creadas para adaptarse a tu morfología, tu estilo de conducción y tus necesidades reales."}
                {locale === "en" &&
                  "At Etika Bikes, we design and build exclusive bamboo bicycles created to adapt to your morphology, your riding style and your real needs."}
                {locale === "ca" &&
                  "A Etika Bikes, dissenyem i construïm bicicletes de bambú exclusives creades per adaptar-se a la teva morfologia, el teu estil de conducció i les teves necessitats reals."}
              </p>
              <p>
                {locale === "es" &&
                  "Nuestro servicio personalizado combina diseño, ergonomía y sostenibilidad para crear una bicicleta artesanal eficiente, duradera y completamente personalizada."}
                {locale === "en" &&
                  "Our custom service combines design, ergonomics and sustainability to create an efficient, durable and fully personalized handmade bicycle."}
                {locale === "ca" &&
                  "El nostre servei personalitzat combina disseny, ergonomia i sostenibilitat per crear una bicicleta artesanal eficient, duradora i completament personalitzada."}
              </p>
              <p>
                {locale === "es" &&
                  "Cada proyecto comienza con una conversación. Escuchamos cómo pedaleas, cómo usas tu bicicleta y qué tipo de experiencia buscas."}
                {locale === "en" &&
                  "Each project begins with a conversation. We listen to how you ride, how you use your bike and what kind of experience you are looking for."}
                {locale === "ca" &&
                  "Cada projecte comença amb una conversa. Escoltem com pedalegis, com uses la teva bicicleta i quin tipus d'experiència busques."}
              </p>
              <p>
                {locale === "es" &&
                  "A partir de ahí, construimos un cuadro de bambú a mano en Barcelona, con geometría, componentes y acabados elegidos específicamente para ti."}
                {locale === "en" &&
                  "From there, we build a bamboo frame by hand in Barcelona, with geometry, components and finishes chosen specifically for you."}
                {locale === "ca" &&
                  "A partir d'aquí, construïm un quadre de bambú a mà a Barcelona, amb geometria, components i acabats triats específicament per a tu."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Custom */}
      <section className="bg-primary-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary-800 lg:text-4xl">
            {locale === "es" &&
              "Por Qué Elegir una Bicicleta de Bambú Personalizada"}
            {locale === "en" && "Why Choose a Custom Bamboo Bicycle"}
            {locale === "ca" &&
              "Per Què Triar una Bicicleta de Bambú Personalitzada"}
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Rendimiento y Control Total"}
                {locale === "en" && "Performance and Full Control"}
                {locale === "ca" && "Rendiment i Control Total"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Cada ángulo, tubo y componente se define según tu cuerpo, peso y estilo de pedaleo, asegurando una bicicleta estable, receptiva y eficiente."}
                {locale === "en" &&
                  "Every angle, tube and component is defined according to your body, weight and pedaling style, ensuring a stable, responsive and efficient bicycle."}
                {locale === "ca" &&
                  "Cada angle, tub i component es defineix segons el teu cos, pes i estil de pedaleig, assegurant una bicicleta estable, receptiva i eficient."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Ergonomía Personalizada y Comodidad"}
                {locale === "en" && "Personalized Ergonomics and Comfort"}
                {locale === "ca" && "Ergonomia Personalitzada i Comoditat"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "La geometría personalizada permite una posición de conducción natural y equilibrada, reduciendo la fatiga y mejorando la comodidad en recorridos largos."}
                {locale === "en" &&
                  "Custom geometry allows for a natural and balanced riding position, reducing fatigue and improving comfort on long rides."}
                {locale === "ca" &&
                  "La geometria personalitzada permet una posició de conducció natural i equilibrada, reduint la fatiga i millorant la comoditat en recorreguts llargs."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V5a1 1 0 011-1h3a1 1 0 001-1V2a2 2 0 114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Componentes Elegidos Contigo"}
                {locale === "en" && "Components Chosen with You"}
                {locale === "ca" && "Components Triats Amb Tu"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Te guiamos en la selección de componentes para equilibrar rendimiento, estética y sostenibilidad, adaptando cada construcción a tu presupuesto y uso previsto."}
                {locale === "en" &&
                  "We guide you through component selection to balance performance, aesthetics and sustainability, adapting each build to your budget and intended use."}
                {locale === "ca" &&
                  "Et guiem en la selecció de components per equilibrar rendiment, estètica i sostenibilitat, adaptant cada construcció al teu pressupost i ús previst."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process & Craftsmanship */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" && "Artesanía Sostenible"}
                {locale === "en" && "Sustainable Craftsmanship"}
                {locale === "ca" && "Artesania Sostenible"}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  {locale === "es" &&
                    "Cada bicicleta se fabrica artesanalmente en nuestro taller de L'Hospitalet de Llobregat (Barcelona), utilizando bambú cultivado en Cataluña, fibras naturales de lino o carbono y resinas ecológicas."}
                  {locale === "en" &&
                    "Each bicycle is handmade in our workshop in L'Hospitalet de Llobregat (Barcelona), using bamboo grown in Catalonia, natural flax or carbon fibers and eco-friendly resins."}
                  {locale === "ca" &&
                    "Cada bicicleta es fabrica artesanalment al nostre taller de l'Hospitalet de Llobregat (Barcelona), utilitzant bambú cultivat a Catalunya, fibres naturals de lli o carboni i resines ecològiques."}
                </p>
                <p>
                  {locale === "es" &&
                    "Nuestro enfoque se centra en la durabilidad, la reparabilidad y la evolución a largo plazo — bicicletas diseñadas para crecer contigo."}
                  {locale === "en" &&
                    "Our approach focuses on durability, repairability and long-term evolution — bicycles designed to grow with you."}
                  {locale === "ca" &&
                    "El nostre enfocament se centra en la durabilitat, la reparabilitat i l'evolució a llarg termini — bicicletes dissenyades per créixer amb tu."}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" && "El Proceso de Personalización Etika"}
                {locale === "en" && "The Etika Customization Process"}
                {locale === "ca" && "El Procés de Personalització Etika"}
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Análisis inicial"}
                      {locale === "en" && "Initial analysis"}
                      {locale === "ca" && "Anàlisi inicial"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "medidas corporales, estilo de conducción y uso previsto"}
                      {locale === "en" &&
                        "body measurements, riding style and intended use"}
                      {locale === "ca" &&
                        "mides corporals, estil de conducció i ús previst"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Diseño del cuadro"}
                      {locale === "en" && "Frame design"}
                      {locale === "ca" && "Disseny del quadre"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "geometría, materiales y selección de componentes"}
                      {locale === "en" &&
                        "geometry, materials and component selection"}
                      {locale === "ca" &&
                        "geometria, materials i selecció de components"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Fabricación artesanal"}
                      {locale === "en" && "Handmade fabrication"}
                      {locale === "ca" && "Fabricació artesanal"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "construcción del cuadro de bambú con compuestos de fibra natural y bio-epoxi"}
                      {locale === "en" &&
                        "bamboo frame construction using natural fiber composites and bio-epoxy"}
                      {locale === "ca" &&
                        "construcció del quadre de bambú amb compostos de fibra natural i bio-epoxi"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Montaje y ajuste"}
                      {locale === "en" && "Assembly and tuning"}
                      {locale === "ca" && "Muntatge i ajust"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "instalación, configuración y pruebas finales"}
                      {locale === "en" &&
                        "installation, setup and final testing"}
                      {locale === "ca" &&
                        "instal·lació, configuració i proves finals"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Entrega y seguimiento"}
                      {locale === "en" && "Delivery and follow-up"}
                      {locale === "ca" && "Lliurament i seguiment"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "consejos de mantenimiento y ajustes post-entrega"}
                      {locale === "en" &&
                        "maintenance advice and post-delivery adjustments"}
                      {locale === "ca" &&
                        "consells de manteniment i ajustaments post-lliurament"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-800 py-16 mb-16">
        <Container maxWidth="2xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold lg:text-4xl">
              {locale === "es" && "Tu Bicicleta, Hecha para Ti"}
              {locale === "en" && "Your Bicycle, Made for You"}
              {locale === "ca" && "La Teva Bicicleta, Feta per a Tu"}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-primary-200">
              <p>
                {locale === "es" && "En Etika Bikes, no producimos en serie."}
                {locale === "en" &&
                  "At Etika Bikes, we do not produce in series."}
                {locale === "ca" && "A Etika Bikes, no produïm en sèrie."}
              </p>
              <p>
                {locale === "es" &&
                  "Cada bicicleta es el resultado de una idea, una conversación y un proceso cuidadosamente ejecutado."}
                {locale === "en" &&
                  "Every bicycle is the result of an idea, a conversation and a carefully executed process."}
                {locale === "ca" &&
                  "Cada bicicleta és el resultat d'una idea, una conversa i un procés curosament executat."}
              </p>
              <p className="text-xl font-semibold text-white">
                {locale === "es" &&
                  "Una bicicleta única, artesanal y sostenible — como tú."}
                {locale === "en" &&
                  "A unique, handmade and sustainable bicycle — just like you."}
                {locale === "ca" &&
                  "Una bicicleta única, artesanal i sostenible — com tu."}
              </p>
            </div>
            <div className="mt-8">
              <p className="text-primary-200">
                {locale === "es" &&
                  "Contáctanos para comenzar tu proyecto de bicicleta de bambú personalizada."}
                {locale === "en" &&
                  "Contact us to start your custom bamboo bicycle project."}
                {locale === "ca" &&
                  "Contacta'ns per començar el teu projecte de bicicleta de bambú personalitzada."}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// ─── Carbon Frame Repair Page Component ─────────────────────────────────────
function CarbonRepairPage({ locale }: { locale: Locale }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh]">
        <div className="grid lg:grid-cols-2 h-[80vh]">
          {/* Content Side */}
          <div className="bg-primary-800 flex items-center justify-center py-20 lg:py-32 px-8 lg:px-16">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl mb-6">
                {locale === "es" &&
                  "Reparación de Cuadros de Carbono en Barcelona"}
                {locale === "en" && "Carbon Frame Repair in Barcelona"}
                {locale === "ca" &&
                  "Reparació de Quadres de Carboni a Barcelona"}
              </h1>
              <p className="text-xl text-primary-200 leading-relaxed">
                {locale === "es" &&
                  "Reparamos cuadros de carbono en Barcelona usando técnicas precisas y un enfoque sostenible para alargar la vida de tu bicicleta."}
                {locale === "en" &&
                  "We repair carbon frames in Barcelona using precise techniques and a sustainable approach to extend the life of your bicycle."}
                {locale === "ca" &&
                  "Reparem quadres de carboni a Barcelona utilitzant tècniques precises i un enfocament sostenible per allargar la vida de la teva bicicleta."}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[80vh] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Carbon frame repair workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Service Description */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
              {locale === "es" &&
                "Reparamos, Reforzamos y Alargamos la Vida de Tu Bicicleta"}
              {locale === "en" &&
                "We Repair, Reinforce and Extend the Life of Your Bicycle"}
              {locale === "ca" &&
                "Reparem, Reforcem i Allargem la Vida de la Teva Bicicleta"}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                {locale === "es" &&
                  "En Etika Bikes, reparamos cuadros de fibra de carbono dañados utilizando técnicas especializadas de reparación con compuestos de fibra natural y bio-resinas."}
                {locale === "en" &&
                  "At Etika Bikes, we repair damaged carbon fiber frames using specialized repair techniques with natural fiber composites and bio-resins."}
                {locale === "ca" &&
                  "A Etika Bikes, reparem quadres de fibra de carboni danyats utilitzant tècniques especialitzades de reparació amb compostos de fibra natural i bio-resines."}
              </p>
              <p>
                {locale === "es" &&
                  "Nuestro enfoque se centra en alargar la vida útil de tu bicicleta, evitando el desperdicio y ofreciendo una alternativa sostenible a la compra de un cuadro nuevo."}
                {locale === "en" &&
                  "Our approach focuses on extending the life of your bicycle, avoiding waste and offering a sustainable alternative to buying a new frame."}
                {locale === "ca" &&
                  "El nostre enfocament se centra en allargar la vida útil de la teva bicicleta, evitant el malbaratament i oferint una alternativa sostenible a la compra d'un quadre nou."}
              </p>
              <p>
                {locale === "es" &&
                  "Con años de experiencia en materiales compuestos, restauramos la integridad estructural de cuadros dañados por grietas, impactos o desgaste, devolviendo la seguridad y el rendimiento original."}
                {locale === "en" &&
                  "With years of experience in composite materials, we restore the structural integrity of frames damaged by cracks, impacts or wear, returning the original safety and performance."}
                {locale === "ca" &&
                  "Amb anys d'experiència en materials compostos, restaurem la integritat estructural de quadres danyats per esquerdes, impactes o desgast, retornant la seguretat i el rendiment original."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services & Specializations */}
      <section className="bg-primary-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary-800 lg:text-4xl">
            {locale === "es" && "Servicios de Reparación Especializados"}
            {locale === "en" && "Specialized Repair Services"}
            {locale === "ca" && "Serveis de Reparació Especialitzats"}
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Reparación de Grietas y Fracturas"}
                {locale === "en" && "Crack and Fracture Repair"}
                {locale === "ca" && "Reparació d'Esquerdes i Fractures"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Reparamos grietas en cuadros de carbono utilizando fibra natural de lino y bio-epoxi, restaurando la resistencia estructural."}
                {locale === "en" &&
                  "We repair cracks in carbon frames using natural flax fiber and bio-epoxy, restoring structural strength."}
                {locale === "ca" &&
                  "Reparem esquerdes en quadres de carboni utilitzant fibra natural de lli i bio-epoxi, restaurant la resistència estructural."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Refuerzo Estructural"}
                {locale === "en" && "Structural Reinforcement"}
                {locale === "ca" && "Reforç Estructural"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Reforzamos áreas críticas de cuadros para prevenir futuros daños y mejorar la durabilidad a largo plazo."}
                {locale === "en" &&
                  "We reinforce critical areas of frames to prevent future damage and improve long-term durability."}
                {locale === "ca" &&
                  "Reforcem àrees crítiques de quadres per prevenir futurs danys i millorar la durabilitat a llarg termini."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Restauración de Cuadros Vintage"}
                {locale === "en" && "Vintage Frame Restoration"}
                {locale === "ca" && "Restauració de Quadres Vintage"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Restauramos cuadros de carbono antiguos o de colección, preservando su valor histórico mientras mejoramos su funcionalidad."}
                {locale === "en" &&
                  "We restore old or collectible carbon frames, preserving their historical value while improving functionality."}
                {locale === "ca" &&
                  "Restaurem quadres de carboni antics o de col·lecció, preservant el seu valor històric mentre millorem la funcionalitat."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Modificaciones Personalizadas"}
                {locale === "en" && "Custom Modifications"}
                {locale === "ca" && "Modificacions Personalitzades"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Adaptamos geometrías existentes o agregamos elementos específicos para mejorar el rendimiento según tus necesidades."}
                {locale === "en" &&
                  "We adapt existing geometries or add specific elements to improve performance according to your needs."}
                {locale === "ca" &&
                  "Adaptem geometries existents o afegim elements específics per millorar el rendiment segons les teves necessitats."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Inspección y Diagnóstico"}
                {locale === "en" && "Inspection and Diagnosis"}
                {locale === "ca" && "Inspecció i Diagnòstic"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Evaluamos el estado estructural de tu cuadro y te asesoramos sobre la viabilidad y el costo de la reparación."}
                {locale === "en" &&
                  "We evaluate the structural condition of your frame and advise you on the feasibility and cost of repair."}
                {locale === "ca" &&
                  "Avaluem l'estat estructural del teu quadre i t'assessorem sobre la viabilitat i el cost de la reparació."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {locale === "es" && "Mantenimiento Preventivo"}
                {locale === "en" && "Preventive Maintenance"}
                {locale === "ca" && "Manteniment Preventiu"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === "es" &&
                  "Ofrecemos servicios de protección y mantenimiento para prevenir daños futuros en tu cuadro de carbono."}
                {locale === "en" &&
                  "We offer protection and maintenance services to prevent future damage to your carbon frame."}
                {locale === "ca" &&
                  "Oferim serveis de protecció i manteniment per prevenir futurs danys al teu quadre de carboni."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Materials & Process */}
      <section className="bg-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" && "Materiales Sostenibles"}
                {locale === "en" && "Sustainable Materials"}
                {locale === "ca" && "Materials Sostenibles"}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  {locale === "es" &&
                    "Utilizamos fibra natural de lino de origen europeo y resinas bio-epoxi de origen vegetal para todas nuestras reparaciones."}
                  {locale === "en" &&
                    "We use European-sourced natural flax fiber and bio-epoxy resins from plant sources for all our repairs."}
                  {locale === "ca" &&
                    "Utilitzem fibra natural de lli d'origen europeu i resines bio-epoxi d'origen vegetal per a totes les nostres reparacions."}
                </p>
                <p>
                  {locale === "es" &&
                    "Estos materiales ofrecen características mecánicas comparables al carbono tradicional, pero con un impacto ambiental significativamente menor."}
                  {locale === "en" &&
                    "These materials offer mechanical characteristics comparable to traditional carbon, but with a significantly lower environmental impact."}
                  {locale === "ca" &&
                    "Aquests materials ofereixen característiques mecàniques comparables al carboni tradicional, però amb un impacte ambiental significativament menor."}
                </p>
                <p>
                  {locale === "es" &&
                    "Nuestro proceso garantiza la compatibilidad entre los materiales de reparación y el carbono original, asegurando una unión firme y duradera."}
                  {locale === "en" &&
                    "Our process guarantees compatibility between repair materials and original carbon, ensuring a firm and lasting bond."}
                  {locale === "ca" &&
                    "El nostre procés garanteix la compatibilitat entre els materials de reparació i el carboni original, assegurant una unió ferma i duradora."}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl">
                {locale === "es" && "Proceso de Reparación Etika"}
                {locale === "en" && "Etika Repair Process"}
                {locale === "ca" && "Procés de Reparació Etika"}
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Evaluación inicial"}
                      {locale === "en" && "Initial evaluation"}
                      {locale === "ca" && "Avaluació inicial"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "inspección visual y análisis estructural del daño"}
                      {locale === "en" &&
                        "visual inspection and structural analysis of damage"}
                      {locale === "ca" &&
                        "inspecció visual i anàlisi estructural del dany"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Preparación del área"}
                      {locale === "en" && "Area preparation"}
                      {locale === "ca" && "Preparació de l'àrea"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "limpieza, lijado y preparación de la superficie"}
                      {locale === "en" &&
                        "cleaning, sanding and surface preparation"}
                      {locale === "ca" &&
                        "neteja, llimat i preparació de la superfície"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Aplicación de parche"}
                      {locale === "en" && "Patch application"}
                      {locale === "ca" && "Aplicació de pedaç"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "colocación de fibra natural y resina bio-epoxi"}
                      {locale === "en" &&
                        "placement of natural fiber and bio-epoxy resin"}
                      {locale === "ca" &&
                        "col·locació de fibra natural i resina bio-epoxi"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Curado y acabado"}
                      {locale === "en" && "Curing and finishing"}
                      {locale === "ca" && "Curat i acabat"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "tiempo de curado, lijado y acabado estético"}
                      {locale === "en" &&
                        "curing time, sanding and aesthetic finishing"}
                      {locale === "ca" &&
                        "temps de curat, llimat i acabat estètic"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {locale === "es" && "Control de calidad"}
                      {locale === "en" && "Quality control"}
                      {locale === "ca" && "Control de qualitat"}
                    </h4>
                    <p className="text-gray-700">
                      {locale === "es" &&
                        "pruebas finales y garantía de la reparación"}
                      {locale === "en" && "final testing and repair warranty"}
                      {locale === "ca" &&
                        "proves finals i garantia de la reparació"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-800 py-16 mb-16">
        <Container maxWidth="2xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold lg:text-4xl">
              {locale === "es" && "Dale una Segunda Vida a Tu Bicicleta"}
              {locale === "en" && "Give Your Bicycle a Second Life"}
              {locale === "ca" && "Dona una Segona Vida a la Teva Bicicleta"}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-primary-200">
              <p>
                {locale === "es" &&
                  "En Etika Bikes creemos en la economía circular y en el valor de reparar en lugar de reemplazar."}
                {locale === "en" &&
                  "At Etika Bikes we believe in the circular economy and the value of repairing rather than replacing."}
                {locale === "ca" &&
                  "A Etika Bikes creiem en l'economia circular i en el valor de reparar en lloc de substituir."}
              </p>
              <p>
                {locale === "es" &&
                  "Tu cuadro de carbono puede tener muchos años de vida por delante con la reparación adecuada."}
                {locale === "en" &&
                  "Your carbon frame can have many years of life ahead with proper repair."}
                {locale === "ca" &&
                  "El teu quadre de carboni pot tenir molts anys de vida per endavant amb la reparació adequada."}
              </p>
              <p className="text-xl font-semibold text-white">
                {locale === "es" &&
                  "Sostenible, efectivo y más económico que comprar nuevo."}
                {locale === "en" &&
                  "Sustainable, effective and more economical than buying new."}
                {locale === "ca" &&
                  "Sostenible, efectiu i més econòmic que comprar nou."}
              </p>
            </div>
            <div className="mt-8">
              <p className="text-primary-200">
                {locale === "es" &&
                  "Trae tu cuadro dañado para una evaluación gratuita y presupuesto personalizado."}
                {locale === "en" &&
                  "Bring your damaged frame for a free evaluation and personalized quote."}
                {locale === "ca" &&
                  "Porta el teu quadre danyat per a una avaluació gratuïta i pressupost personalitzat."}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// ─── FAQ Page Component ─────────────────────────────────────

function FAQPage({ locale }: { locale: Locale }) {
  // Flatten all questions from all categories into a single array for accordion
  const allQuestions = [
    // Resistencia y Durabilidad
    {
      question:
        locale === "es"
          ? "¿Son resistentes las bicicletas de bambú?"
          : locale === "ca"
            ? "Són resistents les bicicletes de bambú?"
            : "Are Bamboo bikes resistant?",
      answer:
        locale === "es"
          ? "Sí, nuestros cuadros han pasado por todo tipo de pruebas durante más de seis años. No solo relacionadas con los estándares IRAM 40020, sino también pruebas destructivas y de uso real. Han demostrado ser más resistentes que materiales convencionales como el aluminio."
          : locale === "ca"
            ? "Sí, els nostres quadres han passat per tot tipus de proves durant més de sis anys. No només relacionades amb els estàndards IRAM 40020, sinó també proves destructives i d'ús real. Han demostrat ser més resistents que materials convencionals com l'alumini."
            : "Yes, our frames were put through all sorts of trials for more than six years. Not only related to the IRAM 40020 standards, but also to destructive and real use tests. They have shown to be stronger over conventional materials such as aluminum.",
    },
    {
      question:
        locale === "es"
          ? "¿Por qué resisten tanto?"
          : locale === "ca"
            ? "Per què resisteixen tant?"
            : "Why do they endure so much?",
      answer:
        locale === "es"
          ? "Las cañas de bambú tienen fibras que recorren toda la longitud longitudinal de cada caña. Esto permite que la caña mantenga su resistencia y fuerza, incluso cuando se agrietan. En términos de resistencia, las cañas de bambú son superiores al aluminio y el carbono ya que estos, una vez agrietados, pierden su resistencia estructural y ya no son utilizables. Por el contrario, una caña de bambú agrietada aún puede usarse sin riesgo."
          : locale === "ca"
            ? "Les canyes de bambú tenen fibres que recorren tota la longitud longitudinal de cada canya. Això permet que la canya mantingui la seva resistència i força, fins i tot quan es fissuren. En termes de resistència, les canyes de bambú són superiors a l'alumini i el carboni ja que aquests, un cop fissurats, perden la seva resistència estructural i ja no són utilitzables. Per contra, una canya de bambú fissurada encara es pot utilitzar sense risc."
            : "Bamboo canes have fibers that run through the entire longitudinal length of each cane. This allows the cane to retain its toughness and strength, even when they are torn. In terms of resistance bamboo canes are superior to aluminum and carbon since these, once cracked, lose their structural strength and are no longer usable. On the opposite, a cracked bamboo cane can still be used without risk.",
    },
    {
      question:
        locale === "es"
          ? "¿Cuánto peso soporta?"
          : locale === "ca"
            ? "Quin pes suporta?"
            : "How much weight does it stand?",
      answer:
        locale === "es"
          ? "El peso máximo recomendado es de 110kg."
          : locale === "ca"
            ? "El pes màxim recomanat és de 110kg."
            : "The maximum recommended weight is 110kgs.",
    },
    // Construcción y Materiales
    {
      question:
        locale === "es"
          ? "¿De qué están hechas las uniones?"
          : locale === "ca"
            ? "De què estan fetes les unions?"
            : "What are the joints made of?",
      answer:
        locale === "es"
          ? "Las uniones están hechas a mano con compuestos de fibra aeronáutica (vidrio y/o carbono) y resina epoxi. Esta tecnología es la misma utilizada en la construcción de barcos, aviones y en la industria aeroespacial."
          : locale === "ca"
            ? "Les unions estan fetes a mà amb compostos de fibra aeronàutica (vidre i/o carboni) i resina epoxi. Aquesta tecnologia és la mateixa utilitzada en la construcció de vaixells, avions i en la indústria aeroespacial."
            : "The joints are handmade with aeronautical fiber composites (glass and/or carbon) and epoxy resin. This technology is the same used in the construction of ships, aircraft and in the aerospace industry.",
    },
    {
      question:
        locale === "es"
          ? "¿Está recubierto de caña?"
          : locale === "ca"
            ? "Està recobert de canya?"
            : "Is it coated in cane?",
      answer:
        locale === "es"
          ? "¡NOOO! ¡Están hechas DE caña!"
          : locale === "ca"
            ? "¡NOOO! Estan fetes DE canya!"
            : "NOOO! They are made OF cane!",
    },
    {
      question:
        locale === "es"
          ? "¿Es caña real?"
          : locale === "ca"
            ? "És canya real?"
            : "Is it real cane?",
      answer:
        locale === "es"
          ? "¡Sí, es caña real!"
          : locale === "ca"
            ? "Sí, és canya real!"
            : "Yes, it is real cane!",
    },
    // Comodidad y Rendimiento
    {
      question:
        locale === "es"
          ? "¿Cuál es la ventaja comparada con una bicicleta convencional?"
          : locale === "ca"
            ? "Quina és l'avantatge comparada amb una bicicleta convencional?"
            : "What is the advantage compared to a conventional bike?",
      answer:
        locale === "es"
          ? "La principal ventaja de un cuadro de bambú es funcional: ofrecen un viaje más cómodo que las bicicletas clásicas. El material de bambú tiene propiedades elásticas y flexibles increíbles y permite una mejor absorción de los golpes causados por las irregularidades del camino."
          : locale === "ca"
            ? "El principal avantatge d'un quadre de bambú és funcional: ofereixen un viatge més còmode que les bicicletes clàssiques. El material de bambú té propietats elàstiques i flexibles increïbles i permet una millor absorció dels cops causats per les irregularitats del camí."
            : "The main advantage of a bamboo frame is functional – they offer a more comfortable ride than classic bicycles. Bamboo material has incredible elastic and flexible properties and allows a better absorption of shock caused by road irregularities.",
    },
    {
      question:
        locale === "es"
          ? "¿Por qué son más cómodas?"
          : locale === "ca"
            ? "Per què són més còmodes?"
            : "Why are they more comfortable?",
      answer:
        locale === "es"
          ? "Primero, imagina un golpe causado por un hoyo en el camino. Ahora imagina el impacto transmitido por un material rígido (como carbono y/o aluminio) al sillín de la bicicleta y luego al ciclista. Ahora imagina ese mismo golpe pero transmitido a través de una caña de bambú. Gracias a su elasticidad y flexibilidad, el bambú absorbe la vibración para que el ciclista no sienta tanto el impacto. La mejor manera de sentir la diferencia es probarlo, ven y prueba una de nuestras bicicletas."
          : locale === "ca"
            ? "Primer, imagina un cop causat per un forat al camí. Ara imagina l'impacte transmès per un material rígid (com carboni i/o alumini) al seient de la bicicleta i després al ciclista. Ara imagina aquest mateix cop però transmès a través d'una canya de bambú. Gràcies a la seva elasticitat i flexibilitat, el bambú absorbeix la vibració perquè el ciclista no senti tant l'impacte. La millor manera de sentir la diferència és provar-ho, vine i prova una de les nostres bicicletes."
            : "First, imagine a hit caused by a hole on the road. Now imagine the impact transmitted by a rigid material (such as carbon and/or aluminum) to the saddle of the bike and then the rider. Now imagine that same hit but transmitted through a bamboo cane. Thanks to its elasticity and flexibility, the bamboo absorbs the vibration so the rider doesn't feel so much the impact. The best way to feel the difference is to try it, come and test one of our bikes.",
    },
    {
      question:
        locale === "es"
          ? "¿Son ligeras?"
          : locale === "ca"
            ? "Són lleugeres?"
            : "Are they light?",
      answer:
        locale === "es"
          ? "El peso de un cuadro de bambú es comparable a un cuadro de aluminio. El peso nunca es exacto, ya que cada caña es única."
          : locale === "ca"
            ? "El pes d'un quadre de bambú és comparable a un quadre d'alumini. El pes mai és exacte, ja que cada canya és única."
            : "The weight of a bamboo frame is comparable to an aluminium frame. The weight is never exact, as each cane is unique.",
    },
    // Durabilidad y Vida Útil
    {
      question:
        locale === "es"
          ? "¿Cuánto dura el bambú?"
          : locale === "ca"
            ? "Quant dura el bambú?"
            : "How long does Bamboo last?",
      answer:
        locale === "es"
          ? "El bambú es un material muy duradero, sin embargo no podemos dar un número exacto. Es comparable a la madera, si se le da el cuidado adecuado, mejora con los años. Es común encontrar objetos muy antiguos hechos de bambú en todo el mundo."
          : locale === "ca"
            ? "El bambú és un material molt durador, però no podem donar un número exacte. És comparable a la fusta, si se li dona la cura adequada, millora amb els anys. És comú trobar objectes molt antics fets de bambú a tot el món."
            : "Bamboo is a very lasting material however we cannot give you an exact number. It is comparable to wood, if proper care is given, it gets better over the years. It is common to find very old objects made of bamboo across the world.",
    },
    {
      question:
        locale === "es"
          ? "¿Qué debo hacer si tengo una rotura de bambú?"
          : locale === "ca"
            ? "Què haig de fer si tinc una ruptura de bambú?"
            : "What should I do if I get a torn Bamboo?",
      answer:
        locale === "es"
          ? "Por la estructura del bambú, una rotura no afecta su rendimiento, por lo que puedes seguir usándola sin temor. Es importante que nos notifiques cualquier rotura para validar tu garantía. MALON Bambubikes es responsable de estos problemas mientras tu garantía esté vigente, terminando este período, podemos reparar el problema a bajo costo."
          : locale === "ca"
            ? "Per l'estructura del bambú, una ruptura no afecta el seu rendiment, per tant pots seguir utilitzant-la sense por. És important que ens notifiquis qualsevol ruptura per validar la teva garantia. MALON Bambubikes és responsable d'aquests problemes mentre la teva garantia estigui vigent, acabant aquest període, podem reparar el problema a baix cost."
            : "By the structure of bamboo a tear does not affect its performance, so you can continue to use it without fear, it is important that you notify us any tears to validate your warranty. MALON Bambubikes is responsible for these problems while your warranty is valid, ending this period, we can repair the problem at low cost.",
    },
    // Cuidado y Mantenimiento
    {
      question:
        locale === "es"
          ? "¿Necesita algún cuidado especial?"
          : locale === "ca"
            ? "Necessita alguna cura especial?"
            : "Does it need any special care?",
      answer:
        locale === "es"
          ? "Como cualquier objeto que amamos, no se recomienda dejar tu bicicleta de bambú expuesta al sol y la lluvia todo el tiempo. Recomendamos mantenimiento y calibración regulares estándar, hechos por uno mismo o por alguna tienda de bicicletas de confianza."
          : locale === "ca"
            ? "Com qualsevol objecte que estimem, no es recomana deixar la teva bicicleta de bambú exposada al sol i la pluja tot el temps. Recomanem manteniment i calibratge regulars estàndard, fets per un mateix o per alguna botiga de bicicletes de confiança."
            : "Like any object we love, it is not recommended to leave your bamboo bike exposed to the sun and the rain all the time. We'd advice with regular maintenance and calibration standard, done by oneself, or by some trusted bike shop.",
    },
    {
      question:
        locale === "es"
          ? "¿Qué pasa si se moja?"
          : locale === "ca"
            ? "Què passa si es mulla?"
            : "What happens if it gets wet?",
      answer:
        locale === "es"
          ? "¡No hay nada de qué preocuparse! Las cañas de bambú están protegidas por varias capas de barniz de poliuretano, que es una de las pinturas más impermeables del mundo. También tiene filtro UV. Sin embargo, se recomienda secarla rápidamente para que los componentes metálicos de la bicicleta no se oxiden."
          : locale === "ca"
            ? "No hi ha res de què preocupar-se! Les canyes de bambú estan protegides per diverses capes de vernís de poliuretà, que és una de les pintures més impermeables del món. També té filtre UV. No obstant això, es recomana assecar-la ràpidament perquè els components metàl·lics de la bicicleta no s'oxiden."
            : "Nothing to worry about! The bamboo canes are protected by several layers of polyurethane varnish which is one of the most waterproof paintings in the world. It also has UV filter. However, it is recommended to dry it quickly so that the metal components of the bike do not get rusted.",
    },
    {
      question:
        locale === "es"
          ? "¿Cómo cuido mi Bambubike?"
          : locale === "ca"
            ? "Com cuido la meva Bambubike?"
            : "How do I take care of my Bambubike?",
      answer:
        locale === "es"
          ? "Es importante que tu MALON BAMBUBIKE tenga los siguientes cuidados: hidrata la madera ocasionalmente con aceite para madera, limpia el barro y el polvo de madera frecuentemente, mantén siempre las partes mecánicas limpias y lubricadas, y dale servicio completo a la bicicleta al menos una vez al año."
          : locale === "ca"
            ? "És important que la teva MALON BAMBUBIKE tingui les següents cures: hidrata la fusta ocasionalment amb oli per a fusta, neteja el fang i la pols de fusta freqüentment, mantén sempre les parts mecàniques netes i lubricades, i dona servei complet a la bicicleta almenys un cop a l'any."
            : "It is important for your MALON BAMBUBIKE to have the following care: moisturize the wood occasionally with wood oil, clean mud and wood dust often, always keep mechanical parts clean and lubricated, and give full service to the bicycle at least once a year.",
    },
    // Compatibilidad y Servicio
    {
      question:
        locale === "es"
          ? "¿Puedo conseguir los componentes en cualquier tienda de bicicletas?"
          : locale === "ca"
            ? "Puc aconseguir els components a qualsevol botiga de bicicletes?"
            : "Can I get the components in any bicycle shop?",
      answer:
        locale === "es"
          ? "Sí, cada parte de la bicicleta es 100% estándar. Puedes conseguir y/o reemplazar en cualquier tienda de bicicletas."
          : locale === "ca"
            ? "Sí, cada part de la bicicleta és 100% estàndard. Pots aconseguir i/o substituir a qualsevol botiga de bicicletes."
            : "Yes, every part of the bike is 100% standard. You can get and/or replace at any bicycle shop.",
    },
    // Sostenibilidad
    {
      question:
        locale === "es"
          ? "¿Son más ecológicas que otras bicicletas?"
          : locale === "ca"
            ? "Són més ecològiques que altres bicicletes?"
            : "Are they more ecological than other bikes?",
      answer:
        locale === "es"
          ? "La bicicleta más ecológica es la que más uses."
          : locale === "ca"
            ? "La bicicleta més ecològica és la que més uses."
            : "The most ecological bicycle is the one you ride most.",
    },
    {
      question:
        locale === "es"
          ? "¿Por qué dices que son ecológicas?"
          : locale === "ca"
            ? "Per què dius que són ecològiques?"
            : "Why do you say they are ecological?",
      answer:
        locale === "es"
          ? "Todas las bicicletas son amigables con el medio ambiente porque usarlas nos hace movernos hacia una forma de vida sostenible y respetuosa con el medio ambiente. Las bicicletas de bambú están hechas de una materia prima natural con una de las tasas más altas de renovabilidad. Su extracción y tratamiento no requiere ningún proceso contaminante. Y las plantaciones de bambú producen 35% más oxígeno que otras plantaciones similares. Pero para ser realmente ecológica, debe ser usada. Así que... La bicicleta más verde es la que más usas."
          : locale === "ca"
            ? "Totes les bicicletes són amigables amb el medi ambient perquè usar-les ens fa moure cap a una forma de vida sostenible i respectuosa amb el medi ambient. Les bicicletes de bambú estan fetes d'una matèria primera natural amb una de les taxes més altes de renovabilitat. La seva extracció i tractament no requereix cap procés contaminant. I les plantacions de bambú produeixen 35% més oxigen que altres plantacions similars. Però per ser realment ecològica, ha de ser usada. Així que... La bicicleta més verda és la que més uses."
            : "All bicycles are environmentally friendly because using them makes us move to a sustainable and environmentally friendly way of living. Bamboo bikes are made from a natural raw material with one of the highest rates of all renewability. Its extraction and treatment does not require any polluting process. And bamboo plantations produce 35% more oxygen than similar other plantations. But to be really ecological, it must be ridden. So… The greenest bike is the one you use most.",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-primary-600 font-medium text-center mb-2">
            {locale === "es" && "Preguntas Frecuentes"}
            {locale === "en" && "FAQs"}
            {locale === "ca" && "Preguntes Freqüents"}
          </h6>
          <h2 className="text-4xl font-bold text-center text-gray-900 leading-[3.25rem]">
            {locale === "es" && "Preguntas frecuentes"}
            {locale === "en" && "Frequently asked questions"}
            {locale === "ca" && "Preguntes freqüents"}
          </h2>
        </div>

        <FAQAccordion questions={allQuestions} locale={locale} />
      </div>
    </section>
  );
}

// ─── Contact Page Component ─────────────────────────────────────
function ContactPage({ locale }: { locale: Locale }) {
  return (
    <div className="bg-gray-50">
      {/* Contact Form Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Bamboo bicycle workshop"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-primary-700 object-cover"
                  />
                  <h1 className="font-semibold text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                    {locale === "es" && "Contacta con nosotros"}
                    {locale === "en" && "Contact us"}
                    {locale === "ca" && "Contacta amb nosaltres"}
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6 block">
                      <a
                        href="tel:+34672778731"
                        className="flex items-center mb-6"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                            stroke="#16a34a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          +34 672 778 731
                        </h5>
                      </a>
                      <a
                        href="mailto:maga@etikabikes.com"
                        className="flex items-center mb-6"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                            stroke="#16a34a"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          maga@etikabikes.com
                        </h5>
                      </a>
                      <div className="flex items-start mb-6">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                            stroke="#16a34a"
                            strokeWidth="2"
                          />
                          <path
                            d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                            stroke="#16a34a"
                            strokeWidth="2"
                          />
                        </svg>
                        <div className="ml-5">
                          <h5 className="text-black text-base font-normal leading-6 mb-2">
                            {locale === "es" && "Persona de Contacto: Maga"}
                            {locale === "en" && "Contact Person: Maga"}
                            {locale === "ca" && "Persona de Contacte: Maga"}
                          </h5>
                          <p className="text-gray-600 text-sm">
                            {locale === "es" && "Lunes a Sábado: 10:00 - 19:30"}
                            {locale === "en" &&
                              "Monday to Saturday: 10:00 - 19:30"}
                            {locale === "ca" &&
                              "Dilluns a Dissabte: 10:00 - 19:30"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-primary-600 text-4xl font-semibold leading-10 mb-11">
                {locale === "es" && "Envíanos un Mensaje"}
                {locale === "en" && "Send Us A Message"}
                {locale === "ca" && "Envia'ns un Missatge"}
              </h2>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500 pl-4 mb-10"
                placeholder={
                  locale === "es" ? "Nombre" : locale === "ca" ? "Nom" : "Name"
                }
              />
              <input
                type="email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500 pl-4 mb-10"
                placeholder="Email"
              />
              <input
                type="tel"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500 pl-4 mb-10"
                placeholder={
                  locale === "es"
                    ? "Teléfono"
                    : locale === "ca"
                      ? "Telèfon"
                      : "Phone"
                }
              />
              <div className="mb-10">
                <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                  {locale === "es" && "Método preferido de comunicación"}
                  {locale === "en" && "Preferred method of communication"}
                  {locale === "ca" && "Mètode preferit de comunicació"}
                </h4>
                <div className="flex">
                  <div className="flex items-center mr-11">
                    <input
                      id="radio-group-1"
                      type="radio"
                      name="radio-group"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio-group-1"
                      className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio-group-2"
                      type="radio"
                      name="radio-group"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio-group-2"
                      className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>
                      {locale === "es"
                        ? "Teléfono"
                        : locale === "ca"
                          ? "Telèfon"
                          : "Phone"}
                    </label>
                  </div>
                </div>
              </div>
              <textarea
                className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-500 p-4 mb-10 resize-none"
                placeholder={
                  locale === "es"
                    ? "Mensaje"
                    : locale === "ca"
                      ? "Missatge"
                      : "Message"
                }
              ></textarea>
              <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-primary-800 bg-primary-600 shadow-sm">
                {locale === "es" && "Enviar"}
                {locale === "en" && "Send"}
                {locale === "ca" && "Enviar"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Sections */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="space-y-16">
            {/* Workshop Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl mb-4">
                  {locale === "es" && "Nuestro Taller"}
                  {locale === "en" && "Our Workshop"}
                  {locale === "ca" && "El Nostre Taller"}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {locale === "es" &&
                    "Visita nuestro taller donde diseñamos y construimos bicicletas artesanales de bambú en L'Hospitalet de Llobregat."}
                  {locale === "en" &&
                    "Visit our workshop where we design and build handmade bamboo bicycles in L'Hospitalet de Llobregat."}
                  {locale === "ca" &&
                    "Visita el nostre taller on dissenyem i construïm bicicletes artesanals de bambú a l'Hospitalet de Llobregat."}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">
                      {locale === "es" && "Dirección del Taller"}
                      {locale === "en" && "Workshop Address"}
                      {locale === "ca" && "Adreça del Taller"}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 text-primary-600 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium">
                            Carrer del Cobalt, 152, Local 2B
                          </p>
                          <p>08907 L'Hospitalet de Llobregat</p>
                          <p>Barcelona, Spain</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">
                      {locale === "es" && "Servicios del Taller"}
                      {locale === "en" && "Workshop Services"}
                      {locale === "ca" && "Serveis del Taller"}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                        {locale === "es" &&
                          "Construcción de bicicletas personalizadas"}
                        {locale === "en" && "Custom bicycle construction"}
                        {locale === "ca" &&
                          "Construcció de bicicletes personalitzades"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                        {locale === "es" && "Talleres de autoconstrucción"}
                        {locale === "en" && "Self-build workshops"}
                        {locale === "ca" && "Tallers d'autoconstrucció"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                        {locale === "es" && "Reparación de cuadros de carbono"}
                        {locale === "en" && "Carbon frame repair"}
                        {locale === "ca" && "Reparació de quadres de carboni"}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.511506358829!2d2.0956486156286847!3d41.3598734792683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f0f9b8c2d7%3A0x8a7d7b9c0b5d2c1a!2sCarrer%20del%20Cobalt%2C%20152%2C%2008907%20L%27Hospitalet%20de%20Llobregat%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1642789456123!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={
                      locale === "es"
                        ? "Ubicación del Taller"
                        : locale === "ca"
                          ? "Ubicació del Taller"
                          : "Workshop Location"
                    }
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Shop Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 lg:text-4xl mb-4">
                  {locale === "es" && "Nuestra Tienda"}
                  {locale === "en" && "Our Shop"}
                  {locale === "ca" && "La Nostra Botiga"}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {locale === "es" &&
                    "Visita Bamboo Bike Tours en el centro de Barcelona para conocer nuestras bicicletas y explorar la ciudad de forma sostenible."}
                  {locale === "en" &&
                    "Visit Bamboo Bike Tours in the center of Barcelona to discover our bicycles and explore the city in a sustainable way."}
                  {locale === "ca" &&
                    "Visita Bamboo Bike Tours al centre de Barcelona per conèixer les nostres bicicletes i explorar la ciutat de forma sostenible."}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">
                      {locale === "es" && "Dirección de la Tienda"}
                      {locale === "en" && "Shop Address"}
                      {locale === "ca" && "Adreça de la Botiga"}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 text-primary-600 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-lg">
                            Bamboo Bike Tours
                          </p>
                          <p>Calle Notariat 6</p>
                          <p>08001 Barcelona, Spain</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">
                      {locale === "es" && "Servicios de la Tienda"}
                      {locale === "en" && "Shop Services"}
                      {locale === "ca" && "Serveis de la Botiga"}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                        {locale === "es" && "Tours en bicicleta de bambú"}
                        {locale === "en" && "Bamboo bike tours"}
                        {locale === "ca" && "Tours en bicicleta de bambú"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                        {locale === "es" && "Exposición de bicicletas"}
                        {locale === "en" && "Bicycle exhibition"}
                        {locale === "ca" && "Exposició de bicicletes"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                        {locale === "es" && "Información sobre talleres"}
                        {locale === "en" && "Workshop information"}
                        {locale === "ca" && "Informació sobre tallers"}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.045025058855!2d2.168568415628744!3d41.38879297926136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f0c1d8b6a7%3A0x8f7e9b1a2c3d4e5f!2sCalle%20Notariat%2C%206%2C%2008001%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1642789456789!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={
                      locale === "es"
                        ? "Ubicación de la Tienda"
                        : locale === "ca"
                          ? "Ubicació de la Botiga"
                          : "Shop Location"
                    }
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-800 py-16 mb-16">
        <Container maxWidth="2xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold lg:text-4xl">
              {locale === "es" && "¿Listo para Conocer Etika Bikes?"}
              {locale === "en" && "Ready to Discover Etika Bikes?"}
              {locale === "ca" && "Preparat per Conèixer Etika Bikes?"}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-primary-200">
              <p>
                {locale === "es" &&
                  "Te esperamos en nuestro taller o tienda para que conozcas de cerca nuestras bicicletas artesanales de bambú."}
                {locale === "en" &&
                  "We're waiting for you at our workshop or store to discover our handmade bamboo bicycles up close."}
                {locale === "ca" &&
                  "T'esperem al nostre taller o botiga perquè coneguis de prop les nostres bicicletes artesanals de bambú."}
              </p>
              <p className="text-xl font-semibold text-white">
                {locale === "es" && "¡Ven y prueba la diferencia del bambú!"}
                {locale === "en" && "Come and feel the bamboo difference!"}
                {locale === "ca" && "Vine i prova la diferència del bambú!"}
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+34672778731"
                className="inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +34 672 778 731
              </a>
              <a
                href="mailto:maga@etikabikes.com"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                maga@etikabikes.com
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// ─── Pages the client explicitly marked as "under construction" ───────────────
const UNDER_CONSTRUCTION: Set<RouteKey> = new Set([
  // Our Creations – all pages except ebikeMtb and ebikeUrban (which have content)
  "creations",
  "bicycles",
  "ebikes",
  "classic",
  "pushBike",
  "prototypes",
  "bmx",
  "tricycle",
  "cargoBike",
  "frames",
  "selfBuildKits",
  "accessories",

  // Workshop landing page only (subpages now have content)
  "workshop",

  // About pages
  "ourStory",

  // Top-level pages
  "about",
  "collaborations",
  "blog",
]);

// ─── Static params: pre-render every locale × slug combination ────────────────
export function generateStaticParams() {
  return getAllSlugParams();
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const routeKey = resolveSlug(slug, locale);

  if (!routeKey) return {};

  // Philosophy page metadata
  if (routeKey === "philosophy") {
    const titles: Record<Locale, string> = {
      es: "Nuestra Filosofía | Bicicletas Artesanales de Bambú desde Barcelona – Etika Bikes",
      en: "Our Philosophy | Handmade Bamboo Bicycles from Barcelona – Etika Bikes",
      ca: "La Nostra Filosofia | Bicicletes Artesanals de Bambú des de Barcelona – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Descubre la filosofía de Etika Bikes: bicicletas artesanales de bambú desde Barcelona, combinando sostenibilidad, artesanía, innovación y movilidad responsable.",
      en: "Discover Etika Bikes' philosophy: handmade bamboo bicycles from Barcelona, combining sustainability, craftsmanship, innovation and responsible mobility.",
      ca: "Descobreix la filosofia d'Etika Bikes: bicicletes artesanals de bambú des de Barcelona, combinant sostenibilitat, artesania, innovació i mobilitat responsable.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Bamboo Materials page metadata
  if (routeKey === "bambooMaterials") {
    const titles: Record<Locale, string> = {
      es: "¿Por qué Bambú? | Bicicletas Sostenibles y Resistentes – Etika Bikes",
      en: "Why Bamboo Bicycles? | Sustainable and Strong Bicycles – Etika Bikes",
      ca: "Per què Bambú? | Bicicletes Sostenibles i Resistents – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Descubre por qué el bambú es el material perfecto para bicicletas: naturalmente fuerte como el acero, increíblemente sostenible y cómodo para pedalear.",
      en: "Discover why bamboo is the perfect material for bicycles: naturally strong as steel, incredibly sustainable and comfortable to ride.",
      ca: "Descobreix per què el bambú és el material perfecte per a bicicletes: naturalment fort com l'acer, increïblement sostenible i còmode per pedalejar.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Self-Build Workshop page metadata
  if (routeKey === "selfBuildWorkshop") {
    const titles: Record<Locale, string> = {
      es: "Taller de Auto-Construcción de Bicicletas de Bambú en Barcelona | Etika Bikes",
      en: "Bamboo Bicycle Self-Build Workshop in Barcelona | Etika Bikes",
      ca: "Taller d'Auto-Construcció de Bicicletes de Bambú a Barcelona | Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Construye tu propia bicicleta artesanal de bambú en Barcelona. Taller práctico con materiales naturales y guía experta.",
      en: "Build your own handmade bamboo bicycle in Barcelona. Practical workshop with natural materials and expert guidance.",
      ca: "Construeix la teva pròpia bicicleta artesanal de bambú a Barcelona. Taller pràctic amb materials naturals i guia experta.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Custom Bikes page metadata
  if (routeKey === "customBikes") {
    const titles: Record<Locale, string> = {
      es: "Bicicletas de Bambú Hechas a Medida | Diseño Personalizado en Barcelona – Etika Bikes",
      en: "Custom Made Bamboo Bicycles | Personalized Design in Barcelona – Etika Bikes",
      ca: "Bicicletes de Bambú Fetes a Mida | Disseny Personalitzat a Barcelona – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Diseñamos y construimos bicicletas de bambú personalizadas en Barcelona, combinando ergonomía, artesanía y sostenibilidad para crear tu bicicleta perfecta.",
      en: "We design and build custom bamboo bicycles in Barcelona, combining ergonomics, craftsmanship and sustainability to create your perfect bicycle.",
      ca: "Dissenyem i construïm bicicletes de bambú personalitzades a Barcelona, combinant ergonomia, artesania i sostenibilitat per crear la teva bicicleta perfecta.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Carbon Repair page metadata
  if (routeKey === "carbonRepair") {
    const titles: Record<Locale, string> = {
      es: "Reparación de Cuadros de Carbono | Servicio Especializado en Barcelona – Etika Bikes",
      en: "Carbon Frame Repair | Specialized Service in Barcelona – Etika Bikes",
      ca: "Reparació de Quadres de Carboni | Servei Especialitzat a Barcelona – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Reparamos cuadros de fibra de carbono con técnicas especializadas y materiales sostenibles. Dale una segunda vida a tu bicicleta en Barcelona.",
      en: "We repair carbon fiber frames with specialized techniques and sustainable materials. Give your bicycle a second life in Barcelona.",
      ca: "Reparem quadres de fibra de carboni amb tècniques especialitzades i materials sostenibles. Dona una segunda vida a la teva bicicleta a Barcelona.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // FAQ page metadata
  if (routeKey === "faq") {
    const titles: Record<Locale, string> = {
      es: "Preguntas Frecuentes | Bicicletas de Bambú Artesanales – Etika Bikes",
      en: "Frequently Asked Questions | Handmade Bamboo Bicycles – Etika Bikes",
      ca: "Preguntes Freqüents | Bicicletes de Bambú Artesanals – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Respuestas a las preguntas más frecuentes sobre nuestras bicicletas artesanales de bambú: resistencia, cuidados, ventajas y sostenibilidad.",
      en: "Answers to the most frequently asked questions about our handmade bamboo bicycles: strength, care, advantages and sustainability.",
      ca: "Respostes a les preguntes més freqüents sobre les nostres bicicletes artesanals de bambú: resistència, cures, avantatges i sostenibilitat.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Contact page metadata
  if (routeKey === "contact") {
    const titles: Record<Locale, string> = {
      es: "Contacto | Visita Nuestro Taller y Tienda en Barcelona – Etika Bikes",
      en: "Contact | Visit Our Workshop and Store in Barcelona – Etika Bikes",
      ca: "Contacte | Visita el Nostre Taller i Botiga a Barcelona – Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Contacta con Etika Bikes. Visita nuestro taller en L'Hospitalet o nuestra tienda Bamboo Bike Tours en Barcelona. Teléfono y email disponibles.",
      en: "Contact Etika Bikes. Visit our workshop in L'Hospitalet or our Bamboo Bike Tours store in Barcelona. Phone and email available.",
      ca: "Contacta amb Etika Bikes. Visita el nostre taller a l'Hospitalet o la nostra botiga Bamboo Bike Tours a Barcelona. Telèfon i email disponibles.",
    };

    return {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
    };
  }

  // Under construction pages metadata
  if (UNDER_CONSTRUCTION.has(routeKey)) {
    const titles: Record<Locale, string> = {
      es: "Próximamente | Etika Bikes",
      en: "Coming Soon | Etika Bikes",
      ca: "Pròximament | Etika Bikes",
    };

    return {
      title: titles[locale] ?? titles.en,
      robots: { index: false },
    };
  }

  return {};
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function SlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  // Validate locale
  if (!locales.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const routeKey = resolveSlug(slug, locale);

  // Unknown slug → hard 404
  if (!routeKey) notFound();

  // Under-construction routes
  if (UNDER_CONSTRUCTION.has(routeKey)) {
    return <UnderConstruction />;
  }

  // About Us pages with content
  if (routeKey === "philosophy") {
    return <PhilosophyPage locale={locale} />;
  }

  if (routeKey === "bambooMaterials") {
    return <BambooMaterialsPage locale={locale} />;
  }

  // Workshop pages with content
  if (routeKey === "selfBuildWorkshop") {
    return <SelfBuildWorkshopPage locale={locale} />;
  }

  if (routeKey === "customBikes") {
    return <CustomBikesPage locale={locale} />;
  }

  if (routeKey === "carbonRepair") {
    return <CarbonRepairPage locale={locale} />;
  }

  // FAQ page
  if (routeKey === "faq") {
    return <FAQPage locale={locale} />;
  }

  // Contact page
  if (routeKey === "contact") {
    return <ContactPage locale={locale} />;
  }

  // All other recognised routes are not yet built – return 404 for now.
  // They will be replaced one by one during subsequent build phases.
  notFound();
}
