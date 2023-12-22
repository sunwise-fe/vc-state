import { createRouter, createWebHistory } from 'vue-router'
import ThemeContextProviderView from '../view/theme-context-provider/index.vue'
import NestProvidersView from '../view/nested-providers/index.tsx'
import OverrideProvidersView from '../view/overriding-providers/index.vue'

const routes = [
  {
    path: '/',
    name: 'ThemeContextProviderView',
    component: ThemeContextProviderView
  },
  {
    path: '/nest',
    name: 'NestProvidersView',
    component: NestProvidersView
  },
  {
    path: '/override',
    name: 'OverrideProvidersView',
    component: OverrideProvidersView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
