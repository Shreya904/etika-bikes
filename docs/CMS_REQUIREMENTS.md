# Etika Bikes - CMS Requirements (MVP)

## Scope Right Now

This CMS phase is intentionally small and focused.

- Fetch each bicycle page/content from CMS
- Store contact form submissions in CMS (yes, this is possible)
- Prepare a generic blog collection for future use

Out of scope for now: full page builder, team, collaborations, advanced navigation management.

## Collections To Create

### 1. `bicycles`

**Purpose:** Single source of truth for bicycle detail pages shown under localized slugs.

**Required fields:**

- `id` (string/uuid, required)
- `status` (enum, required): `draft` | `published` | `under-construction`
- `internalName` (string, required): editor-friendly name (not shown publicly)
- `slug` (object, required)
  - `es` (string, unique)
  - `en` (string, unique)
  - `ca` (string, unique)
- `title` (object, required)
  - `es` (string)
  - `en` (string)
  - `ca` (string)
- `category` (enum, required): `ebike` | `classic` | `prototype`
- `subcategory` (enum, required): `mtb` | `urban` | `gravel` | `push-bike` | `bmx` | `tricycle` | `cargo` | `other`
- `heroImage` (asset object, required)
  - `url` (string)
  - `alt` (object: `es`/`en`/`ca`)
- `gallery` (array of assets, optional)
  - `url` (string)
  - `alt` (object: `es`/`en`/`ca`)
  - `order` (number)
- `shortDescription` (object, required): `es`/`en`/`ca`
- `description` (object rich text, required): `es`/`en`/`ca`
- `specifications` (array, optional)
  - `key` (string)
  - `value` (object: `es`/`en`/`ca`)
  - `order` (number)
- `priceInfo` (object, optional)
  - `label` (object: `es`/`en`/`ca`)
  - `amount` (number)
  - `currency` (string, default `EUR`)
- `isAvailable` (boolean, default `true`)
- `order` (number, optional)
- `seo` (object, required)
  - `metaTitle` (object: `es`/`en`/`ca`)
  - `metaDescription` (object: `es`/`en`/`ca`)
  - `keywords` (object arrays: `es`/`en`/`ca`)
- `publishedAt` (datetime)
- `updatedAt` (datetime)

**Validation rules:**

- Slug must be unique per language.
- All published entries must include complete SEO fields for all locales.
- All images must include multilingual alt text.

### 2. `contactSubmissions`

**Purpose:** Persist messages sent through the contact form.

**Is this possible in CMS?** Yes. Use a write endpoint/server action to create entries in this collection.

**Required fields:**

- `id` (string/uuid)
- `createdAt` (datetime, auto)
- `name` (string, required)
- `email` (string, required)
- `phone` (string, optional)
- `subject` (string, optional)
- `message` (text, required)
- `locale` (enum, required): `es` | `en` | `ca`
- `sourcePage` (string, optional): slug or route where form was submitted
- `consentAccepted` (boolean, required)
- `status` (enum, default `new`): `new` | `in-progress` | `resolved` | `spam`
- `notes` (text, internal-only, optional)

**Security and anti-spam requirements:**

- Do not expose CMS write token in the browser.
- Submit via server route/server action only.
- Add bot protection (honeypot and/or reCAPTCHA/Cloudflare Turnstile).
- Add basic rate limiting by IP.
- Restrict this collection read access to admins only.

### 3. `blogPosts` (future-ready, generic)

**Purpose:** Prepare blog/news support without implementing blog UI yet.

**Required fields:**

- `id` (string/uuid)
- `status` (enum): `draft` | `published`
- `title` (object: `es`/`en`/`ca`)
- `slug` (object: `es`/`en`/`ca`, unique)
- `excerpt` (object: `es`/`en`/`ca`)
- `content` (object rich text: `es`/`en`/`ca`)
- `coverImage` (asset object)
- `tags` (array of strings)
- `authorName` (string)
- `seo` (object)
  - `metaTitle` (object: `es`/`en`/`ca`)
  - `metaDescription` (object: `es`/`en`/`ca`)
- `publishedAt` (datetime)
- `updatedAt` (datetime)

## Locale Strategy

- Supported locales: `es`, `en`, `ca`
- Primary locale for SEO/content completeness: `es`
- Keep localized `slug` aligned with route handling in app router and slug resolver logic.

## API Contracts Needed By Frontend

### Read bicycles

- `GET /bicycles?locale={es|en|ca}&slug={localizedSlug}&status=published`
- Returns one bicycle entry with only requested locale fields (or full locales if your SDK pattern prefers that).

### List bicycles (for menus/cards)

- `GET /bicycles?locale={locale}&status=published&sort=order`

### Save contact form

- `POST /contact-submissions`
- Body: `{ name, email, phone?, subject?, message, locale, sourcePage, consentAccepted }`
- Returns: `{ success: true, submissionId }`

## Suggested Permissions Model

- `bicycles`: public read for `published`, editor/admin write
- `contactSubmissions`: no public read, server-only create, admin read/update
- `blogPosts`: public read for `published`, editor/admin write

## Publishing Workflow

- Editors create/update in `draft`
- Validate locale completeness and SEO
- Publish entry
- Trigger frontend revalidation webhook/tag revalidation

## Next.js Integration Notes

- Keep CMS fetch utilities inside `lib/cms/`.
- Map CMS localized slugs to current `[lang]/[slug]` routing.
- Use ISR or tag revalidation for bicycle pages after publish/unpublish.
- Keep contact form submission as server-side action/route; never direct client-to-CMS with privileged tokens.

## CMS Setup Checklist

1. Create collections: `bicycles`, `contactSubmissions`, `blogPosts`.
2. Add locale-aware fields (`es`, `en`, `ca`) to bicycles/blog.
3. Configure unique slug constraints per locale.
4. Configure roles and permissions exactly as above.
5. Create API token(s): read-only public token for bicycles/blog, private server token for submissions.
6. Configure webhook for revalidation after publish.
7. Add anti-spam to contact submission flow.

## Optional (Can Be Added Later)

- `siteSettings` single type for global contact/social details
- `blogCategories` collection for structured blog taxonomy
- `authors` collection for multi-author blog support
