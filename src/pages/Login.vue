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
  <div>{{user}}<div>

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
    this.user = localStorage.getItem('kf_userInfo');
  },

  methods: {




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
