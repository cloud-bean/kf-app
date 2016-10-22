<template>
  <!-- <div class="login"> -->
    <!-- <img :src="mockdata.user.profileImageURL" alt="" class="avatar"/> -->
    <header class="bar bar-nav">
  <h1 class='title'>补充你的信息</h1>
</header>
    <!-- <div class="form-group">
      <label for="headimg">选择头像</label>
      <input type="file" name='headimg' class="form-control" placeholder="头像" v-model="headimg" accept="image/*"></input>
    </div> -->
<!-- <div class="form-group">
  <input type="text" name='displayName' class="form-control" placeholder="姓名" v-model="displayName"></input>
</div>
    <div class="form-group">
      <input type="text" name='phone' class="form-control" placeholder="手机号" v-model="phone"></input>
    </div>

    <button class="btn btn-info pull-right" v-on:click="signUp">完成</button>
  </div> -->


  <div class="content">
    <div class="list-block">
      <ul>
        <!-- Text inputs -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">姓名</div>
              <div class="item-input">
                <input type="text" placeholder="Your name" v-model="displayName">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label">手机</div>
              <div class="item-input">
                <input type="phone" placeholder="Cell Phone" v-model="phone">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-block">
      <div class="row">
        <div class="col-50"><a  class="button button-big button-fill button-danger" v-on:click="cleanUp">重填</a></div>
        <div class="col-50"><a  class="button button-big button-fill button-success" v-on:click="signUp">提交</a></div>
      </div>
    </div>
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
      const displayName = this.displayName;
      // const headimg = this.headimg;
      const accessToken = localStorage.getItem('kf_accessToken');
      const userInfo = JSON.parse(localStorage.getItem('kf_userInfo'));
      const useroption = Object.assign(userInfo.option,{phone});
      const user = Object.assign(userInfo,useroption,displayName);
      this.$http.put(`${config.route.user}${user._id}`, user, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => {
        this.$router.go('/task');
      })
      .catch((err) => {
        console.log(err);
      })
    },
    cleanUp(){
      this.phone = '';
      this.displayName = '';
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
