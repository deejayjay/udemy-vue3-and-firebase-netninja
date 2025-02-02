<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const name = ref("defaultValue");
</script>

<template>
  <header>
    <h1><span>Dojo</span> Blog</h1>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'create' }">Create Post</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

h1 {
  color: #cf9395;
  margin-bottom: 0;
}

h1 span {
  text-transform: uppercase;
  font-weight: 700;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #cf9395;
  border-bottom: 2px solid transparent;
  font-weight: 500;
  transition: border-bottom-color 300ms;
}

a.router-link-exact-active {
  border-bottom-color: #cf9395;
}
</style>