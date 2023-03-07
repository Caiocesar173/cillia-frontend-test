<template>
  <table>
    <vehicle-item
      v-for="vehicle in vehicles"
      v-bind:key="vehicle.id"
      class="vehicle"
      :type="vehicle.type"
      :car="vehicle.car"
      :model="vehicle.model"
      :created_at="vehicle.created_at"
    >
    </vehicle-item>
  </table>
</template>

<script setup>
import vehicles from "@/assets/data/vehicles";
import VehicleItem from "@/components/Vehicles/VehicleItem";
</script>
