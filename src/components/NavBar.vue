<template>
  <nav class="ma-3">
    <a @click="$router.push({ name: 'bulkwords', params: { color: props.color } })">להכנס בשעריך</a>
    |
    <a @click="$router.push({ name: 'exercises', params: { color: props.color } })">סכום שווה</a> |
    <a @click="$router.push({ name: 'crossword', params: { color: props.color } })">
      להרחיב גבוליך
    </a>
  </nav>
  <v-dialog v-model="dialog" max-width="200">
    <v-card style="text-align: center">
      <v-card-title class="headline align-items-center ma-5">
        <v-icon :icon="LockIcon" />
      </v-card-title>
      <v-card-text>{{ 'אינך מורשה לעבור לשלב זה' }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">סגירה</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import LockIcon from '@/assets/icons/LockIcon.vue'

const dialog = ref(false)
const props = defineProps({
  color: { type: Number }
})
</script>

<style lang="scss">
nav {
  a {
    font-weight: bold;
    color: #5e5c1f;
    cursor: pointer;
  }
}
/*<nav class="ma-3">
    <a @click="dialog = true">להכנס בשעריך</a>
    |
    <a @click="dialog = true">סכום שווה</a> |
    <a @click="dialog = true">להרחיב גבוליך</a>
  </nav>*/
</style>
