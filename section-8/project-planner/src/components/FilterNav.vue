<script>
export default {
  name: "FilterNav",
  emits: ["filterChanged"],
  data() {
    return {
      activeFilter: "all"
    };
  },
  methods: {
    updateFilter(condition) {
      this.activeFilter = condition;
      this.$emit("filterChanged", condition);
    }
  }
};
</script>

<template>
  <nav class="filter-nav">
    <button type="button"
            :class="{ active: activeFilter === 'all' }"
            @click="updateFilter('all')">All</button>
    <button type="button"
            :class="{ active: activeFilter === 'completed' }"
            @click="updateFilter('completed')">Completed</button>
    <button type="button"
            :class="{ active: activeFilter === 'ongoing' }"
            @click="updateFilter('ongoing')">Ongoing</button>
  </nav>
</template>

<style scoped>
.filter-nav button {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
  color: hsla(160, 100%, 37%, 1);
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
}

.filter-nav button::before {
  position: absolute;
  content: "";
  inset: 0;
  height: 0;
  background-color: hsla(160, 100%, 37%, 0.2);
  transition: height 300ms;
}

.filter-nav button.active::before {
  height: 100%;
}
</style>