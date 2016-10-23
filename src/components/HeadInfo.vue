<template>
  <div class="content-block-title mytitle">基本信息</div>
  <div class="card">
    <div class="card-content">
      <div class="list-block media-list">
        <ul>
          <li class="item-content">
            <div class="item-media">
              <div class="headimg">
                <img :src="user.profileImageURL" height="44">
              </div>
            </div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">{{user.displayName}}</div>
              </div>
              <div class="item-subtitle">子标题</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-footer info">
      <div class="detail">
        <div class="row">

          <div class='col-33'>
            <div class="detailInfo">
              <div>经验</div>
              <div>{{user.option.exp}}</div>
            </div>
          </div>
          <div class='col-33'>
            <div class="detailInfo">
              <div>悦币</div>
              <div>{{user.option.goldToken}}</div>
            </div>
          </div>
          <div class='col-33'>
            <div class="detailInfo">
              <div>等级</div>
              <div>{{user.option.level}}</div>
            </div>
          </div>
        </div>

        </div>
    </div>
  </div>

  <!-- <div class="jumbotron">
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
  </div> -->

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
  font-size: 0.8rem;
  width:100%;
  /*padding-top: 5px;*/
}
.headimg{
  width: 44px;
  height: 44px;
}
.detailInfo {
 text-align: center;
}

</style>
