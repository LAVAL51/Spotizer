<template>
  <main class="album-page">
    <h1>Album</h1>
    <data-table
    resource-name="albums"
    :table-columns="columns"
    :isRowClick="true"
    @rowClicked="goToDetails"></data-table>
  </main>
</template>

<script>
import dataTable from '../../components/DataTable.vue';

export default {
  name: 'album',
  components: {
    dataTable,
  },
  data() {
    return {
      columns: [
        { prop: 'title', label: 'Title' },
        { prop: 'albumtype.name', label: 'Album Type' },
        { prop: 'image', label: 'Image' },
      ],
    }
  },
  methods: {
    goToDetails(data) {
      this.$router.push({name: 'albumsDetails', params: {id: data.id}})
    },
  },
};
</script>
