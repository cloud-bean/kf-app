<template>
  <div id="app">

    <!-- <nav class="navbar navbar-default navbar-fixed-top top-bar" role="navigation">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">JOYBOX</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                        <li class=""><a v-link="{ path: '/task'}" href="#">TASK</a></li>
                        <li class=""><a v-link="{ path: '/rank'}" href="#">RANK</a></li>
                      </ul>
                    </div>
                  </div>
                </nav> -->

                <navbar placement="top" type="default">
                  <!-- Brand as slot -->
                  <a slot="brand" href="/" title="Home" class="navbar-brand">JOY & WILL</a>

                  <!-- For right positioning use slot -->
                  <li slot="right">
                    <a v-link="{ path: '/task'}" href="#">TASK</a>
                    <a v-link="{ path: '/rank'}" href="#">RANK</a>
                    <a v-link="{ path: '/timeline'}" href="#">TIME</a>

                  </li>
                </navbar>

         <div class="container doucments">
           <router-view></router-view>
         </div>
    <footer class="foot">
      <div class="container">
        <p >Better habit makes better future</p>
      </div>
    </footer>

      </div>

</template>

 <script>
import { navbar } from 'vue-strap'

// import config from '../config/config';
// import util from '../config/util';
//
// const wurl = require('wurl');
// const co = require('co');
//
 export default {
   components: {
     navbar,
   }
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

.doucments{
  margin-top: 10px;
}
.foot {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  /* Set the fixed height of the footer here */
  height: 50px;
  background-color: #434a54;
  color: #37BC9B;
}

</style>
