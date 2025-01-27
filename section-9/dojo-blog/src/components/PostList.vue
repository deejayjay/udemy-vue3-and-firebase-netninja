<script setup>
import { onMounted } from 'vue';
import SinglePost from './SinglePost.vue';

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

onMounted(() => {
  console.log("Component mounted");
});

//console.log(props.posts);
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts"
         :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>