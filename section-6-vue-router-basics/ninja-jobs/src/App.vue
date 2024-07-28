<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  methods: {
    redirect() {
      this.$router.push({
        name: "home"
      });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/jobs">Jobs</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <nav>
        <button type="button" class="btn-action" @click="redirect">Redirect</button>
        <button type="button" class="btn-action" @click="back">Go back</button>
        <button type="button" class="btn-action" @click="forward">Go forward</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.btn-action {
  background-color: white;
  color: brown;
  padding: 0.25rem 1rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-right: 1rem;
  border: 1px solid brown;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  transition: background-color 300ms, color 300ms, box-shadow 300ms;
}

.btn-action:hover {
  background-color: brown;
  color: white;
  box-shadow: none;
  cursor: pointer;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #fafafa;
  background-color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
