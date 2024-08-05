import { createRouter, createWebHashHistory } from "vue-router";
import App from "@/App";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
      redirect: "/Login",
      children: [
        {
          path: "/Home",
          name: "Home",
          component: () => import("@/views/Home"),
        },
        {
          path: "/Login",
          name: "Login",
          component: () => import("@/views/Login"),
        },
        {
          path: "/VillageLevel",
          name: "VillageLevel",
          component: () => import("@/views/VillageLevel"),
        },
        {
          path: "/OperationalRegulation",
          name: "OperationalRegulation",
          component: () => import("@/views/OperationalRegulation"),
        },
        {
          path: "/AchievementAggregation",
          name: "AchievementAggregation",
          component: () => import("@/views/AchievementAggregation"),
        },
        {
          path: "/ArtificialIntelligence",
          name: "ArtificialIntelligence",
          component: () => import("@/views/ArtificialIntelligence"),
        },
        {
          path: "/BusinessIntegration",
          name: "BusinessIntegration",
          component: () => import("@/views/BusinessIntegration"),
        },
      ],
    },
  ],
});

export default router;
