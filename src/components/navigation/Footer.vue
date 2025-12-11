<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-200 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About Section -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">🧠</span>
            <h3 class="font-bold text-gray-900">TUKE Knowledge Management</h3>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            A demonstration of knowledge management principles built through AI conversation.
            Explore interconnected concepts across epistemology, methodology, practice, and philosophy.
          </p>
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span>Built with Claude Code</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Explore</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="/glossary" class="text-gray-600 hover:text-epistemology transition-colors">
                Glossary (40 terms)
              </a>
            </li>
            <li>
              <a href="/slides/minimal/1" class="text-gray-600 hover:text-methodology transition-colors">
                Slides (13 topics)
              </a>
            </li>
            <li>
              <a href="/books" class="text-gray-600 hover:text-practice transition-colors">
                Books (8 references)
              </a>
            </li>
            <li>
              <a href="/about" class="text-gray-600 hover:text-philosophy transition-colors">
                About This Project
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Resources</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="/slides/minimal/1" class="text-gray-600 hover:text-epistemology transition-colors">
                Minimal Slides
              </a>
            </li>
            <li>
              <a href="/slides/ideas/1" class="text-gray-600 hover:text-epistemology transition-colors">
                Ideas Slides
              </a>
            </li>
            <li>
              <a href="/slides/detailed/1" class="text-gray-600 hover:text-epistemology transition-colors">
                Detailed Slides
              </a>
            </li>
            <li>
              <a href="https://github.com" class="text-gray-600 hover:text-epistemology transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-sm text-gray-600 text-center md:text-left">
            <p>
              &copy; {{ currentYear }} TUKE Knowledge Management Demo
            </p>
            <p class="mt-1">
              Built with <a href="https://astro.build" class="text-epistemology hover:underline" target="_blank" rel="noopener noreferrer">Astro</a>,
              <a href="https://vuejs.org" class="text-methodology hover:underline" target="_blank" rel="noopener noreferrer">Vue</a>, and
              <a href="https://tailwindcss.com" class="text-practice hover:underline" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
            </p>
          </div>

          <div class="flex items-center gap-4">
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-epistemology to-methodology text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Built with Claude
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
