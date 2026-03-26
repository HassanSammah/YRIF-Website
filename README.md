# YRIF Website — Public Landing Page

The public-facing website for the **Youth Research & Innovation Foundation (YRIF)**, served at [yriftz.org](https://yriftz.org).

This is a lightweight React + Tailwind landing page only. All authenticated platform features (research portal, events, mentorship, admin) live in the [main YRIF web app](https://github.com/HassanSammah/YRIF) and are accessed at `yriftz.org/dashboard`.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS 3 | Styling |
| React Router v6 | Client-side routing (single route: `/`) |
| Lucide React | Icons |

---

## Project Structure

```
src/
├── App.tsx                        # Root — single public route /
├── main.tsx                       # Entry point
├── index.css                      # Global styles + Tailwind + animations
├── assets/
│   └── images/                    # Hero, about, feature images + logos
├── components/
│   ├── home/                      # Landing page sections
│   │   ├── Home.tsx               # Assembles all sections
│   │   ├── Hero.tsx               # Headline + CTAs
│   │   ├── AboutSection.tsx       # Mission statement
│   │   ├── Features.tsx           # 6-feature grid
│   │   ├── FeaturedResearch.tsx   # Research showcase
│   │   ├── UpcomingEvents.tsx     # Events calendar
│   │   ├── ImpactMetrics.tsx      # Key statistics
│   │   ├── MentorshipHighlight.tsx
│   │   ├── Partners.tsx           # Partner institution carousel
│   │   ├── FeedbackSection.tsx    # Testimonials
│   │   ├── UsefulLinks.tsx        # External resource links
│   │   └── CTASection.tsx         # Final call-to-action
│   ├── layout/
│   │   ├── Header.tsx             # Scroll-aware navigation header
│   │   └── Footer.tsx             # Brand footer with links
│   └── utils/
│       └── ScrollToTop.tsx        # Scroll-to-top on route change
└── layouts/
    └── PublicLayout.tsx           # Header + Outlet + Footer wrapper
```

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

---

## Key Design Decisions

- **One page, one route.** The site serves only `/`. Auth routes (`/login`, `/register`) and platform routes (`/dashboard`, `/research`, etc.) are handled by the main YRIF web app on the same domain.
- **No Redux.** State management is not needed for a static landing page.
- **Plain `<a href>` for platform links.** Links to `/login`, `/register`, `/dashboard`, etc. use regular anchor tags (not React Router `<Link>`) so navigation passes through to the main app rather than staying in the SPA.

---

## Brand

| Token | Value |
|---|---|
| Navy | `#093344` |
| Teal | `#0D9488` |
| Gold | `#df8d31` |
| Light | `#FDFBF7` |
| Font — body | Inter |
| Font — headings | Outfit |

---

## Related

- **Main YRIF Platform** (web app): [github.com/HassanSammah/YRIF](https://github.com/HassanSammah/YRIF)
- **Platform URL**: `yriftz.org/dashboard`
- **Contact**: info@yriftz.org
