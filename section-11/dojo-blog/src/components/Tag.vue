<script setup>
import { computed } from 'vue';

import getPosts from '@/composables/getPosts';
import { useRoute } from 'vue-router';
import PostList from './PostList.vue';
import Placeholder from './Placeholder.vue';
import TagCloud from './TagCloud.vue';

const route = useRoute();

const { posts, error, loadPosts } = getPosts();

loadPosts();

const filteredPosts = computed(() => {
  return posts.value.filter(p => p.tags.includes(route.params.tag));
});

</script>

<template>
  <h2>Tag</h2>
  <div v-if="error">{{ error.message }}</div>
  <div v-else-if="filteredPosts.length">
    <PostList :posts="filteredPosts" />
    <TagCloud :posts="posts" />
  </div>
  <div v-else
       class="loading">
    <Placeholder />
  </div>
</template>

<style scoped>
.loading {
  margin-top: 1.5rem;
}
</style>