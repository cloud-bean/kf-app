<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top top-bar" role="navigation">
                  <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">JOYBOX</a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                        <li class=""><a v-link="{ path: '/task'}" href="#">TASK</a></li>
                        <li class=""><a v-link="{ path: '/rank'}" href="#">RANK</a></li>
                        <li class=""><a v-link="{ path: '/signup'}" href="#">SIGNUP</a></li>

                        <!-- <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                          <ul class="dropdown-menu" role="menu">
                            <li class="dropdown-header">Setting</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li class="active"><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li class="disabled"><a href="#">One more separated link</a></li>
                          </ul>
                        </li> -->
                      </ul>
                      <!-- <form class="navbar-form navbar-right" role="search">
                        <div class="form-search search-only">
                          <i class="search-icon glyphicon glyphicon-search"></i>
                          <input type="text" class="form-control search-query">
                        </div>
                      </form> -->
                    </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                </nav>
      <!-- <div class="page page-current">

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



         </nav> -->
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
.doucments{
  margin-top: 60px;
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
