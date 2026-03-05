import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";

export function CarbonRepairPage({ locale }: { locale: Locale }) {
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
                    {locale === "es" &&
                      "Diagnóstico estructural e inspección visual"}
                    {locale === "en" &&
                      "Structural diagnosis and visual inspection"}
                    {locale === "ca" &&
                      "Diagnòstic estructural i inspecció visual"}
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
                    <circle cx="35" cy="65" r="15" strokeWidth="3" />
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
                {locale === "es" &&
                  "Reparar Es También una Elección Sostenible"}
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
