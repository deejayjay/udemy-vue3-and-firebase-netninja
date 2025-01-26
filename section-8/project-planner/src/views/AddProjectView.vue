<script>
export default {
  name: "AddProjectView",
  data() {
    return {
      title: "",
      details: ""
    };
  },
  methods: {
    async handleSubmit() {
      const project = {
        title: this.title,
        details: this.details,
        complete: false
      };

      try {
        const res = await fetch("http://localhost:3000/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(project)
        });

        if (res.ok) {
          this.$router.push("/");
        } else {
          console.error("Error adding project");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="h3 mb-4">Add new project</h2>
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
      <i class="bi bi-plus-square-fill me-2"></i>
      Add Project
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