<script>
export default {
  name: "Block",
  props: {
    delay: Number
  },
  emits: ["onEnd"],
  data() {
    return {
      showBlock: false,
      startTime: null,
      endTime: null
    };
  },
  methods: {
    handleBlockClick() {
      this.endTime = Date.now();
      const reactionTime = this.endTime - this.startTime;

      this.$emit("onEnd", reactionTime);
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTime = Date.now();
    }, this.delay);
  }
};
</script>

<template>
  <div class="block" v-if="showBlock" @click="handleBlockClick">
    <div class="content">
      CLICK ME
    </div>
  </div>
</template>

<style scoped>
.block {
  width: min(100%, 25rem);
  border-radius: 1.25rem;
  background-color: #0faf87;
  color: #fafafa;
  padding: 6rem 0;
  margin: 2.5rem auto;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.125em;
  transition: background-color 250ms;
}

.block .content {
  transition: transform 250ms;
}

.block:hover {
  cursor: pointer;
  background-color: #10634e;
}

.block:hover .content {
  transform: scale(2);
}
</style>