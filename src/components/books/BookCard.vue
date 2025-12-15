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
const detailsUrl = `${import.meta.env.BASE_URL}/books/${props.id}`;

// Fix cover path for BASE_URL
const coverPath = props.cover ? `${import.meta.env.BASE_URL}/${props.cover.replace(/^\//, '')}` : undefined;
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100 hover:border-epistemology flex flex-col h-full">
    <!-- Book Cover (top, cropped) -->
    <div v-if="coverPath" class="w-full h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      <img
        :src="coverPath"
        :alt="title"
        class="w-full h-full object-cover object-top opacity-90"
      />
    </div>

    <!-- Book Header -->
    <div class="p-6 pb-4">
      <h3 class="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600 mb-1">{{ author }}</p>
      <p class="text-xs text-gray-500">{{ year }}</p>
    </div>

    <!-- Summary -->
    <div class="px-6 flex-1 flex flex-col">
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

      <!-- View Details Button -->
      <div class="mb-4">
        <a
          :href="detailsUrl"
          class="block w-full text-center px-4 py-3 bg-epistemology hover:bg-epistemology/90 text-white font-semibold rounded-lg transition-colors"
        >
          View Full Details
        </a>
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
