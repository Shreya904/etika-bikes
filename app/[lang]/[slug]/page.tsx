import React from "react";
import Image from "next/image";
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
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary-800 py-24 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-48 -top-48 h-175 w-175 rounded-full border-2 border-white/5" />
          <div className="absolute -right-24 -top-24 h-125 w-125 rounded-full border border-white/5" />
          <div className="absolute bottom-0 left-1/4 h-75 w-75 rounded-full bg-primary-700/40" />
        </div>
        <Container maxWidth="2xl">
          <div className="relative z-10 text-center text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">
              {locale === "es" && "Nuestros principios"}
              {locale === "en" && "Our principles"}
              {locale === "ca" && "Els nostres principis"}
            </p>
            <h1 className="text-5xl font-black tracking-tight lg:text-7xl">
              {locale === "es" && "Nuestra Filosofía"}
              {locale === "en" && "Our Philosophy"}
              {locale === "ca" && "La Nostra Filosofia"}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-200">
              {locale === "es" &&
                "Bicicletas artesanales de bambú. Una forma de vida."}
              {locale === "en" && "Handmade bamboo bicycles. A way of life."}
              {locale === "ca" &&
                "Bicicletes artesanals de bambú. Una forma de vida."}
            </p>
            <div className="mx-auto mt-10 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-primary-500" />
              <div className="h-2 w-2 rounded-full bg-primary-400" />
              <div className="h-px w-16 bg-primary-500" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Manifesto Intro ── */}
      <section className="bg-white py-20 lg:py-28">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-4xl">
            {/* Eyebrow */}
            <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.25em] text-primary-500">
              {locale === "es" &&
                "Bicicletas sostenibles de bambú hechas a mano en Barcelona"}
              {locale === "en" &&
                "Sustainable bamboo bicycles handmade in Barcelona"}
              {locale === "ca" &&
                "Bicicletes sostenibles de bambú fetes a mà a Barcelona"}
            </p>
            {/* Para 1 */}
            <p className="text-2xl font-light leading-relaxed text-gray-800 lg:text-3xl">
              {locale === "es" &&
                "Etika Bikes no es casualidad. Lo elegimos porque refleja quiénes somos y cómo hacemos las cosas: con valores, con compromiso, con ética."}
              {locale === "en" &&
                "Etika Bikes is no coincidence. We chose it because it reflects who we are and how we do things: with values, with commitment, with ethics."}
              {locale === "ca" &&
                "Etika Bikes no és casualitat. L'hem triat perquè reflecteix qui som i com fem les coses: amb valors, amb compromís, amb ètica."}
            </p>
            {/* Thin rule */}
            <div className="my-8 h-px w-24 bg-primary-300" />
            {/* Para 2 */}
            <p className="text-lg leading-relaxed text-gray-600">
              {locale === "es" &&
                "Etika es, sobre todo, una forma de vida que intentamos aplicar cada día — en cómo diseñamos, producimos y nos relacionamos con las personas y el entorno."}
              {locale === "en" &&
                "Etika is, above all, a way of life that we try to apply every day — in how we design, produce, and interact with people and the environment."}
              {locale === "ca" &&
                "Etika és, sobretot, una forma de vida que intentem aplicar cada dia — en com dissenyem, produïm i ens relacionem amb les persones i l'entorn."}
            </p>
            {/* Para 3 */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {locale === "es" &&
                "Ofrecemos una solución real para la movilidad urbana sostenible: accesible, funcional y en armonía con el entorno. Queremos que nuestras bicicletas no solo sean bonitas y responsables, sino también útiles y transformadoras en la vida cotidiana."}
              {locale === "en" &&
                "We offer a real solution for sustainable urban mobility: accessible, functional, and in harmony with the surroundings. We want our bicycles to be not only beautiful and responsible, but also useful and transformative in daily life."}
              {locale === "ca" &&
                "Oferim una solució real per a la mobilitat urbana sostenible: accessible, funcional i en harmonia amb l'entorn. Volem que les nostres bicicletes no siguin només boniques i responsables, sinó també útils i transformadores en la vida quotidiana."}
            </p>
            {/* Para 4 — pull quote style */}
            <blockquote className="my-10 border-l-4 border-primary-400 pl-6">
              <p className="text-lg leading-relaxed text-gray-700 italic">
                {locale === "es" &&
                  "Fabricamos cada bicicleta bajo pedido, sin stock ni producción en masa, porque creemos en un modelo más consciente, responsable y respetuoso con los recursos. Cada bicicleta artesanal de bambú que hacemos nace de la convicción profunda de que otra forma de crear, consumir y moverse es posible."}
                {locale === "en" &&
                  "We manufacture each bicycle on demand, with no stock or mass production, because we believe in a more conscious, responsible, and resource-respectful model. Every handcrafted bamboo bicycle we make is born from the deep conviction that another way of creating, consuming, and moving is possible."}
                {locale === "ca" &&
                  "Fabricant cada bicicleta sota comanda, sense estoc ni producció en massa, perquè creiem en un model més conscient, responsable i respectuós amb els recursos. Cada bicicleta artesanal de bambú que fem neix de la convicció profunda que una altra manera de crear, consumir i moure's és possible."}
              </p>
            </blockquote>
            {/* Para 5 */}
            <p className="text-lg leading-relaxed text-gray-600">
              {locale === "es" &&
                "Además, nuestros valores están alineados con los Objetivos de Desarrollo Sostenible (ODS) definidos por la ONU. Con cada decisión, nos esforzamos por contribuir a un futuro más justo, más saludable y más sostenible para todas las personas y el planeta."}
              {locale === "en" &&
                "Furthermore, our values are aligned with the Sustainable Development Goals (SDGs) defined by the UN. With every decision, we strive to contribute to a fairer, healthier, and more sustainable future for all people and the planet."}
              {locale === "ca" &&
                "A més, els nostres valors estan alineats amb els Objectius de Desenvolupament Sostenible (ODS) definits per l'ONU. Amb cada decisió, ens esforcem per contribuir a un futur més just, més saludable i més sostenible per a totes les persones i el planeta."}
            </p>
          </div>
        </Container>
      </section>

      {/* ── 01 Sustainability ── */}
      <section className="bg-primary-50 py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-400">
                01
              </p>
              <h2 className="text-4xl font-black tracking-tight text-primary-900 lg:text-5xl">
                {locale === "es" && "Sostenibilidad"}
                {locale === "en" && "Sustainability"}
                {locale === "ca" && "Sostenibilitat"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-secondary-700">
                {locale === "es" &&
                  "Reducimos la huella ecológica utilizando materiales biodegradables, promoviendo cultivos no extractivos y respetando los ciclos naturales."}
                {locale === "en" &&
                  "We reduce the ecological footprint by using biodegradable materials, promoting non-extractive crops, and respecting natural cycles."}
                {locale === "ca" &&
                  "Reduïm la petjada ecològica utilitzant materials biodegradables, promovent cultius no extractius i respectant els cicles naturals."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Desde el cultivo del bambú hasta el montaje final de cada bicicleta, cada decisión que tomamos tiene como objetivo reducir nuestra huella ambiental sin comprometer la calidad ni el diseño."}
                {locale === "en" &&
                  "From the cultivation of bamboo to the final assembly of each bicycle, every decision we make aims to reduce our environmental footprint without compromising on quality or design."}
                {locale === "ca" &&
                  "Des del cultiu del bambú fins al muntatge final de cada bicicleta, cada decisió que prenem té com a objectiu reduir la nostra petjada ambiental sense comprometre la qualitat ni el disseny."}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Elegimos el bambú porque es un material que respeta el planeta desde el principio: crece rápido, es muy resistente y absorbe grandes cantidades de CO₂. A diferencia del aluminio o el acero, su cultivo no depende de procesos extractivos contaminantes y genera un impacto positivo en el medio ambiente. Al final de su vida útil, también se biodegrada de forma natural, reduciendo su huella como residuo. Montar una bicicleta de bambú hecha a mano en Barcelona es también una forma de cuidar los ecosistemas."}
                {locale === "en" &&
                  "We choose bamboo because it is a material that respects the planet from the start: it grows quickly, is highly resistant, and absorbs large amounts of CO₂. Unlike aluminum or steel, its cultivation does not rely on polluting extractive processes and generates a positive impact on the environment. At the end of its useful life, it also biodegrades naturally, reducing its footprint as waste. Riding a bamboo bicycle handmade in Barcelona is also a way of caring for ecosystems."}
                {locale === "ca" &&
                  "Triem el bambú perquè és un material que respecta el planeta des del principi: creix ràpidament, és molt resistent i absorbeix grans quantitats de CO₂. A diferència de l'alumini o l'acer, el seu cultiu no depèn de processos extractius contaminants i genera un impacte positiu en el medi ambient. Al final de la seva vida útil, també es biodegrada de manera natural, reduint la seva petjada com a residu. Pedalar en una bicicleta de bambú feta a mà a Barcelona és també una manera de cuidar els ecosistemes."}
              </p>
              {/* SDG Badges */}
              <div className="mt-6 flex flex-wrap items-end gap-3">
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods12_es_consumo-responsable.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods12_ca_consum-responsable.png"
                        : "/SDG%20English/ods12_en_responsible-consumption.png"
                  }
                  alt="SDG 12"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods13_es_accion-climatica.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods13_ca_accio-climatica.png"
                        : "/SDG%20English/ods13_en_climate-action.png"
                  }
                  alt="SDG 13"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods15_es_ecosistemas-terrestres.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods15_ca_ecosistemes-terrestres.png"
                        : "/SDG%20English/ods15_en_life-on-land.png"
                  }
                  alt="SDG 15"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
            {/* Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-72 w-72 rounded-full bg-primary-100 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-40 w-40 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="50"
                      y1="88"
                      x2="50"
                      y2="12"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <ellipse
                      cx="50"
                      cy="68"
                      rx="2"
                      ry="2"
                      fill="currentColor"
                    />
                    <ellipse
                      cx="50"
                      cy="48"
                      rx="2"
                      ry="2"
                      fill="currentColor"
                    />
                    <ellipse
                      cx="50"
                      cy="28"
                      rx="2"
                      ry="2"
                      fill="currentColor"
                    />
                    <path
                      d="M50 63 Q67 52 74 38 Q61 45 50 63"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <path
                      d="M50 43 Q33 32 26 18 Q39 25 50 43"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M50 53 Q63 37 73 26 Q60 41 50 53"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <ellipse
                      cx="50"
                      cy="88"
                      rx="18"
                      ry="4"
                      fill="currentColor"
                      opacity="0.15"
                    />
                  </svg>
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-300 opacity-50" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02 Local Production ── */}
      <section className="bg-white py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Illustration (left on desktop) */}
            <div className="flex items-center justify-center lg:order-first order-last">
              <div className="relative">
                <div className="h-72 w-72 rounded-3xl bg-[#f5efe6] lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-40 w-40 text-secondary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <rect
                      x="15"
                      y="50"
                      width="20"
                      height="40"
                      strokeWidth="3"
                      rx="2"
                    />
                    <rect
                      x="40"
                      y="35"
                      width="25"
                      height="55"
                      strokeWidth="3"
                      rx="2"
                    />
                    <rect
                      x="70"
                      y="45"
                      width="18"
                      height="45"
                      strokeWidth="3"
                      rx="2"
                    />
                    <rect
                      x="20"
                      y="58"
                      width="5"
                      height="5"
                      fill="currentColor"
                      opacity="0.35"
                    />
                    <rect
                      x="30"
                      y="58"
                      width="5"
                      height="5"
                      fill="currentColor"
                      opacity="0.35"
                    />
                    <rect
                      x="20"
                      y="70"
                      width="5"
                      height="5"
                      fill="currentColor"
                      opacity="0.35"
                    />
                    <rect
                      x="46"
                      y="43"
                      width="5"
                      height="5"
                      fill="currentColor"
                      opacity="0.35"
                    />
                    <rect
                      x="56"
                      y="43"
                      width="5"
                      height="5"
                      fill="currentColor"
                      opacity="0.35"
                    />
                    <rect
                      x="46"
                      y="56"
                      width="5"
                      height="5"
                      fill="currentColor"
                      opacity="0.35"
                    />
                    <path
                      d="M52 20 C52 17 49 15 47 17 C45 15 42 17 42 20 C42 23 47 28 47 28 C47 28 52 23 52 20Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <line
                      x1="10"
                      y1="90"
                      x2="90"
                      y2="90"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary-500">
                02
              </p>
              <h2 className="text-4xl font-black tracking-tight text-secondary-900 lg:text-5xl">
                {locale === "es" && "Plantación y Producción Local"}
                {locale === "en" && "Plantation and Local Production"}
                {locale === "ca" && "Plantació i Producció Local"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-secondary-600">
                {locale === "es" &&
                  "Con nuestra plantación en Lleida y la producción en Barcelona, apoyamos una economía de proximidad arraigada en el territorio que genera empleo local con criterios éticos y sostenibles."}
                {locale === "en" &&
                  "With our plantation in Lleida and production in Barcelona, we support a proximity economy rooted in the territory that generates local employment with ethical and sustainable criteria."}
                {locale === "ca" &&
                  "Amb la nostra plantació a Lleida i la producció a Barcelona, recolzem una economia de proximitat arrelada al territori que genera ocupació local amb criteris ètics i sostenibles."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Todo lo que hacemos, lo hacemos nosotros. Nuestros productos son 100% artesanales en Barcelona, utilizando materiales de producción local como el bambú Phyllostachys aurea y Phyllostachys nigra cultivado en Cataluña. Colaboramos con viveros en Gavà y mantenemos una plantación en Lleida, apostando por una economía de proximidad arraigada en la tierra y su gente."}
                {locale === "en" &&
                  "Everything we do, we do in-house. Our products are 100% handmade in Barcelona, using locally sourced materials such as Phyllostachys aurea and Phyllostachys nigra bamboo grown in Catalonia. We collaborate with nurseries in Gavà and maintain a plantation in Lleida, betting on a proximity-based economy rooted in the land and its people."}
                {locale === "ca" &&
                  "Tot el que fem, ho fem nosaltres. Els nostres productes són 100% artesanals a Barcelona, utilitzant materials d'origen local com el bambú Phyllostachys aurea i Phyllostachys nigra cultivat a Catalunya. Col·laborem amb vivers a Gavà i mantenim una plantació a Lleida, apostant per una economia de proximitat arrelada a la terra i la seva gent."}
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-3">
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods8_es_trabajo-decente.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods8_ca_feina-digna.png"
                        : "/SDG%20English/ods8_en_decent-work.png"
                  }
                  alt="SDG 8"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods11_es_ciudades-sostenibles.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods11_ca_ciutats-sostenibles.png"
                        : "/SDG%20English/ods11_en_sustainable-cities.png"
                  }
                  alt="SDG 11"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods12_es_consumo-responsable.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods12_ca_consum-responsable.png"
                        : "/SDG%20English/ods12_en_responsible-consumption.png"
                  }
                  alt="SDG 12"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 03 Innovation ── */}
      <section className="relative overflow-hidden bg-primary-800 py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-primary-900/50 to-transparent" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-600/20" />
        </div>
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div className="text-white">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-300">
                03
              </p>
              <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
                {locale === "es" && "Innovación"}
                {locale === "en" && "Innovation"}
                {locale === "ca" && "Innovació"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-primary-200">
                {locale === "es" &&
                  "Combinamos técnicas artesanales y tecnología avanzada para producir de forma más eficiente, sostenible y con menor impacto."}
                {locale === "en" &&
                  "We combine artisanal techniques and advanced technology to produce more efficiently, sustainably, and with lower impact."}
                {locale === "ca" &&
                  "Combinem tècniques artesanals i tecnologia avançada per produir de manera més eficient, sostenible i amb menor impacte."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-primary-100">
                {locale === "es" &&
                  "Combinamos la tradición artesanal y la tecnología avanzada. Nuestro proceso de fabricación incorpora técnicas como la impresión 3D y el diseño paramétrico para garantizar precisión, rendimiento y estilo en cada pieza. Las influencias del savoir-faire francés y catalán se mezclan con el carácter creativo de la cultura urbana de Barcelona."}
                {locale === "en" &&
                  "We combine artisanal tradition and advanced technology. Our manufacturing process incorporates techniques such as 3D printing and parametric design to ensure precision, performance, and style in every piece. Influences from French and Catalan savoir-faire blend with the creative character of Barcelona's urban culture."}
                {locale === "ca" &&
                  "Combinem la tradició artesanal i la tecnologia avançada. El nostre procés de fabricació incorpora tècniques com la impressió 3D i el disseny paramètric per garantir precisió, rendiment i estil en cada peça. Les influències del savoir-faire francès i català es barregen amb el caràcter creatiu de la cultura urbana de Barcelona."}
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-3">
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods9_es_innovacion-industria.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods9_ca_industria-innovacio.png"
                        : "/SDG%20English/ods9_en_industry-innovation.png"
                  }
                  alt="SDG 9"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods12_es_consumo-responsable.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods12_ca_consum-responsable.png"
                        : "/SDG%20English/ods12_en_responsible-consumption.png"
                  }
                  alt="SDG 12"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
            {/* Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-72 w-72 rounded-full bg-primary-700/40 ring-1 ring-primary-500/30 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-40 w-40 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="38" r="20" strokeWidth="3" />
                    <path
                      d="M42 58 L42 68 Q42 75 50 75 Q58 75 58 68 L58 58"
                      strokeWidth="3"
                    />
                    <line x1="42" y1="64" x2="58" y2="64" strokeWidth="2.5" />
                    <line
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    <line
                      x1="72"
                      y1="20"
                      x2="76"
                      y2="16"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    <line
                      x1="82"
                      y1="40"
                      x2="87"
                      y2="40"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    <line
                      x1="28"
                      y1="20"
                      x2="24"
                      y2="16"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    <line
                      x1="18"
                      y1="40"
                      x2="13"
                      y2="40"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    <circle
                      cx="45"
                      cy="38"
                      r="2"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <circle
                      cx="50"
                      cy="33"
                      r="2"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <circle
                      cx="55"
                      cy="38"
                      r="2"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <circle
                      cx="50"
                      cy="43"
                      r="2"
                      fill="currentColor"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 04 Responsible Consumption ── */}
      <section className="bg-[#f7f3ed] py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Illustration (left) */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-72 w-72 rounded-3xl bg-primary-100 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-44 w-44 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 20 A30 30 0 1 1 25 68"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M25 68 L18 60 M25 68 L33 60"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44 56 L56 44"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <circle cx="43" cy="57" r="5" strokeWidth="3" />
                    <circle cx="57" cy="43" r="5" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">
                04
              </p>
              <h2 className="text-4xl font-black tracking-tight text-primary-900 lg:text-5xl">
                {locale === "es" && "Consumo Responsable"}
                {locale === "en" && "Responsible Consumption"}
                {locale === "ca" && "Consum Responsable"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-secondary-600">
                {locale === "es" &&
                  "Creamos productos duraderos, reparables y personalizables que fomentan un consumo consciente y respetuoso."}
                {locale === "en" &&
                  "We create durable, repairable, and customizable products that encourage conscious and respectful consumption."}
                {locale === "ca" &&
                  "Creem productes duradors, reparables i personalitzables que fomenten un consum conscient i respectuós."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Etika Bikes nació como respuesta a un modelo económico insostenible. Creamos alternativas sostenibles: bicicletas de bambú duraderas, reparables y personalizables. Cada bici es una invitación a reflexionar sobre cómo consumimos y a elegir productos que respetan tanto a las personas como al medio ambiente."}
                {locale === "en" &&
                  "Etika Bikes was born as a response to an unsustainable economic model. We create sustainable alternatives: bamboo bicycles that are durable, repairable, and customizable. Each bike is an invitation to reflect on how we consume and to choose products that respect both people and the environment."}
                {locale === "ca" &&
                  "Etika Bikes va néixer com a resposta a un model econòmic insostenible. Creem alternatives sostenibles: bicicletes de bambú duradores, reparables i personalitzables. Cada bici és una invitació a reflexionar sobre com consumim i a escollir productes que respecten tant a les persones com al medi ambient."}
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-3">
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods12_es_consumo-responsable.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods12_ca_consum-responsable.png"
                        : "/SDG%20English/ods12_en_responsible-consumption.png"
                  }
                  alt="SDG 12"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods13_es_accion-climatica.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods13_ca_accio-climatica.png"
                        : "/SDG%20English/ods13_en_climate-action.png"
                  }
                  alt="SDG 13"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 05 Collective Environmental Awareness ── */}
      <section className="bg-white py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">
                05
              </p>
              <h2 className="text-4xl font-black tracking-tight text-primary-900 lg:text-5xl">
                {locale === "es" && "Consciencia Ambiental Colectiva"}
                {locale === "en" && "Collective Environmental Awareness"}
                {locale === "ca" && "Consciència Ambiental Col·lectiva"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-secondary-600">
                {locale === "es" &&
                  "Nuestros talleres refuerzan la educación ambiental, el empoderamiento ciudadano y la creación de redes con proyectos y comunidades afines."}
                {locale === "en" &&
                  "Our workshops reinforce environmental education, citizen empowerment, and networking with like-minded projects and communities."}
                {locale === "ca" &&
                  "Els nostres tallers reforcen l'educació ambiental, l'empoderament ciutadà i la creació de xarxes amb projectes i comunitats afins."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Creemos que el cambio es colectivo. Por eso somos parte de la red Barcelona + Sostenible, el mapa de economía solidaria Pam a Pam y el sistema de certificación Biosphere —redes que promueven una economía local basada en valores."}
                {locale === "en" &&
                  "We believe that change is collective. That's why we are part of the Barcelona + Sostenible network, the Pam a Pam solidarity economy map, and the Biosphere certification system—networks that promote a local and values-driven economy."}
                {locale === "ca" &&
                  "Creiem que el canvi és col·lectiu. Per això som part de la xarxa Barcelona + Sostenible, el mapa d'economia solidària Pam a Pam i el sistema de certificació Biosphere —xarxes que promouen una economia local basada en valors."}
              </p>
              {/* Partner logos */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <Image
                    src="/logos/logo_pam-a-pam.png"
                    alt="Pam a Pam"
                    width={80}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <Image
                    src="/logos/logo_biosphere.png"
                    alt="Biosphere"
                    width={80}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <Image
                    src="/logos/logo_bcn-mes-sostenible.png"
                    alt="Barcelona + Sostenible"
                    width={80}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Nuestros talleres de autoconstrucción no solo promueven la sostenibilidad, sino que también fortalecen el empoderamiento ciudadano, la educación ambiental práctica y las conexiones entre personas. Con cada bicicleta, contribuimos a la solidaridad verde entre barrios y comunidades. No solo construimos bicis: impulsamos un movimiento hacia un futuro más justo y sostenible."}
                {locale === "en" &&
                  "Our self-building workshops not only promote sustainability, but also strengthen citizen empowerment, hands-on environmental education, and connections between people. With every bicycle, we contribute to green solidarity between neighborhoods and communities. We don't just build bikes: we drive a movement toward a more just and sustainable future."}
                {locale === "ca" &&
                  "Els nostres tallers d'autoconstrucció no només promouen la sostenibilitat, sinó que també enforteixen l'empoderament ciutadà, l'educació ambiental pràctica i les connexions entre persones. Amb cada bicicleta, contribuïm a la solidaritat verda entre barris i comunitats. No només construïm bicis: impulsem un moviment cap a un futur més just i sostenible."}
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-3">
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods4_es_educacion-calidad.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods4_ca_educacio-qualitat.png"
                        : "/SDG%20English/ods4_en_quality-education.png"
                  }
                  alt="SDG 4"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods11_es_ciudades-sostenibles.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods11_ca_ciutats-sostenibles.png"
                        : "/SDG%20English/ods11_en_sustainable-cities.png"
                  }
                  alt="SDG 11"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods17_es_alianzas-objetivos.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods17_ca_aliances-objectius.png"
                        : "/SDG%20English/ods17_en_partnerships-goal.png"
                  }
                  alt="SDG 17"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
            {/* Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-72 w-72 rounded-full bg-primary-50 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-44 w-44 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="8"
                      strokeWidth="3"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="50" cy="50" r="4" fill="currentColor" />
                    <circle cx="80" cy="30" r="6" strokeWidth="2.5" />
                    <circle cx="80" cy="70" r="6" strokeWidth="2.5" />
                    <circle cx="20" cy="30" r="6" strokeWidth="2.5" />
                    <circle cx="20" cy="70" r="6" strokeWidth="2.5" />
                    <circle cx="50" cy="15" r="6" strokeWidth="2.5" />
                    <circle cx="50" cy="85" r="6" strokeWidth="2.5" />
                    <line
                      x1="50"
                      y1="50"
                      x2="80"
                      y2="30"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="80"
                      y2="70"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="20"
                      y2="30"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="20"
                      y2="70"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="15"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="85"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="80"
                      y1="30"
                      x2="50"
                      y2="15"
                      strokeWidth="1"
                      opacity="0.25"
                    />
                    <line
                      x1="80"
                      y1="30"
                      x2="80"
                      y2="70"
                      strokeWidth="1"
                      opacity="0.25"
                    />
                    <line
                      x1="20"
                      y1="30"
                      x2="50"
                      y2="15"
                      strokeWidth="1"
                      opacity="0.25"
                    />
                    <line
                      x1="20"
                      y1="70"
                      x2="20"
                      y2="30"
                      strokeWidth="1"
                      opacity="0.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 06 Passion for Bikes ── */}
      <section
        className="py-20 lg:py-32"
        style={{ backgroundColor: "#5a4a3b" }}
      >
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Illustration (left on desktop) */}
            <div className="flex items-center justify-center lg:order-first order-last">
              <div className="relative">
                <div className="h-72 w-72 rounded-full bg-white/10 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-44 w-44 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <circle cx="25" cy="65" r="18" strokeWidth="3" />
                    <circle cx="75" cy="65" r="18" strokeWidth="3" />
                    <line
                      x1="50"
                      y1="38"
                      x2="25"
                      y2="65"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="38"
                      x2="75"
                      y2="65"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="65"
                      x2="50"
                      y2="38"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="25"
                      y1="65"
                      x2="50"
                      y2="65"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="38"
                      x2="62"
                      y2="30"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="56"
                      y1="25"
                      x2="68"
                      y2="25"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="38"
                      x2="40"
                      y2="30"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="34"
                      y1="28"
                      x2="46"
                      y2="28"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M47 50 C47 48 45 47 44 48 C43 47 41 48 41 50 C41 52 44 55 44 55 C44 55 47 52 47 50Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div className="absolute -inset-4 rounded-full border border-dashed border-white/20" />
              </div>
            </div>
            {/* Text */}
            <div className="text-white">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
                06
              </p>
              <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
                {locale === "es" && "Pasión por las Bicicletas"}
                {locale === "en" && "Passion for Bikes"}
                {locale === "ca" && "Passió per les Bicicletes"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-white/70">
                {locale === "es" &&
                  "Promovemos una movilidad activa, saludable y libre de emisiones. Cada pedalada es un acto de compromiso con uno mismo y con el planeta."}
                {locale === "en" &&
                  "We promote active, healthy, and emission-free mobility. Every pedal stroke is an act of commitment to oneself and to the planet."}
                {locale === "ca" &&
                  "Promovem una mobilitat activa, saludable i lliure d'emissions. Cada pedalada és un acte de compromís amb un mateix i amb el planeta."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                {locale === "es" &&
                  "Soñamos con bicis, pensamos en bicis y vivimos sobre dos ruedas. Queremos compartir esta pasión contigo y animarte a pedalear siempre que puedas. Porque cada kilómetro recorrido en una bici Etika es una declaración de intenciones, una forma de vida."}
                {locale === "en" &&
                  "We dream of bikes, think about bikes, and live on two wheels. We want to share this passion with you and encourage you to ride whenever you can. Because every kilometer traveled on an Etika bike is a statement of intent, a way of life."}
                {locale === "ca" &&
                  "Somiem amb bicis, pensem en bicis i vivim sobre dues rodes. Volem compartir aquesta passió amb tu i animar-te a pedalar sempre que puguis. Perquè cada quilòmetre recorregut en una bici Etika és una declaració d'intencions, una forma de vida."}
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-3">
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods3_es_salud-bienestar.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods3_ca_salut-benestar.png"
                        : "/SDG%20English/ods3_en_good-health.png"
                  }
                  alt="SDG 3"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods11_es_ciudades-sostenibles.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods11_ca_ciutats-sostenibles.png"
                        : "/SDG%20English/ods11_en_sustainable-cities.png"
                  }
                  alt="SDG 11"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods13_es_accion-climatica.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods13_ca_accio-climatica.png"
                        : "/SDG%20English/ods13_en_climate-action.png"
                  }
                  alt="SDG 13"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 07 Sustainable Urban Mobility ── */}
      <section className="bg-primary-50 py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">
                07
              </p>
              <h2 className="text-4xl font-black tracking-tight text-primary-900 lg:text-5xl">
                {locale === "es" && "Movilidad Urbana Sostenible"}
                {locale === "en" && "Sustainable Urban Mobility"}
                {locale === "ca" && "Mobilitat Urbana Sostenible"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-secondary-600">
                {locale === "es" &&
                  "Promovemos una movilidad urbana más limpia, accesible y conectada. Cada bicicleta Etika ayuda a construir ciudades más humanas y habitables."}
                {locale === "en" &&
                  "We promote cleaner, more accessible, and more connected urban mobility. Each Etika bicycle helps build more human and livable cities."}
                {locale === "ca" &&
                  "Promovem una mobilitat urbana més neta, accessible i connectada. Cada bicicleta Etika ajuda a construir ciutats més humanes i habitables."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Queremos que nuestras bicicletas sean más que objetos especiales: son una solución concreta para la movilidad ecológica cotidiana. Cada bici Etika es también una herramienta de transformación urbana."}
                {locale === "en" &&
                  "We want our bicycles to be more than just special objects—they are a concrete solution for daily ecological mobility. Each Etika bike is also a tool for urban transformation."}
                {locale === "ca" &&
                  "Volem que les nostres bicicletes siguin més que objectes especials: són una solució concreta per a la mobilitat ecològica quotidiana. Cada bici Etika és també una eina de transformació urbana."}
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3 text-lg leading-relaxed text-gray-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                  {locale === "es" &&
                    "Ofrecemos bicicletas funcionales, duraderas y prácticas para entornos urbanos."}
                  {locale === "en" &&
                    "We offer functional, durable, and practical bicycles for urban environments."}
                  {locale === "ca" &&
                    "Oferim bicicletes funcionals, duradores i pràctiques per a entorns urbans."}
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-gray-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                  {locale === "es" &&
                    "Contribuimos a una ciudad más humana, habitable y conectada."}
                  {locale === "en" &&
                    "We contribute to a more human, livable, and connected city."}
                  {locale === "ca" &&
                    "Contribuïm a una ciutat més humana, habitable i connectada."}
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap items-end gap-3">
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods11_es_ciudades-sostenibles.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods11_ca_ciutats-sostenibles.png"
                        : "/SDG%20English/ods11_en_sustainable-cities.png"
                  }
                  alt="SDG 11"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <Image
                  src={
                    locale === "es"
                      ? "/SDG%20Spanish/ods13_es_accion-climatica.png"
                      : locale === "ca"
                        ? "/SDG%20Catalan/ods13_ca_accio-climatica.png"
                        : "/SDG%20English/ods13_en_climate-action.png"
                  }
                  alt="SDG 13"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
            {/* Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-72 w-72 rounded-full bg-primary-100 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-44 w-44 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <rect
                      x="10"
                      y="50"
                      width="15"
                      height="30"
                      strokeWidth="2.5"
                      rx="1"
                    />
                    <rect
                      x="30"
                      y="38"
                      width="20"
                      height="42"
                      strokeWidth="2.5"
                      rx="1"
                    />
                    <rect
                      x="55"
                      y="44"
                      width="15"
                      height="36"
                      strokeWidth="2.5"
                      rx="1"
                    />
                    <rect
                      x="75"
                      y="52"
                      width="15"
                      height="28"
                      strokeWidth="2.5"
                      rx="1"
                    />
                    <line
                      x1="10"
                      y1="85"
                      x2="90"
                      y2="85"
                      strokeWidth="2"
                      strokeDasharray="5 3"
                    />
                    <circle cx="35" cy="79" r="5" strokeWidth="2" />
                    <circle cx="55" cy="79" r="5" strokeWidth="2" />
                    <line
                      x1="45"
                      y1="68"
                      x2="35"
                      y2="79"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="45"
                      y1="68"
                      x2="55"
                      y2="79"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="45"
                      y1="68"
                      x2="45"
                      y2="79"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="35"
                      y1="79"
                      x2="45"
                      y2="79"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="45"
                      y1="68"
                      x2="52"
                      y2="63"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="38"
                      y1="65"
                      x2="45"
                      y2="65"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="78" cy="18" r="7" strokeWidth="2.5" />
                    <line
                      x1="78"
                      y1="5"
                      x2="78"
                      y2="2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="91"
                      y1="18"
                      x2="94"
                      y2="18"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="87"
                      y1="9"
                      x2="89"
                      y2="7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="87"
                      y1="27"
                      x2="89"
                      y2="29"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Closing Statement ── */}
      <section className="border-t border-primary-200 bg-white py-20 lg:py-28">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-primary-300" />
              <div className="h-2 w-2 rounded-full bg-primary-400" />
              <div className="h-px w-16 bg-primary-300" />
            </div>
            <p className="text-2xl font-bold text-primary-800 lg:text-3xl">
              {locale === "es" &&
                "\u201cEtika es, ante todo, una forma de vida.\u201d"}
              {locale === "en" &&
                "\u201cEtika is, above all, a way of life.\u201d"}
              {locale === "ca" &&
                "\u201cEtika és, sobretot, una forma de vida.\u201d"}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {locale === "es" &&
                "Aspiramos a ofrecer una solución real para la movilidad urbana sostenible: accesible, funcional y en armonía con el entorno."}
              {locale === "en" &&
                "We aim to offer a real solution for sustainable urban mobility: accessible, functional and in harmony with the environment."}
              {locale === "ca" &&
                "Aspirem a oferir una solució real per a la mobilitat urbana sostenible: accessible, funcional i en harmonia amb l'entorn."}
            </p>
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <Container maxWidth="2xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Card 1 - What's Included */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Workshop tools and materials"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold text-white lg:text-4xl">
                    {locale === "es" && "Qué Incluye el Taller"}
                    {locale === "en" && "What the Workshop Includes"}
                    {locale === "ca" && "Què Inclou el Taller"}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {locale === "es" &&
                        "Orientación técnica y supervisión por artesanos de Etika Bikes"}
                      {locale === "en" &&
                        "Technical guidance and supervision by Etika Bikes artisans"}
                      {locale === "ca" &&
                        "Orientació tècnica i supervisió per artesans d'Etika Bikes"}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {locale === "es" &&
                        "Todos los materiales: tubos de bambú, fibras naturales, resinas, herramientas y accesorios"}
                      {locale === "en" &&
                        "All materials: bamboo tubes, natural fibers, resins, tools and accessories"}
                      {locale === "ca" &&
                        "Tots els materials: tubs de bambú, fibres naturals, resines, eines i accessoris"}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {locale === "es" && "Ajuste del cuadro según tus medidas"}
                      {locale === "en" &&
                        "Frame adjustment according to your measurements"}
                      {locale === "ca" &&
                        "Ajust del quadre segons les teves mides"}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
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
            </div>

            {/* Card 2 - Why Build */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Person working on bamboo bicycle"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-800/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold text-white lg:text-4xl">
                    {locale === "es" &&
                      "Por Qué Construir tu Propia Bicicleta de Bambú"}
                    {locale === "en" && "Why Build Your Own Bamboo Bicycle"}
                    {locale === "ca" &&
                      "Per Què Construir la Teva Pròpia Bicicleta de Bambú"}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50/50 hover:bg-secondary-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-secondary-700 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-white"
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
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {locale === "es" &&
                        "Reduce tu huella ambiental utilizando materiales naturales y sostenibles"}
                      {locale === "en" &&
                        "Reduce your environmental footprint using natural and sustainable materials"}
                      {locale === "ca" &&
                        "Redueix la teva petjada ambiental utilitzant materials naturals i sostenibles"}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50/50 hover:bg-secondary-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-secondary-700 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {locale === "es" &&
                        "Aprende un proceso técnico y artesanal a través de la práctica directa"}
                      {locale === "en" &&
                        "Learn a technical and artisanal process through hands-on practice"}
                      {locale === "ca" &&
                        "Aprèn un procés tècnic i artesanal a través de la pràctica directa"}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50/50 hover:bg-secondary-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-secondary-700 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
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
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 lg:py-24">
        <Container maxWidth="2xl">
          {/* Sustainable Craftsmanship Card */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="https://images.unsplash.com/photo-1606898604882-0192d2139a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Bamboo bicycle workshop craftsmanship"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg">
                    <p className="text-sm font-semibold text-primary-800">
                      {locale === "es" &&
                        "L'Hospitalet de Llobregat, Barcelona"}
                      {locale === "en" &&
                        "L'Hospitalet de Llobregat, Barcelona"}
                      {locale === "ca" &&
                        "L'Hospitalet de Llobregat, Barcelona"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-8">
                <div className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                  {locale === "es" && "Nuestro Taller"}
                  {locale === "en" && "Our Workshop"}
                  {locale === "ca" && "El Nostre Taller"}
                </div>
                <h2 className="text-4xl font-bold text-primary-800 lg:text-5xl mb-6">
                  {locale === "es" && "Artesanía Sostenible"}
                  {locale === "en" && "Sustainable Craftsmanship"}
                  {locale === "ca" && "Artesania Sostenible"}
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-gray-700">
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

                {/* Features */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-800">
                      100%
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {locale === "es" && "Artesanal"}
                      {locale === "en" && "Handmade"}
                      {locale === "ca" && "Artesanal"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-800">
                      Local
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {locale === "es" && "Barcelona"}
                      {locale === "en" && "Barcelona"}
                      {locale === "ca" && "Barcelona"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-800">
                      Eco
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {locale === "es" && "Sostenible"}
                      {locale === "en" && "Sustainable"}
                      {locale === "ca" && "Sostenible"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Process */}
          <div className="relative">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
                {locale === "es" && "Paso a Paso"}
                {locale === "en" && "Step by Step"}
                {locale === "ca" && "Pas a Pas"}
              </div>
              <h2 className="text-4xl font-bold text-primary-800 lg:text-5xl">
                {locale === "es" && "El Proceso de Personalización Etika"}
                {locale === "en" && "The Etika Customization Process"}
                {locale === "ca" && "El Procés de Personalització Etika"}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left side - Process image */}
              <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Custom bicycle manufacturing process"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-transparent to-secondary-900/60"></div>
              </div>

              {/* Right side - Process steps */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-600">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary-800 mb-2">
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
                </div>

                {/* Step 2 */}
                <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-600">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary-800 mb-2">
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
                </div>

                {/* Step 3 */}
                <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary-700">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-700 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary-800 mb-2">
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
                </div>

                {/* Step 4 */}
                <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-600">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary-800 mb-2">
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
                </div>

                {/* Step 5 */}
                <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-600">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                        5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary-800 mb-2">
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
            <Image
              src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Carbon frame repair workshop"
              width={2070}
              height={1380}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Main Service Description ── */}
      <section className="bg-white py-20 lg:py-28">
        <Container maxWidth="2xl">
          <div className="mx-auto max-w-4xl">
            {/* Eyebrow */}
            <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.25em] text-primary-500">
              {locale === "es" &&
                "Reparación especializada de cuadros de carbono en Barcelona"}
              {locale === "en" &&
                "Specialized carbon frame repair in Barcelona"}
              {locale === "ca" &&
                "Reparació especialitzada de quadres de carboni a Barcelona"}
            </p>
            {/* Main Heading */}
            <h2 className="text-2xl font-light leading-relaxed text-gray-800 lg:text-3xl">
              {locale === "es" &&
                "Reparamos, Reforzamos y Alargamos la Vida de Tu Bicicleta"}
              {locale === "en" &&
                "We Repair, Reinforce and Extend the Life of Your Bicycle"}
              {locale === "ca" &&
                "Reparem, Reforcem i Allargem la Vida de la Teva Bicicleta"}
            </h2>
            {/* Thin rule */}
            <div className="my-8 h-px w-24 bg-primary-300" />
            {/* Para 1 */}
            <p className="text-lg leading-relaxed text-gray-600">
              {locale === "es" &&
                "En Etika Bikes, ofrecemos un servicio especializado de reparación de cuadros de carbono que combina precisión estructural, experiencia artesanal y materiales sostenibles."}
              {locale === "en" &&
                "At Etika Bikes, we offer a specialized carbon frame repair service combining structural precision, artisanal expertise and sustainable materials."}
              {locale === "ca" &&
                "A Etika Bikes, oferim un servei especialitzat de reparació de quadres de carboni que combina precisió estructural, experiència artesanal i materials sostenibles."}
            </p>
            {/* Para 2 */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {locale === "es" &&
                "Nuestro objetivo es restaurar la integridad y el rendimiento original de tu bicicleta mientras evitamos el desperdicio innecesario y alargamos su vida útil."}
              {locale === "en" &&
                "Our goal is to restore the original integrity and performance of your bicycle while avoiding unnecessary waste and extending its lifespan."}
              {locale === "ca" &&
                "El nostre objectiu és restaurar la integritat i el rendiment original de la teva bicicleta mentre evitem el malbaratament innecessari i allargem la seva vida útil."}
            </p>
            {/* Para 3 */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {locale === "es" &&
                "Todas las reparaciones se realizan a mano en nuestro taller en L'Hospitalet de Llobregat (Barcelona), siguiendo los mismos estándares de calidad utilizados en nuestros cuadros de bambú y fibra natural."}
              {locale === "en" &&
                "All repairs are carried out by hand in our workshop in L'Hospitalet de Llobregat (Barcelona), following the same quality standards used in our bamboo and natural fiber frames."}
              {locale === "ca" &&
                "Totes les reparacions es realitzen a mà al nostre taller a L'Hospitalet de Llobregat (Barcelona), seguint els mateixos estàndards de qualitat utilitzats als nostres quadres de bambú i fibra natural."}
            </p>
          </div>
        </Container>
      </section>

      {/* ── 01 A Technical and Artisanal Process ── */}
      <section className="bg-primary-50 py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-400">
                01
              </p>
              <h2 className="text-4xl font-black tracking-tight text-primary-900 lg:text-5xl">
                {locale === "es" && "Un Proceso Técnico y Artesanal"}
                {locale === "en" && "A Technical and Artisanal Process"}
                {locale === "ca" && "Un Procés Tècnic i Artesanal"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-secondary-700">
                {locale === "es" &&
                  "Cada cuadro de carbono dañado requiere un enfoque específico. Analizamos cada caso individualmente antes de la intervención."}
                {locale === "en" &&
                  "Each damaged carbon frame requires a specific approach. We analyze every case individually before intervention."}
                {locale === "ca" &&
                  "Cada quadre de carboni danyat requereix un enfocament específic. Analitzem cada cas individualment abans de la intervenció."}
              </p>
              <p className="mt-6 text-lg font-semibold text-primary-800">
                {locale === "es" && "El proceso incluye:"}
                {locale === "en" && "The process includes:"}
                {locale === "ca" && "El procés inclou:"}
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                  </div>
                  <span>
                    {locale === "es" && "Diagnóstico estructural e inspección visual"}
                    {locale === "en" && "Structural diagnosis and visual inspection"}
                    {locale === "ca" && "Diagnòstic estructural i inspecció visual"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                  </div>
                  <span>
                    {locale === "es" && "Preparación de la zona dañada"}
                    {locale === "en" && "Preparation of the damaged area"}
                    {locale === "ca" && "Preparació de la zona danyada"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                  </div>
                  <span>
                    {locale === "es" &&
                      "Laminación usando fibra de carbono o fibra de lino con resinas epoxi de alto rendimiento"}
                    {locale === "en" &&
                      "Lamination using carbon fiber or flax fiber with high-performance epoxy resins"}
                    {locale === "ca" &&
                      "Laminació utilitzant fibra de carboni o fibra de lli amb resines epoxi d'alt rendiment"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                  </div>
                  <span>
                    {locale === "es" && "Curado controlado y acabado final"}
                    {locale === "en" && "Controlled curing and final finish"}
                    {locale === "ca" && "Curat controlat i acabat final"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                  </div>
                  <span>
                    {locale === "es" &&
                      "Verificación completa de seguridad y rigidez"}
                    {locale === "en" &&
                      "Complete verification for safety and stiffness"}
                    {locale === "ca" &&
                      "Verificació completa de seguretat i rigidesa"}
                  </span>
                </li>
              </ul>
            </div>
            {/* Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-72 w-72 rounded-full bg-primary-100 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-40 w-40 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    {/* Wrench icon */}
                    <path
                      d="M65 25 L75 15 L85 25 L75 35 Z"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M75 25 L40 60"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="35"
                      cy="65"
                      r="15"
                      strokeWidth="3"
                    />
                    <circle
                      cx="35"
                      cy="65"
                      r="8"
                      strokeWidth="2"
                      opacity="0.5"
                    />
                    {/* Carbon fiber pattern */}
                    <path
                      d="M20 35 Q25 40 30 35 T40 35"
                      strokeWidth="2"
                      opacity="0.4"
                    />
                    <path
                      d="M55 70 Q60 75 65 70 T75 70"
                      strokeWidth="2"
                      opacity="0.4"
                    />
                  </svg>
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-300 opacity-50" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02 Repair Is Also a Sustainable Choice ── */}
      <section className="bg-[#f7f3ed] py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Illustration (left) */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-72 w-72 rounded-3xl bg-primary-100 lg:h-80 lg:w-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-44 w-44 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 100 100"
                  >
                    {/* Recycling/sustainability arrows */}
                    <path
                      d="M50 20 A30 30 0 1 1 25 68"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M25 68 L18 60 M25 68 L33 60"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Leaf symbol */}
                    <path
                      d="M55 45 Q70 35 75 45 Q70 55 55 65 Q55 55 55 45"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <path
                      d="M55 45 L55 65"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">
                02
              </p>
              <h2 className="text-4xl font-black tracking-tight text-primary-900 lg:text-5xl">
                {locale === "es" && "Reparar Es También una Elección Sostenible"}
                {locale === "en" && "Repair Is Also a Sustainable Choice"}
                {locale === "ca" && "Reparar És També una Elecció Sostenible"}
              </h2>
              <p className="mt-2 text-xl font-semibold italic text-secondary-600">
                {locale === "es" &&
                  "Reducimos el impacto ambiental y maximizamos los recursos existentes."}
                {locale === "en" &&
                  "We reduce environmental impact and maximize existing resources."}
                {locale === "ca" &&
                  "Reduïm l'impacte ambiental i maximitzem els recursos existents."}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Reparar un cuadro de carbono en lugar de reemplazarlo reduce el impacto ambiental y maximiza los recursos existentes."}
                {locale === "en" &&
                  "Repairing a carbon frame instead of replacing it reduces environmental impact and maximizes existing resources."}
                {locale === "ca" &&
                  "Reparar un quadre de carboni en lloc de substituir-lo redueix l'impacte ambiental i maximitza els recursos existents."}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {locale === "es" &&
                  "Siempre que sea posible, integramos fibras naturales de lino y resinas de base biológica, aplicando los principios de sostenibilidad también al trabajo de reparación."}
                {locale === "en" &&
                  "Whenever possible, we integrate natural flax fibers and bio-based resins, applying sustainability principles to repair work as well."}
                {locale === "ca" &&
                  "Sempre que sigui possible, integrem fibres naturals de lli i resines de base biològica, aplicant els principis de sostenibilitat també al treball de reparació."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-800 py-16 mb-16">
        <Container maxWidth="2xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold lg:text-4xl">
              {locale === "es" && "Vuelve a Rodar con Confianza"}
              {locale === "en" && "Ride Again with Confidence"}
              {locale === "ca" && "Torna a Rodar amb Confiança"}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-primary-200">
              <p>
                {locale === "es" &&
                  "Reparamos grietas, impactos y zonas debilitadas en bicicletas de carretera, gravel, MTB y eléctricas."}
                {locale === "en" &&
                  "We repair cracks, impacts and weakened areas on road, gravel, MTB and electric bicycles."}
                {locale === "ca" &&
                  "Reparem esquerdes, impactes i zones debilitades en bicicletes de carretera, gravel, MTB i elèctriques."}
              </p>
              <p>
                {locale === "es" &&
                  "Cada reparación se entrega verificada y garantizada, lista para rodar de forma segura nuevamente."}
                {locale === "en" &&
                  "Each repair is delivered verified and guaranteed, ready to ride safely again."}
                {locale === "ca" &&
                  "Cada reparació es lliura verificada i garantida, llesta per rodar de forma segura novament."}
              </p>
              <p className="text-xl font-semibold text-white">
                {locale === "es" &&
                  "Contáctanos y te asesoraremos sobre la mejor solución para tu cuadro de carbono."}
                {locale === "en" &&
                  "Contact us and we will advise you on the best solution for your carbon frame."}
                {locale === "ca" &&
                  "Contacta'ns i t'assessorarem sobre la millor solució per al teu quadre de carboni."}
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
      es: "Reparación de Cuadros de Carbono en Barcelona | Etika Bikes",
      en: "Carbon Frame Repair in Barcelona | Etika Bikes",
      ca: "Reparació de Quadres de Carboni a Barcelona | Etika Bikes",
    };

    const descriptions: Record<Locale, string> = {
      es: "Reparamos cuadros de carbono en Barcelona usando técnicas precisas y un enfoque sostenible para alargar la vida de tu bicicleta.",
      en: "We repair carbon frames in Barcelona using precise techniques and a sustainable approach to extend the life of your bicycle.",
      ca: "Reparem quadres de carboni a Barcelona utilitzant tècniques precises i un enfocament sostenible per allargar la vida de la teva bicicleta.",
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
