<script setup>
import useTags from '@/composables/useTags';

const props = defineProps(["posts"]);

const { tags } = useTags(props.posts);
</script>

<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div class="tags">
      <div v-for="tag in tags"
           :key="tag"
           class="tag">
        <RouterLink :to="{ name: 'tags', params: { tag } }">#{{ tag }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag-cloud .tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tags a {
  background-color: #D0CD94;
  color: #333;
  padding: 0.125rem 0.5rem;
  text-decoration: none;
  transition: background-color 300ms;
}

.tags a:hover {
  cursor: pointer;
  background-color: #d0cd94bd;
}

.tags a.router-link-exact-active {
  font-weight: 500;
}
</style>