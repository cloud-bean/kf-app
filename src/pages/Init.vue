<template>
  <div class="init">
    <!-- <transition name="fade"> -->
    <div class="init" v-if="!login">
      <!-- <div class="time">
         {{loginDate}}
      </div> -->

      <div class="slogan">
        让学习上瘾


      </div>
      <transition name="fade">

        <div class="logo" v-if="showLogo">
          <img src="../assets/logo.jpg" alt="" style="width:6rem;border:2px solid #6F2DBD;border-radius: 5px;">

        </div>
      </transition>

      <!-- <div  class="logo">
         <i class="fa fa-th" aria-hidden="true" style="color:#6F2DBD"></i>JoyBox
      </div> -->
      <div class="" style="position:fixed;bottom:.5rem;color:#eee;">
        v0.7.20181007
      </div>
      <!-- <div  class="logo">
        <i class="fa fa-th" aria-hidden="true"></i> 悦盒
      </div> -->
      <!-- <mt-progress :value="progress" :bar-height="5"></mt-progress>
            <div>已加载{{progress}}%</div> -->
      <div class="spinner">
        <beat-loader :loading="true" color="#6F2DBD"></beat-loader>

        <!-- <mt-spinner style="margin:0 auto;" type="triple-bounce" color="#fff" :size="40"></mt-spinner> -->
      </div>

    </div>
    <!-- </transition> -->
  </div>

</template>

<script>
  import config from '../config/config';
  import util from '../config/util';
  import mockdata from '../../test/mock';
  import * as types from '../vuex/mutation_types';
  import logo from '../assets/logo.jpg';
  import BeatLoader from 'vue-spinner/src/BeatLoader.vue';

  const moment = require('moment');

  // import { auth, getUserInfo, authLocal, getJsConfig, getMyRecords, getTip, setLogin } from '../vuex/actions';
  // import {loader} from '../config/util';
  import {
    mapState,
    mapActions,
  } from 'vuex';

  const url = require('url');
  const co = require('co');
  const querystring = require('querystring');


  export default {
    data() {
      return {
        mockdata,
        showLogo: false,
      };
    },
    components: {
      BeatLoader,
    },
    computed: {
      ...mapState({
        userid: state => state.userid,
        jsConfig: state => state.jsConfig,
        user: state => state.profile.user,
        progress: state => state.progress,
        login: state => state.login,

      }),
      loginDate() {
        return moment().format('YYYY年MM月DD日');
      },
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
        'getKeepInfo',
      ]),
      configWx() {
        wx.onMenuShareTimeline({
          title: '我在用Joybox学习，你也来吧', // 分享标题
          link: 'https://joybox.classmaster.cn/#/intro', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: logo, // 分享图标
          success() {
            // 用户确认分享后执行的回调函数
          },
          cancel() {
            // 用户取消分享后执行的回调函数
          },
        });
      },
      async init() {
        const urlObj = url.parse(window.location.href, true);
        const code = urlObj.query.code;
        const sendUrl = window.location.href.split('#')[0];
        try {
          if (code) {
            // this.$store.commit(types.FETCH_STH);
            // $.showPreloader('加载中...');

            if (process.env.NODE_ENV === 'production') {
              await this.auth({
                appid: config.appid,
                code,
              });
              this.setProgress(20);
              await this.getJsConfig(sendUrl);
              this.setProgress(40);
            } else {
              await this.authL({
                appid: config.appid,
                openid: config.openid,
              });
              // await this.authLocal({userid: config.secret.userid, accessToken: config.secret.accessToken});
            }

            wx.config(this.jsConfig);
            this.configWx();
            this.showLogo = true;
            // await this.getUserRecords();
            await this.getKeepInfo();
            await this.getNews();
            this.setProgress(90);
            await this.getUserInfo(this.userid);
            this.setProgress(100);
            await this.getRanks(1);
            // this.setLogin(true);
            // this.$router.push('/profile');
            if (this.user.phone && this.user.qq) {
              this.setLogin(true);
              this.$router.push('/profile');
            } else {
              this.$router.push('/signup');
            }
          } else {
            let redirctUrl = config.route.testRedirect;
            if (process.env.NODE_ENV === 'production') {
              // eslint-disable-next-line max-len
              redirctUrl = util.getAuthorizeURL(config.appid,
                config.server.midServer, 'wechat', 'snsapi_userinfo');
            }
            window.location.href = redirctUrl;
          }
        } catch (err) {
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
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },

  };

</script>
<style scoped>
  /* .time{
  color:  @important-font;
  font-family:  微软雅黑;
  font-size: 1.2rem;

}*/
  .slogan {
    color: #888;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    font-size: 2rem;
    margin-top: 1rem;
    position: fixed;
    top: 8rem;
    left: 0;
    right: 0;
    margin: 0 0;
    /* font-weight:700  ; */
  }

  .eng-slogan {
    color: #aaa;
    font-size: 1.5rem;
    color: #6F2DBD;

  }

  .logo {

    position: fixed;
    right: 0;
    left: 0;
    margin: auto;
    bottom: 3rem;
    /* color:#6F2DBD; */
    /* border-radius: 10px; */
    /* border:3px solid #6F2DBD; */
  }

  .spinner {
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    bottom: 8rem;
  }

  .init {
    height: 100%;
    width: 100%;
    position: absolute;
    /* _position:absolute; */
    top: 0;
    left: 0;
    z-index: 999;
    text-align: center;
    /* background-image: url('../assets/index.jpg'); */
    /* background-size: contain; */
    background-color: #fff;
    /* padding: 0rem 8rem; */
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

</style>
