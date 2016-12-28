<template lang="html">
  <!-- <div class="card">
    <div class="card-header blue-bg">能力雷达</div>
    <div class="card-content">
      <div class="card-content-inner">
        <radar></radar>
      </div>
    </div>
  </div> -->

  <div class="chart">
    <div class="chart-title">
      成绩趋势
    </div>
    <line-chart :line-data="myChartData['测验']"></line-chart>
  </div>


  <!-- <div class="card">
    <div class="card-header blue-bg">成绩趋势</div>
    <div class="card-content">
      <div class="card-content-inner">
      </div>
    </div>
  </div> -->
  <!-- <div class="card">
    <div class="card-content"> -->

    <!-- </div>
  </div> -->
</template>

<script>
import Radar from '../components/charts/Radar';
import LineChart from '../components/charts/LineChart';

export default {
  props:['myChartData'],
  components: {
    Radar,
    LineChart,
  },
  created(){
    console.log('hello',this.myChartData);
  },
}
</script>

<style lang="css" scoped>
.chart{
  margin-top:0.3rem;
  width: 100%;
  text-align: center;
  background-color: #ffffff;
}
.cite{
  text-align: center;
  margin-top:0.3rem;
  background-color: #ffffff;
  width: 100%;
  padding: 0.3rem 1rem;
  font-size: 1rem;
}
.grey{
    color: #cccccc;
    font-size: 0.7rem;
}
.chart-title{
  font-size: 0.7rem;
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #cccccc;

}

</style>
