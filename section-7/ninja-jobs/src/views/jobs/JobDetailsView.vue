<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    };
  },
  async mounted() {
    try {
      const res = await fetch(`http://localhost:3000/jobs/${this.id}`);
      const data = await res.json();
      this.job = data;
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>

<template>
  <main>
    <h1>Job Details Page</h1>
    <section v-if="job">
      <h2>{{ job.title }}</h2>
      <p>{{ job.description }}</p>
    </section>
    <p v-else>No job found!</p>
  </main>
</template>

<style scoped></style>