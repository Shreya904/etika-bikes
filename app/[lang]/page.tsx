import { Container } from "@/components/ui/Container";
import { HeroCarousel } from "@/components/sections/HeroCarousel";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Video Section Placeholder */}
      <section className="bg-white py-16">
        <Container maxWidth="2xl">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
            <div className="flex h-full items-center justify-center">
              <p className="text-gray-500">
                YouTube Video: https://www.youtube.com/watch?v=9R1uogyvcH8
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section id="about" className="bg-bamboo-50 py-20">
        <Container maxWidth="2xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary-700">
              Sustainable Mobility
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Every handmade bamboo bicycle we build is born from a deep
              conviction: another way of creating, consuming and moving is
              possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Creations Preview */}
      <section id="creations" className="bg-white py-20">
        <Container maxWidth="2xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary-700">
            Our Creations
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">E-Bikes</h3>
              <p className="mt-2 text-gray-600">
                Electric bamboo bicycles combining sustainability with modern
                technology
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">Classic</h3>
              <p className="mt-2 text-gray-600">
                Timeless bamboo bicycle designs for everyday riding
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">
                Prototypes
              </h3>
              <p className="mt-2 text-gray-600">
                Innovative bamboo bicycle concepts pushing boundaries
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
