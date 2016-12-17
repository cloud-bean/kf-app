<template>
  <canvas id="c2" style="width:100%;"></canvas>
</template>

<script>
const GM = require('g2-mobile');

export default {
  props: ['lineData'],
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    };
  },
  ready() {
    GM.Global.pixelRatio = 2;
      var Util = GM.Util;
      var data = [];
      if(this.lineData){
        this.lineData.forEach((item, index) => {
          // console.log('item',item);
          data.push({index:index+1,score:item.score})
        });
      }
      console.log('data',data.slice(0,9));

      // var data = [
      //   {"time": '周一',"tem": 10,"city": "beijing"},
      //   {"time": '周二',"tem": 22,"city": "beijing"},
      //   {"time": '周三',"tem": 20,"city": "beijing"},
      //   {"time": '周四',"tem": 26,"city": "beijing"},
      //   {"time": '周五',"tem": 20,"city": "beijing"},
      //   {"time": '周六',"tem": 26,"city": "beijing"},
      //   {"time": '周日',"tem": 28,"city": "beijing"},
      //   {"time": '周一',"tem": 5,"city": "newYork"},
      //   {"time": '周二',"tem": 12,"city": "newYork"},
      //   {"time": '周三',"tem": 26,"city": "newYork"},
      //   {"time": '周四',"tem": 20,"city": "newYork"},
      //   {"time": '周五',"tem": 28,"city": "newYork"},
      //   {"time": '周六',"tem": 26,"city": "newYork"},
      //   {"time": '周日',"tem": 20,"city": "newYork"}
      // ];
      var chart = new GM.Chart({
        id: 'c2'
      });
      var defs = {
        index: {
          tickCount: 10,
          range:[0,1]
        },
        score: {
          tickCount: 10,
          min: 0
        }
      };
      //配置time刻度文字样式
      var label = {
        fill: '#979797',
        font: '14px san-serif',
        offset: 6
      };
      chart.axis('index', {
        label: function (text, index, total) {
          var cfg = Util.mix({}, label);
          // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
          if (index === 0) {
            cfg.textAlign = 'start';
          }
          if (index > 0 && index === total - 1) {
            cfg.textAlign = 'end';
          }
          return cfg;
        }
      });
      //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
      chart.axis('score', {
        label: {
          fontSize: 14
        }
      });
      chart.source(data.slice(0,9), defs);
      chart.line().position('index*score').shape('smooth');
      chart.render();
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
