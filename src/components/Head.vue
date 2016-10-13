<template>

  <div class="jumbotron">
              <div class="jumbotron-contents">

                <div class="row">
                  <div class="col-xs-4">
                    <img :src="user.profileImageURL" style="width:100%;">
                  </div>
                  <div class="col-xs-8">
                    <div class="row">
                      <div class="col-xs-12">
                      <p class="lead">
                        {{user.displayName}}
                      </p>

                    <p>
                      <span class="test_mark">90分</span>/2016-09-01
                    </p>
                      </div>

                    </div>
                    <p>


                    <div class='row'>
                      <div class="detail">
                          <div class='col-xs-4'>
                            <div class="detailInfo">
                              <div>经验值</div>
                              <div>{{user.option.exp}}</div>
                            </div>
                          </div>
                          <div class='col-xs-4'>
                            <div class="detailInfo">
                              <div>悦维币</div>
                              <div>{{user.option.goldtoken}}</div>
                            </div>
                          </div>
                          <div class='col-xs-4'>
                            <div class="detailInfo">
                              <div>等级</div>
                              <div>{{user.option.level}}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                        </p>
                  </div>
                </div>
              </div>
  </div>

</template>

<script>
import Exp from './Expbar';
    export default{
      props:['user'],
      components:{
        Exp
      },
    }
</script>


<style scoped>
.title {
  text-align: left;
  padding-left: 12px;
  padding-top: 5px;
  font-size: 14px;
}

.detail {
  width:100%;
  /*padding-top: 5px;*/
}
.nickname{
  font-size: 1em;
}
.detailInfo {
 font-size: 0.6em;
 text-align: center;
}
.test_mark {
  font-size: 1em;
  /*color: #E9573f;*/
}
p{
  margin-bottom: 5px;
}
</style>
