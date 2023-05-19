import { createRouter, createWebHistory } from 'vue-router';
import { Dashboard, Home, Teachers, Students, Error } from '../views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/students',
          name: 'students',
          component: Students,
        },
        {
          path: '/teachers',
          name: 'teachers',
          component: Teachers,
        }
      ],
    }, {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error,
    }
  ]
})

export default router
