import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: import('../index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: import('../views/ViewLogin.vue')
  },
  {
    path: '/planos',
    name: 'Planos',
    component: import('../views/ViewPlanos.vue')
  },
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: import('../views/ViewCadastrar.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: import('../views/ViewInicio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
