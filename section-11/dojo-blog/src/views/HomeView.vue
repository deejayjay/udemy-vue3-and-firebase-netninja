<script setup>
import PostList from '@/components/PostList.vue';
import Placeholder from '@/components/Placeholder.vue';
import getPosts from '@/composables/getPosts';
import TagCloud from '@/components/TagCloud.vue';

const { posts, error, loadPosts } = getPosts();

loadPosts();
</script>

<template>
  <div v-if="error"
       class="error">No data available!</div>
  <div v-else-if="posts.length">
    <PostList :posts="posts" />
    <TagCloud :posts="posts" />
  </div>
  <div v-else
       class="loading">
    <Placeholder />
  </div>
</template>

<style scoped>
.error,
.loading {
  margin-top: 1.5rem;
}
</style>
