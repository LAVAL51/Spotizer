<template>
  <el-carousel
      class="wrapper-carousel"
      trigger="click"
      :autoplay="false"
      type="card"
      height="200px">
    <el-carousel-item class="item-carousel" v-for="item in list" :key="item.id">
      <h3>{{ item.title }}</h3>
      <!-- <iframe width="150" height="150" :src="item.youtube"></iframe> -->
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: 'carousel',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

.wrapper-carousel {
  :deep(.el-carousel__button) {
    background-color: var(--grey);
  }
}

.item-carousel {
  display: flex;
  background-color: var(--light-grey);
  align-items: center;
  justify-content: center;
}

</style>
