<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div :id="menuToggleClass" :class="menuToggleClass" :onclick="toogleMenu">
        <span class="material-icons text-light">menu</span>
      </div>

      <a class="navbar-brand" href="#">
        <Logo type="white" />
      </a>
    </div>

    <div class="content-right">
      <nav-help></nav-help>
      <hr />
      <nav-support></nav-support>
      <hr />
      <nav-user></nav-user>
      <hr />
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/LogoApp";
import NavHelp from "@/components/NavBar/NavBarHelp";
import NavSupport from "@/components/NavBar/NavBarSupport";
import NavUser from "@/components/NavBar/NavBarUser";
import { sideBarMenuToogle } from "@/constants/MenuConstants";

export default {
  name: "NavBar",
  components: {
    Logo,
    NavHelp,
    NavSupport,
    NavUser,
  },
  computed: {
    menuActive() {
      return this.$store.getters["menu/getActive"];
    },
    menuToggleClass() {
      return sideBarMenuToogle;
    },
  },
  methods: {
    toogleMenu() {
      this.$store.dispatch("menu/changeMenuActive", !this.menuActive);
    },
  },
};
</script>
