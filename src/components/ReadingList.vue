<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="subtitle">
        {{ msg }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReadingList',
  data() {
    return {
      title: 'Reading list',
      msg: 'This is the reading list',
    };
  },
};
</script>