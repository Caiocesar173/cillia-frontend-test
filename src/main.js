import { createApp } from "vue";
import vBlur from "v-blur";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import HighchartsVue from "highcharts-vue";
import VueClickAway from "vue3-click-away";

import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";

createApp(App)
  .use(vBlur)
  .use(store)
  .use(router)
  .use(VueClickAway)
  .use(HighchartsVue)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
