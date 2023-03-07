<template>
  <div class="w-100">
    <SideBar />
    <div>
      <NavBar />
      <bread-crumb></bread-crumb>
      <main>
        <router-view />
      </main>

      <div :class="blurMenu"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import BreadCrumb from "./components/BreadCrumb";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    BreadCrumb,
  },
  computed: {
    menuActive() {
      return this.$store.getters["menu/getActive"];
    },
    theme() {
      return this.$store.getters["menu/getTheme"];
    },
    blurMenu() {
      return this.menuActive ? "backdrop-blur" : null || null;
    },
  },
  mounted() {
    this.theme;
  },
};
</script>
