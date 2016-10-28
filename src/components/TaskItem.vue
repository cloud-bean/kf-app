<template>
  <div class="card facebook-card">
      <div class="card-header no-border">
        <div class="facebook-avatar"><img :src="taskdata.titleImage.URL" width="40" height="40"></div>
        <div class="facebook-name">{{taskdata.name}}</div>
        <div class="facebook-date">{{taskdata.expireTime | dateFormat}}</div>
      </div>
      <!-- <div class="card-content">
        <div class="card-content-inner">
          经验:{{taskdata.experience}} | 金币:{{taskdata.goldToken}}
        <p>此处是内容...</p>
      </div> -->
    <!-- </div> -->
      <div class="card-footer">
        <span>难度:{{taskdata.difficult}}</span>
        <span>经验:{{taskdata.exp}}</span>
        <span>金币:{{taskdata.goldToken}}</span>
        <span v-if="taskdata.isDone">完成</span>
        <span style="color:red;" v-else>未完成</span>

      </div>
    </div>

  <!-- <dd class="pos-right clearfix">
    <div class="circ"></div>
    <div class="time">2015/01/15</div>
    <div class="events">
      <div class="pull-left">
        <img class="events-object img-rounded" src="../../static/photo-1.jpg">
      </div>
      <div class="events-body">
        <div class="row">
          <div class="col-xs-8">
            <h4 class="events-heading">{{taskdata.name}}</h4>
            <p>{{taskdata.difficult}}</p>
            <p>经验:{{taskdata.experience}} | 金币:{{taskdata.goldToken}}</p>
            <p>{{taskdata.subject}}</p>
          </div>
          <div class="col-xs-4">
              <div style="color:green" v-if="taskdata.complete">
                完成
              </div>
              <div style="color:red" v-else>
                未完成
              </div>
            </div>

        </div>


      </div>
    </div>
  </dd> -->
</template>

<script>
const moment = require('momentjs');

    export default{
      props:['taskdata'],
      data(){
        return {
        }
      },
      ready(){

      },
    }

</script>


<style scoped>
p{
  margin-bottom: 2px;
}

</style>
