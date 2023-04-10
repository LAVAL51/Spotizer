<template>
  <main>
    <h1>{{ album.title }}</h1>
    <el-table
        :data="songs"
        style="width: 99%">
      <el-table-column
          prop="title"
          label="Title">
      </el-table-column>
      <el-table-column
          prop="length"
          label="Length">
      </el-table-column>
      <el-table-column
      prop="youtube"
      label="Youtube">
        <template v-slot="scope">
          <iframe width="200" height="150" :src="scope.row.youtube"></iframe>
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: 'album-details',
  data() {
    return {
      album: {},
      songs: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const { data } = await axios.get(`/api/albums/${this.$route.params.id}`);
      this.album = data;
      await this.loadSongs();
    },
    async loadSongs() {
      this.album.songs.map(async (song) => {
        this.songs.push(song);
      });
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
