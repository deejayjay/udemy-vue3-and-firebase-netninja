<script>
export default {
  name: "Results",
  props: {
    score: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      rank: null
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja Fingers";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail Pace";
    }
  }
};
</script>

<template>
  <div class="results">
    <p>{{ rank }}</p>
    <p>{{ score }}ms</p>
  </div>
</template>

<style scoped>
.results {
  width: 30rem;
  border-radius: 1rem;
  background-color: #0d9488;
  color: #f3f4f6;
  text-align: center;
  padding: 10rem 0;
  margin: 3rem auto;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.25em;
}
</style>
