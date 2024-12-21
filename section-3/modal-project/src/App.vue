<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal
  },
  data() {
    return {
      title: "My First Vue App",
      modalVisible: false,
      modalTwoVisible: false
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
    showModalTwo() {
      this.modalTwoVisible = true;
    },
    hideModalTwo() {
      this.modalTwoVisible = false;
    }
  }
};
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>

  <main>
    <button type="button"
            @click="showModal">Show Modal 1</button>
    <button type="button"
            @click="showModalTwo">Show Modal 2</button>
    <Teleport to="#modals"
              v-if="modalVisible">
      <Modal theme="sale"
             @on-close="hideModal">
        <h2>Ninja Giveaway!</h2>
        <p>Grab your ninja swag for half the price!</p>
        <template v-slot:links>
          <a href="#">Sign up</a>
          <a href="#">More info</a>
        </template>
      </Modal>
    </Teleport>

    <Teleport to="#modals"
              v-if="modalTwoVisible">
      <Modal @on-close="hideModalTwo">
        <h2>Another Modal</h2>
        <template #links>
          <a href="#">Close</a>
        </template>
      </Modal>
    </Teleport>
  </main>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1.5rem;
}
</style>