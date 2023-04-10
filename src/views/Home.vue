<template>
  <main class="home-page">
    <h1>My playlists</h1>

    <el-from
    :model="playlistForm"
    ref="playlistForm"
    class="form-playlist"
    :rules="rules">
      <el-form-item prop="newPlaylistName" class="input">
        <el-input v-model="playlistForm.newPlaylistName" placeholder="Créer un playlist"></el-input>
      </el-form-item>
      <el-from-item>
        <el-button @click="createPlaylist" type="primary">Ajouter</el-button>
      </el-from-item>
    </el-from>

    <el-carousel type="card" trigger="click">
      <el-carousel-item class="carousel"
      v-for="element in playlists"
      :key="element.id"
      @click="goToDetails(element)">
      {{ element.name }}
      </el-carousel-item>
    </el-carousel>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      playlistsId: JSON.parse(localStorage.getItem('playlistsId')) || [],
      playlists: [],
      playlistForm: {
        newPlaylistName: '',
      },
      rules: {
        newPlaylistName: [
          {required: true, message: 'Le nom de la playlist est obligatoire', trigger: blur},
          {min: 4, message: 'Le nom de la playlist doit contenir au moins 4 charactères', trigger: blur},
        ]
      }
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
      // TODO: faire la vérification du formulaire
      const {data} = await axios.post('/api/playlists', { name: this.playlistForm.newPlaylistName });
      this.playlistsId.push(data.id);
      this.playlistForm.newPlaylistName = '';
      await this.fetchPlaylists();
    },
    async fetchPlaylists() {
      const requests = this.playlistsId.map(id => axios.get(`/api/playlists/${id}`));
      const responses = await Promise.all(requests);
      this.playlists = responses.map(response => response.data);
    },
    goToDetails(element) {
      this.$router.push({name: 'playlistDetails', params: {id: element.id}});
    },
    clearLocalStorage() {
      localStorage.clear();
      this.playlistsId = [];
    },
  },
};
</script>

<style scoped lang="scss">
.add-playlist {
  margin-block: 2rem;
}

.carousel {
  background-color: var(--grey);
}

.form-playlist {
  display: flex;
  margin-block: 2rem;
}

.input {
    width: 100% !important;
    margin-right: 3rem;
  }
</style>
