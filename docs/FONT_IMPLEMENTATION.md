# Font Implementation Reference

Client-specified font spec:

| Element           | Font                                                         |
| ----------------- | ------------------------------------------------------------ |
| Body Content      | Lato                                                         |
| Menu              | Marvel                                                       |
| Page Title        | Lato                                                         |
| H1–H4             | Century Gothic                                               |
| H5–H6             | Poiret One                                                   |
| Blockquote        | Lato                                                         |
| Counters / Prices | Lato                                                         |
| Icons             | mfn-icons (Betheme — proprietary, requires Betheme purchase) |

---

## Step 1 — `app/[lang]/layout.tsx`

Replace the current imports + layout with the following:

```tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Lato, Marvel, Poiret_One } from "next/font/google";
import { locales } from "@/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const marvel = Marvel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-marvel",
  display: "swap",
});

const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret-one",
  display: "swap",
});
```

And update the `<body>` tag:

```tsx
<body className={`${lato.variable} ${marvel.variable} ${poiretOne.variable} antialiased flex min-h-screen flex-col`}>
```

---

## Step 2 — `app/globals.css`

Inside the existing `@theme inline { ... }` block, add after `--color-foreground`:

```css
/*
   * Use literal font names here — @theme resolves on :root which cannot see
   * the next/font CSS variables (those are set on <body>).
   * next/font still registers the @font-face globally so the names work.
   */
--font-sans: "Lato", ui-sans-serif, system-ui, sans-serif;
--font-heading:
  "Century Gothic", "CenturyGothic", "AppleGothic", ui-sans-serif, sans-serif;
--font-subheading: "Poiret One", ui-sans-serif, sans-serif;
--font-menu: "Marvel", ui-sans-serif, sans-serif;
```

Replace the existing `@layer base { ... }` block with:

```css
@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body + all default text: Lato */
  body {
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-lato, "Lato", ui-sans-serif, system-ui, sans-serif);
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* H1–H4: Century Gothic */
  h1,
  h2,
  h3,
  h4 {
    font-family:
      "Century Gothic", "CenturyGothic", "AppleGothic", ui-sans-serif,
      sans-serif;
  }

  /* H5–H6: Poiret One */
  h5,
  h6 {
    font-family: var(
      --font-poiret-one,
      "Poiret One",
      ui-sans-serif,
      sans-serif
    );
  }

  /* Navigation: Marvel */
  nav,
  nav a,
  nav button,
  nav span,
  nav li {
    font-family: var(--font-marvel, "Marvel", ui-sans-serif, sans-serif);
  }

  /* Blockquote, counters, prices: Lato */
  blockquote,
  [data-counter],
  [data-price] {
    font-family: var(--font-lato, "Lato", ui-sans-serif, system-ui, sans-serif);
  }
}
```

---

## Notes

- **Century Gothic** is a system font (ships with Windows and macOS). No Google Font needed.
- **mfn-icons** requires the Betheme WordPress theme purchase — the icon font files must be self-hosted.
- The `var(--font-lato, "Lato", ...)` pattern means: use the next/font precision-loaded version when available, fall back to the globally registered @font-face name.
- The `--font-sans` override in `@theme` makes Tailwind's `font-sans` utility class also resolve to Lato.
