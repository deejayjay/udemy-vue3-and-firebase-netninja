<script setup>
import { useRoute } from 'vue-router';

import Placeholder from '@/components/Placeholder.vue';
import getPost from '@/composables/getPost';

const props = defineProps(["id"]);
const { post, error, loadPost } = getPost();

loadPost(props.id);

const route = useRoute();
console.log(route);
</script>

<template>
  <div v-if="error"
       class="error">{{ error }}</div>
  <div v-else-if="post"
       class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div v-else
       class="loading">
    <Placeholder />
  </div>
</template>

<style scoped>
.error,
.post,
.loading {
  margin-top: 1.5rem;
}
</style>