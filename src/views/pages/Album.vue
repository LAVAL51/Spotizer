<template>
  <main class="album-page">
    <h1>Album</h1>
    <data-table resource-name="albums" :table-columns="columns"></data-table>
  </main>
</template>

<script>
import dataTable from '../components/DataTable.vue';

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
};
</script>
