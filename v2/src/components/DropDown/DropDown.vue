<template>
  <div class="dropdown" :class="`open-${direction}`" v-click-away="onClickAway">
    <div class="menu-item" @click="toggleDropdown">
      <slot></slot>

      <div class="icons toggle-icon">
        <span class="material-icons">{{ Opendirection }}</span>
      </div>
    </div>

    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-if="items">
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>

        <div v-else>
          <slot name="dropdown_items"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { sideBarOffset } from "@/constants/MenuConstants";

export default {
  name: "DropDown",
  props: {
    items: {
      type: String,
      default: "",
    },
    direction: {
      type: String,
      default: "down",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    Opendirection() {
      if (this.direction == "up") {
        if (!this.isOpen) return "expand_less";
        else return "expand_more";
      }

      if (this.isOpen) return "expand_less";
      return "expand_more";
    },
  },
  methods: {
    toggleDropdown() {
      return (this.isOpen = !this.isOpen);
    },
    close() {
      return (this.isOpen = false);
    },
    offset() {
      return this.$store.getters["menu/getOffset"];
    },
    onClickAway(event) {
      if (this.offset.x > sideBarOffset) {
        if (event.x < this.offset.x - sideBarOffset) return this.close();
        if (event.x > this.offset.x + sideBarOffset) return this.close();
      }

      // console.log(this.offset.y);
      // console.log(this.offset.y + sideBarOffset);
      // console.log(event.x);

      if (event.y > sideBarOffset) return this.close();
    },
  },
};
</script>
