import { shallowMount } from '@vue/test-utils';
<template>
  <div id="app">
    <router-view />
    <img src="@\assets\logo.png" class="d-flex position-fixed" style="width: 30%; bottom: 10px" />
  </div>
</template>

<script setup lang="ts">
//console.log(import.meta)
</script>

<style scoped>
#app {
  font-family: 'Roboto';
  font-weight: bold;
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
