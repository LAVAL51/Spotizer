import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/artist',
      component: () => import('../views/pages/Artist.vue'),
    },
    {
      path: '/album',
      component: () => import('../views/pages/Album.vue'),
    },
    {
      path: '/song',
      component: () => import('../views/pages/Song.vue')
    }
  ]
});

export default router;