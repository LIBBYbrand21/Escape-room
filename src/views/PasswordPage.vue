<template>
  <HintComp />
  <v-responsive class="mx-auto" max-width="344">
    <br /><br /><br /><br /><br /><br />
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        maxlength="4"
        clearable
        type="password"
      ></v-text-field>
      <br />
      <v-btn
        :disabled="!form"
        :loading="loading"
        color="pink"
        size="large"
        type="submit"
        variant="elevated"
        bloc
      >
        להמשך
      </v-btn>
    </v-form>
  </v-responsive>
  <v-dialog v-model="dialog" max-width="200">
    <v-card style="text-align: center">
      <v-card-title class="headline align-items-center ma-5">
        <v-icon :icon="LockIcon" />
      </v-card-title>
      <v-card-text>{{ 'שגיאה! נסו שוב' }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">סגירה</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import HintComp from '@/components/HintComp.vue'
import { ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import LockIcon from '@/assets/icons/LockIcon.vue'

const route = useRoute()

const form = ref(false)
const password = ref('')
const loading = ref(false)
const dialog = ref(false)

const onSubmit = () => {
  if (!form.value) return

  if (password.value === 'חומה') {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      router.push({ name: 'keyboard', params: { color: route.params.color } })
    }, 2000)
  } else {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      dialog.value = true
    }, 2000)
  }
}

const required = (v) => {
  return !!v || 'שדה חובה'
}
</script>
