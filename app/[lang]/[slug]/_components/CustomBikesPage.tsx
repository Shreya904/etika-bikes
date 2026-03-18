import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";

export function CustomBikesPage({ locale }: { locale: Locale }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[80vh]">
          {/* Content Side */}
          <div className="bg-primary-800 flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl xl:text-6xl mb-4 sm:mb-6">
                {locale === "es" &&
                  "Bicicletas de Bambú Hechas a Medida en Barcelona"}
                {locale === "en" && "Custom Made Bamboo Bicycles in Barcelona"}
                {locale === "ca" &&
                  "Bicicletes de Bambú Fetes a Mida a Barcelona"}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-200 leading-relaxed">
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
          <div className="relative w-full min-h-[220px] h-56 sm:h-72 md:h-80 lg:h-auto">
            <img
              src="/assets/BMX.jpg"
              alt="Custom bamboo bicycle design"
              className="w-full h-full object-cover rounded-none"
              style={{ minHeight: '220px' }}
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
                <img
                  src="/assets/Handmade.png"
                  alt="Bamboo bicycle workshop craftsmanship"
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
                <img
                  src="/assets/partsinwork.png"
                  alt="Custom bicycle manufacturing process"
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

                {/*Step 2 */}
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
