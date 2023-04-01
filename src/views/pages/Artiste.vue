<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'artiste-details',
  data() {
    return {

    };
  },
  methods: {
    init() {
      // TODO: requêter l'api pour récupérer tout le contenu de l'artiste avec l'id de l'artiste donné dans this.$route.params.id
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>

</style>