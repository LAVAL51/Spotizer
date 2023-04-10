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
      <el-select>
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
    openDialog(data) {
      this.selectedSong = data;
      this.dialogVisible = true;
    },
  },
  async created() {
    await this.loadData('songs');
  },
};
</script>

<style scoped lang="scss">
</style>
