<template>
  <HintComp :msg="message" />
  <NavBar />
  <v-icon :icon="EraserIcon" @click="isDrawing = false" />
  <v-icon :icon="PencilIcon" @click="isDrawing = true" />
  <div style="display: flex; justify-content: center">
    <div style="position: relative; z-index: 0; text-align: left">
      <div class="ma-3">
        <v-icon :icon="icons[0]" />+<v-icon :icon="icons[1]" />+<v-icon :icon="icons[2]" />+<v-icon
          :icon="icons[3]"
        />
        = 68
      </div>
      <div class="ma-3">
        <v-icon :icon="icons[4]" />+<v-icon :icon="icons[5]" />+<v-icon :icon="icons[6]" />+<v-icon
          :icon="icons[3]"
        />
        = 242
      </div>
      <div class="ma-3">
        <v-icon :icon="icons[0]" />+<v-icon :icon="icons[2]" />+<v-icon :icon="icons[3]" />+<v-icon
          :icon="icons[6]"
        />
        = 133
      </div>
      <div class="ma-3">
        <v-icon :icon="icons[0]" />+<v-icon :icon="icons[1]" />+<v-icon :icon="icons[2]" />+<v-icon
          :icon="icons[3]"
        />+<v-icon :icon="icons[5]" /> = 218
      </div>
      <div class="ma-3">
        <v-icon :icon="icons[4]" />+<v-icon :icon="icons[5]" />+<v-icon :icon="icons[6]" />+<v-icon
          :icon="icons[3]"
        />+<v-icon :icon="icons[0]" /> = 243
      </div>
      <div class="ma-1">
        <v-icon :icon="icons[5]" />+<v-icon :icon="icons[0]" />+<v-icon :icon="icons[2]" /> = 201
      </div>
      <div class="ma-1">
        <v-icon :icon="icons[0]" />+<v-icon :icon="icons[2]" />+<v-icon :icon="icons[3]" /> = 63
      </div>
      <div class="mt-4" style="align-items: center">
        <div v-for="(iconIndex, index) in numbersIcons" :key="index" class="align-items-center">
          <div v-if="iconIndex && iconIndex.length > 0" class="d-flex">
            <template v-for="(icon, iconIdx) in iconIndex" :key="iconIdx">
              <v-icon :icon="icons[icon]" />
              <span v-if="iconIdx < iconIndex.length - 1">
                {{ getSymbol() }}
              </span>
            </template>
            <span>=</span>
            <v-text-field
              v-model="numInput[index]"
              class="mr-3 ml-3"
              maxlength="3"
              style="width: 60px"
              @input="check"
              :disabled="isCompleted"
            />
            <v-text-field
              v-model="letterInput[index]"
              class="ml-3"
              maxlength="1"
              style="width: 60px"
              @input="check"
              :disabled="isCompleted"
            />
          </div>
        </div>
      </div>
    </div>
    <canvas
      class="d-flex position-fixed"
      id="canvas"
      v-on:mousedown="handleMouseDown"
      v-on:mouseup="handleMouseUp"
      v-on:mousemove="handleMouseMove"
      width="1400"
      height="350"
      style="left: 0; z-index: 1"
    >
    </canvas>
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
import HintComp from '@/components/HintComp.vue'
import NavBar from '@/components/NavBar.vue'
import { ref, onMounted } from 'vue'
import Gate1Icon from '@/assets/icons/Gate1Icon.vue'
import WoodIcon from '@/assets/icons/woodIcon.vue'
import PavingIcon from '@/assets/icons/PavingIcon.vue'
import OldIcon from '@/assets/icons/OldIcon.vue'
import exercisesArrays from '@/assets/config/exercisesArrays.json'
import { useRoute } from 'vue-router'
import UnlockedIcon from '@/assets/icons/UnlockedIcon.vue'
import router from '@/router'
import HouseIcon from '@/assets/icons/HouseIcon.vue'
import WhaterIcon from '@/assets/icons/WhaterIcon.vue'
import MoneyIcon from '@/assets/icons/MoneyIcon.vue'
import PencilIcon from '@/assets/icons/PencilIcon.vue'
import EraserIcon from '@/assets/icons/EraserIcon.vue'

