<script setup>
import SinglePost from '@/components/SinglePost.vue';

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="posts-list">
    <div class="post"
         v-for="post in posts"
         :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<style scoped>
.posts-list {
  margin-top: 1.5rem;
}

.post {
  padding: 1rem;
}

.post {
  margin-bottom: 1.5rem;
  border: 1px solid #cf9395;
  box-shadow: 5px 5px 0px 0px #cf9395;
}
</style>