import {createRouter, createWebHashHistory, Router} from 'vue-router';
import Layout from '@/layout';
export const constantRoutes = [
  {
    path: '/',
    component: Layout
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
