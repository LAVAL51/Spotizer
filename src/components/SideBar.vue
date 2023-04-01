<template>
  <aside :class="['aside', {'expanded': isExpanded}]">
    <div class="logo">
      <img src="../assets/logo.svg" alt="logo">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle">
        <span class="material-icons" @click="toggleMenu">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3 class="menu-title">Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/artist">
        <span class="material-icons">groups</span>
        <span class="text">Artists</span>
      </router-link>
      <router-link class="button" to="/album">
        <span class="material-icons">library_music</span>
        <span class="text">Albums</span>
      </router-link>
      <router-link class="button" to="/song">
        <span class="material-icons">queue_music</span>
        <span class="text">Songs</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="copiright">
      <span>©</span>
      <span class="copiright-text">Kevin Wang & Anthony LAVAL 2023</span>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
    }
  }
}
</script>

<style scoped lang="scss">

.aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  background-color: var(--dark);
  color: var(--light);
  padding: 1rem;

  .flex {
    flex: 1 1 0;
  }

  transition: width .2s ease-out;
}

.expanded {
  width: var(--side-bar-width);

  .menu-toggle-wrap {
    top: -3rem;

    .menu-toggle {
      transform: rotate(180deg);
    }
  }

  .menu-title, .button .text {
    opacity: 1;
  }

  .copiright-text {
    display: inline-block;
    white-space: normal;

  }
}

.menu-toggle-wrap {
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;

  position: relative;
  top: 0;
  transition: .2s ease-out;

  .menu-toggle {
    transition: .2s ease-out;

    .material-icons {
      margin-right: -1rem;
      font-size: 2rem;
      color: var(--light);
      transition: .2s ease-out;
    }

    &:hover {
      .material-icons {
        color: var(--primary);
        transform: translate(0.5rem);
      }
    }
  }
}

.logo {
  margin-bottom: 1rem;

  img {
    width: 2rem;
  }
}

.menu-title, .button .text {
  opacity: 0;
}

.copiright-text {
  display: none;
  white-space: nowrap;
  overflow: hidden;
  padding-left: .3rem;
}

.menu-title {
  color: var(--grey);
  font-size: .875rem;
  margin-bottom: .5rem;
  text-transform: uppercase;
}

.copiright {
  display: flex;
  align-items: start;
  color: var(--light);
}

.menu {
  margin: 0 -1rem;

  .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 1rem;
    transition: .2s ease-out;

    .material-icons {
      font-size: 2rem;
      color: var(--light);
      margin-right: 1rem;
      transition: .2s ease-out;
    }

    .text {
      color: var(--light);
      transition: .2s ease-out;
    }

    &:hover, ~ &.router-link-exact-active {
      background-color: var(--dark-alt);

      .material-icons, .text {
        color: var(--primary);
      }
    }

    &.router-link-exact-active {
      border-right: 5px solid var(--primary);
    }
  }
}

</style>