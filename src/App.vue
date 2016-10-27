<template>


  <nav class="bar bar-tab">
    <a class="tab-item" v-link="{ path: '/task', activeClass: 'active', exact:true}" href="#">
      <span class="icon icon-app"></span>
      <span class="tab-label">任务</span>
      <span class="badge" v-if="num")>{{num}}</span>
    </a>
    <a class="tab-item" v-link="{ path: '/rank', activeClass: 'active', exact:true}" href="#">
      <span class="icon icon-friends"></span>
      <span class="tab-label">排行</span>
    </a>
    <!-- <a class="tab-item" href="#">
      <span class="icon icon-star"></span>
      <span class="tab-label">收藏</span>
    </a>
    <a class="tab-item"  href="#">
      <span class="icon icon-settings"></span>
      <span class="tab-label">TASK</span>
    </a> -->
  </nav>
  <div class="content">
    <router-view></router-view>
    <!-- 这里是页面内容区 -->
  </div>
  <!-- <span class="tab-label"><a v-link="{ path: '/task'}" href="#">TASK</a></span> -->

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
   events:{
     'tasknum': function (num) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      console.log(num);

      this.num=num;
    }
  },
 }
//
</script>

<style>



</style>
