<template>
  <!-- <div class="login"> -->
    <!-- <img :src="mockdata.user.profileImageURL" alt="" class="avatar"/> -->
    <div class="signup">
      <div class="Grid avatar-panel " v-if="avatarPanel">
        <img  class="Cell -3of12" v-for="avatar in memberAvatars" :key="avatar._id" :src="avatar.URL" @click="setAvatar(avatar.URL)" style="margin:0 auto;padding:5px;max-width: 6rem; max-height: 6rem;">
      </div>


  <header class="header">

    <mt-header title="修改个人信息"></mt-header>
    <div class="headimg" @click="showAvatarPanel()">
          <img :src="user.profileImageURL" alt="" class="avatar" />
          <div style="font-size:.8rem;color:#ccc;">点击更换头像</div>
          <div class="name">{{user.displayName}}</div>
          <br>
          <!-- <div class="name">{{user.option.phone}}</div> -->
    </div>
  </header>
  <div class="field">
    <mt-field label="江湖人称" placeholder="你的名号"  v-model="displayName"></mt-field>
    <div class="Grid">
      <div class="Cell -3of12" style="padding:10px;">英雄出处</div>
      <select class="Cell -9of12"  v-model="school">
        <option value ="西工大附中">西工大附中</option>
        <option value ="西安铁一中">西安铁一中</option>
        <option value ="陕师大附中">陕师大附中</option>
        <option value ="西安高新一中">西安高新一中</option>
        <option value ="西安交大附中">西安交大附中</option>
        <option value ="西安爱知中学">西安爱知中学</option>
        <option value ="西北大学附中">西北大学附中</option>
        <option value ="西电附中">西电附中</option>
        <option value ="西安市第一中学">西安市第一中学</option>
        <option value ="西安市第七十中学">西安市第七十中学</option>
        <option value ="其他学校">客服姐姐帮我选~</option>
      </select>
    </div>
    <mt-field label="出场BGM" placeholder="我的宣言"  v-model="slogan"></mt-field>
    <mt-button style="margin-top:2rem;" size="large" type="primary" @click="submit">保存信息</mt-button>
  </div>
</div>

</template>

<script>
import config from '../config/config';
import util from '../config/util';
import { mapState, mapActions } from 'vuex';


export default {
  data() {
    return {
      displayName: '',
      phone: '',
      slogan: 'Learning with Joy',
      school:'西工大附中',
      avatarPanel:false,
      initCourse:'',
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getAllMemberAvatars();
      this.getFreeCourses();
      this.displayName = this.user.displayName;
    });
  },
  // vuex: {
  //   actions: {
  //     signUp,
  //     setLogin,
  //   },
  //   getters: {
  //     user: state => state.user,
  //   }
  // },
  computed: mapState({
    user: state => state.profile.user,
    memberAvatars: state => state.memberAvatars,
    freeCourses: state => state.course.freeCourses,
  }),
  methods: {
    ...mapActions([
      'signUp',
      'setLogin',
      'getAllMemberAvatars',
      'setMemberAvatar',
      'getFreeCourses',
      'bindFreeCourse',
    ]),
    setAvatar(profileImageURL) {
        this.setMemberAvatar({
          id: this.user._id,
          data: {
            profileImageURL,
          },
        });
      this.avatarPanel = false;
      this.user.profileImageURL = profileImageURL;
    },
    async submit() {

      // if(!this.$validation1.valid){
      //   $.alert('请完整填写信息');
      //   return;
      // }
      const displayName = this.displayName;
      const phone = this.phone;
      const school = this.school;
      const slogan = this.slogan;
      try {
        await this.signUp({displayName, phone, slogan,school});
        // await this.bindFreeCourse(this.initCourse)
      } catch (err) {
        console.log(err);
      }
      this.$router.push('/profile');
    },
    cleanUp(){
      this.phone = '';
      this.displayName = '';
    },
    showAvatarPanel(){
      console.log('lll');
      this.avatarPanel = true;
    },

  }
}
</script>

<style scoped>
.field{
  margin:0 .5rem;
}
select{
  width: 100%;
  font-size: 1rem;
  padding:0 1.4rem;
  color: #777;
}
h3 {
  color: #42b983;
}
.signup{
  position:relative;
  z-index: 10000;
  background-color:#fff;
  height:100%;
}

.headimg {
  width: 100%;
  margin: 2rem auto;
  text-align: center;
  font-size: 1rem;
}
.label{
  width: auto !important;
}

.avatar {
   width: 5rem;
  height: 5rem;
  border: 3px solid #ccc;
  border-radius:10px;
  /* box-shadow:0px 0px 5px #555555; */
}
.name{
  height: 0.7rem;
  font-size:.8rem;
  color:#888;
}
.info {
  background: yellow;
  width: 95%;
  padding: 0 10px;
  border: 1px solid black;
}
.submit{
  margin-top:2rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
}
.avatar-panel{
  position: absolute;
  background-color: rgba(0,0,0,.8);
  z-index: 100;
}
</style>
