<template>
  <div class="signup">
    <div class="Grid avatar-panel " v-if="avatarPanel">
      <img  class="Cell -3of12" v-for="avatar in memberAvatars" :key="avatar._id" :src="avatar.URL" @click="setAvatar(avatar.URL)" style="margin:0 auto;padding:5px;max-width: 6rem; max-height: 6rem;">
    </div>

    <div v-if="user.displayName">
      <header class="header">
        <mt-header title="更新信息"></mt-header>
        <div class="headimg" @click="showAvatarPanel()">
          <img :src="user.profileImageURL" alt="" class="avatar"/>
          <div style="font-size:.8rem;color:#ccc;">点击更换头像</div>
          <div class="name">{{displayName}}</div>
        </div>
      </header>
      <div class="field">
        <mt-field label="姓名" placeholder="请输入用户名" v-model="displayName"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="QQ号" placeholder="请输入您的QQ号" type="number" v-model="qq"></mt-field>
        <mt-field label="我的宣言" placeholder="learning with joy"  v-model="slogan"></mt-field>
        <div class="Grid">
          <div class="Cell -3of12" style="padding:10px;">所在学校</div>
          <select class="Cell -9of12" v-model="school">
            <option value="西工大附中">西工大附中</option>
            <option value="西安铁一中">西安铁一中</option>
            <option value="陕师大附中">陕师大附中</option>
            <option value="西安高新一中">西安高新一中</option>
            <option value="西安交大附中">西安交大附中</option>
            <option value="西安爱知中学">西安爱知中学</option>
            <option value="西北大学附中">西北大学附中</option>
            <option value="西电附中">西电附中</option>
            <option value="西安市第一中学">西安市第一中学</option>
            <option value="西安市第七十中学">西安市第七十中学</option>
            <option value="西安市第七十中学">其他学校</option>
          </select>
        </div>
        <mt-button style="margin-top:2rem; background-color: #cb47ca;" size="large" type="primary" @click="submit">提交</mt-button>
      </div>
    </div>

    <div v-if="!user.displayName">
      <div v-if="!hasSelected">
        <mt-button style="margin-top:2rem;" size="large" type="primary" @click="select('1')">已有QQ账号</mt-button>
        <mt-button style="margin-top:2rem;" size="large" type="primary" @click="select('2')">新注册账号</mt-button>
      </div>

      <div v-if="hasSelected">
        <div v-if="selected === '1'">
          <header class="header">
            <mt-header title="找回QQ账号"></mt-header>
          </header>
          <div class="field">
            <!--<div  style="margin: 10px;">-->
              <!--<mt-field label="QQ号" placeholder="请输入您的QQ号" type="tel" v-model="qq"></mt-field>-->
              <!--<mt-field label="密码" placeholder="密码" type="password" v-model="password"></mt-field>-->
            <!--</div>-->
            <!--<mt-button style="margin-top:2rem;" size="large" type="primary" @click="loginWithQQ">登录</mt-button>-->
            <!--<mt-button style="margin-top:2rem; background-color: #0ad311;" size="large" type="primary" @click="loginWithQQAndBindWechat">登录并绑定当前微信</mt-button>-->
          <!---->
            <div  style="margin: 5px; font-size: 18px;
                  padding: 5px; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
              <span>请联系悦维老师，提供如下信息：</span>
              <div style="color: red;">
                <p>&nbsp;&nbsp;1.先前注册的账号中填写的qq号</p>
                <p>&nbsp;&nbsp;2.本次新注册的用户名</p>
              </div>
            </div>
            <mt-button style="margin-top:2rem;" size="large" @click="select('2')">先注册一个新用户使用</mt-button>
          </div>
        </div>
        <div v-if="selected === '2'">
          <header class="header">
            <mt-header title="填写注册信息"></mt-header>
            <div class="headimg" @click="showAvatarPanel()">
              <img :src="user.profileImageURL" alt="" class="avatar"/>
              <div style="font-size:.8rem;color:#ccc;">点击更换头像</div>
              <div class="name">{{displayName}}</div>
            </div>
          </header>
          <div class="field">
            <mt-field label="姓名" placeholder="请输入用户名" v-model="displayName"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="QQ号" placeholder="请输入您的QQ号" type="number" v-model="qq"></mt-field>
            <mt-field label="我的宣言" placeholder="learning with joy"  v-model="slogan"></mt-field>
            <div class="Grid">
              <div class="Cell -3of12" style="padding:10px;">所在学校</div>
              <select class="Cell -9of12" v-model="school">
                <option value="西工大附中">西工大附中</option>
                <option value="西安铁一中">西安铁一中</option>
                <option value="陕师大附中">陕师大附中</option>
                <option value="西安高新一中">西安高新一中</option>
                <option value="西安交大附中">西安交大附中</option>
                <option value="西安爱知中学">西安爱知中学</option>
                <option value="西北大学附中">西北大学附中</option>
                <option value="西电附中">西电附中</option>
                <option value="西安市第一中学">西安市第一中学</option>
                <option value="西安市第七十中学">西安市第七十中学</option>
                <option value="西安市第七十中学">其他学校</option>
              </select>
            </div>
            <mt-button style="margin-top:2rem; background-color: #cb47ca;" size="large" type="primary" @click="submit">注册新账号</mt-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui';
  import Vue from 'vue';
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        displayName: '',
        phone: '',
        slogan: '',
        school: '',
        avatarPanel: false,
        initCourse: '',
        qq: '',
        selected: '0',
        hasSelected: false,
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.displayName = this.user.displayName;
        this.phone = this.user.phone;
        this.school = this.user.option.school || '西工大附中';
        this.slogan = this.user.option.slogan || 'Learning with Joy';
        this.qq = this.user.qq;
        this.getAllMemberAvatars();
        this.getFreeCourses();
      });
    },
    computed: mapState({
      user: state => state.profile.user,
      memberAvatars: state => state.memberAvatars,
      // freeCourses: state => state.course.freeCourses,
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
        const displayName = this.displayName;
        const phone = this.phone;
        const school = this.school;
        const slogan = this.slogan;
        const qq = this.qq;
        try {
          await this.signUp({ displayName, phone, slogan, school, qq });
        } catch (err) {
          console.log(err);
        }
        this.$router.push('/profile');
      },
      cleanUp() {
        this.phone = '';
        this.displayName = '';
      },
      showAvatarPanel() {
        this.avatarPanel = true;
      },
      select(tab) {
        this.hasSelected = true;
        this.selected = tab;
      },
      loginWithQQ() {
        // login and wait for return, if ok，转到profilePage
        // if wrong, wait or close.
      },
      loginWithQQAndBindWechat() {
        // login and wait for return, if ok，转到profilePage
        // if wrong, wait or close.
      },
    },
  };
</script>

<style scoped>
  .field {
    margin: 0 .5rem;
  }

  select {
    width: 100%;
    font-size: 1rem;
    padding: 0 1.4rem;
    color: #777;
  }

  h3 {
    color: #42b983;
  }

  .signup {
    position: relative;
    z-index: 10000;
    background-color: #fff;
    height: 100%;
  }

  .headimg {
    width: 100%;
    margin: 2rem auto;
    text-align: center;
    font-size: 1rem;
  }

  .label {
    width: auto !important;
  }

  .avatar {
    width: 5rem;
    height: 5rem;
    border: 3px solid #ccc;
    border-radius: 10px;
    /* box-shadow:0px 0px 5px #555555; */
  }

  .name {
    height: 0.7rem;
    font-size: .8rem;
    color: #888;
  }

  .info {
    background: yellow;
    width: 95%;
    padding: 0 10px;
    border: 1px solid black;
  }

  .submit {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  .avatar-panel {
    position: absolute;
    background-color: rgba(0, 0, 0, .8);
    z-index: 100;
  }
</style>
