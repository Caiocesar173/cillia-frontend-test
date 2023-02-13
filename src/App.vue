<template>
  <div class="w-100" :class="theme">
    <SideBar />
    <div>
      <NavBar />
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

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
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
};
</script>
