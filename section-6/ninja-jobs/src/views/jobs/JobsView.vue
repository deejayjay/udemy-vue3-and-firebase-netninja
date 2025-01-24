<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: 'Frontend Developer',
          description: 'Develop user-facing features using Vue.js',
        },
        {
          id: 2,
          title: 'Backend Developer',
          description: 'Build server-side applications using .NET',
        },
        {
          id: 3,
          title: 'Fullstack Developer',
          description: 'Create fullstack applications using Vue.js and .NET',
        },
      ]
    };
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