<template>
  <nav class="navbar">
    <!-- <input
    type="text"
    class="input"
    placeholder="Rechercher..."> -->
  </nav>
</template>

<script>
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  padding: .5rem;
  background-color: var(--primary);
}

.input {
  background: none;
  width: 20%;
  min-width: fit-content;
  border: none;
  outline: none;
  border-bottom: solid 1px var(--grey);
  text-decoration: none;
  margin-left: 1rem;
}
</style>