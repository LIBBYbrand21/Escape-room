<template>
  <HintComp :msg="message" />
  <NavBar :color="color" />
  <v-container class="container">
    <div class="list">
      <h4>שכונות בירושלים</h4>
      <v-list style="background-color: transparent">
        <v-list-item v-for="(word, index) in words" :key="index">
          <v-list-item-content>{{ word }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div class="crossword">
      <CrosswordComp />
    </div>
    <div class="d-flex number-input-1">
      <div v-for="(numbersGroup, groupIndex) in numbers1" :key="groupIndex" class="d-flex">
        <div v-for="(line, lineIndex) in numbersGroup" :key="lineIndex" class="ma-1">
          <div class="d-inline-block">
            <v-text-field
              v-model="numberInputs1[groupIndex][lineIndex]"
              outlined
              hide-details
              maxlength="1"
              style="width: 50px; height: 50px"
              @input="check"
              :disabled="isCompleted"
            ></v-text-field>
            <span>{{ line }}</span>
          </div>
        </div>
        <!-- הוספת מקף בין הקבוצות -->
        <span v-if="groupIndex < numbers1.length - 1">__</span>
      </div>
    </div>
    <div class="d-flex number-input-2">
      <div v-for="(numbersGroup, groupIndex) in numbers2" :key="groupIndex" class="d-flex">
        <div v-for="(line, lineIndex) in numbersGroup" :key="lineIndex" class="ma-1">
          <div class="d-inline-block">
            <v-text-field
              v-model="numberInputs2[groupIndex][lineIndex]"
              outlined
              hide-details
              maxlength="1"
              style="width: 50px; height: 50px"
              @input="check"
              :disabled="isCompleted"
            ></v-text-field>
            <span>{{ line }}</span>
          </div>
        </div>
        <!-- הוספת מקף בין הקבוצות -->
        <span v-if="groupIndex < numbers2.length - 1">__</span>
      </div>
    </div>
  </v-container>
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
import HintComp from '@/components/HintComp.vue'
import CrosswordComp from '@/components/CrosswordComp.vue'
import NavBar from '@/components/NavBar.vue'
import crossWordArrays from '@/assets/config/crossWordArrays.json'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import UnlockedIcon from '@/assets/icons/UnlockedIcon.vue'
const route = useRoute()

const message = 'בדף זה עליכם למצוא לכל מספר את האות המתאימה לה על ידי שיבוץ נכון של שכונות ירושלים'

const color = ref(route.params.color)

const isCompleted = ref(false)

const dialog = ref(false)

const words = ref([
  'רמת אשכול',
  'מעלות דפנה',
  'גילה',
  'רמות',
  'מטרסדורף',
  'תלפיות',
  'הר נוף',
  'בית וגן',
  'עזרת תורה',
  'גאולה',
  'סנהדריה'
])

const numbers1 = ref([
  [42, 31],
  [40, 6, 14, 24, 44, 65, 10]
])
const letters1 = ref([
  ['נ', 'ה'],
  ['ת', 'ו', 'י', 'ת', 'ו', 'א', 'ה']
])

const letters2 = crossWordArrays.letters2[color.value]

const numbers2 = crossWordArrays.numbers2[color.value]
const numberInputs1 = ref(
  Array(numbers1.value.length)
    .fill([])
    .map(() => Array(0).fill(''))
)
const numberInputs2 = ref(
  Array(numbers2.length)
    .fill([])
    .map(() => Array(0).fill(''))
)
const check = () => {
  // Check the first set of numbers and letters
  for (let i = 0; i < numbers1.value.length; i++) {
    for (let j = 0; j < numbers1.value[i].length; j++) {
      if (numberInputs1.value[i][j] !== letters1.value[i][j]) {
        isCompleted.value = false
        return false // If a mismatch is found, return false
      }
    }
  }
  // Check the second set of numbers and letters
  for (let i = 0; i < numbers2.length; i++) {
    for (let j = 0; j < numbers2[i].length; j++) {
      if (numberInputs2.value[i][j] !== letters2[i][j]) {
        isCompleted.value = false
        return false // If a mismatch is found, return false
      }
    }
  }
  // If all checks pass, return true
  dialog.value = true
  isCompleted.value = true
  setTimeout(() => router.push({ name: 'password', params: { color: color.value } }), 10000)
  return true
}
</script>

<style scoped>
.cell {
  width: 50px;
  height: 50px;
  position: relative;
  box-sizing: border-box;
  outline: 1px solid black;
  font-size: 20px;
  background-color: #f6f4d2;
  display: flex;
}

.container {
  display: grid;
  grid-template-columns: repeat(32, 30px);
  grid-template-rows: repeat(24, 30px);
  box-sizing: border-box;
}

.list {
  grid-row: 1 / 20;
  grid-column: 5 / 10;
}

.crossword {
  grid-row: 1 / 13;
  grid-column: 12 / 29;
}

.number-input-1 {
  grid-row: 16 / 18;
  grid-column: 11 / 28;
  margin-bottom: 5px;
}

.number-input-2 {
  grid-row: 19 / 21;
  grid-column: 11 / 28;
  margin-bottom: 5px;
}
</style>
