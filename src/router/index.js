import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import('../views/pages/Artist/Artist.vue'),
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/pages/Album/Album.vue'),
    },
    {
      path: '/songs',
      name: 'songs',
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
      component: () => import('../views/pages/Artist/ArtistDetails.vue')
    },
    {
      path: '/albums/:id',
      name: 'albumsDetails',
      component: () => import('../views/pages/Album/AlbumDetails.vue')
    }
  ]
});

export default router;