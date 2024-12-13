import { shallowMount } from '@vue/test-utils';
<template>
  <div id="app">
    <StartComp />
    <img
      src="@\assets\logo.png"
      style="width: 20%; margin: 0 auto; right: 0; left: 0; /*filter: saturate(7)*/"
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
  max-width: 960px !important;
  position: relative;
  margin: auto;
  right: 0;
  left: 0;
  border-top: 15px solid #dda925;
  padding: 15px;
  padding-bottom: 30px;
}
</style>
