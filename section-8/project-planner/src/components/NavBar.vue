<script>
import { RouterLink } from 'vue-router';

export default {
  name: "NavBar"
};
</script>

<template>
  <nav class="main-nav">
    <RouterLink :to="{ name: 'home' }">Projects</RouterLink>
    <RouterLink :to="{ name: 'add-project' }">Add New Project</RouterLink>
  </nav>
</template>

<style scoped>
.main-nav {
  display: flex;
  gap: 1rem;
}

.main-nav a {
  font-weight: 500;
  font-size: 1.25rem;
}

a.router-link-exact-active {
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
}
</style>