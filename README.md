# TUKE Knowledge Management Demo

[![Deploy to GitHub Pages](https://github.com/yourusername/tuke/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/tuke/actions/workflows/deploy.yml)

> A meta-demonstration of knowledge management principles, built entirely through AI conversation using a multi-agent system.

## What Is This?

This website showcases knowledge management in action - not just as a topic to study, but as a methodology applied to its own creation. The entire project was built in a single AI conversation session using 11 specialized agents working in parallel.

**Live Demo**: [View the deployed site](https://yourusername.github.io/tuke/)

## Key Features

### 📚 Interactive Glossary
- **40 interconnected terms** across four categories:
  - Epistemology (what is knowledge?)
  - Methodology (how do we manage it?)
  - Practice (what works in the real world?)
  - Philosophy (deeper questions)
- Wiki-style linking between related concepts
- Color-coded categories for easy navigation
- Links to relevant books and slide content

### 🎯 Multi-Variant Presentations
- **13 slides** presented in three distinct styles:
  - **Minimal**: Visual and concise (for quick scanning)
  - **Ideas**: Concept-focused (for understanding)
  - **Detailed**: Comprehensive (for deep learning)
- Full navigation between variants
- Same content, different learning styles

### 📖 Reference Library
- **8 influential books** from Polanyi to Krishnamurti
- Each book linked to relevant glossary terms
- Purchase links (Amazon, WorldCat)
- Critical analysis included

### 🚀 Modern Web Architecture
- Static site generation with Astro 5
- Interactive Vue 3 components
- Tailwind CSS 4 with custom design tokens
- TypeScript for type safety
- GitHub Pages deployment with CI/CD

## How It Was Built

This project demonstrates a revolutionary approach to software development:

**11 Specialized Agents** worked in parallel during a single conversation:
1. **Foundation Agent**: Project structure, config, dependencies
2. **Glossary Data Agent**: 40 term definitions with metadata
3. **Glossary Pages Agent**: Dynamic routes and wiki pages
4. **Slide Variant Agents** (3): Minimal, Ideas, and Detailed presentations
5. **Components Agent**: Vue components for navigation
6. **Books Agent**: Reference library integration
7. **Deployment Agent**: Final polish and workflows
8. **Build Agent**: Testing and verification

The result: A complete, production-ready website built in one session.

Read more in the [About page](/about) on the live site.

## Project Structure

```
/
├── .github/
│   └── workflows/
│       ├── deploy.yml      # GitHub Pages deployment
│       └── check.yml       # CI checks for PRs
├── public/
│   ├── books.json          # Book metadata
│   ├── favicon.svg         # Site icon
│   └── images/             # Static assets
├── src/
│   ├── components/
│   │   ├── books/
│   │   │   └── BookCard.vue
│   │   ├── glossary/
│   │   │   └── TermCard.vue
│   │   ├── navigation/
│   │   │   ├── Header.vue
│   │   │   └── Footer.vue
│   │   └── slides/
│   │       ├── SlideNavigation.vue
│   │       └── VariantSwitcher.vue
│   ├── content/
│   │   ├── glossary/       # 40 markdown files
│   │   └── slides/         # 39 slide files (13 × 3 variants)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── GlossaryLayout.astro
│   │   └── SlideLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── about.astro     # About the project
│   │   ├── books/
│   │   │   └── index.astro
│   │   ├── glossary/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── slides/
│   │       ├── minimal/[id].astro
│   │       ├── ideas/[id].astro
│   │       └── detailed/[id].astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── glossary.ts
│       └── navigation.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tuke.git
cd tuke
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open your browser to `http://localhost:4321`

### Build for Production

```bash
bun run build
# or
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

## Deployment

### GitHub Pages (Recommended)

1. Update `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/tuke',
});
```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

3. Push to main branch - deployment happens automatically via GitHub Actions

### Other Platforms

This is a standard Astro static site and can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting provider

See [Astro deployment docs](https://docs.astro.build/en/guides/deploy/) for details.

## Content Management

### Adding a Glossary Term

Create a new file in `src/content/glossary/`:

```markdown
---
term: "Your Term"
slug: "your-term"
category: "epistemology" # or methodology, practice, philosophy
thinker: "Optional: Associated Thinker"
relatedTerms: ["term-1", "term-2"]
tags: ["tag1", "tag2"]
---

Your term definition and explanation here.

Use wiki-style links to other terms: [related concept](/glossary/related-concept)
```

### Adding a Book Reference

Edit `public/books.json` and add a new entry:

```json
{
  "your-book-id": {
    "id": "your-book-id",
    "author": "Author Name",
    "title": "Book Title",
    "year": 2024,
    "isbn": "9781234567890",
    "topics": ["term-slug-1", "term-slug-2"],
    "summary": "Brief summary...",
    "relevance": "Why this book matters..."
  }
}
```

### Adding a Slide

Create three files (one per variant) in `src/content/slides/`:
- `minimal/[number].md`
- `ideas/[number].md`
- `detailed/[number].md`

Each with appropriate frontmatter and content.

## Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      epistemology: '#1e40af',
      methodology: '#7e22ce',
      practice: '#15803d',
      philosophy: '#dc2626',
    },
  },
}
```

### Fonts

Update `src/layouts/BaseLayout.astro` to change fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet" />
```

### Site Metadata

Edit `astro.config.mjs` for site URL and base path.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro 5](https://astro.build) | Static site generation with partial hydration |
| [Vue 3](https://vuejs.org) | Interactive components (Composition API) |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling with custom tokens |
| [TypeScript](https://typescriptlang.org) | Type-safe development |
| [Bun](https://bun.sh) | Fast JavaScript runtime and package manager |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

## Performance

- Lighthouse Score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Static HTML generation - no client-side rendering required
- Minimal JavaScript (only for interactive components)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

This is a demonstration project built by AI. While it's open source, it's primarily meant as an example rather than an active project seeking contributions.

However, if you find bugs or have suggestions:
1. Open an issue describing the problem
2. Feel free to fork and adapt for your own use

## License

MIT License - see [LICENSE](LICENSE) for details.

This means you can:
- Use this project for any purpose
- Modify it to create your own knowledge management system
- Deploy your own version

## Acknowledgments

This project synthesizes ideas from many thinkers:

- **Michael Polanyi** - Tacit knowledge and the limits of codification
- **Thomas Kuhn** - Paradigm shifts and incommensurability
- **Jiddu Krishnamurti** - Freedom from accumulated knowledge
- **Jon Kabat-Zinn** - Mindfulness attitudes in knowledge work
- **Robert Kegan** - Adult development and self-transforming mind
- **Jim Collins** - Organizational knowledge architecture
- **Chris Argyris** - Double-loop learning
- **Martin Seligman** - Learned optimism

Built with [Claude](https://claude.ai) by Anthropic.

## Questions?

- Explore the live demo to see knowledge management in action
- Read the [About page](/about) for more on how this was built
- Check out the [glossary](/glossary) to understand the concepts
- Review the code to see how it's implemented

---

**Built entirely through AI conversation. A demonstration of knowledge management by knowledge management.**
