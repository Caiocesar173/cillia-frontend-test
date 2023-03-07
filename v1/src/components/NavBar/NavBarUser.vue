<template>
  <drop-down :direction="DropDownDirection">
    <div class="nav-user">
      <div class="user-dropdown">
        <span class="title">
          {{ user.name }} &#x2022; {{ user.unity }} &#x2022;
          {{ user.profile }}
        </span>
        <span class="role">
          {{ user.role }}
        </span>
      </div>
      <div class="icons">
        <span class="material-icons user-icon">person</span>
        <span class="material-icons home-icon">home</span>
      </div>
    </div>

    <template v-slot:dropdown_items>
      <router-link class="link" to="profile" @click="close">
        <span class="dropdown-item">
          <span class="material-icons">badge</span>
          Meu Perfil
        </span>
      </router-link>

      <router-link class="link" to="settings" @click="close">
        <span class="dropdown-item">
          <span class="material-icons">settings</span>
          Configurações
        </span>
      </router-link>

      <span class="dropdown-item" @click="toogleTheme">
        <span class="material-icons">{{ toogleIcon }}</span>
        Aparência: {{ themeName }}
      </span>

      <span class="dropdown-item text-danger last-item" @click="logout">
        <span class="material-icons text-danger">logout</span>
        Sair
      </span>
    </template>
  </drop-down>
</template>

<script>
import DropDown from "@/components/DropDown/DropDown";
import MenuItems from "@/constants/MenuItemsConstants";

export default {
  name: "NavBarUser",
  props: {
    DropDownDirection: {
      type: String,
      default: "down",
    },
  },
  components: {
    DropDown,
  },
  computed: {
    menuActive() {
      return this.$store.getters["menu/getActive"];
    },
    user() {
      return this.$store.getters["auth/getUser"];
    },
    theme() {
      return this.$store.getters["menu/getTheme"];
    },
    themeName() {
      if (this.theme === "theme-light") return "Claro";

      return "Escuro";
    },
    toogleIcon() {
      return this.theme === "theme-light" ? "brightness_5" : "dark_mode";
    },
    menuItems() {
      return MenuItems;
    },
  },
  methods: {
    toogleTheme() {
      const nextTheme =
        this.theme === "theme-light" ? "theme-dark" : "theme-light";
      this.$store.dispatch("menu/changeTheme", nextTheme);
    },
    close() {
      if (this.menuActive) this.$store.dispatch("menu/changeMenuActive", false);
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.close();
    },
  },
};
</script>
