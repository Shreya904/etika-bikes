import { Container } from "@/components/ui/Container";
import { type Locale } from "@/i18n";
import { ContactForm } from "./ContactForm";

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <div className="bg-gray-50">
      {/* Contact Form Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full max-h-175">
                <div className="relative h-full min-h-125">
                  <img
                    src="/assets/bike-back.jpg"
                    alt="Bamboo bicycle"
                    className="absolute inset-0 w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-primary-700 object-cover"
                  />
                  <h1 className="absolute left-11 top-11 text-4xl font-bold leading-10 text-white">
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

            <ContactForm locale={locale} />
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
                  "We&apos;re waiting for you at our workshop or store to discover our handmade bamboo bicycles up close."}
                {locale === "ca" &&
                  "T&apos;esperem al nostre taller o botiga perquè coneguis de prop les nostres bicicletes artesanals de bambú."}
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
