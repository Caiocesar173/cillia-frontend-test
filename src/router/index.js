import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/appointments",
    name: "appointments",
    component: DashboardView,
  },
  {
    path: "/repairs",
    name: "repairs",

    component: DashboardView,
  },
  {
    path: "/reserve-cars",
    name: "reserve-cars",
    component: DashboardView,
  },
  {
    path: "/profile",
    name: "profile",
    component: DashboardView,
  },
  {
    path: "/settings",
    name: "settings",
    component: DashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
