<template>
  <div class="blue-bg">
    <div >
      <div class="headimg">
          <img :src="user.profileImageURL" alt="" class="avatar"/>
        <p>
          <span class="name">{{user.displayName}}</span>
          <div class="item-subtitle"> {{user.option.slogan || 'Learning with joy, achieving with will.'}} </div>
        </p>
      </div>
    </div>
    <div class="row info">
      <div class="col-33">
        <div class="detailInfo">
          <div>经验</div>
          <div>
            {{user.option.exp}}
          </div>
        </div>
      </div>
      <div class="col-33">
        <div class="detailInfo">
          <div>悦币</div>
          <div>
            {{user.option.goldToken}}
          </div>
        </div>
      </div>
      <div class="col-33">
        <div class="detailInfo">
          <div>等级</div>
          <div >
            {{user.option.exp | level}}
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
// import Exp from './Expbar';
import util from '../config/util';
// const wx = require('weixin-js-sdk');

    export default{
      props:['user'],
      components:{
        // Exp
      },
      methods:{
        level(exp){
           const lvl = util.getLevel(exp);
           console.log(lvl);
           return lvl;
        },
        // share(){
        //   wx.onMenuShareTimeline({
        //     title: '哈哈', // 分享标题
        //     link: 'http://baidu.com', // 分享链接
        //     imgUrl: '../../static/background.jpg', // 分享图标
        //     success: function () {
        //       // 用户确认分享后执行的回调函数
        //       alert('already share');
        //     },
        //     cancel: function () {
        //       // 用户取消分享后执行的回调函数
        //     }
        //   });
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
  font-size: 0.8rem;
  padding: 0.7rem;
}
.detail {
  font-size: 0.5rem;
  /*padding-top: 5px;*/
}
/*.headimg{
  width: 44px;
  height: 44px;
}*/
.name{
  font-size: 1.2rem;
}
.headimg {
  padding-top: 1rem;
  width: 100%;
  text-align: center;
  line-height: 0.5rem;
}

.avatar {
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid white;
  border-radius:50%;
}
.blue-bg{
  /*font-size: 0.7rem;*/
  /*height: 0.8rem !important;*/
  color: #ffffff;
  background-color: #4FC1E9;
}
.pull-left{
  float:left;
  display: inline-block;
}
</style>
