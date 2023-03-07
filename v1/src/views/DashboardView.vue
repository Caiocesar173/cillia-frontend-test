<template>
  <div class="dashboard w-100 h-50">
    <div class="chart">
      <v-card :title="graphicTitle" icon="build" iconColor="primary">
        <vehicles-chart></vehicles-chart>
      </v-card>
    </div>

    <div class="flex-containter">
      <div class="vehicles-list">
        <v-card title="Veiculos" icon="directions_car" iconColor="primary">
          <div class="vehicles">
            <vehicles-list></vehicles-list>
          </div>
        </v-card>
      </div>

      <div class="map-view">
        <v-card title="Localização" icon="location_on" iconColor="primary">
          <map-card></map-card>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import VCard from "@/components/VCard.vue";
import Assemblers from "@/assets/data/assemblers";
import VehiclesChart from "@/components/Vehicles/VehiclesChart";
import VehiclesList from "@/components/Vehicles/VehiclesList";
import MapCard from "@/components/MapCard.vue";

export default {
  name: "DashBoard",
  components: {
    VCard,
    VehiclesChart,
    VehiclesList,
    MapCard,
  },
  computed: {
    graphicTitle() {
      return Assemblers.title.graphic;
    },
  },
};
</script>
