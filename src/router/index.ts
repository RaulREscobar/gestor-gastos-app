import { route } from 'quasar/wrappers'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: 'gastos', name: 'gastos', component: () => import('pages/BillsPage.vue') },
      { path: 'reportes', name: 'reportes', component: () => import('pages/ReportsPage.vue') },
      { path: 'perfil', name: 'perfil', component: () => import('pages/PerfilPage.vue') },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },
]

export default route(() =>
  createRouter({
    history: createWebHistory(),
    routes,
  })
)
