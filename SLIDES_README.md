# Slide Presentation System

This project includes a complete slide presentation system with 13 slides across 3 presentation variants.

## Structure

### Content
- **Location**: `/src/content/slides/`
- **Files**: 13 markdown files (00-12)
- **Format**: Each file contains 3 variants (minimal, ideas, detailed) separated by `## minimal`, `## ideas`, `## detailed` headings

### Routes
- **Main Index**: `/slides/` - Choose presentation variant
- **Minimal**: `/slides/minimal/0` through `/slides/minimal/12`
- **Ideas**: `/slides/ideas/0` through `/slides/ideas/12`
- **Detailed**: `/slides/detailed/0` through `/slides/detailed/12`
- **Total Routes**: 39 (13 slides × 3 variants)

### Variants

#### 1. Minimal (`/slides/minimal/[0-12]`)
- **Style**: Book cover aesthetic
- **Design**: Big typography, gradient backgrounds, centered content
- **Use Case**: Quick impact, conference talks, provocative quotes
- **Features**:
  - Book cover images when available
  - Large headings (4rem)
  - Purple gradient background
  - Minimal text for maximum impact

#### 2. Ideas (`/slides/ideas/[0-12]`)
- **Style**: Bullet point presentation
- **Design**: Clean white background, large readable text
- **Use Case**: Workshops, discussion starters, teaching
- **Features**:
  - Arrow-prefixed bullet points
  - Large text (1.75rem for bullets)
  - Clean typography
  - Focus on key concepts

#### 3. Detailed (`/slides/detailed/[0-12]`)
- **Style**: Comprehensive explanations
- **Design**: Light gray background, serif body text
- **Use Case**: Deep learning, reference material, self-study
- **Features**:
  - Full prose with multiple sections
  - Glossary term links at bottom
  - Serif fonts for readability
  - Scrollable content for longer slides

## Navigation

### Keyboard Controls
- **Arrow Right**: Next slide
- **Arrow Left**: Previous slide
- **Home**: Jump to first slide (0)
- **End**: Jump to last slide (12)

### On-Screen Controls
- **Bottom Bar**: Previous/Next buttons + slide counter + section name
- **Top Right**: Variant switcher (Minimal/Ideas/Detailed)
- **Opacity**: Controls fade in on hover for unobtrusive presentation

## Components

### Slide Components
- **`MinimalSlide.astro`**: Gradient background, large centered text, book covers
- **`IdeasSlide.astro`**: White background, bullet points with arrows
- **`DetailedSlide.astro`**: Gray background, prose layout, glossary links

### Layout
- **`SlideLayout.astro`**:
  - Full-screen wrapper
  - Navigation controls
  - Variant switcher
  - Keyboard event handlers
  - Font loading

### Utilities
- **`slides.ts`**:
  - `getAllSlides()`: Fetch and sort all slides
  - `getSlideByNumber()`: Get specific slide
  - `parseSlideVariants()`: Extract minimal/ideas/detailed content
  - `getNavigationData()`: Calculate prev/next/progress

## Frontmatter Schema

```yaml
slideNumber: 0-12        # Required: Slide position
title: "..."             # Required: Slide title
section: "..."           # Required: Section name
bookCover: "/path/..."   # Optional: Book cover image
glossaryTerms: [...]     # Optional: Array of glossary slugs
```

## Development

### Adding New Slides
1. Create markdown file: `/src/content/slides/NN-name.md`
2. Add frontmatter with slideNumber, title, section
3. Add three variant sections: `## minimal`, `## ideas`, `## detailed`
4. Routes auto-generate on build

### Modifying Styles
- Edit variant-specific components in `/src/components/slides/`
- Modify layout in `/src/layouts/SlideLayout.astro`
- Global styles in `/src/styles/global.css`

### Testing
```bash
npm run dev
# Visit http://localhost:4321/slides/
```

## Typography

- **Headings**: Inter (sans-serif)
- **Minimal Body**: Inter
- **Ideas Body**: Inter
- **Detailed Body**: Merriweather (serif)
- **Google Fonts**: Loaded in SlideLayout

## Presentation Tips

1. **Start at Index**: Visit `/slides/` to choose variant
2. **Switch Variants**: Use top-right buttons anytime during presentation
3. **Full Screen**: Press F11 (browser) for immersive mode
4. **Practice Run**: Try all three variants to see different perspectives
5. **Glossary**: Detailed variant includes clickable glossary terms (open in new tab)

## File Locations

```
/src/
├── content/
│   └── slides/              # 13 markdown files
│       ├── 00-navigation.md
│       ├── 01-introduction.md
│       └── ...
├── pages/
│   └── slides/
│       ├── index.astro      # Variant selection page
│       ├── [variant]/
│       │   └── [slide].astro # Dynamic route (39 paths)
│       ├── minimal.astro    # Redirect to /minimal/0
│       ├── ideas.astro      # Redirect to /ideas/0
│       └── detailed.astro   # Redirect to /detailed/0
├── components/
│   └── slides/
│       ├── MinimalSlide.astro
│       ├── IdeasSlide.astro
│       └── DetailedSlide.astro
├── layouts/
│   └── SlideLayout.astro    # Full-screen layout with controls
└── utils/
    └── slides.ts            # Helper functions
```

## Features Checklist

- [x] 13 slides with 3 variants each (39 total routes)
- [x] Full keyboard navigation
- [x] Variant switching during presentation
- [x] Book cover images on minimal variant
- [x] Glossary term links on detailed variant
- [x] Progress indicator
- [x] Section labels
- [x] Responsive design
- [x] Full-screen presentation mode
- [x] Auto-generated static paths
- [x] Beautiful typography
- [x] Smooth transitions
