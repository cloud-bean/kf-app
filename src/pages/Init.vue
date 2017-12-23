
<template>
  <div class="">
    <transition name="fade">
    <div class="init" v-if="!login" >
       <div class="time">
         {{loginDate}}
      </div>
      <div  class="slogan">
        遇见你，真好
      </div>
      <div class="logo">
            <mt-progress :value="progress" :bar-height="5"></mt-progress>
            <div>已加载{{progress}}%</div>
      </div>
    </div>
    </transition>
  </div>

</template>

<script>
import config from '../config/config';
import util from '../config/util';
import mockdata from '../../test/mock';
import * as types from '../vuex/mutation_types';
import logo from '../assets/logo.jpg';
const moment = require('moment');

// import { auth, getUserInfo, authLocal, getJsConfig, getMyRecords, getTip, setLogin } from '../vuex/actions';
// import {loader} from '../config/util';
import { mapState, mapActions } from 'vuex';

const url = require('url');
const co = require('co');
const querystring = require('querystring');


export default {
  data() {
    return {
      mockdata,
    };
  },
  computed: {
    ...mapState({
      userid: state => state.userid,
      jsConfig: state => state.jsConfig,
      user: state => state.profile.user,
      progress: state => state.progress,
      login: state => state.login,

    }),
    loginDate(){
      return moment().format('YYYY年MM月DD日');
    }
  },
  methods: {
    ...mapActions([
      'auth',
      'authL',
      'getUserInfo',
      'authLocal',
      'getJsConfig',
      'getUserRecords',
      'getTip',
      'setLogin',
      'setUserLevel',
      'getNews',
      'getRanks',
      'getUserLottery',
      'getUserCards',
      'setProgress',
    ]),
    configWx(){
      wx.onMenuShareTimeline({
        title: '我在悦维用Joybox学习，你也来吧', // 分享标题
        link: 'joywill.cc/#/intro', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: logo, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
    },
    async init(){
      const urlObj = url.parse(window.location.href,true);
      var code = urlObj.query.code;
      const sendUrl = window.location.href.split('#')[0];
      try{
        if(code){
          // this.$store.commit(types.FETCH_STH);
          // $.showPreloader('加载中...');
          if(process.env.NODE_ENV == 'production'){
            await this.auth({appid:config.appid,code});
            this.setProgress(20);
            await this.getJsConfig(sendUrl);
            this.setProgress(40);
          }else{
            await this.authL({appid:config.appid,openid:config.openid});
            // await this.authLocal({userid: config.secret.userid, accessToken: config.secret.accessToken});
          }

        wx.config(this.jsConfig);
        this.configWx();
        this.setProgress(60);

        // await this.getUserRecords();
        await this.getNews();
        this.setProgress(90);
        await this.getUserInfo(this.userid);
        this.setProgress(100);
        // await this.getRanks(1);
        console.log('user',this.user);
        if(this.user.option.phone){
          this.setLogin(true);
          this.$router.push('/profile');
        }else{
          this.$router.push('/signup');
        }
      }
    else {

      let redirctUrl = config.route.testRedirect;
      // let redirctUrl = util.getAuthorizeURL(config.appidTest, config.server.testServer, 'wechat', 'snsapi_userinfo');
      if(process.env.NODE_ENV == 'production'){
        redirctUrl = util.getAuthorizeURL(config.appid, config.server.midServer, 'wechat', 'snsapi_userinfo');
      }
      window.location.href = redirctUrl;
    }
  } catch(err) {
    console.log(err);
  }
},

  },
  //
  // vuex: {
  //   getters: {
  //     loading: state => state.loading,
  //     userid: state => state.userid,
  //     user: state => state.user,
  //     jsConfig: state => state.jsConfig,
  //   },
  //   actions: {
  //     auth,
  //     getUserInfo,
  //     authLocal,
  //     getJsConfig,
  //     getMyRecords,
  //     getTip,
  //     setLogin,
  //   }
  // },
  mounted(){
    this.$nextTick(() => {
      this.init();
    });
},

}
</script>
<style scoped>
.time{
  color:  @important-font;
  font-family:  微软雅黑;
  font-size: 1.2rem;

}
.slogan{
  color: #26a2ff;
  font-family: 幼圆;
  font-size: 2rem;
  margin-top: 1rem;
  font-weight:700  ;
}
.logo{
  margin-top: 5rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.init{
  height:100%;
  width:100%;
  position:fixed;
  _position:absolute;
  top:0;
  left:0;
  z-index:999;
  text-align: center;
  background-color:#eee;
  padding: 10rem 5rem;
}
</style>
