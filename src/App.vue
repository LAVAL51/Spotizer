<template>
  <div class="app">
    <side-bar></side-bar>
    <div class="content">
        <nav-bar />
        <router-view></router-view>
      </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --light-grey: #999999;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --side-bar-width: 18.75rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

// body {

// }

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  background: var(--light);
  .content {
    width: 100%;
  }

  main {
    flex: 1 1 0;
    padding: 2rem;
    
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
