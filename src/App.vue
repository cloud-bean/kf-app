<template>

<div class="">
  <div v-if="login">
      <nav class="bar bar-tab">
        <router-link  class="tab-item" active-class="active" to="/profile">
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
        </router-link>
      </nav>
  </div>


  <div class="content pad-bottom">
      <router-view></router-view>
  </div>
  <!-- <span class="tab-label"><a v-link="{ path: '/task'}" href="#">TASK</a></span> -->
</div>

</template>

 <script>
// import { navbar } from 'vue-strap'
import store from './vuex/store';
// import config from '../config/config';
// import util from '../config/util';
//
// const wurl = require('wurl');
// const co = require('co');
//
 export default {
   store,
   data(){
     return {
       num:null,
     }
   },
   vuex: {
     getters: {
       login: state => state.login,
       user: state => state.user,
     }
   },
  //  events:{
  //    'tasknum': function (num) {
  //     // 事件回调内的 `this` 自动绑定到注册它的实例上
  //     console.log(num);
  //
  //     this.num=num;
  //   }
  // },
 }
//
</script>

<style>

.pad-bottom{
  padding-bottom: 2.5rem;
}
</style>
