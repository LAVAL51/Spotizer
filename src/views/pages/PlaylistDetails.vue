<template>
  <div>
    <h1>Playlist : {{ playlist.name }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'playlist-details',
  data() {
    return {
      playlist: [],
    };
  },
  methods: {
    async init() {
      const {id} = this.$route.params;
      const {data} = await axios.get(`/api/playlists/${id}`);
      this.playlist = data;
    },
    addSong(song) {
      this.playlist.songs.push(song);
      this.save();
    },
    removeSong(song) {
      const index = this.playlist.songs.indexof(song);
      this.playlist.splice(index, 1);
      this.save();
    },
    save() {
      // Methode pour sauvegarder une playlist appeller à chaque modification de celle-ci
    },
  },
  created() {
    this.init();
  }
}
</script>

<style lang="scss" scoped>

</style>
