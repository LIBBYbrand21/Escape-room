<template>
  <v-icon
    :icon="Question"
    @click="openDialog"
    class="position-fixed"
    style="right: 30px; top: 90%"
  />
  <v-dialog v-model="dialog" max-width="600">
    <v-card style="text-align: right">
      <v-card-title class="headline">רמז</v-card-title>
      <v-card-text>{{ props.msg ? props.msg : 'אין רמז' }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">סגירה</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import Question from '@/assets/icons/QuestionIcon.vue'
import { ref } from 'vue'

import { defineProps } from 'vue'

const props = defineProps({
  msg: { type: String }
})

const dialog = ref(false)

const openDialog = () => {
  dialog.value = true
}
</script>
