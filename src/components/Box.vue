<template>
  <div class="box">
    <div class="inner-box"></div>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'

const props = defineProps(['type'])

const typeToColor = {
  '-1': 'lightcoral',
  '1': 'lightcoral',
  "0": '#aaa',
  '-2': 'limegreen',
  '2': 'limegreen',
  '-3': 'lightsalmon',
  '3': 'lightsalmon',
  '-4': 'lightseagreen',
  '4': 'lightseagreen',
  '-5': 'indianred',
  '5': 'indianred',
}

const color = computed(() => {
  return typeToColor[props.type]
})
</script>

<style scoped>
.box {
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  padding: 1px;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;
}
.inner-box {
  width: 100%;
  height: 100%;
  background-color: v-bind(color);
}
</style>