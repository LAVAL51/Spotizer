<template>
  <main class="song-page">
    <h1>Song</h1>
    <data-table :table-data="songs" :table-prop="tableProp" :table-label="tableLabel"></data-table>
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
      songs: [],
      tableProp: 'title',
      tableLabel: 'Title',
    }
  },
  async created() {
    await this.loadData('songs');
  },
  methods: {
    async loadData(resource) {
      const {data} = await axiox.get(`/api/${resource}`);
      this[resource] = data;
    },
  },
};
</script>

<style scoped lang="scss">
</style>