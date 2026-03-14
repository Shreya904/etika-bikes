import { Container } from "@/components/ui/Container";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import Link from "next/link";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";

/*
  UNSPLASH IMAGES - Easy to swap:
  Section 1 (Philosophy): https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center (Workshop/Craftsmanship)
  Section 2 (Why Bamboo): https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center (Bamboo Forest)
  Section 3 (Barcelona): https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center (Workshop Space)
  
  To swap: Change the photo ID (part after photo-) and update alt text accordingly
*/

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  return (
    <div className="bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Section 1: Philosophy & Values (Image Left, Text Right) */}
      <section className="bg-white py-20 lg:py-32">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/assets/E-bike.jpg"
                  alt="Etika Bikes bamboo e-bike"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-primary-800 lg:text-5xl">
                Our Philosophy
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                The name Etika Bikes is no coincidence. We chose it because it
                reflects who we are and how we do things: with values,
                commitment and ethics.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Etika is, above all, a way of life that we apply every day — in
                how we design, produce and relate to people and to our
                environment. Every handmade bamboo bicycle we build is born from
                a deep conviction: another way of creating, consuming and moving
                is possible.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-primary-800">
                      Sustainability:
                    </span>{" "}
                    Eco-friendly bamboo bicycles to care for the planet
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-primary-800">
                      Innovation:
                    </span>{" "}
                    Sustainable design with advanced technology
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-600"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-primary-800">
                      Local production:
                    </span>{" "}
                    Handmade bamboo bicycles made in Barcelona
                  </p>
                </div>
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
                Why Bamboo Bicycles?
              </h2>
              <p className="mt-6 text-xl font-medium text-primary-700">
                Naturally strong. Incredibly sustainable.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary-800">
                    Strength comparable to steel
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Bamboo fibers can withstand loads of up to 40 kN/cm²,
                    exceeding even steel. Our frames have been subjected to
                    certified structural fatigue tests.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800">
                    Natural comfort
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Bamboo naturally absorbs vibrations from the ground, making
                    irregularities less noticeable for smoother rides and
                    greater comfort.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800">
                    Positive environmental impact
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Unlike steel or aluminum, bamboo grows without polluting
                    extractive processes and can capture up to 35% more CO₂ than
                    other crops.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/assets/Bamboo forest.jpg"
                  alt="Sustainable bamboo forest and natural materials"
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
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/assets/Handmade.png "
                  alt="Barcelona workshop and local craftsmanship"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-primary-800 lg:text-5xl">
                Handmade in Barcelona
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We manufacture our bicycles by hand in Barcelona, using bamboo
                grown in Catalonia and supporting a proximity-based economy
                rooted in the local territory and its people.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We combine traditional craftsmanship with advanced technologies
                such as 3D printing and parametric design to ensure precision,
                performance and durability in every bicycle.
              </p>
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">
                      90%
                    </div>
                    <div className="text-sm text-gray-600">
                      Energy savings vs. industrial materials
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Handcrafted in Barcelona
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">
                      35%
                    </div>
                    <div className="text-sm text-gray-600">
                      More CO₂ capture than other crops
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">∞</div>
                    <div className="text-sm text-gray-600">
                      Each bicycle is unique
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
              Experience the Craft
            </h2>
            <p className="mt-6 text-xl text-white lg:text-2xl">
              Watch our artisans build handmade bamboo bicycles in Barcelona
            </p>
          </div>
          <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-2xl bg-black shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/9R1uogyvcH8?autoplay=0&mute=0&controls=1&showinfo=0&rel=0"
              title="Etika Bikes - Bamboo Bicycle Craftsmanship"
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
              Ready to Build Your Own?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-primary-200">
              Join our bamboo bicycle self-build workshop in Barcelona and
              create your own sustainable, handmade bicycle. No experience
              required.
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Link
                href={getFullPath("selfBuildWorkshop", locale)}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary-800 transition-all hover:bg-primary-50 hover:shadow-lg"
              >
                Join Our Workshop
              </Link>
              <Link
                href={getFullPath("customBikes", locale)}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary-800"
              >
                Custom Made Bicycles
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-primary-300">
                Have questions?{" "}
                <Link
                  href={getFullPath("contact", locale)}
                  className="underline hover:text-white"
                >
                  Get in touch
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
