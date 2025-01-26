<script>
import FilterNav from '@/components/FilterNav.vue';
import SingleProject from '@/components/SingleProject.vue';

export default {
  name: "HomeView",
  components: {
    FilterNav,
    SingleProject
  },
  data() {
    return {
      projects: [],
      currentFilter: "all"
    };
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === "completed")
        return this.projects.filter(project => project.complete);

      if (this.currentFilter === "ongoing")
        return this.projects.filter(project => !project.complete);

      return this.projects;
    }
  },
  methods: {
    removeProject(id) {
      this.projects = this.projects.filter(project => project.id !== id);
    },
    toggleComplete(id) {
      const currentProject = this.projects.find(project => project.id === id);
      currentProject.complete = !currentProject.complete;
    },
    updateCurrentFilter(condition) {
      this.currentFilter = condition;
    }
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:3000/projects");
      const data = await response.json();
      this.projects = data;
    } catch (error) {
      console.error(error.message);
    }
  }
};
</script>

<template>
  <div class="home">
    <div class="header">
      <h1>Projects</h1>
      <FilterNav @filter-changed="updateCurrentFilter" />
    </div>
    <hr>

    <div v-if="filteredProjects.length">
      <div v-for="project in filteredProjects"
           :key="project.id">
        <SingleProject :project="project"
                       @delete-project="removeProject"
                       @complete-project="toggleComplete" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

h1 {
  flex: 1;
  margin-bottom: 0;
}

hr {
  border-bottom: none;
  border-color: #aaa;
  margin: 0.5rem 0 1.5rem;
}
</style>