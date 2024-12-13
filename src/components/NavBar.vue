<template>
  <v-layout>
    <v-bottom-navigation grow>
      <v-btn
        value="nearby"
        @click="$router.push({ name: 'crossword', params: { color: props.color } })"
      >
        <v-icon :icon="NavIcon" />
        <span>שכונות בירושלים</span>
      </v-btn>
      <v-btn
        value="favorites"
        @click="$router.push({ name: 'exercises', params: { color: props.color } })"
      >
        <v-icon :icon="NavIcon" />
        <span>סימנים בירושלים</span>
      </v-btn>
      <v-btn
        value="recent"
        @click="$router.push({ name: 'bulkwords', params: { color: props.color } })"
      >
        <v-icon :icon="NavIcon" />
        <span>שערים בירושלים</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
  <v-dialog v-model="dialog" max-width="200">
    <v-card style="text-align: center">
      <v-card-title class="headline align-items-center ma-5">
        <v-icon :icon="LockIcon" />
      </v-card-title>
      <v-card-text>{{ 'עדיין אי אפשר לעבור לשלב זה' }}</v-card-text>
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
import NavIcon from '@/assets/icons/NavIcon.vue'

const dialog = ref(false)
const props = defineProps({
  color: { type: Number }
})

const colors = ['#cd3916', 'orange', 'yellow', '#519381', 'green']
</script>

<style lang="scss">
.v-bottom-navigation {
  max-width: 960px !important;
  margin: auto;
  right: 0;
  left: 0;
}
/*<nav class="ma-3">
    <a @click="$router.push({ name: 'bulkwords', params: { color: props.color } })">להכנס בשעריך</a>
    |
    <a @click="$router.push({ name: 'exercises', params: { color: props.color } })">סכום שווה</a> |
    <a @click="$router.push({ name: 'crossword', params: { color: props.color } })">
      להרחיב גבוליך
    </a>
  </nav>
  <div :style="{ height: '15px', backgroundColor: colors[props.color] }"></div>
  <nav class="ma-3">
    <a @click="dialog = true">בשעריך ירושלים</a>
    |
    <a @click="dialog = true">סכום שווה</a> |
    <a @click="dialog = true">שכונות בירושלים</a>
  </nav>*/
</style>
