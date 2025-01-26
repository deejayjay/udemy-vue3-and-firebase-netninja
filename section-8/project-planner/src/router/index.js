import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AddProjectView from "@/views/AddProjectView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import EditProjectView from "@/views/EditProjectView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/add",
    name: "add-project",
    component: AddProjectView
  },
  {
    path: "/edit/:id",
    name: "edit-project",
    component: EditProjectView,
    props: true
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
