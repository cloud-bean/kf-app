<template>

  <dd class="pos-right clearfix">
    <div class="circ"></div>
    <div class="time">2015/01/15</div>
    <div class="events">
      <div class="pull-left">
        <img class="events-object img-rounded" src="../../static/photo-1.jpg">
      </div>
      <div class="events-body">
        <div class="row">
          <div class="col-xs-10">
            <h4 class="events-heading">{{taskdata.name}}</h4>
            <p>{{taskdata.difficult}}</p>
            <p>任务经验:{{taskdata.experience}} | 任务金币:{{taskdata.goldToken}}</p>
            <p>{{taskdata.subject}}</p>
          </div>
          <div class="col-xs-2">
            <div class="checkbox">
                <div class="icheckbox_flat">
                  <input type="checkbox">
                </div>
              </div>
            </div>

        </div>


      </div>
    </div>
  </dd>
</template>

<script>
    export default{
      props:['taskdata'],
    }
</script>


<style scoped>
p {
  margin-bottom: 2px;
}

</style>
