<script>
export default {
  data() {
    return {
      jobs: []
    };
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost:3000/jobs');
      const data = await res.json();
      this.jobs = data;
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>

<template>
  <main>
    <h1>Jobs</h1>
    <div v-for="job in jobs"
         :key="job.id">
      <RouterLink :to="{ name: 'job-details', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
        <p>{{ job.description }}</p>
      </RouterLink>

      <hr v-if="job.id !== jobs[jobs.length - 1].id" />
    </div>
  </main>
</template>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}

hr {
  border-bottom: none;
  border-color: #aaa;
  margin: 0.5rem 0 1rem;
}
</style>