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
  props:['type','data'],
  created() {
    this.expOptions = {
      title: {
        text: '成绩曲线',
        textStyle: {
          fontSize: 10,
        },
      },
    tooltip: {},
    xAxis: {
        data: ["1月","2月","3月","4月","5月"]
    },
    yAxis: {},
    series: [{
        name: '成绩',
        type: 'line',
        data: [65, 70, 86, 76, 90],
        markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
    }],
};

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .echart {
        width: 100%;
        height: 200px;
    }
</style>
