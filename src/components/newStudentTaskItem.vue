<template>
<!--v-bind:class="{mask:expire}"-->
  <div class="task-item Grid" v-bind:class="[taskdata.isDone?'done':'']">
    <div class="task-content Cell -10of12">
      <div class=" ">
        <div class="title">{{taskdata.name}}</div>
      </div>
    </div>
    <!-- <div class="task-right Cell -1of12">
      <span style="color:green;" v-if="taskdata.isDone"><i class="fa fa-check-circle"></i></span>
    </div> -->
    <!-- <div class="mask" v-if="expire">
    </div> -->
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
p{
  margin-bottom: 2px;
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
