<template>
  <main>
    <h1>{{ artist.name }}</h1>
    <el-table
        :data="albums"
        style="width: 99%"
        :style="{ cursor: 'pointer' }"
        @row-click="goToDetails">
      <el-table-column
      prop="title"
      label="Title">
      </el-table-column>
      <el-table-column
      prop="albumtype.name"
      label="Album Type">
      </el-table-column>
      <el-table-column
      prop="image"
      label="Image">
      <template v-slot="scope">
        <el-image style="width: 100px; height: 100px" :src="scope.row.image"/>
      </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'artist-details',
  data() {
    return {
      artist: {},
      albums: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const { data } = await axios.get(`/api/artists/${this.$route.params.id}`);
      this.artist = data;
      await this.loadAlbums();
    },
    async loadAlbums() {
      const albums = this.artist.albums.map(async (albumUrl) => {
        const albumId = albumUrl.split('/').pop();
        const { data } = await axios.get(`/api/albums/${albumId}`);
        return data;
      });
      this.albums = await Promise.all(albums);
    },
    goToDetails(data) {
      this.$router.push({name: 'albumsDetails', params: {id: data.id}})
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
