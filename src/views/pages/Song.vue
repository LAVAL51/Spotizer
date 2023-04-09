<template>
  <main class="song-page">
    <h1>Song</h1>
    <data-table  resource-name="songs" :table-columns="columns"></data-table>
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
      columns: [
        { prop: 'title', label: 'Title' },
        { prop: 'length', label: 'Length' },
        { prop: 'youtube', label: 'Youtube' },
      ],
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