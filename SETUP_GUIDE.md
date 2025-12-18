# Studio MVP - Setup Guide

## ✅ What's Been Built

Your Studio MVP is complete and running! Here's what you have:

### Working Features

1. **Studio Homepage** (`/`)
   - Full-viewport background image
   - Interactive hotspot navigation to Journal
   - Minimal invitational copy

2. **Journal List** (`/journal`)
   - Paginated view (10 entries per page)
   - Clean chronological layout
   - 4 sample entries included

3. **Journal Entry View** (`/journal/[slug]`)
   - Full MDX rendering support
   - Generous reading margins
   - Beautiful typography

4. **CMS-Ready Architecture**
   - Clean abstraction layer in `lib/journal.ts`
   - Easy to swap for any CMS later

## 🎨 Customization Instructions

### 1. Position the Hotspot on Your Studio Photo

Open `app/page.tsx` and adjust these values based on where the journal/notebook appears in your studio photo:

```tsx
<Hotspot
  href="/journal"
  top="95%"      // Distance from top (0-100%)
  left="30%"     // Distance from left (0-100%)
  width="20%"    // Width of clickable area
  height="25%"   // Height of clickable area
  label="Journal"
/>
```

**How to find the right values:**

1. Open http://localhost:3000 in your browser
2. Right-click on the page → Inspect
3. In the browser console, paste this code:

```javascript
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth * 100).toFixed(1);
  const y = (e.clientY / window.innerHeight * 100).toFixed(1);
  console.log(`top: ${y}%, left: ${x}%`);
});
```

4. Move your mouse over the journal in the photo
5. Note the `top` and `left` values from the console
6. Update the Hotspot component with these values

### 2. Add More Journal Entries

Create new `.mdx` files in `content/journal/`:

```mdx
---
title: "Your Entry Title"
date: "2024-12-17"
excerpt: "Brief preview text"
---

Your content here with full **markdown** support.

## Headings work

- Lists work
- Images work (see below)

![Alt text](/images/journal/your-image.jpg)
```

### 3. Add Images to Journal Entries

1. Place images in `public/images/journal/`
2. Reference them in MDX: `![Description](/images/journal/filename.jpg)`

### 4. Replace the Studio Image

1. Replace `public/images/studio/studio.png` with your own photo
2. For multiple images or layered effects, edit `app/page.tsx`

### 5. Customize Colors

Edit `app/globals.css`:

```css
:root {
  --background: #fafaf9;  /* Change these */
  --foreground: #1c1917;
}
```

The site uses Tailwind's `stone` palette by default. To change:
- Search for `stone-` throughout the codebase
- Replace with: `slate-`, `gray-`, `zinc-`, `neutral-`, etc.

### 6. Customize Typography

Fonts are configured in `app/layout.tsx`:

```tsx
const lora = Lora({        // Serif font for content
  subsets: ['latin'],
  variable: '--font-lora',
});

const inter = Inter({      // Sans-serif for UI
  subsets: ['latin'],
  variable: '--font-inter',
});
```

Browse fonts at [Google Fonts](https://fonts.google.com/) and replace as needed.

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy (zero configuration needed)

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Use Next.js runtime

## 📝 Next Steps

### Remove Sample Content

When ready to add your own journal entries:

```bash
rm content/journal/on-beginnings.mdx
rm content/journal/material-notes.mdx
rm content/journal/in-the-margins.mdx
rm content/journal/slow-systems.mdx
```

### Future Extensions

The architecture supports adding:

- **Photo Books**: Create `app/books/` and `content/books/`
- **Mixtapes**: Create `app/mixtapes/` and `content/mixtapes/`
- **Admin Interface**: Add authentication and form-based authoring
- **CMS Integration**: Replace functions in `lib/journal.ts` with API calls

The abstraction layer ensures components don't need to change.

## 🐛 Troubleshooting

### Dev server not starting?

```bash
rm -rf .next
npm run dev
```

### TypeScript errors?

```bash
rm -rf node_modules .next
npm install
```

### Hotspot not clickable?

Check that the `top`, `left`, `width`, and `height` values in `app/page.tsx` create a box that overlaps your journal in the photo.

### Images not loading?

Ensure they're in `public/images/` and referenced without `/public/` in the path:
- ✅ `/images/journal/photo.jpg`
- ❌ `/public/images/journal/photo.jpg`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Deployment](https://vercel.com/docs)

---

**Your Studio is ready!** Visit http://localhost:3000 to explore it.

