<template>
  <div>
    <h1>!!ברוכים הבאים</h1>
    <h3>אנו שמחים לארח אתכם כאן ולעבור יחד איתכם במסע בין שכונות ירושלים של פעם</h3>
    <br /><br /><br />
    <p>בחרו רמה</p>
    <v-sheet class="d-flex justify-center align-center" style="background-color: transparent">
      <v-chip-group v-model="selectedLevel" variant="flat" mandatory>
        <v-chip color="pink" value="A">א</v-chip>
        <v-chip color="pink" value="B">ב</v-chip>
      </v-chip-group>
    </v-sheet>
    <br /><br /><br />
    <div v-if="selectedLevel">
      <p>בחרו צבע</p>
      <v-sheet class="d-flex justify-center align-center" style="background-color: transparent">
        <v-chip-group v-model="selectedColor" variant="flat" mandatory>
          <v-chip color="red" value="0">אדום</v-chip>
          <v-chip color="orange" value="1">כתום</v-chip>
          <v-chip color="yellow" value="2">צהוב</v-chip>
          <v-chip color="blue" value="3">כחול</v-chip>
          <v-chip color="green" value="4">ירוק</v-chip>
        </v-chip-group>
      </v-sheet>
    </div>
    <br /><br /><br />
    <v-btn :disabled="!selectedColor" @click="startGo">התחלה</v-btn>
  </div>
</template>

<script setup>
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
