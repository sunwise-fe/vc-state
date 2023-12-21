import { createRouter, createWebHistory } from 'vue-router'
import ThemeContextProviderView from '../view/theme-context-provider/index.vue'

const routes = [
  {
    path: '/',
    name: 'ThemeContextProviderView',
    component: ThemeContextProviderView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
