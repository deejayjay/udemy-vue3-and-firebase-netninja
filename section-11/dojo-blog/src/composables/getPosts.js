import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      if (!res.ok) throw new Error("Unable to fetch posts!");

      setTimeout(async () => {
        posts.value = await res.json();
      }, 1000);
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };

  return { posts, error, loadPosts };
};

export default getPosts;
