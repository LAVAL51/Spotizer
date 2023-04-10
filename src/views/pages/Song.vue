<template>
  <main class="song-page">
    <h1>Song</h1>
    <data-table
    resource-name="songs"
    :table-columns="columns"
    :actions="actions"
    @addToPlaylist="openDialog"></data-table>
    <el-dialog
    title="Ajouter un son à une playlist"
    v-model="dialogVisible"
    :before-close="closeModal">
    <span>Veuillez choisir la playlist ou ajouter le son : {{ selectedSong.name }}</span>
      <el-select v-model="selectedPlaylist">
        <el-option
        v-for="playlist in playlists"
        :key="playlist.id"
        :label="playlist.name"
        :value="playlist.id"></el-option>
      </el-select>
      <template #footer>
      <span>
        <el-button @click="closeModal">Annuler</el-button>
        <el-button type="primary" @click="save">
          Ajouter
        </el-button>
      </span>
    </template>
    </el-dialog>
  </main>
</template>

<script>
import axiox from 'axios';
import dataTable from '../components/DataTable.vue';

export default {
  name: 'song',
  components: {
    dataTable,
  },
  data() {
    return {
      dialogVisible: false,
      selectedSong: {},
      playlists: [],
      selectedPlaylist: '',
      songs: [],
      columns: [
        { prop: 'title', label: 'Title' },
        { prop: 'length', label: 'Length' },
        { prop: 'youtube', label: 'Youtube' },
      ],
      actions: [
        {
          label: 'Ajouter à une playlist',
          event: 'addToPlaylist',
          type: 'primary',
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.selectedSong = {};
      this.dialogVisible = false;
    },
    async loadData(resource) {
      const {data} = await axiox.get(`/api/${resource}`);
      this[resource] = data;
    },
    async fetchPlaylists() {
      const list = JSON.parse(localStorage.getItem('playlistsId'));
      const requests = list.map(id => axiox.get(`/api/playlists/${id}`));
      const responses = await Promise.all(requests);
      this.playlists = responses.map(response => response.data);
    },
    async openDialog(data) {
      await this.fetchPlaylists();
      this.selectedSong = data;
      this.dialogVisible = true;
    },
    async save() {
      const id = this.selectedPlaylist;
      await axiox.patch(`/api/playlists/${id}`, {songs: this.selectedSong});
      this.selectedPlaylist = '';
      this.closeModal();
    }
  },
  async created() {
    await this.loadData('songs');
  },
};
</script>

<style scoped lang="scss">
</style>
