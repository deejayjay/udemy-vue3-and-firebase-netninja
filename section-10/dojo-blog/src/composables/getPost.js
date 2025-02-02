import { ref } from "vue";

const getPost = () => {
  const post = ref(null);
  const error = ref(null);

  const loadPost = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`);
      if (!res.ok) throw new Error("Unable to fetch post details!");

      setTimeout(async () => {
        post.value = await res.json();
      }, 1000);
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };

  return { post, error, loadPost };
};

export default getPost;
