<template>

  <div class="task-item" v-bind:class="{mask:expire}">
    <div class="left"  v-bind:class="[type]">
    </div>
    <div class="right">
      <div class="task-content">
        <!-- <div class="facebook-avatar"><img :src="logo" width="40" height="40"></div> -->
        <div class="title">{{taskdata.name}}</div>
        <div class="gery">{{taskdata.expireTime | dateFormat1}} # <span class="gery">{{taskdata.type}}</span></div>


      </div>
      <div class="task-footer">
        <span>难度:{{taskdata.difficult}}</span>
        <span>经验:{{taskdata.exp}}</span>
        <span>悦币:{{taskdata.goldToken}}</span>
        <span v-if="taskdata.isDone">完成</span>
        <span style="color:red;" v-else>未完成</span>
      </div>
    </div>

    </div>




</template>

<script>

const moment = require('momentjs');
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
          type:'read'
        }
      },
      created(){
        this.type = this.transType(this.taskdata.type)
        const now = new Date();
        const expireTime = new Date(this.taskdata.expireTime);
        this.expire = !((expireTime - now) > 0);
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
.mask {
  /*height: 100%;*/
  /*width:100%;*/
  /*background: rgba(255, 255, 255, 0.5);*/
  /*z-index: -1;*/
  filter:opacity(50%);

}
.gery {
  color:#999;
  font-size: 0.8rem;

}
.no-margin{
  margin: 0;
  margin-top: 0.3rem;
  border-radius: 0;
}
.task-item{
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ccc;
}
.task-content{
    padding: 0 1rem;
    background-color: #EEEEFF;

}
.title{
  padding:0.3rem 0;
  font-size: 1rem;
}
.left{
  width: 1%;
}
.read{
  background-color: #ED5565;
}
.test{
  background-color: #FFCE54;
}
.speak{
  background-color: #48CFAD;
}
.write{
  background-color: #4FC1E9;
}
.listen{
  background-color: #ccc;
}
.right{
  width:99%;
  /*font-size: 0.8rem;*/
}
.task-footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 1rem;
  background-color: #EEEEFF;
  font-size: 0.8rem;
}

</style>
