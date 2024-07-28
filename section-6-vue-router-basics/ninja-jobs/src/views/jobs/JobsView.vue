<script>
export default {
  data() {
    return {
      jobs: null
    };
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3000/jobs');
      this.jobs = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>

<template>
  <div>
    <h1>Jobs</h1>
    <p v-if="!jobs">Loading jobs...</p>
    <div v-else>
      <div v-for="job in jobs" :key="job.id" class="job">
        <RouterLink :to="{ name: 'jobDetails', params: { id: job.id } }" class="jobs-link">
          <h2>{{ job.title }}</h2>
          <p>{{ job.details }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job {
  margin-bottom: 1.5rem;
}

.job:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
}

.jobs-link:hover {
  background-color: transparent;
}

.jobs-link h2 {
  transition: color 250ms;
}

.jobs-link:hover h2 {
  color: var(--color-text);
}

.jobs-link p {
  color: var(--color-text);
}
</style>
