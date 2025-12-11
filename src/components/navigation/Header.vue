<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mobileMenuOpen = ref(false);
const currentPath = ref('');

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

onMounted(() => {
  currentPath.value = window.location.pathname;
});

const isActive = (path: string) => {
  if (path === '/') {
    return currentPath.value === '/';
  }
  return currentPath.value.startsWith(path);
};

const getLinkClass = (path: string) => {
  const base = "text-gray-700 hover:text-epistemology transition-colors font-medium";
  return isActive(path) ? `${base} text-epistemology border-b-2 border-epistemology` : base;
};

const getMobileLinkClass = (path: string) => {
  const base = "block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded";
  return isActive(path) ? `${base} bg-epistemology/10 text-epistemology font-semibold` : base;
};
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <a href="/" class="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-epistemology transition-colors">
            <span class="text-2xl">🧠</span>
            <span class="hidden sm:inline">TUKE Knowledge Management</span>
            <span class="sm:hidden">TUKE KM</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="/" :class="getLinkClass('/')">
            Home
          </a>
          <a href="/glossary" :class="getLinkClass('/glossary')">
            Glossary
          </a>
          <a href="/slides/minimal/1" :class="getLinkClass('/slides')">
            Slides
          </a>
          <a href="/books" :class="getLinkClass('/books')">
            Books
          </a>
          <a href="/about" :class="getLinkClass('/about')">
            About
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 space-y-2 border-t border-gray-100">
        <a href="/" :class="getMobileLinkClass('/')">
          Home
        </a>
        <a href="/glossary" :class="getMobileLinkClass('/glossary')">
          Glossary
        </a>
        <a href="/slides/minimal/1" :class="getMobileLinkClass('/slides')">
          Slides
        </a>
        <a href="/books" :class="getMobileLinkClass('/books')">
          Books
        </a>
        <a href="/about" :class="getMobileLinkClass('/about')">
          About
        </a>
      </div>
    </nav>
  </header>
</template>
