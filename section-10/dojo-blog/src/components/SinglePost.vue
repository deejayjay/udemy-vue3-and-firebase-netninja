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

  <h2>
    <RouterLink :to="{ name: 'details', params: { id: post.id } }">
      {{ post.title }}
    </RouterLink>
  </h2>


  <p>{{ summary }}</p>
  <span v-for="tag in post.tags"
        class="tag"
        :key="post.id">#{{ tag }}</span>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--color-text);
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.tag {
  margin-right: 1rem;
  font-style: italic;
  font-size: 0.75;
  background-color: #D0CD94;
  color: #333;
  padding: 0.125rem 0.5rem;
}
</style>