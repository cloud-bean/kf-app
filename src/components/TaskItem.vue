<template>
<!--v-bind:class="{mask:expire}"-->
  <div class="task-item Grid" v-bind:class="[expire?'expire':'']">
    <div class="task-content Cell -10of12">
      <div class=" ">
        <!-- <div class="facebook-avatar"><img :src="logo" width="40" height="40"></div> -->
        <div class="title">{{taskdata.name}}</div>
        <!-- <div class="gery">{{taskdata.expireTime | dateFormat}} -->
        <div class="Grid">
          <!-- <mt-badge class="" size="small" color="#888">{{taskdata.type}}</mt-badge> -->
          <mt-badge v-if="!expire" class="" size="small" color="#4fc1e9">经验:{{taskdata.exp}}</mt-badge>
          <mt-badge v-if="!expire" class="" size="small" style="margin-left:.3rem;" color="#ffc107">金币:{{taskdata.goldToken}}</mt-badge>
          <mt-badge v-if="expire"  size="small" style="margin-left:.3rem;" color="#8080806b">已超期</mt-badge>
        </div>
      </div>

    </div>
    <div class="task-right Cell -1of12">
      <span style="color:green;" v-if="taskdata.isDone"><i class="fa fa-check-circle"></i></span>
      <!-- <span style="color:red;" v-else><i class="fa fa-times-circle"></i></span> -->
    </div>
    <!-- <div class="mask" v-if="expire">
    </div> -->
    </div>




</template>

<script>
import {Badge} from 'mint-ui';

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
        if(this.taskdata){
          this.type = this.transType(this.taskdata.type)
          const now = new Date();
          const expireTime = new Date(this.taskdata.expireTime);
          this.expire = !((expireTime - now) > 0);
        }

      },
      methods: {
        show(){
          this.showM = true;
        },
        transType(type){
          const taskType = ['口语','写作','测验','阅读','听力'];
          const typeLogo = ['speak','write','test','read','listen'];
          const index = taskType.indexOf(this.taskdata.type);
          return typeLogo[index];
        }
      }
    }

</script>


<style scoped>
p{
  margin-bottom: 2px;
}
.expire{
  -webkit-filter: grayscale(99%); /* Chrome, Safari, Opera */
  filter: grayscale(99%);
  background-color: gray;
}

.mask {
  top: 0;
  left: 0;
  height:100%;
  width:100%;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  /* background: rgba(255, 255, 255, 0.8); */
  /*z-index: -1;*/
  position: absolute;
  background-color: rgba(0,0,0,.5);
  /* border: 2px solid #ccc; */
  border-left:none;
  border-radius: 2px;


}
.task-right {

  font-size: 1.2rem;
  text-align: center;
  vertical-align: bottom;
  padding: 1.5rem 0;
  /* vertical-align:middle; */

}
.no-margin{
  margin: 0;
  margin-top: 0.3rem;
  border-radius: 0;
}
.task-item{
  /* margin-top: 5px; */
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  /*border: 3px solid #4FC1E9;*/
  /* border-left:none; */
  background-color: rgba(52, 177, 220, 0.12);
  box-shadow:0 0 1px rgba(52, 177, 220, 0.4);
   /*padding: 0.5rem 0;*/
  margin: 5px;
}
.task-content{
    /* padding: 0 1rem; */
    /* background-color: #e8f0f6; */
    margin: .5rem .5rem;

}
.title{
  padding:0.3rem 0;
  font-size: 1rem;
  color: #333;
}
/* .left{
  width: 2%;
} */
.read{
  border: 3px solid #ED5565;
}
.test{
  border: 3px solid  #FFCE54;
}
.speak{
  border: 3px solid #48CFAD;
}
.write{
  border: 3px solid #4FC1E9;
}
.listen{
  border: 3px solid #ccc;
}
/* .right{
  width:98%;
  /*font-size: 0.8rem;*/
.task-footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 1rem;
  /* background-color: #e8f0f6; */
  font-size: 0.8rem;
}

</style>
