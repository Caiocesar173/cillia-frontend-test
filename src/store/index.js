import { createStore } from "vuex";
import menu from "@/store/menu";
import auth from "@/store/auth";

export default createStore({
  modules: {
    menu,
    auth,
  },
});
