<template lang="html">
  <div class="content-block-title mytitle">数据分析</div>
  <div class="card">
    <div class="card-content">
      <radar></radar>
    </div>
  </div>
</template>

<script>
import Radar from '../components/charts/Radar';

export default {
  components: {
    Radar,
  }
}
</script>

<style lang="css">
</style>
