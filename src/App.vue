<template>
  <div id="app">
    <router-link to="/">Frontpage</router-link>
    <router-link to="/helloworld">Helloworld</router-link>
    <section class="section">
        <div class="container">
          <h1 class="title">
            Hello World
          </h1>
          <p class="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
