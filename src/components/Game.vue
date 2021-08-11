<template>
  <div class="row" v-for="row in gameRow" :key="row">
    <div v-for="col in gameCol" :key="col">
      <Box :type="map[row-1][col-1]"></Box>
    </div>
  </div>
</template>

<script setup>
import Box from './Box.vue'
import { gameRow, gameCol, startGame } from '../game/index'
import { reactive } from "vue";

const map = reactive([]);
startGame(map);
</script>

<style>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
