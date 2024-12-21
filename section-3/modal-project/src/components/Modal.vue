<template>
  <div class="backdrop"
       @click.self="closeModal">
    <div class="modal"
         :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    theme: {
      type: String
    }
  },
  methods: {
    closeModal() {
      this.$emit("onClose");
    }
  }
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: min(30rem, 100%);
  margin: 6rem auto 1.5rem;
  background: #fff;
  border-radius: 0.625rem;
  padding: 1.5rem;
}

.sale {
  background-color: #8acece;
}
</style>