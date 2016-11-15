<template>

  <div class="card facebook-card" v-bind:class="{mask:expire}">
      <div class="card-header no-border">
        <div class="facebook-avatar"><img :src="logo" width="40" height="40"></div>
        <div class="facebook-name">{{taskdata.name}}</div>
        <div class="facebook-date">{{taskdata.expireTime | dateFormat1}}</div>
      </div>
      <div class="card-footer">
        <span>难度:{{taskdata.difficult}}</span>
        <span>经验:{{taskdata.exp}}</span>
        <span>金币:{{taskdata.goldToken}}</span>
        <span v-if="taskdata.isDone">完成</span>
        <span style="color:red;" v-else>未完成</span>

      </div>
    </div>




</template>

<script>

const moment = require('momentjs');
const taskType = ['语音','书写','测验','行为','市场'];
const typeLogo = ['speak','write','test','behavior','market'];
    export default{
      props:['taskdata'],
      components: {
      },
      data(){
        return {
          logo: null,
          showM: false,
          expire: false,
        }
      },
      created(){
        const index = taskType.indexOf(this.taskdata.type);
        this.logo = require(`../assets/${typeLogo[index]}.jpg`);

        const now = new Date();
        const expireTime = new Date(this.taskdata.expireTime);
        this.expire = !((expireTime - now) > 0);
      },
      methods: {
        show(){
          this.showM = true;
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


</style>
