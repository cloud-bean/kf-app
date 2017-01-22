<template>
  <canvas id="c2" style="width:100%;"></canvas>
</template>

<script>
const GM = require('g2-mobile');
const moment = require('momentjs');

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
  mounted() {
    GM.Global.pixelRatio = 2;
      var Util = GM.Util;
      var data = [];
      if(this.lineData){
        this.lineData.slice(0,10).reverse().forEach((item, index) => {
          // console.log('item',item);moment(expireTime).format('YYYY-MM-DD HH:mm')
          data.push({index:index, score:item.score})
        });
      }
      // moment(item.task.created).format('MM-DD')
      // console.log('data',data.slice(0,9));

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
          type: 'cat',
          // values: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
          // tickCount: 10,
          range:[0,1],
          min:1,
          max:10,
        },
        score: {


        }
      };
      //配置time刻度文字样式
      var label = {
        fill: '#979797',
        font: '14px san-serif',
        offset: 6
      };
      chart.axis('index', {
        // type: 'cat',
        // // tickCount: 10,
        // // values: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        // // tickCount: 10,
        // // range:[0,1],
        //  // 设置属性的别名
        // min:1,
        // max:10,
        label: {
          fontSize: 12,
          rotate: 20, // 旋转角度
          autoRotate: true,
        },


      });
      //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
      chart.axis('score', {
        tickCount: 10,
        max: 100,
        alias: '分数',
        label: {
          fontSize: 12
        },
      });
      chart.source(data,defs);
      chart.line().position('index*score');
      this.$nextTick(()=>{
        chart.render();
      })
    },
  }

  // {
  //   label: function (text, index, total) {
  //     var cfg = Util.mix({}, label);
  //     // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
  //     if (index === 0) {
  //       cfg.textAlign = 'start';
  //     }
  //     if (index > 0 && index === total - 1) {
  //       cfg.textAlign = 'end';
  //     }
  //     return cfg;
  //   }
  // }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
