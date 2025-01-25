import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
import JobsView from "../views/jobs/JobsView.vue";
import JobDetailsView from "../views/jobs/JobDetailsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue") // lazy loading
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView
  },
  {
    path: "/jobs/:id",
    name: "job-details",
    component: JobDetailsView,
    props: true
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: "/jobs"
  },
  // catch all 404
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