const route = useRoute()
const color = ref(route.params.color)
const icons = [Gate1Icon, MoneyIcon, WhaterIcon, WoodIcon, PavingIcon, HouseIcon, OldIcon]
const numbersIcons = exercisesArrays.icons[color.value]
const symbols = exercisesArrays.symbols[color.value]
const symbolIdx = ref(0)
const numInput = ref(Array(numbersIcons.length).fill('')) // מערך למספרים
const letterInput = ref(Array(numbersIcons.length).fill('')) // מערך לאותיות
const nums = exercisesArrays.numInput[color.value]
const letters = exercisesArrays.lettersInput[color.value]
const isCompleted = ref(false)
const dialog = ref(false)
const isDrawing = ref(false)

const getSymbol = () => {
  return symbols[symbolIdx.value]
}

const check = () => {
  for (let i = 0; i < numInput.value.length; i++) {
    if (Number(numInput.value[i]) !== nums[i]) {
      isCompleted.value = false
      return false
    }
  }
  for (let i = 0; i < letterInput.value.length; i++) {
    if (letterInput.value[i] !== letters[i]) {
      isCompleted.value = false
      return false
    }
  }
  dialog.value = true
  isCompleted.value = true
  setTimeout(() => router.push({ name: 'crossword', params: { color: color.value } }), 10000)
  return true
}

const mouse = ref({
  current: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  down: false
})

const message = 'מצאו את שוויו של כל סימן מסימני ירושלים ופתרו את התרגילים'

const currentMouse = () => {
  const c = document.getElementById('canvas')
  const rect = c.getBoundingClientRect()
  return {
    x: mouse.value.current.x - rect.left,
    y: mouse.value.current.y - rect.top
  }
}

const draw = () => {
  const c = document.getElementById('canvas')
  const ctx = c.getContext('2d')

  if (mouse.value.down) {
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'

    if (isDrawing.value) {
      ctx.lineTo(currentMouse().x, currentMouse().y)
      ctx.stroke()
    } else {
      // אם isDrawing הוא false, נמחק מהאזור של העכבר
      ctx.clearRect(currentMouse().x - 10, currentMouse().y - 10, 20, 20) // מחיקת אזור קטן
    }
  }
}

const handleMouseDown = (event) => {
  mouse.value.down = true
  mouse.value.current = { x: event.pageX, y: event.pageY }

  const c = document.getElementById('canvas')
  const ctx = c.getContext('2d')
  ctx.beginPath() // התחל קו חדש
  ctx.moveTo(currentMouse().x, currentMouse().y)
}

const handleMouseUp = () => {
  mouse.value.down = false
}

const handleMouseMove = (event) => {
  mouse.value.current = { x: event.pageX, y: event.pageY }
  draw()
}

onMounted(() => {
  const c = document.getElementById('canvas')
  if (c) {
    const ctx = c.getContext('2d')
    ctx.translate(0.5, 0.5)
    ctx.imageSmoothingEnabled = false
    c.addEventListener('mousedown', handleMouseDown)
    c.addEventListener('mouseup', handleMouseUp)
    c.addEventListener('mousemove', handleMouseMove)
    c.addEventListener('touchstart', handleTouchStart)
    c.addEventListener('touchend', handleTouchEnd)
    c.addEventListener('touchmove', handleTouchMove)
  }
})
const handleTouchStart = (event) => {
  event.preventDefault() // למנוע גלילה
  mouse.value.down = true
  mouse.value.current = { x: event.touches[0].pageX, y: event.touches[0].pageY }
  const c = document.getElementById('canvas')
  const ctx = c.getContext('2d')
  ctx.moveTo(currentMouse().x, currentMouse().y)
}

const handleTouchEnd = () => {
  mouse.value.down = false
}

const handleTouchMove = (event) => {
  event.preventDefault() // למנוע גלילה
  mouse.value.current = { x: event.touches[0].pageX, y: event.touches[0].pageY }
  draw()
}
</script>
<style>
canvas {
  cursor: crosshair;
}

.v-icon {
  margin: 6px;
}
</style>
