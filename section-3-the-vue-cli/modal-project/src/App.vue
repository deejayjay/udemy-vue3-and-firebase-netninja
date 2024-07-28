<script>
import Modal from './components/Modal.vue';

export default {
  name: "App",
  components: {
    Modal
  },
  data() {
    return {
      title: "My first Vue App",
      showModal: false,
      showFancyModal: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleFancyModal() {
      this.showFancyModal = !this.showFancyModal;
    },
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <teleport to="#modals" v-if="showModal">
    <Modal @on-modal-close="toggleModal">
      <h2>Summer offer</h2>
      <p>25% off on all items!!!</p>
      <template #links>
        <a href="#">Sign up now</a>
        <a href="#">Mode info</a>
      </template>
    </Modal>
  </teleport>
  <teleport to='#modals' v-if="showFancyModal">
    <Modal @on-modal-close="toggleFancyModal">
      <h3>You have been selected</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in recusandae voluptate ipsum autem voluptas cum
        eaque
        commodi aspernatur debitis, doloribus eum natus quos, sit tempore unde nemo maxime? Rerum!
        Suscipit alias id consequatur eos, fuga laborum magni quidem earum animi eaque voluptatibus. Voluptatem qui
        praesentium obcaecati voluptatibus odio assumenda sint hic sunt, vel omnis nam dicta consequatur reiciendis
        quasi!
      </p>
    </Modal>
  </teleport>
  <button type="button" @click="toggleModal">Open Modal</button>
  <button type="button" @click="toggleFancyModal">Open Fancy Modal</button>
</template>

<style scoped>
h1 {
  text-align: center;
}

.modal h2 {
  color: rgb(19, 153, 108);
  font-weight: 600;
  letter-spacing: .05em;
  margin-bottom: 0.5rem;
}

a {
  margin-right: 1rem;
}

button {
  margin-right: 1rem;
}

.modal h3 {
  color: rgb(128, 52, 216);
  font-weight: 500;
  letter-spacing: .025em;
  margin-bottom: 0.5rem;
}
</style>
