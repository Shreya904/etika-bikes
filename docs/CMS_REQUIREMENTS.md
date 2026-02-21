# Etika Bikes - CMS Requirements

## Content Types

### 1. Pages

**Purpose:** Store multilingual page content  
**Fields:**

- `id` (string): Unique identifier
- `slug` (object): Language-specific slugs
  - `es` (string)
  - `en` (string)
  - `ca` (string)
- `title` (object): Multilingual titles
  - `es` (string)
  - `en` (string)
  - `ca` (string)
- `metaTitle` (object): SEO meta titles
- `metaDescription` (object): SEO descriptions
- `h1` (object): Page H1 headings
- `content` (object): Rich text content blocks
- `status` (enum): 'draft' | 'published' | 'under-construction'
- `publishedAt` (datetime)
- `updatedAt` (datetime)

### 2. Bike Models

**Purpose:** Bicycle product information  
**Fields:**

- `id` (string)
- `name` (object): Multilingual names
- `slug` (object): Language-specific slugs
- `category` (enum): 'ebike' | 'classic' | 'prototype'
- `subcategory` (string): e.g., 'mtb', 'urban', 'bmx'
- `description` (object): Rich text descriptions
- `shortDescription` (object): Brief descriptions
- `specifications` (object): Technical specs
- `images` (array): Image gallery
  - `url` (string)
  - `alt` (object): Multilingual alt text
  - `order` (number)
- `videos` (array): Video embeds
  - `url` (string)
  - `platform` (enum): 'youtube' | 'vimeo'
- `metaTitle` (object)
- `metaDescription` (object)
- `keywords` (string)
- `isAvailable` (boolean)
- `status` (enum): 'available' | 'under-construction' | 'coming-soon'
- `order` (number): Display order

### 3. Workshop Services

**Purpose:** Workshop service offerings  
**Fields:**

- `id` (string)
- `name` (object): Service name
- `slug` (object): Language-specific slugs
- `type` (enum): 'self-build-workshop' | 'custom-bikes' | 'carbon-repair'
- `description` (object): Full description
- `shortDescription` (object)
- `features` (array): Service features/inclusions
- `pricing` (object): Pricing information
- `duration` (string): Time required
- `availability` (string)
- `images` (array)
- `metaTitle` (object)
- `metaDescription` (object)

### 4. Blog Posts

**Purpose:** Blog articles and news  
**Fields:**

- `id` (string)
- `title` (object)
- `slug` (object)
- `excerpt` (object): Short summary
- `content` (object): Rich text content
- `author` (reference): Link to team member
- `category` (string)
- `tags` (array)
- `featuredImage` (object)
- `images` (array)
- `publishedAt` (datetime)
- `updatedAt` (datetime)
- `metaTitle` (object)
- `metaDescription` (object)
- `status` (enum): 'draft' | 'published'

### 5. Team Members

**Purpose:** About us team information  
**Fields:**

- `id` (string)
- `name` (string)
- `role` (object): Multilingual role title
- `bio` (object): Biography
- `image` (object)
- `email` (string)
- `order` (number)

### 6. Collaborations

**Purpose:** Partner collaborations showcase  
**Fields:**

- `id` (string)
- `name` (object)
- `slug` (object)
- `description` (object)
- `partnerName` (string)
- `partnerUrl` (string)
- `images` (array)
- `blogPostReference` (reference): Optional link to blog post
- `metaTitle` (object)
- `metaDescription` (object)
- `status` (enum)

### 7. Site Settings

**Purpose:** Global site configuration  
**Fields:**

- `contactEmail` (string)
- `contactPhone` (string)
- `socialMedia` (object):
  - `instagram` (string)
  - `facebook` (string)
  - `youtube` (string)
- `locations` (array):
  - `name` (object)
  - `type` (enum): 'workshop' | 'shop'
  - `address` (object)
  - `coordinates` (object): lat/lng
  - `openingHours` (object)
- `seoDefaults` (object): Default meta information

### 8. Navigation

**Purpose:** Site menu structure  
**Fields:**

- `id` (string)
- `location` (enum): 'header' | 'footer'
- `items` (array):
  - `label` (object)
  - `route` (string): Key from routes.ts
  - `children` (array): Submenu items
  - `order` (number)

## Required CMS Features

### Core Functionality

- ✅ **Multilingual Support:** ES (primary), EN, CA
- ✅ **Media Management:** Image upload, optimization, alt text
- ✅ **Rich Text Editor:** For long-form content
- ✅ **Draft/Published Workflow:** Content staging
- ✅ **URL Slug Management:** Per language, SEO-friendly
- ✅ **Preview Mode:** Preview before publishing

### Content Features

- ✅ **Reusable Components:** Content blocks
- ✅ **Reference Fields:** Link between content types
- ✅ **Image Gallery:** Multiple images with ordering
- ✅ **Video Embeds:** YouTube/Vimeo support
- ✅ **SEO Fields:** Meta titles, descriptions, keywords
- ✅ **Status Management:** Draft, published, under construction

### Technical Requirements

- ✅ **REST or GraphQL API:** For Next.js integration
- ✅ **TypeScript Support:** Type-safe queries
- ✅ **Incremental Static Regeneration (ISR):** For performance
- ✅ **Webhook Support:** Trigger rebuilds on content changes
- ✅ **Asset CDN:** Fast image delivery

## Recommended CMS Options

### Option 1: Sanity (Recommended)

- **Pros:** Real-time collaboration, excellent TypeScript support, portable text, free tier
- **Cons:** Learning curve for Portable Text

### Option 2: Contentful

- **Pros:** User-friendly, great documentation, robust API
- **Cons:** Pricing can scale up, limited free tier

### Option 3: Strapi

- **Pros:** Self-hosted, full control, customizable
- **Cons:** Requires server management, more setup

### Option 4: Payload CMS

- **Pros:** Next.js native, TypeScript-first, self-hosted
- **Cons:** Newer, smaller community

## Implementation Notes

- All content must support ES/EN/CA
- Primary language is Spanish (ES) for SEO
- No placeholder content - wait for real content
- SEO metadata required for all pages
- Images need multilingual alt text
- Under construction status for incomplete pages
