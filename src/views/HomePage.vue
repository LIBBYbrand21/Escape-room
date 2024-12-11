<template>
  <div :style="{ height: '15px', backgroundColor: '#dda925' }"></div>
  <v-icon :icon="YeledIcon" class="position-fixed" style="right: 20%; bottom: 50%" />
  <div style="flex: 1">
    <h1>בחרו רמה</h1>
    <v-sheet class="d-flex justify-center align-center" style="background-color: transparent">
      <v-chip-group v-model="selectedLevel" mandatory>
        <v-chip color="#cd3916" value="B">רמה ב</v-chip>
        <v-chip color="#cd3916" value="A">רמה א</v-chip>
      </v-chip-group>
    </v-sheet>
    <div v-if="selectedLevel">
      <h1>בחרו צבע</h1>
      <v-sheet class="d-flex justify-center align-center" style="background-color: transparent">
        <v-chip-group v-model="selectedColor">
          <v-chip color="#cd3916" value="0">אדום</v-chip>
          <v-chip color="orange" value="1">כתום</v-chip>
          <v-chip color="yellow" value="2">צהוב</v-chip>
          <v-chip color="#519381" value="3">כחול</v-chip>
          <v-chip color="green" value="4">ירוק</v-chip>
        </v-chip-group>
      </v-sheet>
    </div>
    <v-btn class="mt-10" style="width: fit-content" v-if="selectedColor" @click="startGo">
      ליציאה מהחומות
    </v-btn>
  </div>
</template>

<script setup>
import YeledIcon from '@/assets/icons/yeledIcon.vue'
import router from '@/router'
import { ref } from 'vue'
const selectedLevel = ref('')
const selectedColor = ref('')

const startGo = () => {
  if (selectedLevel.value === 'A')
    router.push({ name: 'bulkwords', params: { color: selectedColor.value } })
  else router.push({ name: 'password', params: { color: selectedColor.value } })
}
</script>

<style>
h1 {
  font-weight: bold;
  white-space: nowrap;
  color: #519381;
  font-size: 2em;
  text-align: center;
  text-shadow: 0 1px 3px #cd3916;
}
</style>
