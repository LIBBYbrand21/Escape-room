export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/bulkwords/:color',
    name: 'bulkwords',
    component: BulkWordsPage
  },
  {
    path: '/crossword/:color',
    name: 'crossword',
    component: CrosswordPage
  },
  {
    path: '/exercises/:color',
    name: 'exercises',
    component: ExercisesPage
  },
  {
    path: '/keyboard/:color',
    name: 'keyboard',
    component: KeyboardPage
  },
  {
    path: '/password/:color',
    name: 'password',
    component: PasswordPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CrosswordPage from '@/views/CrosswordPage.vue'
import ExercisesPage from '@/views/ExercisesPage.vue'
import BulkWordsPage from '@/views/BulkWordsPage.vue'
import KeyboardPage from '@/views/KeyboardPage.vue'
import PasswordPage from '@/views/PasswordPage.vue'

export default router
