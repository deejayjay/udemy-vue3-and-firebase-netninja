<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const summary = computed(() => `${props.post.body.slice(0, 100)}...`);

const handleTagClick = (tag) => {
  router.push({ name: 'tags', params: { tag } });
};
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
        :key="post.id"
        @click="handleTagClick(tag)">#{{ tag }}</span>
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
  font-size: 0.75rem;
  background-color: #D0CD94;
  color: #333;
  padding: 0.125rem 0.5rem;
  transition: background-color 300ms;
}

.tag:hover {
  cursor: pointer;
  background-color: #d0cd94bd;
}
</style>