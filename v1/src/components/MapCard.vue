<template>
  <div ref="mapDiv" class="map-card"></div>
</template>

<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted } from "vue";

import { Loader } from "@googlemaps/js-api-loader";
import { useGeolocation } from "@/utils/useGeolocation";

const GOOGLE_MAPS_API_KEY = "AIzaSyAs7XOfhM2z5ivT3mhwr_iML5Rnns8Tlhc";

export default {
  name: "MapCard",
  setup() {
    const { coords } = useGeolocation();
    const defaultZoom = 12;

    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    let map = ref(null);

    onMounted(async () => {
      await loader.load();
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: defaultZoom,
      });
    });
    return { currPos, mapDiv };
  },
};
</script>
