<script>
import { RouterLink } from 'vue-router';

export default {
  name: "SingleProject",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ["deleteProject", "completeProject"],
  data() {
    return {
      showDetails: false,
      uri: `http://localhost:3000/projects/${this.project.id}`
    };
  },
  methods: {
    async deleteProject() {
      try {
        const res = await fetch(this.uri, {
          method: "DELETE"
        });

        if (res.ok) {
          console.log("Project was deleted");
          this.$emit("deleteProject", this.project.id);
        } else {
          console.error("Failed to delete project");
        }
      } catch (error) {
        console.error(error.message);
      }
    },
    async toggleComplete() {
      try {
        const res = await fetch(this.uri, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            complete: !this.project.complete
          })
        });

        if (res.ok) {
          console.log("Project was updated");
          this.$emit("completeProject", this.project.id);
        } else {
          console.error("Failed to update project");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  }
}

</script>

<template>
  <div class="project"
       :class="{ complete: project.complete }">
    <div class="actions">
      <h2 @click="showDetails = !showDetails">{{ project.title }}</h2>
      <div class="icons">
        <RouterLink :to="{ name: 'edit-project', params: { id: project.id } }">
          <i class="bi bi-pencil-square"></i>
        </RouterLink>
        <i class="bi bi-trash3-fill"
           @click="deleteProject"></i>
        <i class="bi bi-check-circle-fill"
           :class="{ complete: project.complete }"
           @click="toggleComplete"></i>
      </div>
    </div>
    <p v-show="showDetails">{{ project.details }}</p>
  </div>
</template>

<style scoped>
.project {
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  background-color: #ccc;
  color: #3a3a3a;
  position: relative;
}

.project::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: -1px;
  width: 6px;
  background-color: #fc3c75;
  ;
}

.project.complete::before {
  background-color: #2ab675;
}

h2 {
  color: #333;
  font-weight: 500;
  margin-bottom: 0.5rem;
  flex: 1;
}

h2:hover {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons {
  display: flex;
  gap: 0.75rem;
  font-size: 1.5rem;
}

.icons i {
  color: #5c5c5c;
  transition: color 300ms;
}

.icons i:hover {
  cursor: pointer;
  color: #333;
}

.icons i.complete {
  color: #2ab675;
}
</style>