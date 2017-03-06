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
  <div class="mask opacity" v-if="loading">
    <div class="spinner">
      <mt-spinner type="triple-bounce" color="#26a2ff" :size="40" ></mt-spinner>
      <p>加载中...</p>
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
 export default {
  //  store,
   data(){
     return {
     }
   },
   computed: mapState({
     login: state => state.login,
     user: state => state.profile.user,
     loading: state => state.loading,
   }),
 }
</script>

<style scoped>

.pad-bottom{
  padding-bottom: 2.5rem;

}

.spinner{
  margin:0 auto;
  margin-top: 12rem;
  width: 12rem;
  padding:0.8rem;
  background-color: white;
  color: #555555;
  font-size: 0.7rem;
  /*opacity: .8;*/
  border-radius: 10px;

}
.mask{
  height:100%;
  width:100%;
  position:fixed;
  _position:absolute;
  top:0;
  z-index:1000;
  text-align: center;
}
.opacity{background:rgba(0,0,0,.5); }

</style>
