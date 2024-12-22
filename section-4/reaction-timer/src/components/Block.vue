<template>
  <div class="block"
       v-if="showBlock"
       @click="stopTimer">
    Click me
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    delay: {
      type: Number,
      required: true
    }
  },
  emits: ["onEnd"],
  data() {
    return {
      showBlock: false,
      startTime: null,
      endTime: null,
      reactionTime: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.startTime = Date.now();
    },
    stopTimer() {
      this.endTime = Date.now();
      this.reactionTime = this.endTime - this.startTime;
      this.$emit("onEnd", this.reactionTime);
    }
  }
};
</script>

<style scoped>
.block {
  width: 30rem;
  border-radius: 1rem;
  background-color: #111827;
  color: #f3f4f6;
  text-align: center;
  padding: 10rem 0;
  margin: 3rem auto;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.25em;
}
</style>