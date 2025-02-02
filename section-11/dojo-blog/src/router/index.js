import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DetailsView from "@/views/DetailsView.vue";
import CreateView from "@/views/CreateView.vue";
import Tag from "@/components/Tag.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/posts/:id",
      name: "details",
      component: DetailsView,
      props: true
    },
    {
      path: "/create",
      name: "create",
      component: CreateView
    },
    {
      path: "/tags/:tag",
      name: "tags",
      component: Tag
    }
  ]
});

export default router;
