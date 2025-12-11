<script setup lang="ts">
interface Props {
  term: string;
  slug: string;
  category: 'epistemology' | 'methodology' | 'practice' | 'philosophy';
  thinker?: string;
  tags: string[];
}

const props = defineProps<Props>();

const categoryColors = {
  epistemology: 'bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-900',
  methodology: 'bg-purple-50 border-purple-200 hover:border-purple-400 text-purple-900',
  practice: 'bg-green-50 border-green-200 hover:border-green-400 text-green-900',
  philosophy: 'bg-red-50 border-red-200 hover:border-red-400 text-red-900',
};
</script>

<template>
  <a
    :href="`/glossary/${slug}`"
    :class="`block p-5 rounded-lg border-2 transition-all ${categoryColors[category]}`"
  >
    <h3 class="font-semibold mb-2">{{ term }}</h3>
    <p v-if="thinker" class="text-sm opacity-75 italic mb-3">{{ thinker }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags.slice(0, 2)"
        :key="tag"
        class="text-xs px-2 py-1 rounded bg-white/60"
      >
        {{ tag }}
      </span>
    </div>
  </a>
</template>
