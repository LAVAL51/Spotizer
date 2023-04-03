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
      component: () => import('../views/Artist.vue'),
    },
    {
      path: '/album',
      component: () => import('../views/Album.vue'),
    },
    {
      path: '/song',
      component: () => import('../views/Song.vue')
    }
  ]
});

export default router;