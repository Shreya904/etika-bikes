import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";

export function PhilosophyPage({ locale }: { locale: Locale }) {
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
