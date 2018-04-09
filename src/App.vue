<template>
<div class="">
  <div v-if="login&&user">
      <nav >
        <!-- <router-link  class="tab-item" active-class="active" to="/profile">
          <span class="icon icon-me"></span>
          <span class="tab-label">主页</span>
        </router-link>
        <router-link  class="tab-item" active-class="active" to="/task">
          <span class="icon icon-app"></span>
          <span class="tab-label">任务</span>
        </router-link>
        <router-link  class="tab-item" active-class="active" to="/rank">
          <span class="icon icon-friends"></span>
          <span class="tab-label">排行</span>
        </router-link>
        <router-link  class="tab-item" active-class="active" to="/cardBag">
          <span class="icon icon-gift"></span>
          <span class="tab-label">卡包</span>
        </router-link>

        <router-link  class="tab-item" active-class="active" to="/teacherOrderList" v-if="user.roleType=='teacher'">
          <span class="icon icon-gift"></span>
          <span class="tab-label">评分</span>
<<<<<<< HEAD
        </router-link> -->

        <mt-tabbar @click.native="handleClick" v-model="selected" fixed>
          <mt-tab-item id="任务">
              <i class="fa fa-calendar" slot="icon" aria-hidden="true"></i>
              任务
          </mt-tab-item>
          <mt-tab-item id="卡牌">
            <i class="fa fa-map" slot="icon" aria-hidden="true"></i>
              卡牌
          </mt-tab-item>
          <mt-tab-item id="集市">
            <i class="fa fa-bars" slot="icon" aria-hidden="true"></i>
              集市
          </mt-tab-item>
          <mt-tab-item id="动态">
            <i class="fa fa-wpexplorer" slot="icon" aria-hidden="true"></i>
              动态
          </mt-tab-item>
          <!-- <mt-tab-item id="战绩">
            <i class="fa fa-sitemap" slot="icon" aria-hidden="true"></i>
              战绩
          </mt-tab-item> -->
          <!-- <mt-tab-item id="注册">
            <i class="fa fa-sitemap" slot="icon" aria-hidden="true"></i>
              注册
          </mt-tab-item> -->
          <!-- <mt-tab-item id="冲顶">
            <i class="fa fa-trophy" slot="icon" aria-hidden="true"></i>
              冲顶
          </mt-tab-item> -->
           <!-- <mt-tab-item id="卡包" >
            <i class="fa fa-clone" slot="icon" aria-hidden="true"></i>
              卡包
          </mt-tab-item>  -->
          <mt-tab-item id="评分" v-if="user.roleType=='teacher'">
            <i class="fa fa-pencil-square-o" slot="icon" aria-hidden="true"></i>
              评分
          </mt-tab-item>
        </mt-tabbar>
      </nav>
  </div>
  <div class="content pad-bottom">
      <router-view></router-view>
  </div>

  <!-- <transition name="fade">
  <div class="init" v-if="!login" >
     <div class="time">
       {{loginDate}}
    </div>
    <div  class="slogan">
      遇见你，真好
    </div>
    <div class="logo">
          <mt-progress :value="progress" :bar-height="5"></mt-progress>
          <div>已加载{{progress}}%</div>
    </div>
  </div>
  </transition> -->

  <div class="mask opacity" v-if="loading">
      <!-- JoyBox -->
      <div class="spinner">
        <div class="" style="margin-bottom:1rem;font-size:1.2rem">
        悦盒 Joybox
        </div>
        <scale-loader :loading="loading" color="#fff"></scale-loader>
      </div>


  </div>

  <!-- <span class="tab-label"><a v-link="{ path: '/task'}" href="#">TASK</a></span> -->
</div>

</template>

 <script>
// import { navbar } from 'vue-strap'
// import store from './vuex/store';
// import config from '../config/config';
// import util from '../config/util';
//
// const wurl = require('wurl');
// const co = require('co');
//
import { mapState } from 'vuex';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

 export default {
  //  store,
   data(){
     return {
       selected:'我的'
     }
   },
   components:{
     ScaleLoader,
   },
   computed:{
      ...mapState({
      login: state => state.login,
      user: state => state.profile.user,
      loading: state => state.loading,
    }),
    // loginDate(){
    //   return moment().format('YYYY年MM月DD日');
    // }

   },
   watch: {

   },
   methods:{
     handleClick(){
       switch (this.selected) {
         case '任务':
         this.$router.push('/profile')
         break;
         case '集市':
         this.$router.push('/market')
         break;
         case '卡牌':
         this.$router.push('/cardBag')
         break;
         case '动态':
         this.$router.push('/activity')
         break;
         case '战绩':
         this.$router.push('/battleresault')
         break;
         case '注册':
         this.$router.push('/signup')
         break;
         case '评分':
         this.$router.push('/teacherOrderList')
         break;
         default:
       }
     }
   }
 }
</script>

<style lang="less" scoped>
@import './style/color.less';
nav{
  color:#cccccc;
  font-size: 0.7rem;
  text-align: center;
}
nav i{
  font-size: 1.5rem;
}
.pad-bottom{
  padding: 0;
  margin:0;
  padding-bottom: 4rem;
  height: 100%;


}

.spinner{
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin: auto;
height:5rem;
width:10rem;
padding: 1rem;
  // width: 12rem;
  // padding:0.8rem;
  /*background-color: white;*/
  /*color: #555555;*/
  /*font-size: 0.7rem;*/
  /*opacity: .8;*/
  /*border-radius: 10px;*/

}
/*.content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #eee;
}*/

.content{
  height: 100%;
}
nav{
  text-align: center;
}

.mask{
  position:fixed;
  _position:absolute;
  top:0;
  bottom: 0;
  right: 0;
  left:0;
  margin: auto;
  z-index:10;
  text-align: center;
  background:rgba(0,0,0,.8);
  color: #fff;

}
// .background{
//   position: fixed;
//   text-align: center;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   margin: auto;
//   // height:5rem;
//   // width: 10rem;
//   font-size: 2rem;
//   // margin-top: 14rem;
//   // font-weight:100  ;
//   color: #fff;
//
// }
// .time{
//   color:  @important-font;
//   font-family:  微软雅黑;
//   font-size: 1.2rem;
//
// }
// .slogan{
//   color: #26a2ff;
//   font-family: 幼圆;
//   font-size: 2rem;
//   margin-top: 1rem;
//   font-weight:700  ;
// }
// .logo{
//   margin-top: 5rem;
// }
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s
// }
// .fade-enter, .fade-leave-active {
//   opacity: 0
// }

</style>
