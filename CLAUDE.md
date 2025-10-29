# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for a Motivational Interviewing study group recruitment, built with Next.js 14 (Pages Router), React 18, TypeScript, and Tailwind CSS. The site is designed for deployment on AWS Amplify as a fully static export.

## Key Commands

### Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server at http://localhost:3000
npm run build       # Production build (outputs to ./out directory)
npm run lint        # Run ESLint
```

### Deployment
The project is configured for AWS Amplify deployment via `amplify.yml`. The build process uses `output: 'export'` in `next.config.js` to generate a static site in the `out/` directory.

## Architecture

### Static Export Configuration
- **next.config.js**: Configured with `output: 'export'` and `images.unoptimized: true` for full static generation
- **Pages Router**: Uses traditional Next.js Pages Router (not App Router) for AWS Amplify compatibility
- No server-side APIs or dynamic routes - purely static content

### Component Structure
The site is a single-page application with six main sections:
1. **Hero** - Landing section with gradient animations and CTA buttons
2. **Introduction** - Study overview and objectives (what is Motivational Interviewing)
3. **Target** - Target participants and requirements
4. **Schedule** - 12-week curriculum timeline
5. **HowToApply** - Application process and fees
6. **FAQ** - Accordion-style frequently asked questions

All section components are located in `src/components/` and are imported into `src/pages/index.tsx` as a single scrollable page.

### Styling Approach
- **Tailwind CSS**: All styling uses Tailwind utility classes
- **Global styles**: `src/styles/globals.css` defines utility classes like `.section-container`, `.section-title`, `.section-subtitle`
- **Custom animations**: Hero section includes CSS-in-JS for blob animations
- **Responsive design**: Mobile-first approach using Tailwind's responsive prefixes (sm:, md:, lg:)
- **Color theme**: Primary gradient from blue (blue-600) to purple (purple-600)

### Path Aliases
TypeScript is configured with `@/*` path alias mapping to `./src/*` for cleaner imports.

### Typography and Fonts
- **Google Fonts**: Inter font family loaded via `_document.tsx` (weights 300-800)
- Font configuration in `tailwind.config.js` references `var(--font-inter)` but actual implementation uses direct Google Fonts link
- Language set to Korean (`<Html lang="ko">`) in `_document.tsx`

### Theme Customization
- **Custom primary color palette**: Defined in `tailwind.config.js` (blue shades from 50-900)
- **Global scroll behavior**: `scroll-behavior: smooth` enabled in `globals.css` for anchor link navigation
- **Default background**: `bg-gray-50` body background with `text-gray-900` default text color

## Important Implementation Details

### Section IDs
Each component uses ID attributes for anchor navigation:
- `#introduction`, `#target`, `#schedule`, `#apply`, `#faq`
- Footer links use these IDs for smooth scrolling

### Static Content
All content is hardcoded in Korean within component files. To update content:
- Open the respective component file in `src/components/`
- Modify the data arrays or JSX directly
- No CMS or external data sources

### FAQ Component State
The FAQ component uses React state to manage accordion open/close behavior. First item is open by default (`useState<number | null>(0)`).

### Contact Information Placeholder
Contact details (email, KakaoTalk links) in HowToApply and Footer are placeholders (`mi.study@example.com`, `#` links). Update these before production deployment.

## Development Notes

### No Testing Framework
This project does not include testing infrastructure. Consider adding Jest/React Testing Library if tests are needed.

### No Environment Variables
All configuration is hardcoded. If you need environment-specific settings (API endpoints, analytics IDs, etc.), add `.env.local` support.

### Static Site Limitations
Because this uses `output: 'export'`, certain Next.js features are unavailable:
- Server-side rendering (SSR)
- API routes
- Image optimization (hence `images.unoptimized: true`)
- Incremental Static Regeneration (ISR)
- Dynamic routes with `getStaticPaths`

### Component Data Structure
Most components contain hardcoded data arrays at the top of the file (e.g., `faqs`, `curriculum`, `scheduleInfo`). This pattern makes content updates straightforward but doesn't scale for dynamic content needs.
