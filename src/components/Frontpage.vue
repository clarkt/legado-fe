<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        Welcome to  <strong>{{ appName }}</strong>!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Frontpage',
  data() {
    return {
      appName: 'Legado',
    };
  },
};
</script>