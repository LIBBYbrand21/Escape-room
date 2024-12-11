<template>
  <v-table class="table-container">
    <tr v-for="(row, rowIndex) in bulkWordsArray" :key="rowIndex">
      <td
        v-for="(letter, colIndex) in row"
        :key="colIndex"
        :disabled="isCompleted"
        @click="isCompleted ? null : buttonClicked(rowIndex, colIndex)"
        :style="{
          backgroundColor: isActiveButton(`${rowIndex}-${colIndex}`)
            ? colors[props.color]
            : '#e0d2ad'
          //color: isActiveButton(`${rowIndex}-${colIndex}`) ? '#e0d2ad' : '#25201f'
        }"
      >
        {{ letter }}
      </td>
    </tr>
  </v-table>
  <div>
    <p v-for="(word, wIndex) in words" :key="wIndex" class="d-inline-block ma-7">
      {{ word }}
    </p>
  </div>
  <v-dialog v-model="dialog" max-width="200">
    <v-card style="text-align: center">
      <v-card-title class="headline align-items-center ma-5">
        <v-icon :icon="UnlockedIcon" />
      </v-card-title>
      <v-card-text>{{ 'כל הכבוד!!  עוד חמש שניות תעברו לשלב הבא' }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">סגירה</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import bulkWordsArrays from '@/assets/config/bulkWordsArrays.json'
import { defineProps } from 'vue'
import router from '@/router'
import UnlockedIcon from '@/assets/icons/UnlockedIcon.vue'

const props = defineProps({
  color: { type: Number }
})

const isCompleted = ref(false)

const bulkWordsArray = bulkWordsArrays.bulkWordsArray[props.color]
const words = bulkWordsArrays.words[props.color]
const activeButtonsJson = bulkWordsArrays.activeButtons[props.color]
const activeButtons = ref([])
const dialog = ref(false)

const buttonClicked = (rowIndex, colIndex) => {
  const buttonKey = `${rowIndex}-${colIndex}`
  if (isActiveButton(buttonKey)) {
    const index = activeButtons.value.findIndex((btn) => btn === buttonKey)
    activeButtons.value.splice(index, 1)
  } else {
    activeButtons.value.push(buttonKey)
  }
  check()
}

const check = () => {
  const missingInActiveButtons = activeButtonsJson.filter(
    (btn) => !activeButtons.value.includes(btn)
  )
  const missingInActiveButtonsJson = activeButtons.value.filter(
    (btn) => !activeButtonsJson.includes(btn)
  )

  if (missingInActiveButtons.length === 0 && missingInActiveButtonsJson.length === 0) {
    dialog.value = true
    isCompleted.value = true
    setTimeout(() => router.push({ name: 'exercises', params: { color: props.color } }), 10000)
  }
}

const isActiveButton = (buttonKey) => {
  return activeButtons.value.some((btn) => btn === buttonKey)
}
const colors = ['#cd3916', 'orange', 'yellow', '#519381', 'green']
</script>

<style>
.table-container {
  width: 80%;
  margin: 0 auto;
  z-index: 1;
}

td {
  border: 1px solid #25201f;
  width: 1%;
  height: 1%;
}
</style>
