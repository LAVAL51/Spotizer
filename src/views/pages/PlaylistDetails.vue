<template>
  <main>
    <h1>Playlist : {{ playlist.name }}</h1>
    <data-table :resourceName="playlist.name" :tableColumns="playlist.songs" :actions="actions"></data-table>
  </main>
</template>

<script>
import axios from 'axios';
import dataTable from '../components/DataTable.vue';

export default {
  name: 'playlist-details',
  components: {
    dataTable,
  },
  data() {
    return {
      playlist: [],
      actions:[
        {
          label: 'Supprimer',
          event: 'remove',
          type: 'danger',
        }
      ]
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
