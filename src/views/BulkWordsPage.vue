<template>
  <HintComp :msg="message" />
  <NavBar :color="color" />
  <BulkWords :color="color" />
</template>

<script setup lang="ts">
import HintComp from '@/components/HintComp.vue'
import BulkWords from '@/components/BulkWords.vue'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const message = 'להכנס בשעריך'
const color = ref(Number(route.params.color))
</script>
