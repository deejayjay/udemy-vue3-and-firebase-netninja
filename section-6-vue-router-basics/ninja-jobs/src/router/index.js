import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import JobsView from "@/views/jobs/JobsView.vue";
import JobDetailsView from "@/views/jobs/JobDetailsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
    {
      path: "/jobs/:id",
      name: "jobDetails",
      component: JobDetailsView
    },
    // Redirect to /jobs route
    {
      path: "/all-jobs",
      redirect: "/jobs"
    },
    // 404 page
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFoundView
    }
  ]
});

export default router;
