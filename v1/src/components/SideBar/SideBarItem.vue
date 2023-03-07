<template>
  <router-link
    class="sidebar-link"
    :to="path"
    :disabled="active"
    @click="close"
  >
    <div class="sidebar-item" :class="incativeItemClass">
      <div v-if="title" class="title-container">
        <div class="title">
          <span v-if="icon" class="material-icons text-muted">{{ icon }}</span>
          <span>{{ title }}</span>
        </div>
      </div>
      <hr class="separator" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SideBarItems",
  props: {
    title: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    menuActive() {
      return this.$store.getters["menu/getActive"];
    },
    incativeItemClass() {
      return !this.active && "inactive";
    },
  },
  methods: {
    close() {
      if (this.menuActive) this.$store.dispatch("menu/changeMenuActive", false);
    },
  },
};
</script>
