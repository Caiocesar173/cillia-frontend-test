<template>
  <div class="logo">
    <img :src="logoUrl()" alt="Cilia" />
  </div>
</template>

<script>
export default {
  name: "LogoApp",

  props: {
    type: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      file: "logo",
    };
  },
  computed: {},
  methods: {
    logoUrl() {
      var images = require.context("@/assets/images/logo/", false, /\.svg$/);
      const complement = this.type ? "-" + this.type : "";
      const logo = images("./" + this.file + complement + ".svg");

      return logo;
    },
  },
};
</script>
