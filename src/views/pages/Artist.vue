<template>
  <main class="artist-page">
    <h1>Artists</h1>
    <data-table
    resource-name="artists"
    :table-columns="columns"
    @rowClicked="goToDetails"></data-table>
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
      columns: [
        { prop: 'name', label: 'Name' },
      ],
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
    goToDetails(data) {
      this.$router.push({name: 'artistsDetails', params: {id: data.id}})
    },
  },
};
</script>

<style scoped lang="scss">
</style>