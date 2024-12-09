<template>
  <HintComp />
  <div class="keyboard">
    <ul class="row row-0">
      <li id="esc" @click="addToIdArray('esc')">Esc</li>
      <li id="1" @click="addToIdArray('1')">1</li>
      <li id="2" @click="addToIdArray('2')">2</li>
      <li id="3" @click="addToIdArray('3')">3</li>
      <li id="4" @click="addToIdArray('4')">4</li>
      <li id="5" @click="addToIdArray('5')">5</li>
      <li id="6" @click="addToIdArray('6')">6</li>
      <li id="7" @click="addToIdArray('7')">7</li>
      <li id="8" @click="addToIdArray('8')">8</li>
      <li id="9" @click="addToIdArray('9')">9</li>
      <li @click="addToIdArray('0')">0</li>
      <li @click="addToIdArray('-')">-</li>
      <li @click="addToIdArray('+')">+</li>
      <li id="back" style="width: 5em" @click="addToIdArray('back')">Back</li>
    </ul>
    <ul class="row row-1">
      <li id="tab" style="width: 5em" @click="addToIdArray('tab')">Tab</li>
      <li id="Q" @click="addToIdArray('q')">Q<span>/</span></li>
      <li id="W" @click="addToIdArray('w')">W<span>'</span></li>
      <li id="E" @click="addToIdArray('e')">E<span>ק</span></li>
      <li id="R" @click="addToIdArray('r')">R<span>ר</span></li>
      <li id="T" @click="addToIdArray('t')">T<span>א</span></li>
      <li id="Y" @click="addToIdArray('y')">Y<span>ט</span></li>
      <li id="U" @click="addToIdArray('u')">U<span>ו</span></li>
      <li id="I" @click="addToIdArray('i')">I<span>ן</span></li>
      <li class="ring" id="O" @click="addToIdArray('o')">O<span>ם</span></li>
      <li id="P" @click="addToIdArray('p')">P<span>פ</span></li>
      <li @click="addToIdArray('[')">[</li>
      <li @click="addToIdArray(']')">]</li>
      <li @click="addToIdArray('\\')">\</li>
    </ul>
    <ul class="row row-2">
      <li id="caps" style="width: 6em" @click="addToIdArray('caps')">CapsLk</li>
      <li id="A" @click="addToIdArray('a')">A<span>ש</span></li>
      <li id="S" @click="addToIdArray('s')">S<span>ד</span></li>
      <li id="D" @click="addToIdArray('d')">D<span>ת</span></li>
      <li id="F" @click="addToIdArray('f')">F<span>ו</span></li>
      <li id="G" @click="addToIdArray('g')">G<span>נ</span></li>
      <li id="H" @click="addToIdArray('h')">H<span>ו</span></li>
      <li id="J" @click="addToIdArray('j')">J<span>כ</span></li>
      <li id="K" @click="addToIdArray('k')">K<span>ש</span></li>
      <li id="L" @click="addToIdArray('l')">L<span>ך</span></li>
      <li @click="addToIdArray(';')">:<span>ף</span></li>
      <li @click="addToIdArray('\'')">'<span>,</span></li>
      <li id="enter" style="width: 6em" @click="addToIdArray('enter')">Enter</li>
    </ul>
    <ul class="row row-3">
      <li id="left-shift" style="width: 8em" @click="addToIdArray('shift')">Shift</li>
      <li id="Z" @click="addToIdArray('z')">Z<span>ז</span></li>
      <li id="X" @click="addToIdArray('x')">X<span>ס</span></li>
      <li id="C" @click="addToIdArray('c')">C<span>ב</span></li>
      <li id="V" @click="addToIdArray('v')">V<span>ה</span></li>
      <li id="B" @click="addToIdArray('b')">B<span>נ</span></li>
      <li id="N" @click="addToIdArray('n')">N<span>מ</span></li>
      <li id="M" @click="addToIdArray('m')">M<span>צ</span></li>
      <li @click="addToIdArray(',')">,<span>ת</span></li>
      <li @click="addToIdArray('.')">.<span>ץ</span></li>
      <li @click="addToIdArray('/')">/<span>?</span></li>
      <li id="right-shift" style="width: 8em" @click="addToIdArray('shift')">Shift</li>
    </ul>
    <ul class="row row-4">
      <li id="ctrl" @click="addToIdArray('ctrl')">Ctrl</li>
      <li id="fn" @click="addToIdArray('fn')">Fn</li>
      <li id="win" @click="addToIdArray('win')">Win</li>
      <li id="alt" @click="addToIdArray('alt')">Alt</li>
      <li id="space" style="width: 21em" @click="addToIdArray('space')"></li>
      <li id="alt" @click="addToIdArray('alt')">Alt</li>
      <li id="ctrl" @click="addToIdArray('ctrl')">Ctrl</li>
      <li @click="addToIdArray('<-')">{{ '<=' }}</li>
      <li @click="addToIdArray('<>')">{{ '<=>' }}</li>
      <li id="ctrl" @click="addToIdArray('>')">=></li>
    </ul>
  </div>
  <v-dialog v-model="dialog" max-width="200">
    <v-card style="text-align: center">
      <v-card-title class="headline align-items-center ma-5">
        <v-icon :icon="UnlockedIcon" />
      </v-card-title>
      <v-card-text>{{ 'כל הכבוד!! עוד חמש שניות תעברו לשלב הבא' }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="dialog = false">סגירה</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.keyboard {
  font-weight: 500;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  align-items: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
}

.row {
  list-style: none;
  display: flex;
}

li {
  height: 3em;
  width: 3em;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 0.3em;
  line-height: 3em;
  letter-spacing: 1px;
  margin: 0.4em;
  transition: 0.3s;
  font-size: 1em;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: white;
  border: 2px solid rgb(112, 111, 111);
}

span {
  font-size: 20px;
  position: absolute;
  bottom: -0.6em;
  /* מיקום אנכי למעלה */
  right: 0.1%;
  /* מיקום אופקי לימין */
}

li:active {
  transform: scale(0.8);
  /* קטינות הכפתור בלחיצה */
  background-color: rgb(148, 147, 147);
}

li:focus {
  transform: scale(1);
  /* הגדלת הכפתור בחזרה */
}
</style>

<script setup lang="ts">
import HintComp from '@/components/HintComp.vue'
import { ref } from 'vue'
import router from '@/router'
import UnlockedIcon from '@/assets/icons/UnlockedIcon.vue'

const dialog = ref(false)
const isComplited = ref(false)
const keyArray = ref([''])
const keys = ['k', 'j', 'h', 'g', 'f', 'd']

const addToIdArray = (id: string) => {
  keyArray.value.push(id)
  for (let i = 0; i < keys.length && i < keyArray.value.length; i++) {
    if (keys[i] !== keyArray.value[i]) {
      keyArray.value = []
      return false
    }
  }
  if (keys.length === keyArray.value.length) {
    keyArray.value = []
    isComplited.value = true
    dialog.value = true
    //כאן צריך לשלוח אות למסך שיידע להציג תמונה מתאימה
    setTimeout(() => router.push({ name: 'home' }), 5000)
    return true
  }
}
</script>
