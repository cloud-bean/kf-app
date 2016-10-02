<template>
    <info></info>
    <expbar></expbar>
    <chart></chart>
</template>

<script>
import Info from '../components/Head';
import Expbar from '../components/Expbar';
import Chart from '../components/Chart';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    
    };
  },
  components: {
      Info,
      Expbar,
      Chart
  }
}
</script>

<style scoped>
    h1 {
        color: #42b983;
    }
</style>