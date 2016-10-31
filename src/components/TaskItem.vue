<template>

  <div class="card facebook-card">
      <div class="card-header no-border">
        <div class="facebook-avatar"><img :src="taskdata.titleImage.URL" width="40" height="40"></div>
        <div class="facebook-name">{{taskdata.name}}</div>
        <div class="facebook-date">{{taskdata.expireTime | dateFormat}}</div>
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

    export default{
      props:['taskdata'],
      components: {
      },
      data(){
        return {
          showM: false,
        }
      },
      ready(){

      },
      methods: {
        show(){
          console.log('hello');
          this.showM = true;
        }
      }
    }

</script>


<style scoped>
p{
  margin-bottom: 2px;
}

</style>
