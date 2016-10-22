<template>


  <nav class="bar bar-tab">
    <a class="tab-item" v-link="{ path: '/task'}" href="#">
      <span class="icon icon-app"></span>
      <span class="tab-label">任务</span>
    </a>
    <a class="tab-item" v-link="{ path: '/signup'}" href="#">
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

// import config from '../config/config';
// import util from '../config/util';
//
// const wurl = require('wurl');
// const co = require('co');
//
 export default {

//   data() {
//     return {
//     };
//   },
//
//   created() {
//
//     let self = this;
//     co(function * () {
//       try {
//         const query = wurl('?');
//
//         if(localStorage.getItem('kf_accessToken')){
//           self.$router.go('/profile');
//         }
//         else if(query && query.code){
//           console.log('code');
//           const res = yield self.auth(config.appid,query.code);
//           console.log('res',res);
//           localStorage.setItem('kf_accessToken', res.accessToken);
//           const userInfo = yield self.getUserInfo(res.userid, res.accessToken);
//           console.log('userInfo',userInfo);
//           if(userInfo.option.phone){
//             localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
//             self.$router.go('/profile');
//           }else{
//             localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
//             self.$router.go('/signup');
//           }
//
//         }
//         else {
//           const redirctUrl = util.getAuthorizeURL(config.appid,'http://joywill.cc/', 'wechat', 'snsapi_userinfo');
//           console.log(redirctUrl);
//           window.location.href = redirctUrl;
//         }
//       }
//       catch (err) {
//         console.log(err);
//       }
//     });
//   },
//   methods: {
//     auth(appid, code) {
//       return new Promise((resolve, reject) => {
//         this.$http.get(`${config.route.auth}?appid=${appid}&code=${code}`)
//         .then((result) => {
//           console.log(result);
//           const userid = result.body.userid;
//           const accessToken = result.body.accessToken;
//           resolve({ userid, accessToken });
//         })
//         .catch((err) => {
//           reject(err);
//         });
//       });
//     },
//
//     getUserInfo(userid, accessToken) {
//       return new Promise((resolve, reject) => {
//         this.$http.get(`${config.route.user}${userid}`,
//           {
//             withCredentials: true,
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//           })
//         .then((result) => {
//           console.log(result);
//           resolve(result.body.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//       });
//     }
//   }
 }
//
</script>

<style>



</style>
