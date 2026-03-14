import type { Metadata } from "next";
import { Poiret_One } from "next/font/google";
import "./globals.css";

const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret-one",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://etikabikes.com"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poiretOne.variable}>
      <body className="font-poiret antialiased">{children}</body>
    </html>
  );
}
