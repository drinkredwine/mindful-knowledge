/**
 * Utility functions for glossary term handling
 */

import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type GlossaryTerm = CollectionEntry<'glossary'>;

export interface GlossaryTermData {
  term: string;
  category: 'epistemology' | 'methodology' | 'practice' | 'philosophy';
  thinker?: string;
  bookRef?: string;
  relatedTerms: string[];
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

/**
 * Convert term name to slug
 */
export function termToSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

/**
 * Get category color classes
 */
export function getCategoryColor(category: string): string {
  const colors = {
    epistemology: 'text-blue-700 bg-blue-50 border-blue-200',
    methodology: 'text-purple-700 bg-purple-50 border-purple-200',
    practice: 'text-green-700 bg-green-50 border-green-200',
    philosophy: 'text-red-700 bg-red-50 border-red-200',
  };
  return colors[category as keyof typeof colors] || 'text-gray-700 bg-gray-50 border-gray-200';
}

/**
 * Get category background color classes
 */
export function getCategoryBgColor(category: string): string {
  const colors: Record<string, string> = {
    epistemology: 'bg-blue-100 text-blue-800',
    methodology: 'bg-purple-100 text-purple-800',
    practice: 'bg-green-100 text-green-800',
    philosophy: 'bg-red-100 text-red-800',
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}

/**
 * Get difficulty level display
 */
export function getDifficultyDisplay(difficulty: string): string {
  const displays: Record<string, string> = {
    beginner: '⭐ Beginner',
    intermediate: '⭐⭐ Intermediate',
    advanced: '⭐⭐⭐ Advanced',
  };
  return displays[difficulty] || difficulty;
}

/**
 * Sort terms by various criteria
 */
export function sortTerms<T extends { data: GlossaryTermData }>(
  terms: T[],
  by: 'alphabetical' | 'category' | 'difficulty' = 'alphabetical'
): T[] {
  const sorted = [...terms];

  switch (by) {
    case 'alphabetical':
      return sorted.sort((a, b) => a.data.term.localeCompare(b.data.term));
    case 'category':
      return sorted.sort((a, b) => {
        if (a.data.category === b.data.category) {
          return a.data.term.localeCompare(b.data.term);
        }
        return a.data.category.localeCompare(b.data.category);
      });
    case 'difficulty':
      const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };
      return sorted.sort((a, b) => {
        const diffA = difficultyOrder[a.data.difficulty];
        const diffB = difficultyOrder[b.data.difficulty];
        if (diffA === diffB) {
          return a.data.term.localeCompare(b.data.term);
        }
        return diffA - diffB;
      });
    default:
      return sorted;
  }
}

/**
 * Filter terms by tag
 */
export function filterByTag<T extends { data: GlossaryTermData }>(
  terms: T[],
  tag: string
): T[] {
  return terms.filter(term => term.data.tags.includes(tag));
}

/**
 * Get all unique tags from terms
 */
export function getAllTags<T extends { data: GlossaryTermData }>(terms: T[]): string[] {
  const tagSet = new Set<string>();
  terms.forEach(term => {
    term.data.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Get all glossary terms sorted alphabetically
 */
export async function getAllGlossaryTerms(): Promise<GlossaryTerm[]> {
  const terms = await getCollection('glossary');
  return terms.sort((a, b) => a.data.term.localeCompare(b.data.term));
}

/**
 * Get a single glossary term by slug
 */
export async function getTermBySlug(slug: string): Promise<GlossaryTerm | undefined> {
  const terms = await getCollection('glossary');
  return terms.find(term => term.slug === slug);
}

/**
 * Group terms by category
 */
export function groupByCategory(terms: GlossaryTerm[]) {
  return {
    epistemology: terms.filter(t => t.data.category === 'epistemology'),
    methodology: terms.filter(t => t.data.category === 'methodology'),
    practice: terms.filter(t => t.data.category === 'practice'),
    philosophy: terms.filter(t => t.data.category === 'philosophy'),
  };
}

/**
 * Get difficulty badge color classes
 */
export function getDifficultyBadge(difficulty: string): string {
  const badges = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };
  return badges[difficulty as keyof typeof badges] || 'bg-gray-100 text-gray-800';
}

/**
 * Get category label for display
 */
export function getCategoryLabel(category: string): string {
  const labels = {
    epistemology: 'Epistemology',
    methodology: 'Methodology',
    practice: 'Practice',
    philosophy: 'Philosophy',
  };
  return labels[category as keyof typeof labels] || category;
}

/**
 * Get all unique thinkers from terms
 */
export function getAllThinkers(terms: GlossaryTerm[]): string[] {
  const thinkerSet = new Set<string>();
  terms.forEach(term => {
    if (term.data.thinker) {
      thinkerSet.add(term.data.thinker);
    }
  });
  return Array.from(thinkerSet).sort();
}

/**
 * Build knowledge graph connections
 */
export function buildKnowledgeGraph(terms: GlossaryTerm[]) {
  const graph: Record<string, string[]> = {};
  terms.forEach(term => {
    graph[term.slug] = term.data.relatedTerms || [];
  });
  return graph;
}
