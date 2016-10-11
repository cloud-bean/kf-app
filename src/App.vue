<template>
  <div id="app" class="page-group">
      <div class="page page-current">

        <nav class="bar bar-tab">
           <a v-link="{ path: '/profile'}" class="tab-item active" href="#">
             <span class="icon icon-home"></span>
             <span class="tab-label">
               Profile
             </span>
           </a>
           <a v-link="{ path: '/task'}" class="tab-item" href="#">
             <span class="icon icon-me"></span>
             <span class="tab-label">
              Task
             </span>
             <span class="badge">2</span>
           </a>
           <a v-link="{ path: '/rank'}" class="tab-item" href="#">
             <span class="icon icon-star"></span>
             <span class="tab-label">
               Rank
             </span>
           </a>
           <a class="tab-item" href="#">
             <span class="icon icon-settings"></span>
             <span class="tab-label">设置</span>
           </a>



         </nav>
         <div class="content">
           <router-view></router-view>
         </div>
      </div>
  </div>

</template>

 <script>
// import config from '../config/config';
// import util from '../config/util';
//
// const wurl = require('wurl');
// const co = require('co');
//
// export default {
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
// }
//
</script>

<style>
/*html {
  height: 100%;
}

body {
  display: flex;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: 100px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}*/

</style>
