<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <h1><span>Dojo</span> Blog</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
h1 {
  color: #cf9395;
}

h1 span {
  text-transform: uppercase;
  font-weight: 700;
}
</style>