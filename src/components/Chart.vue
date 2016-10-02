<template>
    <div v-echarts='expOptions' class="echart">
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
      expOptions:{},
    };
  },
  created() {
    this.expOptions = {
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .echart {
        width: 100%;
        height: 400px;
    }
</style>