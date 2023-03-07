import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    meta: {
      breadCrumb: "Pagina teste",
    },
  },
  {
    path: "/appointments",
    name: "appointments",
    component: DashboardView,
    meta: {
      breadCrumb: "Agendamentos",
    },
  },
  {
    path: "/repairs",
    name: "repairs",
    component: DashboardView,
    meta: {
      breadCrumb: "Reparos",
    },
  },
  {
    path: "/reserve-cars",
    name: "reserve-cars",
    component: DashboardView,
    meta: {
      breadCrumb: "Carros Reserva",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: DashboardView,
    meta: {
      breadCrumb: "Pagina teste",
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: DashboardView,
    meta: {
      breadCrumb: "Pagina teste",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
