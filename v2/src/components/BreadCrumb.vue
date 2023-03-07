<template>
  <div class="bread-crumb">
    <div v-for="(breadcrumb, idx) in crumbs" :key="idx" class="crumbs">
      <div v-if="breadcrumb.index === 0" class="crumb">
        <router-link to="/">
          <span class="title">Início </span>
        </router-link>

        <span class="material-icons"> chevron_right </span>
      </div>

      <router-link class="crumb" :to="breadcrumb.path">
        <span class="title">{{ breadcrumb.text }} </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed: {
    crumbs() {
      const pathArray = this.$route.path.split("/");
      pathArray.shift();

      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          index: idx,
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx]?.meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, []);

      return breadcrumbs;
    },
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.crumbs[pRouteTo].path)
        this.$router.push(this.crumbs[pRouteTo].path);
    },
  },
};
</script>
