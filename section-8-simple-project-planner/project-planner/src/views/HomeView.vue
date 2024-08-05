<script>
import SingleProject from '@/components/SingleProject.vue';

export default {
  name: "HomeView",
  components: {
    SingleProject
  },
  data() {
    return {
      projects: []
    };
  },
  methods: {
    handleDeleteProject(id) {
      this.projects = this.projects.filter(p => p.id !== id);
    },
    handleToggleComplete(id) {
      const toggledProject = this.projects.find(p => p.id === id);
      toggledProject.complete = !toggledProject.complete;
    }
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:3000/projects");
      this.projects = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }
};
</script>

<template>
  <main>
    <div class="home">
      <div v-if="projects.length">
        <div v-for="project in projects"
             :key="project.id">
          <SingleProject :project="project"
                         @on-delete-project="handleDeleteProject"
                         @on-toggle-complete="handleToggleComplete" />
        </div>
      </div>
    </div>
  </main>
</template>
