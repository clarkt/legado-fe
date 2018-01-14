<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Frontpage</router-link>
          <router-link to="/readinglist" class="navbar-item">Reading list</router-link>
          <router-link to="/helloworld" class="navbar-item">Helloworld</router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      appName: 'Legado',
    };
  },
};
</script>
