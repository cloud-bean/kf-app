<template>
  <div class="login">
    <img :src="mockdata.user.profileImageURL" alt="" class="avatar"/>
    <h3>补充你的信息</h3>
    <!-- <div class="form-group">
      <label for="headimg">选择头像</label>
      <input type="file" name='headimg' class="form-control" placeholder="头像" v-model="headimg" accept="image/*"></input>
    </div> -->
<div class="form-group">
  <input type="text" name='displayName' class="form-control" placeholder="姓名" v-model="displayName"></input>
</div>
    <div class="form-group">
      <input type="text" name='phone' class="form-control" placeholder="手机号" v-model="phone"></input>
    </div>

    <button class="btn btn-info pull-right" v-on:click="signUp">完成</button>
  </div>
</template>

<script>
import config from '../config/config';
import mockdata from '../../test/mock';


export default {
  data() {
    return {
      displayName: '',
      phone: '',
      headimg: '',
      mockdata,
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
      const headimg = this.headimg;
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
h3 {
  color: #42b983;
}

.avatar {
  width: 128px;
  margin: 0 auto;
}

.info {
  background: yellow;
  width: 95%;
  padding: 0 10px;
  border: 1px solid black;
}
</style>
