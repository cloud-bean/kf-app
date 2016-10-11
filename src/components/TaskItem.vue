<template>
    <div class="page-index">
        <div class="card">
            <div valign="bottom" class="card-header {{taskdata.type}}">{{taskdata.name}}</div>
            <div class="card-content">
                <div class="card-content-inner">
                    <div class="row">
                      <div class="col-80">
                        <p class="color-gray">2015/01/15</p>
                        <p>{{taskdata.subject}}</p>
                      </div>
                      <div class="col-20">
                        <div class="check">
                          <label class="label-switch">
                            <input type="checkbox">
                            <div class="checkbox"></div>
                          </label>
                        </div>

                      </div>
                    </div>

                </div>
            </div>
            <!-- <div class="card-footer">
                <a href="#" class="link">更多</a>
            </div> -->
        </div>

</template>

<script>
    export default{
      props:['taskdata'],
    }
</script>


<style scoped>
.check {
  padding-top: 20px;
}
.speak {
  background-color: #34D6E1;
  color: black;
}
.read {
  background-color: #C3A402;
  color: white;
}
.write {
  background-color: #388200;
  color: white;
}

</style>
