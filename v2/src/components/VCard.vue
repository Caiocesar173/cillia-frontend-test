<template>
  <div class="card p-3">
    <div v-if="title" class="title-container">
      <div class="title">
        <span
          v-if="icon"
          class="material-icons"
          :class="iconColor ? 'text-' + iconColor : 'text-light'"
          >{{ icon }}</span
        >
        <h5>{{ title }}</h5>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
  },
};
</script>
