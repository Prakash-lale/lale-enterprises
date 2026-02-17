# Technical Overview & Architecture

This document provides a high-level overview of the Lale Enterprises website's technical stack and design patterns.

## 1. Core Stack
- **Framework**: [Astro 5.0+](https://astro.build/) - Used for high-performance static site generation.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Modern, utility-first CSS.
- **UI Components**: [React](https://react.dev/) - For interactive elements (Forms, Filters, Menus).
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - For smooth spring and scroll-reveal transitions.
- **Icons**: [Lucide React](https://lucide.dev/) - Consistent, lightweight icon set.

## 2. Key Directories
- `/src/pages`: Defines the site structure and routing.
- `/src/components`: Reusable UI elements (Astro components for static, React for dynamic).
- `/src/data`: Centralized data files (`.ts`) for easy content updates.
- `/public`: Static assets like images, logos, and the logo file.

## 3. Notable Patterns
### Project Filtering
We use a React-based `ProjectGrid` component instead of Alpine.js for better reliability. It handles:
- **Service Tags**: Maps `serviceId` to display names.
- **Animations**: Uses `AnimatePresence` for smooth entry/exit of project cards.

### Header Stacking Context
The header is refactored with a separate background layer (`#header-bg`) to ensure the mobile menu is not "trapped" and can span the full viewport height without being affected by the header's backdrop blur.

## 4. Maintenance
- **Dependencies**: Managed via `npm`. Run `npm install` for setup.
- **Development**: Use `npm run dev` for local preview.
- **Build**: Use `npm run build` to generate the static `dist/` folder for production.

## 5. SEO & Indexing
- **Sitemap**: Automatically generated using `@astrojs/sitemap` to ensure full site crawlability.
- **Indexing Controls**: `public/robots.txt` is configured to guide search engine behavior.
- **OpenGraph**: Meta tags in `BaseLayout.astro` use the production `Astro.site` URL for accurate social media previews.
- **Search Metadata**: Centralized keywords and descriptions are managed in `BaseLayout.astro`.
