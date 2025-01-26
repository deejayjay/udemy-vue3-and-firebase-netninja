<script>
export default {
  name: "EditProjectView",
  props: ["id"],
  data() {
    return {
      uri: `http://localhost:3000/projects/${this.id}`,
      title: "",
      details: "",
    };
  },
  methods: {
    async handleSubmit() {
      const project = {
        title: this.title,
        details: this.details
      };
      console.log(project);

      try {
        const res = await fetch(this.uri, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(project)
        });

        if (res.ok) {
          this.$router.push("/");
        } else {
          console.error("Error updating project");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  async mounted() {
    const response = await fetch(this.uri);
    const data = await response.json();

    if (response.ok && data) {
      this.title = data.title;
      this.details = data.details;
    }
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="h3 mb-4">Edit project</h2>
    <div class="mb-3">
      <label for="title"
             class="form-label mb-1">Title:</label>
      <input v-model="title"
             type="text"
             class="form-control"
             id="title"
             required>
    </div>
    <div class="mb-3">
      <label for="details"
             class="form-label mb-1">Details:</label>
      <textarea v-model="details"
                class="form-control"
                id="details"
                rows="3"
                required></textarea>
    </div>
    <button type="submit"
            class="btn btn-dark">
      <i class="bi bi-floppy-fill me-2"></i>
      Update Project
    </button>
  </form>
</template>

<style scoped>
form {
  background: #fafafa;
  padding: 2rem 1.5rem;
  color: #4a4a4a;
  margin-top: 2rem;
}
</style>