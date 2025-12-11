<script setup lang="ts">
interface Props {
  slideNumber: number;
  currentVariant: 'minimal' | 'ideas' | 'detailed';
}

const props = defineProps<Props>();
</script>

<template>
  <div class="fixed top-6 right-6 flex gap-2 text-xs opacity-50 hover:opacity-100 transition-opacity">
    <a
      :href="`/slides/minimal/${slideNumber}`"
      :class="`px-3 py-1 rounded ${currentVariant === 'minimal' ? 'bg-black/30' : 'bg-black/10 hover:bg-black/20'}`"
    >
      Minimal
    </a>
    <a
      :href="`/slides/ideas/${slideNumber}`"
      :class="`px-3 py-1 rounded ${currentVariant === 'ideas' ? 'bg-black/30' : 'bg-black/10 hover:bg-black/20'}`"
    >
      Ideas
    </a>
    <a
      :href="`/slides/detailed/${slideNumber}`"
      :class="`px-3 py-1 rounded ${currentVariant === 'detailed' ? 'bg-black/30' : 'bg-black/10 hover:bg-black/20'}`"
    >
      Detailed
    </a>
  </div>
</template>
