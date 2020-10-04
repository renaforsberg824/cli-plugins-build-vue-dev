/**
 * router/index.js
 *
 * vue-router documentation: https://router.vuejs.org/
 */

// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
      if (to.hash) return { selector: to.hash }
      if (savedPosition) return savedPosition

      return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        // Layouts allow you to define different
        // structures for different view
        component: () => import('@/layouts/default'),
        children: [
          {
            path: '',
            name: 'Home',
            component: () => import('@/views/home'),
          },
        ],
      },
    ],
  })
}
