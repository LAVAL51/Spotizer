<template>
  <main class="album-page">
    <h1>Album</h1>
    <data-table :table-data="albums" :table-prop="tableProp" :table-label="tableLabel"></data-table>
  </main>
</template>

<script>
import axiox from 'axios';
import dataTable from '../components/DataTable.vue';

export default {
  name: 'album',
  components: {
    dataTable,
  },
  data() {
    return {
      albums: [],
      tableProp: 'title',
      tableLabel: 'Title',
    }
  },
  async created() {
    await this.loadData('albums');
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