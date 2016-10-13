<template>
  <div class="login">
    <h1>补充你的信息</h1>
    <input type="text" class="form-control" placeholder="姓名" v-model="displayName"></input>
    <input type="text" class="form-control" placeholder="手机号" v-model="phone"></input>
    <button class="btn btn-info" v-on:click="signUp">submit</button>
  </div>
</template>

<script>
import config from '../config/config';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  methods: {
    signUp() {
      const phone = this.phone;
      const name = this.displayName;
      const accessToken = localStorage.getItem('kf_accessToken');
      const userInfo = JSON.parse(localStorage.getItem('kf_userInfo'));
      const option = Object.assign(userInfo.option,{phone});
      const user = Object.assign(userInfo,option);
      this.$http.put(`${config.route.user}${user._id}`, user, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => {
        console.log(result);
        //localStorage.setItem('kf_userInfo',result.body);
        this.$router.go('/profile');
      })
      .catch((err) => {
        console.log(err);
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
