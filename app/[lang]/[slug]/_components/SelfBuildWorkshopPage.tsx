import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";

export function SelfBuildWorkshopPage({ locale }: { locale: Locale }) {
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
