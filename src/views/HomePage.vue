<template>
  <v-icon :icon="YeledIcon" class="position-absolute" style="right: 150px; top: 60%" />
  <div>
    <h1 class="ma-5 letters">בחרו רמה</h1>
    <v-sheet class="d-flex justify-center align-center" style="background-color: transparent">
      <v-chip-group v-model="selectedLevel" variant="elevated">
        <v-chip color="#cd3916" value="B">רמה ב</v-chip>
        <v-chip color="#cd3916" value="A">רמה א</v-chip>
      </v-chip-group>
    </v-sheet>
    <div v-if="selectedLevel">
      <h1 class="ma-5 letters">בחרו קבוצה</h1>
      <v-sheet class="d-flex justify-center align-center" style="background-color: transparent">
        <v-chip-group v-model="selectedColor" variant="flat">
          <v-chip color="#cd3916" value="0">אדום</v-chip>
          <v-chip color="orange" value="1">כתום</v-chip>
          <v-chip color="yellow" value="2">צהוב</v-chip>
          <v-chip color="#519381" value="3">כחול</v-chip>
          <v-chip color="green" value="4">ירוק</v-chip>
        </v-chip-group>
      </v-sheet>
    </div>
    <v-btn
      class="btn ma-15 rounded-xl elavation-24"
      style="width: fit-content"
      v-if="selectedColor"
      @click="startGo"
    >
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
  color: #519381;
  font-size: 2em;
}
@import url(https://fonts.googleapis.com/css?family=Fjalla+One);
.title-text h1.letters {
  font-size: 10em;
  font-weight: bold;
}

.letters {
  text-shadow: 2px 2px 6px #511a0b;
  animation: color-changer 8s infinite;
  transition: color-changer ease-in-out;
}

@keyframes color-changer {
  33% {
    color: #dda925;
  }
  /* #EE0BF5 cctv*/
  66% {
    color: #cd3916;
  }
  /* #00CCFF marine */
  100% {
    color: #519381;
  }
  /* #66F50B radio */
}

.btn {
  text-shadow: 2px 2px 6px #cd3916;
  animation: bg-color-changer 8s infinite;
  transition: bg-color-changer ease-in-out;
}

@-webkit-keyframes color-changer {
  33% {
    color: #dda925;
  }
  /* #EE0BF5 cctv*/
  66% {
    color: #cd3916;
  }
  /* #00CCFF marine */
  100% {
    color: #519381;
  }
  /* #66F50B radio */
}

@keyframes bg-color-changer {
  33% {
    background-color: #dda925;
  }
  /* #EE0BF5 cctv*/
  66% {
    background-color: #cd3916;
  }
  /* #00CCFF marine */
  100% {
    background-color: #519381;
  }
  /* #66F50B radio */
}

@-webkit-keyframes bg-color-changer {
  33% {
    background-color: #dda925;
  }
  /* #EE0BF5 cctv*/
  66% {
    background-color: #cd3916;
  }
  /* #00CCFF marine */
  100% {
    background-color: #519381;
  }
  /* #66F50B radio */
}
</style>
