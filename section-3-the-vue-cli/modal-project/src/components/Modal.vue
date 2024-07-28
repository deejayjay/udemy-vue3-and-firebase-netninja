<script>
export default {
  name: "Modal",
  emits: ["onModalClose"],
  methods: {
    closeModal() {
      this.$emit("onModalClose");
    }
  }
};
</script>

<template>
  <div class="overlay" @click.self="closeModal">
    <div class="modal">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 10;
}

.overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: relative;
  z-index: 20;
  width: min(100%, 25rem);
  padding: 1.25rem;
  margin: 10rem auto;
  background-color: #fafafa;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>