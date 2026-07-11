# Bright Shine — Next.js + Tailwind CSS

This is a full conversion of the original Vite/React Bright Shine site to
**Next.js 14 (App Router)**, styled with **Tailwind CSS**, using **react-icons**
for all icon glyphs, and **framer-motion** for the original scroll/entrance
animations. It is fully responsive (mobile, tablet, desktop) and mirrors the
original design 1:1 — same colors, type, layout, copy, and behavior.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/                  Next.js App Router pages
  layout.jsx           Root layout (fonts, Navbar, Footer, WhatsApp button)
  page.jsx              Home
  about/page.jsx         About
  service/page.jsx       Services
  contact/page.jsx       Contact (client component — uses the form + motion)
  faq/page.jsx            FAQ
  privacy-policy/page.jsx
  terms/page.jsx
  globals.css           Tailwind + base design-system styles
components/            All UI building blocks, grouped by feature
  Navbar/, Footer/, Hero/, Buttons/, Cards/, CTA/, Contact/, FAQ/,
  Location/, Sections/, Service/, common/, Forms/, About/
data/                 Static content (services, locations, FAQ)
lib/constants.js       Contact info, socials, nav links
hooks/                Scroll-animation variants + navbar scroll hook
public/               Images, logo, and background motifs (served as-is)
```

## Notes

- Fonts (Oswald + Poppins) are loaded via a Google Fonts `<link>` tag in
  `app/layout.jsx` rather than `next/font/google`, so no special network
  access is required at build time.
- All icons use `react-icons/fa` (Font Awesome set), matching the icons
  already used in the original project.
- The contact form is client-side only (validation + a simulated submit).
  To actually deliver messages, wire `handleSubmit` in
  `components/Forms/ContactForm.jsx` to a Next.js API route (e.g.
  `app/api/contact/route.js`) or a service like Resend.
- Images are served from `/public` as plain `<img>` tags (not `next/image`)
  to keep behavior identical to the original site; `next.config.js` sets
  `images.unoptimized = true` in case you swap any of them over later.
