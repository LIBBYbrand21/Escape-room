import { shallowMount } from '@vue/test-utils';
<template>
  <div id="app">
    <StartComp />
    <img
      src="@\assets\logo.png"
      class="d-flex position-fixed"
      style="width: 30%; bottom: 10px; /*filter: saturate(7)*/"
    />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import StartComp from './components/StarsComp.vue'
console.log(import.meta)
</script>

<style scoped>
#app {
  font-family: 'Orbitron' sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('@/assets/background.png');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
