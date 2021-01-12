import { createRouter, createWebHistory } from 'vue-router'

import Calculator from './pages/Calculator'
import Calendar from './pages/Calendar'
import Carousel from './pages/Carousel'
import Home from './pages/Home'
import Markdown from './pages/Markdown'
import Todo from './pages/Todo'

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/todo', name: 'todo', component: Todo },
  { path: '/calendar', name: 'calendar', component: Calendar },
  { path: '/markdown', name: 'markdown', component: Markdown },
  { path: '/carousel', name: 'carousel', component: Carousel },
  { path: '/calculator', name: 'calculator', component: Calculator },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
