import { createRouter, createWebHistory } from 'vue-router'

import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Todo from './pages/Todo'

const routes = [
  { path: '/', component: Home },
  { path: '/todo', component: Todo },
  { path: '/calendar', component: Calendar },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
