<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: "App",
  components: {
    Block,
    Results
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    };
  },
  methods: {
    startGame() {
      this.delay = Math.floor(Math.random() * 5000) + 2000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
};
</script>

<template>
  <h1>Ninja Reaction Timer</h1>
  <button type="button"
          :disabled="isPlaying"
          @click="startGame">Play</button>

  <Block v-if="isPlaying"
         :delay="delay"
         @on-end="endGame" />

  <Results v-if="this.showResults"
           :score="score" />
</template>

<style scoped>
h1 {
  font-weight: 700;
  margin: 3rem 0 1.5rem;
}

button {
  border: 1px solid #009494;
  background-color: #009494;
  padding: 0.25rem 1rem;
  color: #fafafa;
  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  cursor: pointer;
  transition: background-color 300ms, border-color 300ms;
  border-radius: 4px;
}

button:hover {
  background-color: #008080;
  border-color: #008080;
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  cursor: not-allowed;
}
</style>
