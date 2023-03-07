<template>
  <tr class="vechicle-item">
    <td class="d-flex flex-row">
      <div class="car-logo">
        <img :src="carLogo(car)" class="vehicle-logo" />
      </div>

      <div class="car-info d-flex flex-column">
        <span class="title"> {{ car }} {{ model }} </span>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "VehicleItem",
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
