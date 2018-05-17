<template>
<!--v-bind:class="{mask:expire}"-->
  <!-- <div class="task-item Grid" v-bind:class="[taskdata.isDone?'done':'']" v-if="!taskdata.isDone">
    <img :src="taskdata.titleImage.URL" alt="" style="height:7rem;position:absolute;left:0;top:0;z-index:-1;">
    <div class="task-content Cell -10of12">
      <div class=" ">
        <div class="title">{{taskdata.name}}</div>
      </div>
    </div>
     <div class="task-right Cell -1of12">
      <span style="color:green;" v-if="taskdata.isDone"><i class="fa fa-check-circle"></i></span>
    </div> -->
    <!-- <div class="mask" v-if="expire">
    </div>
    </div>
  -->
    <div class="news-item Grid  -center" :style="{backgroundImage: 'url(' + taskdata.titleImage.URL+'?imageView2/2/w/400/h/200/q/75|imageslim' + ')'}">
        <div class="news-content Cell -9of12">
          {{taskdata.name}}
          <!-- <div class="subtitle">
            {{newsData.subTitle}}
          </div> -->
        <div class="" v-if="taskdata.isDone">
          <mt-badge class="" size="normal" style="margin-left:.3rem;" color="#6F2DBD">已完成</mt-badge>
        </div>
        </div>
        <!-- <img v-bind:src="newsData.file.URL+'?imageView2/2/w/200/h/100/q/75|imageslim'" alt=""/> -->
    </div>
</template>

<script>
const moment = require('moment');
// const taskType = ['语音','书写','测验','行为','市场'];
// const typeLogo = ['speak','write','test','behavior','market'];
    export default{
      props:['taskdata'],
      components: {
      },
      data(){
        return {
          logo: null,
          showM: false,
          expire: false,
          type:'read',
        }
      },
      created(){

      },
      methods: {
        show(){
          this.showM = true;
        },
      }
    }

</script>


<style scoped>
.news-item {
  padding: 1.5rem 2rem;
  font-size: 1.2rem;
  border-radius:5px;
  color: #fff;
  border:3px solid #6F2DBD;
  background-size: cover;
}
/* .subtitle{
  margin-top: .5rem;
  font-size: 0.8rem;
  color: #ccc;

} */
.news-content{
  background-color: rgba(0,0,0,.4);
  padding: 1rem .2rem;
  text-align: center;
}
/* .date{
  font-size: 0.8rem;
  color: #ccc;
}
img{
  width: 100%;
} */

</style>
