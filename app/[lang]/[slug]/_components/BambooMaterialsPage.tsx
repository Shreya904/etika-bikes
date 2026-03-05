import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";

export function BambooMaterialsPage({ locale }: { locale: Locale }) {
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
