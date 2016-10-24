<template>
  <div class="card facebook-card">
      <div class="card-header no-border">
        <div class="row">
          <div class="col-50">
            <div class="facebook-avatar "><img :src="user.profileImageURL"  class="headimg"></div>
            <div class="facebook-name name">{{user.displayName}}</div>
            <div class="facebook-date rank-index">第{{rankIndex}}名</div>
          </div>
          <div class="col-50">
            <div class="exp">
              {{user.exp}}
            </div>
          </div>
        </div>
      </div>


      <!-- <div class="card-content">
        <div class="card-content-inner">
          经验:{{taskdata.experience}} | 金币:{{taskdata.goldToken}}
        <p>此处是内容...</p>
      </div> -->
    <!-- </div> -->
      <!-- <div class="card-footer">
        <span>难度:{{taskdata.difficult}}</span>
        <span>经验:{{taskdata.experience}}</span>
        <span>金币:{{taskdata.goldToken}}</span>
        <span v-if="taskdata.isDone">完成</span>
        <span style="color:red;" v-else>未完成</span>

      </div> -->
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

    export default{
      props:['user','rankIndex'],
      data(){
        return {

        }
      },
    
    }

</script>


<style scoped>
p{
  margin-bottom: 2px;
}
.exp {
  padding-right: 0.5rem;
  text-align: right;
  color: #23ee2f;
  font-size: 2rem;
}
.headimg{
  height: 60px;
  width:60px;
}
.name {
  padding-left: 1rem;
  font-size: 1rem;
}
.rank-index {
  padding-left: 1rem;
  color: #ccc;
}

</style>
