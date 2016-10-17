<template>

  <div class="jumbotron">
              <div class="jumbotron-contents">

                <div class="row info">
                  <div class="col-xs-6 profile">
                    <div class="row ">
                        <img :src="user.profileImageURL" class="headimg">
                        <div class="row">
                          <div class="col-xs-12">
                          <p class="lead">
                            {{user.displayName}}
                          </p>


                          </div>

                        </div>
                    </div>

                  </div>
                  <div class="col-xs-6">
                    <p>
                      <div class="test_mark">90分</div>
                      2016-09-01
                    </p>
                    <p>
                      <div class='row'>
                        <div class="detail">
                            <div class='col-xs-4'>
                              <div class="detailInfo">
                                <div>经验</div>
                                <div>{{user.option.exp}}</div>
                              </div>
                            </div>
                            <div class='col-xs-4'>
                              <div class="detailInfo">
                                <div>悦币</div>
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


                    <p>



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
.info{
  text-align: center;
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
  font-size: 3em;
  color: #E9573f;
}
.headimg {
  width: 50%;
}
.profile {
  padding-top: 20px;
}
p{
  margin-bottom: 5px;
}
</style>
