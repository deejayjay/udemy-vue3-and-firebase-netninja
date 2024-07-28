<script>
import Block from "./components/Block.vue";
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
      score: null
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.score = null;
      this.delay = 2000 + Math.floor(Math.random() * 5000);
    },
    endGame(reactionTime) {
      this.isPlaying = false;
      this.score = reactionTime;
    }
  }
};
</script>


<template>
  <h1 class="app-title">Ninja Reaction Timer</h1>
  <button type="button" @click="startGame" :disabled="isPlaying" class="btn-play">Play</button>
  <Block v-if="isPlaying" :delay="delay" @on-end="endGame" />
  <br>
  <Results v-if="score" :finalScore="score" />
</template>


<style scoped>
.app-title {
  color: #3c3c3c;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.btn-play {
  background-color: #fff;
  border: 1px solid #1c855b;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #1c855b;
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 0.25em;
  transition: color 250ms, background-color 250ms;
}

.btn-play:hover {
  cursor: pointer;
  background-color: #1c855b;
  color: #fff;
}

.btn-play:disabled {
  background-color: #ccc;
  border-color: #ccc;
  color: #fff;
  cursor: not-allowed;
}
</style>
