<script>
import { RouterView } from 'vue-router';
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    HomeView,
    NavBar
  }
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style scoped></style>
