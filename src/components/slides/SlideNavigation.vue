<script setup lang="ts">
interface Props {
  slideNumber: number;
  totalSlides: number;
  variant: 'minimal' | 'ideas' | 'detailed';
  section?: string;
}

const props = defineProps<Props>();

const hasPrevious = props.slideNumber > 1;
const hasNext = props.slideNumber < props.totalSlides;
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 p-6 flex justify-between items-center text-sm opacity-50 hover:opacity-100 transition-opacity">
    <div>
      <a
        v-if="hasPrevious"
        :href="`/slides/${variant}/${slideNumber - 1}`"
        class="px-4 py-2 rounded bg-black/10 hover:bg-black/20 transition-colors"
      >
        Previous
      </a>
    </div>

    <div class="text-center">
      <div class="font-medium">{{ slideNumber }} / {{ totalSlides }}</div>
      <div v-if="section" class="text-xs mt-1 opacity-75">{{ section }}</div>
    </div>

    <div>
      <a
        v-if="hasNext"
        :href="`/slides/${variant}/${slideNumber + 1}`"
        class="px-4 py-2 rounded bg-black/10 hover:bg-black/20 transition-colors"
      >
        Next
      </a>
    </div>
  </div>
</template>
