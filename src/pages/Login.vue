<template>
  <!-- <div class="logged" v-if="isLogged">
    <h3>{{ userData.displayName + userData.email }}</h3>
    <img class="avatar" v-bind:src="apiBaseUrl + userData.profileImageURL">
    <p>排名{{userData.option.order}}&nbsp;&nbsp;&nbsp;&nbsp;悦维币{{userData.option.token}}</p>
    <p>等级{{userData.option.level}} &nbsp;&nbsp;&nbsp;&nbsp;      {{userData.option.levelScore}} / {{userData.option.levelTarget}}</p>
    <button class="btn btn-default" v-on:click="logout">logout</button>
  </div>
  <div class="login" v-else="isLogged">
    <span class="info">用户名 t@t.com 或 t1@t.com, 密码都是 default</span>
    <input type="text" placeholder="username" v-model="username" placeholder="test@test.com or test1@test.com"></input>
    <input type="text" placeholder="password" v-model="password"></input>
    <button class="btn btn-default" v-on:click="login">login</button>
  </div> -->

  <div>
    <p>login page. in the route /auth</p>
    user: {{user.displayName}}
  <div>

  </div>
</template>

<script>
const wurl = require('wurl');
const co = require('co');

export default {
  data() {
    return {
      user: {},
    };
  },

  created() {
    console.log('created');
    co(function * () {
      try {
        const query = wurl('?')
        const state = query.state;
        if(state == 'wechat'){
          const res = yield this.auth(config.appid, query.code);
          const userinfo = yield this.getUserInfo(res.userid, res.accessToken);
          this.user = userinfo;
        }else if(state == 'user'){
          this.user = localStorage.getItem('kf_user');
        }
      } catch (err) {
        console.log(err);
      }
    });


  },

  methods: {
    auth(appid, code){
      return new Promise((resolve, reject) => {
        this.$http.get(`http://joywill.cc/admin/auth?appid=${config.appid}&code=${query.code}`)
        .then((result)=>{
          console.log(result);
          const userid = result.userid;
          const accessToken = result.accessToken;
          resolve({userid, accessToken});
        })
        .catch((err) => {
          reject(err)
        })
      })
    },
    getUserInfo(userid,accessToken){
      return new Promise((resolve, reject) => {
        this.$http.get(`http://120.25.227.156:7000/api/base/users/${userid}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${access_token}`,
            }
          })
        .then((result)=>{
          console.log(result);
          resolve(result.data);
        })
        .catch((err) => {
          reject(err)
        })
      })
    }



  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

.avatar {
  width: 128px;
  height: 128px;
  margin: 0 auto;
  display: inline-block;
}

.info {
  background: yellow;
  width: 95%;
  padding: 0 10px;
  border: 1px solid black;
}
</style>
