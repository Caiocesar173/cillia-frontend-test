<template>
  <div class="car-card d-flex flex-row">
    <div class="car-logo">
      <img :src="carLogo(car)" class="vehicle-logo" />
    </div>

    <div class="car-info d-flex flex-column">
      <span class="title">
        {{ car }}
      </span>

      <span class="model">
        {{ model }}
      </span>

      <small class="created text-primary">
        {{ created_at }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  components: {},
  props: {
    type: {
      type: String,
      default: "",
    },
    car: {
      type: String,
      default: "",
    },
    model: {
      type: String,
      default: "",
    },
    created_at: {
      type: String,
      default: "",
    },
  },
  methods: {
    carLogo() {
      const images = require.context(
        "@/assets/images/vehicles/",
        false,
        /\.svg$/
      );
      const logo = images("./logo_" + this.type + ".svg");

      return logo;
    },
  },
};
</script>
