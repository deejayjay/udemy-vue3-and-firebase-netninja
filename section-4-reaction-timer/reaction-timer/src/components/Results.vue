<script>
export default {
  name: "Results",
  props: {
    finalScore: Number
  },
  data() {
    return {
      rank: null
    };
  },
  mounted() {
    if (this.finalScore < 250) {
      this.rank = "Ninja Fingers";
    } else if (this.finalScore < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace...";
    }
  }
};
</script>

<template>
  <div class="results-wrapper">
    <h2 class="rank">{{ rank }}</h2>
    <div class="results">
      {{ finalScore }} milliseconds
    </div>
  </div>
</template>

<style scoped>
.results-wrapper {
  margin: 3rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.results {
  color: #fafafa;
  font-weight: 700;
  letter-spacing: 0.05em;
  width: min(100%, 20rem);
  aspect-ratio: 1;
  background-color: darkkhaki;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

.rank {
  color: rgb(155, 151, 96);
}
</style>