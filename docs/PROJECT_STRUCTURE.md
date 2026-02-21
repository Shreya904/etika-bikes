# Etika Bikes - Project Structure

## Overview

Full-stack Next.js 15 website for Etika Bikes with multilingual support (ES/EN/CA), TypeScript, and Tailwind CSS.

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl
- **Package Manager:** pnpm

## Color Palette

### Primary Colors

- `primary-700`: #1a4d2e (Dark Green - Main brand)
- `primary-600`: #2d5f3f (Forest Green)
- `primary-500`: #4f7942 (Sage Green)

### Bamboo Accents

- `bamboo-200`: #d4c5a9 (Natural Bamboo)
- `bamboo-100`: #e8dcc4 (Light Bamboo)
- `bamboo-300`: #c9b88a (Golden Bamboo)
- `bamboo-400`: #b5a082 (Warm Bamboo)

### Base Colors

- `white`: #ffffff
- `gray-50`: #fafaf8 (Off-white)
- `black`: #1a1a1a
- `gray-800`: #2c2c2c (Charcoal)

Use in Tailwind: `text-primary-700`, `bg-bamboo-200`, etc.

## Folder Structure

```
etika-bikes/
├── app/
│   ├── [lang]/              # Language-specific routes
│   │   ├── layout.tsx       # Locale layout with i18n provider
│   │   ├── page.tsx         # Home page
│   │   └── [routes]/        # All other pages
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles + Tailwind config
│
├── components/
│   ├── layout/              # Header, Footer, Navigation
│   ├── ui/                  # Reusable UI components
│   └── sections/            # Page-specific sections
│
├── lib/
│   ├── routes.ts            # Route configuration with slugs
│   ├── utils.ts             # Utility functions
│   └── cms/                 # CMS integration utilities
│
├── messages/
│   ├── es.json              # Spanish translations
│   ├── en.json              # English translations
│   └── ca.json              # Catalan translations
│
├── types/
│   └── index.ts             # TypeScript type definitions
│
├── docs/
│   ├── CMS_REQUIREMENTS.md  # CMS specifications
│   └── PROJECT_STRUCTURE.md # This file
│
├── i18n/
│   └── request.ts           # i18n request configuration
│
├── i18n.ts                  # i18n configuration
├── middleware.ts            # Locale routing middleware
├── next.config.ts           # Next.js configuration
└── tailwind.config.ts       # Tailwind configuration (v4 uses CSS)
```

## Routing Structure

### Language Routing

All routes are prefixed with locale: `/{lang}/{page}`

Examples:

- `/es/creaciones-bicicletas-bambu`
- `/en/bamboo-bicycle-creations`
- `/ca/creacions-bicicletes-bambu`

### Route Configuration

All routes are defined in `lib/routes.ts` with language-specific slugs.

**Key Routes:**

- Home: `/`
- Creations: `/creaciones-bicicletas-bambu` (ES)
- Workshop: `/taller-bicicletas-bambu` (ES)
- About: `/sobre-etika-bikes` (ES)
- Contact: `/contacto` (ES)

See `lib/routes.ts` for complete list.

## Internationalization (i18n)

### Configuration

- **Default locale:** Spanish (es)
- **Supported locales:** es, en, ca
- **Library:** next-intl
- **Strategy:** Locale prefix always shown

### Adding Translations

1. Add keys to `messages/{locale}.json`
2. Use `useTranslations()` in components
3. Access with dot notation: `t('common.home')`

### Example

```tsx
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("common");
  return <h1>{t("home")}</h1>;
}
```

## Styling Guidelines

### Tailwind v4 CSS-First

Configuration is done in `app/globals.css` using `@theme` directive.

### Color Usage

```tsx
// Primary brand color
<button className="bg-primary-700 text-white">

// Bamboo accents
<div className="bg-bamboo-200 text-gray-900">

// Gray scale
<p className="text-gray-600">
```

### Utility Classes

Use the `cn()` helper from `lib/utils.ts` for conditional classes:

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  "base-class",
  isActive && "active-class"
)}>
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## SEO Strategy

### Meta Tags

All pages require:

- `metaTitle` (per language)
- `metaDescription` (per language)
- `keywords` (optional)
- `ogImage` (Open Graph)

### Implementation

Metadata is generated in each page's layout or page file using Next.js metadata API.

## Content Strategy

### No Placeholders

- Wait for real content before creating pages
- No lorem ipsum or dummy text
- SEO metadata must be provided upfront

### Languages

- **ES (Primary):** Main SEO focus
- **EN (Secondary):** International audience
- **CA (Tertiary):** Local Catalan audience

## Next Steps

1. ✅ Project initialization
2. ✅ i18n setup
3. ✅ Color palette configuration
4. ✅ Route structure definition
5. **TODO:** Choose and integrate CMS
6. **TODO:** Create layout components
7. **TODO:** Build page templates
8. **TODO:** Implement SEO
9. **TODO:** Content migration

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)
