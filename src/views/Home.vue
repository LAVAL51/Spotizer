<template>
  <main class="home-page"
  v-for="(element, index) in list"
  :key="index">
    <Carousel :list="element"></Carousel>
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
      list: {},
    }
  },
  created() {
    this.loadData('songs');
    this.loadData('albums');
    this.loadData('artists');
  },
  methods: {
    async loadData(resource) {
      const {data} = await axiox.get(`/api/${resource}`);
      this.list[resource] = data;
    },
  },
};
</script>

<style scoped lang="scss">
</style>