# Project Structure - TUKE Knowledge Demo

## Foundation Setup Complete

This document outlines the complete project structure created for the knowledge management demonstration website.

## Configuration Files

### Root Level
- **package.json** - Project dependencies and scripts
- **astro.config.mjs** - Astro configuration with Vue and Tailwind integrations
- **tailwind.config.mjs** - Tailwind CSS 4 configuration with custom colors
- **tsconfig.json** - TypeScript configuration with path aliases
- **.gitignore** - Git ignore patterns
- **README.md** - Project documentation

## Source Structure

### Layouts (`src/layouts/`)
1. **BaseLayout.astro** - Base HTML shell with header, footer, meta tags
2. **GlossaryLayout.astro** - Layout for glossary term pages with sidebar
3. **SlideLayout.astro** - Full-screen layout for slide presentations

### Pages (`src/pages/`)
- **index.astro** - Home page with project overview
- **glossary/index.astro** - Glossary index page (lists all terms)
- **slides/minimal/** - Minimal variant slides (to be populated)
- **slides/ideas/** - Ideas-focused variant slides (to be populated)
- **slides/detailed/** - Detailed variant slides (to be populated)

### Components

#### Glossary Components (`src/components/glossary/`)
- **TermCard.vue** - Reusable term card component

#### Navigation Components (`src/components/navigation/`)
- **Header.vue** - Site header with mobile menu

#### Slide Components (`src/components/slides/`)
- **SlideNavigation.vue** - Previous/Next navigation for slides
- **VariantSwitcher.vue** - Switch between minimal/ideas/detailed variants

### Content Collections (`src/content/`)
- **config.ts** - Content collection schemas for glossary and slides
- **glossary/** - Glossary term markdown files (to be populated)
- **slides/** - Slide markdown files (to be populated)

### Utilities (`src/utils/`)
- **glossary.ts** - Helper functions for glossary terms (sorting, filtering, slugs)
- **navigation.ts** - Helper functions for slide navigation

### Styles (`src/styles/`)
- **global.css** - Global styles with Tailwind CSS 4 imports and custom classes

## Public Assets (`public/`)
- **favicon.svg** - Site favicon
- **images/book-covers/** - Directory for book cover images

## Key Features Implemented

### Tailwind CSS 4 Compliance
- Uses `@import "tailwindcss"` syntax (not deprecated @tailwind directives)
- Inline classes used throughout (no @apply directives)
- Custom CSS properties defined in :root
- Fallback styles for components that need vanilla CSS

### TypeScript Support
- Full type safety with Astro content collections
- Type-safe utility functions
- Path aliases configured (@/, @components/, etc.)

### Content Schema
Glossary terms support:
- Term name and slug
- Category (epistemology, methodology, practice, philosophy)
- Optional thinker and book reference
- Related terms array
- Tags array
- Difficulty level

Slides support:
- Slide number
- Title and section
- Optional book cover reference
- Optional glossary term links

### Responsive Design
- Mobile-first approach
- Responsive navigation
- Grid layouts that adapt to screen sizes
- Sticky headers and navigation

## Color Scheme

Category colors defined:
- **Epistemology**: Blue (#1e40af)
- **Methodology**: Purple (#7c3aed)
- **Practice**: Green (#059669)
- **Philosophy**: Red (#dc2626)

## Next Steps for Other Agents

1. **Agent 2**: Populate glossary terms in `src/content/glossary/`
2. **Agent 3**: Create slide content in `src/content/slides/`
3. **Agent 4**: Generate dynamic pages in `src/pages/glossary/` and `src/pages/slides/`
4. **Agent 5**: Add any additional Vue components for interactivity
5. **Agent 6**: Add book cover images to `public/images/book-covers/`

## Installation & Usage

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

Update `astro.config.mjs`:
- Set `site` to your GitHub Pages URL
- Set `base` to your repository name

Build and deploy:
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```
