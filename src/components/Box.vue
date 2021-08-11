<template>
  <div class="box">{{ type }}</div>
</template>

<script setup>
import { computed } from "@vue/runtime-core"

const props = defineProps(['type'])


const typeToColor = {
  '-1': 'blue',
  '0': '#ccc',
  '1': 'blue'
}

const color = computed(() => {
  return typeToColor[props.type]
})
</script>

<style scoped>
.box {
  width: 30px;
  height: 30px;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: v-bind(color);
}
</style>