import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'
import PrintView from '../views/PrintView.vue'
import PrintUsView from '../views/PrintUsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'portfolio',
    component: PortfolioView,
  },
  {
    path: '/print',
    name: 'print',
    component: PrintView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
