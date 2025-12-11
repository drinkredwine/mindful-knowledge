<script setup lang="ts">
interface Props {
  id: string;
  author: string;
  title: string;
  year: number;
  isbn: string;
  cover?: string;
  topics: string[];
  summary: string;
  keyQuote?: string;
  keyInsight?: string;
  critique?: string;
  relevance: string;
}

const props = defineProps<Props>();

const amazonUrl = `https://www.amazon.com/s?k=${props.isbn}`;
const worldcatUrl = `https://www.worldcat.org/isbn/${props.isbn}`;
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border-2 border-gray-100 hover:border-epistemology flex flex-col h-full">
    <!-- Book Header -->
    <div class="mb-4">
      <div class="flex items-start gap-4">
        <div v-if="cover" class="flex-shrink-0 w-16 h-20 bg-gray-100 rounded flex items-center justify-center text-3xl">
          📖
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
            {{ title }}
          </h3>
          <p class="text-sm text-gray-600 mb-1">{{ author }}</p>
          <p class="text-xs text-gray-500">{{ year }}</p>
        </div>
      </div>
    </div>

    <!-- Summary -->
    <div class="flex-1 mb-4">
      <p class="text-sm text-gray-700 leading-relaxed mb-3">
        {{ summary }}
      </p>

      <!-- Quote/Insight -->
      <div v-if="keyQuote" class="bg-epistemology/5 border-l-4 border-epistemology px-3 py-2 mb-3">
        <p class="text-sm text-gray-800 italic">
          "{{ keyQuote }}"
        </p>
      </div>

      <div v-if="keyInsight" class="bg-methodology/5 border-l-4 border-methodology px-3 py-2 mb-3">
        <p class="text-sm text-gray-800">
          <strong>Key Insight:</strong> {{ keyInsight }}
        </p>
      </div>

      <!-- Critique if present -->
      <div v-if="critique" class="bg-philosophy/5 border-l-4 border-philosophy px-3 py-2 mb-3">
        <p class="text-sm text-gray-800">
          <strong>Critique:</strong> {{ critique }}
        </p>
      </div>

      <!-- Relevance -->
      <div class="bg-practice/5 rounded-lg px-3 py-2 mb-3">
        <p class="text-sm text-gray-800">
          <strong>Relevance:</strong> {{ relevance }}
        </p>
      </div>
    </div>

    <!-- Related Topics -->
    <div class="mb-4">
      <div class="text-xs font-semibold text-gray-500 mb-2 uppercase">Related Concepts</div>
      <div class="flex flex-wrap gap-2">
        <a
          v-for="topic in topics"
          :key="topic"
          :href="`/glossary/${topic}`"
          class="text-xs px-2 py-1 rounded bg-epistemology/10 text-epistemology hover:bg-epistemology hover:text-white transition-colors"
        >
          {{ topic.replace(/-/g, ' ') }}
        </a>
      </div>
    </div>

    <!-- Purchase Links -->
    <div class="pt-4 border-t border-gray-200 flex gap-2">
      <a
        :href="amazonUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 text-center text-xs px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded transition-colors"
      >
        Amazon
      </a>
      <a
        :href="worldcatUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 text-center text-xs px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded transition-colors"
      >
        WorldCat
      </a>
    </div>
  </div>
</template>
