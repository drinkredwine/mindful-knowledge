/**
 * Navigation utilities for slide presentations
 */

export interface SlideInfo {
  number: number;
  title: string;
  section: string;
  variant: 'minimal' | 'ideas' | 'detailed';
}

export interface NavigationContext {
  current: number;
  total: number;
  hasPrevious: boolean;
  hasNext: boolean;
  previousUrl: string | null;
  nextUrl: string | null;
}

/**
 * Get navigation context for a slide
 */
export function getNavigationContext(
  slideNumber: number,
  totalSlides: number,
  variant: 'minimal' | 'ideas' | 'detailed'
): NavigationContext {
  const hasPrevious = slideNumber > 1;
  const hasNext = slideNumber < totalSlides;

  return {
    current: slideNumber,
    total: totalSlides,
    hasPrevious,
    hasNext,
    previousUrl: hasPrevious ? `/slides/${variant}/${slideNumber - 1}` : null,
    nextUrl: hasNext ? `/slides/${variant}/${slideNumber + 1}` : null,
  };
}

/**
 * Get URL for switching between slide variants
 */
export function getVariantUrl(
  slideNumber: number,
  targetVariant: 'minimal' | 'ideas' | 'detailed'
): string {
  return `/slides/${targetVariant}/${slideNumber}`;
}

/**
 * Parse slide number from pathname
 */
export function parseSlideNumber(pathname: string): number | null {
  const match = pathname.match(/\/slides\/[^/]+\/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Parse variant from pathname
 */
export function parseVariant(pathname: string): 'minimal' | 'ideas' | 'detailed' | null {
  const match = pathname.match(/\/slides\/(minimal|ideas|detailed)/);
  return match ? (match[1] as 'minimal' | 'ideas' | 'detailed') : null;
}
