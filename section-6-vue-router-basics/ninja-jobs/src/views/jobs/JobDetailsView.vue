<script>
export default {
  data() {
    return {
      job: null
    }
  },
  computed: {
    jobId() {
      return this.$route.params.id;
    }
  },
  async mounted() {
    try {
      const response = await fetch(`http://localhost:3000/jobs/${this.jobId}`);
      this.job = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }
};
</script>

<template>
  <div>
    <h1>Job Details Page</h1>
    <p v-if="!job">Loading job details...</p>
    <div v-else>
      <h2>{{ job.title }}</h2>
      <p>{{ job.details }}</p>
    </div>
  </div>
</template>