/**
 * Book metadata utilities
 *
 * Provides type-safe access to book metadata throughout the application.
 */

export interface Book {
  id: string;
  author: string;
  title: string;
  year: number;
  isbn: string;
  cover: string;
  topics: string[];
  summary: string;
  keyQuote?: string;
  keyInsight?: string;
  critique?: string;
  relevance: string;
}

export interface BooksData {
  books: {
    [key: string]: Book;
  };
}

/**
 * Load books data from the public JSON file
 *
 * @param baseUrl - The base URL for fetching (use Astro.url in Astro components)
 * @returns Promise resolving to books data
 */
export async function loadBooks(baseUrl: URL): Promise<BooksData> {
  const response = await fetch(new URL('/books.json', baseUrl));
  return await response.json();
}

/**
 * Get a specific book by ID
 *
 * @param bookId - The book identifier
 * @param baseUrl - The base URL for fetching
 * @returns Promise resolving to book data or null if not found
 */
export async function getBook(bookId: string, baseUrl: URL): Promise<Book | null> {
  const data = await loadBooks(baseUrl);
  return data.books[bookId] || null;
}

/**
 * Get all books as an array
 *
 * @param baseUrl - The base URL for fetching
 * @returns Promise resolving to array of books
 */
export async function getAllBooks(baseUrl: URL): Promise<Book[]> {
  const data = await loadBooks(baseUrl);
  return Object.values(data.books);
}

/**
 * Get books by topic
 *
 * @param topic - The topic to filter by
 * @param baseUrl - The base URL for fetching
 * @returns Promise resolving to array of books matching the topic
 */
export async function getBooksByTopic(topic: string, baseUrl: URL): Promise<Book[]> {
  const books = await getAllBooks(baseUrl);
  return books.filter(book => book.topics.includes(topic));
}

/**
 * Get books by year range
 *
 * @param startYear - Start year (inclusive)
 * @param endYear - End year (inclusive)
 * @param baseUrl - The base URL for fetching
 * @returns Promise resolving to array of books in the year range
 */
export async function getBooksByYearRange(
  startYear: number,
  endYear: number,
  baseUrl: URL
): Promise<Book[]> {
  const books = await getAllBooks(baseUrl);
  return books.filter(book => book.year >= startYear && book.year <= endYear);
}

/**
 * Search books by title or author
 *
 * @param query - Search query (case-insensitive)
 * @param baseUrl - The base URL for fetching
 * @returns Promise resolving to array of matching books
 */
export async function searchBooks(query: string, baseUrl: URL): Promise<Book[]> {
  const books = await getAllBooks(baseUrl);
  const lowerQuery = query.toLowerCase();
  return books.filter(
    book =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Valid book IDs (for type safety and autocomplete)
 */
export const BOOK_IDS = [
  'polanyi-tacit',
  'nonaka-knowledge-creating',
  'kabat-zinn-mindfulness',
  'kegan-in-over-our-heads',
  'collins-be-20',
  'kuhn-structure',
  'krishnamurti-freedom',
  'seligman-learned-optimism',
] as const;

export type BookId = typeof BOOK_IDS[number];

/**
 * Check if a string is a valid book ID
 */
export function isValidBookId(id: string): id is BookId {
  return BOOK_IDS.includes(id as BookId);
}

/**
 * Book topics for filtering and categorization
 */
export const BOOK_TOPICS = [
  'tacit-knowledge',
  'epistemology',
  'knowing-how',
  'seci-model',
  'organizational-learning',
  'mindfulness-attitudes',
  'non-judgment',
  'beginners-mind',
  'kegan-stages',
  'adult-development',
  'self-transforming-mind',
  'be-20-framework',
  'vision-mission-values',
  'paradigm-shift',
  'social-constructivism',
  'freedom-from-known',
  'learned-optimism',
  'positive-psychology',
] as const;

export type BookTopic = typeof BOOK_TOPICS[number];
