<template>
  <aside :class="sideBarClasses" v-click-away="onClickAway">
    <div class="header">
      <Logo />

      <div class="menu-toggle-wrap" :onclick="close">
        <span class="material-icons">close</span>
      </div>
    </div>
    <div class="side-container">
      <div class="menu-items">
        <side-bar-item
          v-for="item in menuItems"
          v-bind:key="item.id"
          :title="item.title"
          :path="item.path"
          :icon="item.icon"
          :active="item.active"
        ></side-bar-item>
      </div>

      <nav-user DropDownDirection="up"></nav-user>
    </div>
  </aside>
</template>

<script>
import Logo from "@/components/LogoApp";
import MenuItems from "@/constants/MenuItemsConstants";
import NavUser from "@/components/NavBar/NavBarUser";
import SideBarItem from "@/components/SideBar/SideBarItem";

import { sideBarClass, sideBarOffset } from "@/constants/MenuConstants";

export default {
  name: "SideBar",
  components: {
    Logo,
    NavUser,
    SideBarItem,
  },
  computed: {
    menuActive() {
      return this.$store.getters["menu/getActive"];
    },
    offset() {
      return this.$store.getters["menu/getOffset"];
    },
    sideBarClasses() {
      return `${this.menuActive && "active"} ${sideBarClass}`;
    },
    menuItems() {
      return MenuItems;
    },
  },
  methods: {
    close() {
      if (this.menuActive) this.$store.dispatch("menu/changeMenuActive", false);
    },
    onClickAway(event) {
      if (this.offset.x > sideBarOffset) {
        if (event.x < this.offset.x - sideBarOffset) return this.close();
        if (event.x > this.offset.x + sideBarOffset) return this.close();
      }

      console.log(this.offset.y);
      console.log(this.offset.y + sideBarOffset);
      console.log(event.x);

      if (event.y > sideBarOffset) return this.close();
    },
  },
};
</script>
