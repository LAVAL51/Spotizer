<template>
  <main class="home-page">
    <h1>Artists</h1>
    <Carousel :list="artists"></Carousel>

    <h1>Albums</h1>
    <Carousel :list="albums"></Carousel>

    <h1>Songs</h1>
    <Carousel :list="songs"></Carousel>
  </main>
</template>

<script>
import axiox from 'axios'
import Carousel from './home/Carousel.vue';

export default {
  name: 'home',
  components: {
    Carousel
  },
  data() {
    return {
      songs: [],
      albums: [],
      artists: [],
      playlist: []
    }
  },
  created() {
    this.loadData('songs');
    this.loadData('albums');
    this.loadData('artists');
    this.loadData('playlist');
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