# Studio

A minimalist web application representing a personal creative studio as a digital space.

## Overview

Studio is not a portfolio or a feed—it's a **place** built from real photographs of a physical studio where creative artifacts live.

## Current Features

- **Studio Homepage**: Photo-based homepage with interactive hotspot navigation
- **Journal**: Chronological entries with clean reading experience
  - List view with pagination
  - Individual entry view with MDX support
  - Paper-textured cards with realistic journal spread layout
  - Local content storage (CMS-ready architecture)
- **Projects**: Showcase of creative work and experiments
  - Reusable ProjectCard component
  - Live site and GitHub repository links
- **Photobooks**: Coming soon page with immersive background
- **Music**: Coming soon page with immersive background
- **Automatic Deployment**: GitHub Actions workflow for static site generation

## Tech Stack

- Next.js 15 (App Router with Static Export)
- TypeScript
- Tailwind CSS
- MDX for content
- next-mdx-remote for rendering
- GitHub Actions for CI/CD
- GitHub Pages for hosting

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

### Static Export (for GitHub Pages)

```bash
npm run build
```

This generates a static site in the `out/` directory ready for deployment.

## Deployment

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### How It Works

1. Push code to the `main` or `master` branch
2. GitHub Actions automatically builds the site
3. Static files are deployed to GitHub Pages
4. Site is available at your custom domain

### GitHub Pages Configuration

The site is deployed to: **www.visheshvs.com**

After pushing changes:
1. Go to your repository's **Actions** tab to monitor the build
2. Wait 2-3 minutes for the deployment to complete
3. Visit your site at the custom domain

### Manual GitHub Pages Setup (if needed)

If you need to configure GitHub Pages settings:

1. Go to **Settings → Pages** in your repository
2. Source: Select **GitHub Actions**
3. Custom domain: Enter your domain (if using custom domain)
4. Enable **Enforce HTTPS**

### DNS Configuration

For custom domain (`www.visheshvs.com`), configure these DNS records with your domain provider:

```
CNAME www   visheshvs.github.io.
```

Or for apex domain:
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

## Project Structure

```
studio/
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Studio homepage
│   ├── globals.css        # Global styles
│   ├── journal/
│   │   ├── page.tsx       # Journal list view
│   │   └── [slug]/
│   │       └── page.tsx   # Individual entry
│   ├── photobooks/
│   │   └── page.tsx       # Photobooks page
│   ├── music/
│   │   └── page.tsx       # Music page
│   └── projects/
│       └── page.tsx       # Projects page
├── components/            # React components
│   ├── BackToStudio.tsx  # Navigation component
│   ├── Hotspot.tsx       # Interactive area component
│   ├── JournalCard.tsx   # Entry preview card
│   └── ProjectCard.tsx   # Project card component
├── content/
│   └── journal/          # MDX journal entries
│       └── *.mdx         # Individual entries
├── lib/
│   └── journal.ts        # Content abstraction layer (CMS-ready)
├── types/
│   ├── journal.ts        # Journal TypeScript interfaces
│   └── project.ts        # Project TypeScript interfaces
└── public/
    ├── .nojekyll         # Prevents Jekyll processing
    ├── CNAME             # Custom domain configuration
    └── images/
        ├── studio/       # Studio section images
        └── journal/      # Journal entry images
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

