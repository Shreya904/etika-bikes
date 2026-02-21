"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n";
import { getFullPath } from "@/lib/routes";

export function Footer() {
  const params = useParams();
  const locale = params.lang as Locale;

  return (
    <footer className="bg-primary-800">
      <div className="mx-auto max-w-screen-xl px-8 py-16 sm:px-12 sm:py-20 lg:px-24 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
                ETIKA BIKES
              </h2>
            </div>

            <div className="mt-8">
              <p className="max-w-xs text-sm leading-loose text-gray-400">
                {locale === "es" &&
                  "Construye tu propia bicicleta de bambú. Talleres en Barcelona, kits DIY enviados a todo el mundo. Sostenible, único e inconfundiblemente tuyo."}
                {locale === "en" &&
                  "Build your own bamboo bicycle. Workshops in Barcelona, DIY kits shipped worldwide. Sustainable, unique, and unmistakably yours."}
                {locale === "ca" &&
                  "Construeix la teva pròpia bicicleta de bambú. Tallers a Barcelona, kits DIY enviats arreu del món. Sostenible, únic i inconfusiblement teu."}
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg
                    className="size-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:hello@etikabikes.com"
                    className="text-base text-gray-300 transition hover:text-white"
                  >
                    hello@etikabikes.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    className="size-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base text-gray-300">
                    Barcelona, Spain
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://www.instagram.com/etikabikes/?hl=en"
                    rel="noreferrer"
                    target="_blank"
                    className="block rounded-full border border-gray-600 p-3 text-gray-300 transition hover:border-gray-400 hover:text-white"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61550244862047"
                    rel="noreferrer"
                    target="_blank"
                    className="block rounded-full border border-gray-600 p-3 text-gray-300 transition hover:border-gray-400 hover:text-white"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.90 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.890h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            {/* Our Creations */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                {locale === "es" && "CREACIONES"}
                {locale === "en" && "OUR CREATIONS"}
                {locale === "ca" && "CREACIONS"}
              </h3>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <Link
                    href={getFullPath("bicycles", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Bicicletas"}
                    {locale === "en" && "Bicycles"}
                    {locale === "ca" && "Bicicletes"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("frames", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Cuadros"}
                    {locale === "en" && "Frames"}
                    {locale === "ca" && "Quadres"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("selfBuildKits", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Kits de Autoconstrucción"}
                    {locale === "en" && "Self-build Kits"}
                    {locale === "ca" && "Kits d'Autoconstrucció"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("accessories", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Accesorios"}
                    {locale === "en" && "Accessories"}
                    {locale === "ca" && "Accessoris"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Etika Workshop */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                {locale === "es" && "TALLER"}
                {locale === "en" && "WORKSHOP"}
                {locale === "ca" && "TALLER"}
              </h3>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <Link
                    href={getFullPath("selfBuildWorkshop", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Taller de Autoconstrucción"}
                    {locale === "en" && "Self-build Workshop"}
                    {locale === "ca" && "Taller d'Autoconstrucció"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("customBikes", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Bicicletas a Medida"}
                    {locale === "en" && "Bespoke Bikes"}
                    {locale === "ca" && "Bicicletes a Mida"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("carbonRepair", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Reparación de Carbono"}
                    {locale === "en" && "Carbon Repair"}
                    {locale === "ca" && "Reparació de Carboni"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* About + Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                {locale === "es" && "NOSOTROS"}
                {locale === "en" && "ABOUT"}
                {locale === "ca" && "NOSALTRES"}
              </h3>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <Link
                    href={getFullPath("ourStory", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Nuestra Historia"}
                    {locale === "en" && "Our Story"}
                    {locale === "ca" && "La Nostra Història"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("philosophy", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Filosofía y Valores"}
                    {locale === "en" && "Philosophy & Values"}
                    {locale === "ca" && "Filosofia i Valors"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("bambooMaterials", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {locale === "es" && "Bambú y Materiales"}
                    {locale === "en" && "Bamboo and Materials"}
                    {locale === "ca" && "Bambú i Materials"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getFullPath("faq", locale)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>

              <div className="mt-8 border-t border-gray-700/60 pt-8">
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href={getFullPath("collaborations", locale)}
                      className="text-gray-300 transition hover:text-white"
                    >
                      {locale === "es" && "Colaboraciones"}
                      {locale === "en" && "Collaborations"}
                      {locale === "ca" && "Col·laboracions"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={getFullPath("blog", locale)}
                      className="text-gray-300 transition hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={getFullPath("contact", locale)}
                      className="text-gray-300 transition hover:text-white"
                    >
                      {locale === "es" && "Contacto"}
                      {locale === "en" && "Contact"}
                      {locale === "ca" && "Contacte"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
