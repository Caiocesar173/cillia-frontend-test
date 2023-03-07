<template>
  <car-card
    v-for="vehicle in vehicles"
    v-bind:key="vehicle.id"
    class="vehicle"
    :type="vehicle.type"
    :car="vehicle.car"
    :model="vehicle.model"
    :created_at="vehicle.created_at"
  >
  </car-card>
</template>

<script setup>
import vehicles from "@/assets/data/vehicles";
import CarCard from "@/components/Vehicles/CarCard";
</script>
