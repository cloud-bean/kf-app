<template>
  <canvas id="c1" style="width:100%;"></canvas>
</template>

<script>
const GM = require('g2-mobile');

export default {

  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    };
  },
  mounted() {
    GM.Global.pixelRatio = 1;
     var data = [
       {name: '张飞',props: '听力', value: 65},
       {name: '张飞',props: '阅读', value: 97},
       {name: '张飞',props: '写作', value: 50},
       {name: '张飞',props: '口语', value: 92},
       {name: '张飞',props: '记忆', value: 100},
     ];
     var chart = new GM.Chart({
       id: 'c1'
     });
     chart.coord('polar');
     chart.source(data, {
       value: {
         min: 0,
         tickInterval: 30
       }
     });
     //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
     chart.axis('props', {
       label: {
         fontSize: 12
       },
       line: null
     });
     chart.axis('value', {
       label: {
         fontSize: 12
       }
     });
     chart.area().position('props*value').color('name').style({
       opacity: 0.4
     });
     // x和y轴同时缩放的动画
    //  chart.animate().scalexy();
     this.$nextTick(()=>{
       chart.render();
     });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
