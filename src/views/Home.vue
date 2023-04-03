<template>
  <main class="home-page">
    <h1>My playlists</h1>
    <Carousel :list="playlists"></Carousel>

    <form @submit.prevent="createPlaylist">
      <label>
        Name:
        <input type="text" v-model="newPlaylistName">
      </label>
      <button type="submit">Create</button>
    </form>
  </main><ul>
  <li v-for="playlist in playlists" :key="playlist.id">
    {{ playlist.name }}
  </li>
</ul>

</template>

<script>
import axios from 'axios';
import Carousel from './home/Carousel.vue';

export default {
  name: 'home',
  components: {
    Carousel
  },
  data() {
    return {
      playlistsId: JSON.parse(localStorage.getItem('playlistsId')) || [],
      playlists: [],
      newPlaylistName: ''
    };
  },
  async created() {
    await this.fetchPlaylists();
  },
  watch: {
    playlistsId: {
      handler: function(id) {
        localStorage.setItem('playlistsId', JSON.stringify(id));
      },
      deep: true
    },
  },
  methods: {
    async createPlaylist() {
      if (this.newPlaylistName.length < 4) {
        alert('Playlist name must be at least 4 characters long.');
        return;
      }

      const {data} = await axios.post('/api/playlists', { name: this.newPlaylistName });
      this.playlistsId.push(data.id);
      this.newPlaylistName = '';
      await this.fetchPlaylists();
    },
    async fetchPlaylists() {
      const requests = this.playlistsId.map(id => axios.get(`/api/playlists/${id}`));
      const responses = await Promise.all(requests);
      this.playlists = responses.map(response => response.data);
    },
    clearLocalStorage() {
      localStorage.clear();
      this.playlistsId = [];
    }
  },
};
</script>

<style scoped lang="scss">
</style>
