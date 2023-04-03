<template>
  <main class="artist-page">
    <h1>Artists</h1>
    <data-table :table-data="artists" :table-prop="tableProp" :table-label="tableLabel"></data-table>
  </main>
</template>

<script>
import axiox from 'axios';
import dataTable from '../components/DataTable.vue';

export default {
  name: 'artist',
  components: {
    dataTable,
  },
  data() {
    return {
      artists: [],
      tableProp: 'name',
      tableLabel: 'Name',
    }
  },
  async created() {
    await this.loadData('artists');
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