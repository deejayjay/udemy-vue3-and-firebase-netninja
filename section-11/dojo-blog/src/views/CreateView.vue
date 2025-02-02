<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const createModel = reactive({
  title: '',
  body: '',
  tag: '',
  tags: []
});

const handleTagKeydown = () => {
  const enteredTag = createModel.tag.trim();

  if (!enteredTag || createModel.tags.includes(enteredTag)) {
    createModel.tag = '';
    return;
  }

  createModel.tags.push(enteredTag);
  createModel.tag = '';
};

const createPost = async () => {
  const sanitizedPost = {
    title: createModel.title.trim(),
    body: createModel.body.trim(),
    tags: createModel.tags
  };

  if (!sanitizedPost.title || !sanitizedPost.body || !sanitizedPost.tags.length) {
    console.error("Please fill out all fields.");
    return;
  }

  if (createModel.tag.trim() && !sanitizedPost.tags.includes(createModel.tag.trim())) {
    console.log(`Pusing tag: ${createModel.tag.trim()}`);

    sanitizedPost.tags.push(createModel.tag.trim());
    createModel.tag = '';
  }

  try {
    const res = await fetch(`http://localhost:3000/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanitizedPost)
    });

    if (!res.ok) {
      throw new Error('Failed to create post');
    }

    router.push({ name: 'home' });
  } catch (e) {
    console.error(e.message);
  }
};
</script>

<template>
  <form class="mt-4 bg-light p-4 rounded-2"
        @submit.prevent="createPost">
    <div class="mb-3">
      <label for="title"
             class="form-label text-secondary">Title</label>
      <input type="text"
             id="title"
             name="title"
             class="form-control"
             v-model="createModel.title"
             required />
    </div>
    <div class="mb-3">
      <label for="content"
             class="form-label text-secondary">Content</label>
      <textarea id="content"
                name="content"
                class="form-control"
                v-model="createModel.body"
                required></textarea>
    </div>
    <div class="mb-3">
      <label for="tags"
             class="form-label text-secondary">Tags</label><span class="fst-italic ms-1 text-secondary">(hit enter to
        add a tag)</span>
      <input type="text"
             id="tags"
             name="tags"
             class="form-control"
             v-model="createModel.tag"
             @keydown.enter.prevent="handleTagKeydown" />
      <span v-for="tag in createModel.tags"
            :key="tag"
            class="badge rounded-pill text-bg-secondary me-2 mt-2">#{{ tag }}</span>
    </div>
    <button type="submit"
            class="btn btn-success">Add Post</button>
  </form>
</template>