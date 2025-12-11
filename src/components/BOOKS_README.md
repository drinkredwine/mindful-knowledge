# Book Components and Metadata

This directory contains components for displaying book references throughout the TUKE application.

## Files Created

### Data Files
- `/public/books.json` - Complete metadata for all 8 key reference books

### Book Cover Images
All located in `/public/images/book-covers/`:
- `polanyi-tacit.svg` - The Tacit Dimension (blue gradient)
- `nonaka.svg` - The Knowledge-Creating Company (red gradient)
- `kabat-zinn.svg` - Full Catastrophe Living (green gradient)
- `kegan.svg` - In Over Our Heads (purple gradient)
- `collins.svg` - Beyond Entrepreneurship 2.0 (gray gradient)
- `kuhn.svg` - The Structure of Scientific Revolutions (pink gradient)
- `krishnamurti.svg` - Freedom from the Known (orange gradient)
- `seligman.svg` - Learned Optimism (cyan gradient)

### Components
- `/src/components/BookCard.astro` - Full book display component
- `/src/components/glossary/BookReference.astro` - Inline book reference (updated)

## Usage

### BookCard Component
Use for full book displays on dedicated pages or sections:

```astro
---
import BookCard from '@/components/BookCard.astro';
---

<BookCard bookId="polanyi-tacit" />
<BookCard bookId="nonaka-knowledge-creating" />
```

### BookReference Component (Glossary)
Already integrated into glossary terms. Use in glossary term markdown:

```yaml
---
term: "Tacit Knowledge"
bookRef: "polanyi-tacit"
---
```

## Book IDs

Valid book IDs for both components:
- `polanyi-tacit`
- `nonaka-knowledge-creating`
- `kabat-zinn-mindfulness`
- `kegan-in-over-our-heads`
- `collins-be-20`
- `kuhn-structure`
- `krishnamurti-freedom`
- `seligman-learned-optimism`

## Book Metadata Structure

Each book in `books.json` includes:
- `id` - Unique identifier
- `author` - Author name(s)
- `title` - Full book title
- `year` - Publication year
- `isbn` - ISBN-13
- `cover` - Path to cover image (SVG)
- `topics` - Array of related topics
- `summary` - Brief description
- `keyQuote` - (optional) Notable quote from the book
- `keyInsight` - (optional) Key insight or concept
- `critique` - (optional) Critical analysis or limitations
- `relevance` - How the book relates to TUKE's mission

## Replacing with Real Book Covers

If you want to use actual book cover images instead of the SVG placeholders:

1. Download book covers (ensure proper licensing/fair use)
2. Save as JPG files in `/public/images/book-covers/`
3. Name them matching the pattern: `[bookId].jpg`
4. Update `books.json` to reference `.jpg` instead of `.svg`
5. Recommended size: 400-600px wide, optimized to <200KB

### Sources for Book Covers
- Open Library API: `https://covers.openlibrary.org/b/isbn/[ISBN]-L.jpg`
- Google Books API
- Amazon (check licensing)
- Publisher websites (with permission)

## Design Notes

The SVG covers use:
- 400x600px dimensions (standard book cover ratio)
- Gradient backgrounds with distinct colors per book
- Book title, author, and key concept/quote
- Designed to be recognizable and visually distinct
- Small file size (2-4KB per SVG)

Each book has a unique color scheme that can be used for visual consistency across the app:
- Polanyi: Blue (#1e3a8a to #3b82f6)
- Nonaka: Red (#7c2d12 to #dc2626)
- Kabat-Zinn: Green (#065f46 to #10b981)
- Kegan: Purple (#4c1d95 to #8b5cf6)
- Collins: Gray (#1f2937 to #4b5563)
- Kuhn: Pink (#831843 to #db2777)
- Krishnamurti: Orange (#713f12 to #d97706)
- Seligman: Cyan (#0c4a6e to #0ea5e9)

## Next Steps

1. Add book detail pages at `/books/[bookId]`
2. Create a books index page at `/books`
3. Add cross-references between glossary terms and books
4. Consider adding "Related Books" sections to slides
5. Integrate with search functionality
6. Add ISBN links to purchase/library lookup
