<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   };
  // }
};
</script>

<template>
  <main>
    <h1>Job Details Page</h1>
    <section>
      <h2>Job Title</h2>
      <p>The job id is {{ id }}</p>
    </section>
  </main>
</template>

<style scoped></style>