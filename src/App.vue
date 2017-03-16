<template>

<div class="">
  <div v-if="login">
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

        <router-link  class="tab-item" active-class="active" to="/teacherOrderList" v-if="user.roleType=='teacher'">
          <span class="icon icon-gift"></span>
          <span class="tab-label">评分</span>
        </router-link> -->
        <mt-tabbar @click.native="handleClick" v-model="selected" fixed>
          <mt-tab-item id="主页">
              <i class="fa fa-user-circle-o" slot="icon" aria-hidden="true"></i>
              主页
          </mt-tab-item>
          <mt-tab-item id="任务">
            <i class="fa fa-calendar-check-o" slot="icon" aria-hidden="true"></i>
              任务
          </mt-tab-item>
          <mt-tab-item id="排行">
            <i class="fa fa-users" slot="icon" aria-hidden="true"></i>
              排行
          </mt-tab-item>
          <mt-tab-item id="评分">
            <i class="fa fa-pencil-square-o" slot="icon" aria-hidden="true"></i>
              评分
          </mt-tab-item>
        </mt-tabbar>
      </nav>
  </div>
  <div class="content pad-bottom">
      <router-view></router-view>
  </div>

  <transition name="fade">
  <div class="init" v-if="!login" >
     <div class="time">
       {{loginDate}}
    </div>
    <div  class="slogan">
      遇见你，真好
    </div>
    <div  class="logo">
      <img src="./assets/logoko.png" width="30%"></img>
    </div> 
  </div>
  </transition>

  <div class="mask opacity" v-if="loading">
    <div class="background">
      JOYBOX
    </div>
    <div class="spinner">
      <mt-spinner type="triple-bounce" color="#26a2ff" :size="40" ></mt-spinner>
      <!-- <p>加载中...</p> -->
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
const moment = require('momentjs');

 export default {
  //  store,
   data(){
     return {
       selected:'主页'
     }
   },
   computed:{
      ...mapState({
      login: state => state.login,
      user: state => state.profile.user,
      loading: state => state.loading,
    }),
    loginDate(){
      return moment().format('YYYY年MM月DD日');
    }

   },
   watch: {

   },
   methods:{
     handleClick(){
       switch (this.selected) {
         case '主页':
         this.$router.push('/profile')
         break;
         case '任务':
         this.$router.push('/task')
         break;
         case '排行':
         this.$router.push('/rank')
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
}
nav i{
  font-size: 1.5rem;
}
.pad-bottom{
  padding: 0;
  margin:0;
  padding-bottom: 4rem;

}

.spinner{
  margin:0 auto;
  margin-top: 0.5rem;
  width: 12rem;
  padding:0.8rem;
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
.init{
  height:100%;
  width:100%;
  position:fixed;
  _position:absolute;
  top:0;
  left:0;
  z-index:1000;
  text-align: center;
  background-color:#eee;
  padding: 12rem 5rem;
}
.mask{
  height:100%;
  width:100%;
  position:fixed;
  _position:absolute;
  top:0;
  left:0;
  z-index:999;
  text-align: center;
}
.opacity{background:rgba(255,255,255,.5); }
.background{
  text-align: center;
  width: 100%;
  font-size: 2rem;
  margin-top: 14rem;
  font-weight:700  ;
  color: #26a2ff;

}
.time{
  color:  @important-font;
  font-family:  微软雅黑;
  font-size: 1.2rem;

}
.slogan{
  color: #26a2ff;
  font-family: 幼圆;
  font-size: 2rem;
  margin-top: 1rem;
  font-weight:700  ;
}
.logo{
  margin-top: 16rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
