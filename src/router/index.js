import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: import ('../index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: import('../views/CustomLogin.vue')
  },
  {
    path: '/planos',
    name: 'Planos',
    component: import('../views/ViewPlanos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
