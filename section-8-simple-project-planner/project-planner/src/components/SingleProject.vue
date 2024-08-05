<script>
export default {
  name: "SingleProject",
  props: ["project"],
  emits: ["onDeleteProject", "onToggleComplete"],
  data() {
    return {
      uri: `http://localhost:3000/projects/${this.project.id}`,
      showDetails: false
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    async deleteProject() {
      try {
        await fetch(this.uri, {
          method: "DELETE"
        });
        this.$emit("onDeleteProject", this.project.id);
      } catch (error) {
        console.error(error.message);
      }
    },
    async toggleComplete() {
      try {
        await fetch(this.uri, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            complete: !this.project.complete
          })
        });

        this.$emit("onToggleComplete", this.project.id);
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
</script>
<template>
  <div class="project"
       :class="{ completed: project.complete }">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-symbols-outlined check"
              @click="toggleComplete">check_circle</span>
        <span class="material-symbols-outlined edit">edit</span>
        <span class="material-symbols-outlined delete"
              @click="deleteProject">delete</span>
      </div>
    </div>
    <div v-if="showDetails"
         class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>


<style scoped>
.project {
  margin: 1.25rem auto;
  background-color: #fafafa;
  padding: 1rem 1.25rem;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
  transition: border-left-color 300ms;
}

.project.completed {
  border-left-color: #218d64;
}

.actions {
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
}

.material-symbols-outlined {
  color: #888;
  cursor: pointer;
  transition: color 300ms;
}

.material-symbols-outlined.check:hover,
.material-symbols-outlined.edit:hover {
  color: #3c3c3c;
}

.material-symbols-outlined.delete:hover {
  color: #e90074;
}

.actions>h3 {
  cursor: pointer;
  font-weight: 700;
}

.icons {
  display: flex;
  gap: 0.25rem;
}
</style>
