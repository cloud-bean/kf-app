<template>
    <aa></aa>
      <!-- Status bar overlay for full screen mode (PhoneGap) -->


            <div class="card">
              <div class="card-header">Rank</div>

              <div class="card-content">
                <div class="list-block media-list">
                  <ul>
                    <li class="item-content ">
                        <div class="rank">
                        </div>
                        <div class="item-media">
                          <!--<img src="{{user.headimgurl}}" width="34">-->
                        </div>
                        <div class="item-inner">
                          <div class="item-title-row">
                            <div class="item-title">{{user.nickname}}</div>
                          </div>
                          <div class="item-subtitle"> Keep:{{user.keepdays}} | 连击:{{user.cont_keepdays}}</div>
                        </div>
                        <div class="like">
                          <i class="fa fa-heart fa-lg"></i><br />
                          <!-- <span class="like_num">12333</span> -->
                        </div>
                    </li>


                  </ul>
                </div>
              </div>
            </div>



</template>

<script>
import Aa from '../components/Head';
export default {
  components:{Aa},
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      user: {
        nickname:'辛那克斯',
        keepdays:1,
        cont_keepdays:2,
        level:1,
        score:200,
        city:'xian',
        headimgurl:'http://cloudbean.qiniudn.com/hbg2-100x81-logo.png',
      },
    }
  },
};
</script>

<style scoped>
  .facebook-card {
    padding-bottom:10px;
    padding-top:10px;
  }
  .facebook-card .card-header {
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
  .facebook-card .facebook-avatar {
    float: left;
  }
  .facebook-card .facebook-name {
    margin-left: 54px;
    font-size: 18px;
    font-weight: 500;
  }
  .facebook-card .facebook-date {
    margin-left: 54px;
    font-size: 13px;
    color: #8e8e93;
  }
  .facebook-card .card-footer {
    background: #fafafa;
  }
  .facebook-card .card-footer a {
    color: #81848b;
    font-weight: 500;
  }
  .facebook-card .card-content img {
    display: block;
  }
  .facebook-card .card-content-inner {
    padding: 15px 10px;
  }
  .rank {
    text-align: center;
    font-size: 20px;
    margin-right: 20px;
  }
  .like {
    text-align: center;
    margin-right: 20px;
    color:red;
  }
  .like_num{
    text-align: center;
    font-size: 14px;
    color:#999999;
  }
  .detail {
    text-align: center;
  }
  .detail-title {
    width: 100%;
    font-size: 14px;
    color: #999999;
  }
  .detail-content {
    width: 100%;
    font-size: 14px;
  }
  .item-title{
    font-weight: lighter;
    font-size: 14px;
  }
</style>
