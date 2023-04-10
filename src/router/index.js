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
      path: '/artists',
      component: () => import('../views/pages/Artist.vue'),
    },
    {
      path: '/albums',
      component: () => import('../views/pages/Album.vue'),
    },
    {
      path: '/songs',
      component: () => import('../views/pages/Song.vue')
    },
    {
      path: '/playlist/:id',
      name: 'playlistDetails',
      component: () => import('../views/pages/PlaylistDetails.vue')
    },
    {
      path: '/artists/:id',
      name: 'artistsDetails',
      component: () => import('../views/pages/ArtistDetails.vue')
    },
  ]
});

export default router;