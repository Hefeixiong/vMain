import {createRouter, createWebHashHistory, Router} from 'vue-router';

import Layout from '@/layout';
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'Dashboard', elSvgIcon: 'Fold' }
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
