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

const detailsUrl = `${import.meta.env.BASE_URL}/books/${props.id}`;
const coverPath = props.cover ? `${import.meta.env.BASE_URL}/${props.cover.replace(/^\//, '')}` : undefined;
</script>

<template>
  <a
    :href="detailsUrl"
    class="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100 hover:border-epistemology group cursor-pointer"
  >
    <!-- Book Cover (full, not cropped) -->
    <div v-if="coverPath" class="w-full bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <img
        :src="coverPath"
        :alt="title"
        class="w-full h-auto object-contain"
      />
    </div>

    <!-- Book Info (minimal) -->
    <div class="p-4 border-t border-gray-200">
      <h3 class="font-bold text-base text-gray-900 mb-1 line-clamp-2 group-hover:text-epistemology transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600">{{ author }}, {{ year }}</p>
    </div>
  </a>
</template>
