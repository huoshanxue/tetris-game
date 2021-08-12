<template>
  <Game></Game>
</template>

<script setup>
import Game from './components/Game.vue'
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  background-color: #ddd;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
