<template>
  <div class="logged" v-if="isLogged">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      apiBaseUrl: "http://120.25.227.156:7000/",
      authRoute:"oauth/token",
      userRoute:"api/base/users/",
      username: "t@t.com",
      password: "default",
      isLogged: false,
      credential: null,
      userData: null
    };
  },
    methods: {
        login() {
            this.$http.post(this.apiBaseUrl + this.authRoute, {
                    username:this.username,
                    password:this.password,
                    client_id: "kf-app",
                    client_secret: "prometheus",
                    grant_type: 'password',
            },{
                
            })
                .then((response) => {
                    if (response.data.access_token && response.data.user_id) {
                      this.isLogged = true;
                      this.credential = response.data;
                      // this.$http.headers.common['Authorization'] = 'bearer ' + response.data.access_token;
                      this.$http.get(this.apiBaseUrl + this.userRoute + response.data.user_id, {
                          withCredentials: true,
                          headers: {
                            Authorization: 'Bearer ' + response.data.access_token
                          }
                      }).then((result) => {
                          this.userData = result.data.data;
                      });
                    }
                })
                .catch((response) => {
                    console.log('err',response);
                });
        },
        logout() {
          this.credential = null;
          this.isLogged = false;
          this.userData = null;
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
