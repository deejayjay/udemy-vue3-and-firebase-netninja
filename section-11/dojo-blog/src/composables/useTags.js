import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);

  // 1. Create an array of tags array from all posts
  // 2. Combine them all into a single array of tags
  // 3. Create a Set from the combined tags array
  const tagSet = new Set(posts.map((p) => p.tags).flat());

  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
