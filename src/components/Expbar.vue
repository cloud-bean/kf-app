<template>
  <div class="exp">
    <span>经验：{{ exp }} |</span>
    <span>排名：{{ rank }} |</span>
    <span>财富：{{ ponit }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      exp: '1000',
      rank: '5',
      ponit: '30',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .exp {
    color: #42b983;
    background: #232455;
  }
</style>