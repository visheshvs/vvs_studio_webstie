# Studio

A minimalist web application representing a personal creative studio as a digital space.

## Overview

Studio is not a portfolio or a feed—it's a **place** built from real photographs of a physical studio where creative artifacts live.

## Current Features (MVP)

- **Studio Homepage**: Photo-based homepage with interactive hotspot navigation
- **Journal**: Chronological entries with clean reading experience
  - List view with pagination
  - Individual entry view with MDX support
  - Local content storage (CMS-ready architecture)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- MDX for content
- next-mdx-remote for rendering

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the studio.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
studio/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Studio homepage
│   ├── globals.css        # Global styles
│   └── journal/
│       ├── page.tsx       # Journal list view
│       └── [slug]/
│           └── page.tsx   # Individual entry
├── components/            # React components
│   ├── BackToStudio.tsx  # Navigation component
│   ├── Hotspot.tsx       # Interactive area component
│   └── JournalCard.tsx   # Entry preview card
├── content/
│   └── journal/          # MDX journal entries
│       ├── *.mdx         # Individual entries
├── lib/
│   └── journal.ts        # Content abstraction layer (CMS-ready)
├── types/
│   └── journal.ts        # TypeScript interfaces
└── public/
    └── images/
        ├── studio/       # Homepage images
        └── journal/      # Entry images
```

## Adding Journal Entries

Create a new `.mdx` file in `content/journal/`:

```mdx
---
title: "Your Entry Title"
date: "2024-12-17"
excerpt: "A brief preview of the entry"
---

Your content here with full **markdown** support.

Images can be referenced from `/images/journal/`.
```

The content layer (`lib/journal.ts`) automatically discovers and parses all MDX files.

## Customization

### Homepage Hotspot

Edit `app/page.tsx` to adjust the hotspot position:

```tsx
<Hotspot
  href="/journal"
  top="40%"    // Adjust these values
  left="30%"   // based on your
  width="20%"  // studio photo
  height="25%"
  label="Journal"
/>
```

### Studio Image

Replace `public/images/studio/studio.png` with your own studio photograph.

### Typography

Fonts are configured in `app/layout.tsx`:
- Serif (Lora): Journal content, headings
- Sans-serif (Inter): UI elements

### Colors

Edit `app/globals.css` to customize the color scheme (currently using Tailwind's stone palette).

## Design Principles

- Studio feels **inhabited**, not published
- Journal feels **slow and intentional**
- No feeds, cards, or dashboards
- Language: "Back to Studio" (not "Home")
- No comments, likes, or social features

## Future Extensions (Not Implemented)

The architecture supports future addition of:
- Photo Books (long-form, immersive)
- Mixtapes / playlists
- Admin authoring interface
- CMS integration (replace `lib/journal.ts`)
- Viewer feedback or annotations

## CMS Migration Path

When ready to connect a CMS:

1. Keep the same TypeScript interfaces in `types/journal.ts`
2. Replace functions in `lib/journal.ts` with CMS API calls
3. Components continue working without changes

The content layer is designed as a clean abstraction that can be swapped without touching the UI.

## License

Private/Personal Use

