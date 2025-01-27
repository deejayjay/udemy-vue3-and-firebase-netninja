<script setup>
import { computed } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const summary = computed(() => `${props.post.body.slice(0, 100)}...`);
</script>

<template>
  <h2>{{ post.title }}</h2>
  <p>{{ summary }}</p>
</template>
