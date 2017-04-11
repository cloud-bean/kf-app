<template lang="html">
<div class="recorder">
    <div class="recorder-icon">
        <i class="fa fa-microphone"></i>
    </div>
    <div class="recorder-status">
        录音中   
    </div>
    <div class="button-group Grid -middle -center">
        <div class="button button-play Cell -4of12">
            <i class="fa fa-play"></i>  
        </div>
        <!--<div class=" button button-recoder Cell -4of12">
            <i class="fa fa-play"></i>  
        </div>-->
        <div class="button button-stop Cell -4of12">
            <i class="fa fa-stop"></i>
        </div>
        <div class=" button button-complete Cell -4of12">
            <mt-button type="primary" size="small">上传</mt-button>
        </div>
    </div>
</div>
</template>

<script>
import LineChart from '../components/charts/LineChart';

export default {
  props:[''],
  components: {
    LineChart,
  },
  created(){
  },
}
</script>

<style lang="css" scoped>
.recorder{
    background-color: #eee;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px #555555;
}
.recorder-icon{
  text-align: center;
  margin: 0 auto;
  background-color: #26a2ff;
  width:3rem;
  height:3rem;
  /*border-radius: 50px;*/
  border-radius: 10px;
  font-size: 1.5rem;
  color: #fff;
}
.recorder-icon i{
    margin-top: .7rem;
}
.recorder-status{
  text-align: center;
  color: #999;
  padding: 0.5rem;

}
.button{
    text-align: center;
    font-size: 1.5rem;
    /*padding: 1rem;*/
    /*background-color: #26a2ff;*/

}

</style>
