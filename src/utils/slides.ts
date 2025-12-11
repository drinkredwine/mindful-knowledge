import { getCollection, type CollectionEntry } from 'astro:content';
import { marked } from 'marked';

export type SlideEntry = CollectionEntry<'slides'>;

export async function getAllSlides() {
  const slides = await getCollection('slides');
  return slides.sort((a, b) => a.data.slideNumber - b.data.slideNumber);
}

export async function getSlideByNumber(slideNumber: number) {
  const slides = await getAllSlides();
  return slides.find(slide => slide.data.slideNumber === slideNumber);
}

export function parseSlideVariants(slideBody: string) {
  const variants = {
    minimal: '',
    ideas: '',
    detailed: ''
  };

  // Split by ## headings to separate variants
  const sections = slideBody.split(/\n## /);

  for (const section of sections) {
    const trimmedSection = section.trim();
    if (trimmedSection.startsWith('minimal')) {
      variants.minimal = trimmedSection.replace(/^minimal\n/, '').trim();
    } else if (trimmedSection.startsWith('ideas')) {
      variants.ideas = trimmedSection.replace(/^ideas\n/, '').trim();
    } else if (trimmedSection.startsWith('detailed')) {
      variants.detailed = trimmedSection.replace(/^detailed\n/, '').trim();
    }
  }

  return variants;
}

export function getNavigationData(currentSlide: number, totalSlides: number) {
  return {
    hasPrev: currentSlide > 0,
    hasNext: currentSlide < totalSlides - 1,
    prevSlide: currentSlide - 1,
    nextSlide: currentSlide + 1,
    progress: Math.round((currentSlide / (totalSlides - 1)) * 100)
  };
}

export async function renderMarkdown(markdown: string): Promise<string> {
  return await marked.parse(markdown);
}
