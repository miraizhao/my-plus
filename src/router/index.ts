import { createRouter, createWebHistory } from 'vue-router'
import IconView from '@/views/IconView.vue'

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'icon',
      component: IconView
    },
    {
      path: '/button',
      name: 'button',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('../views/CollapseView.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/DialogView.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('../views/DropDownView.vue')
    },
    {
      path: '/pager',
      name: 'pager',
      component: () => import('../views/PagerView.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/TooltipView.vue')
    }
  ]
})

export default router
