
<template>

</template>

<script>
import config from '../config/config';
import util from '../config/util';
import mockdata from '../../test/mock';
import * as types from '../vuex/mutation_types';

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
  computed: mapState({
    userid: state => state.userid,
    jsConfig: state => state.jsConfig,
    user: state => state.profile.user,
  }),
  methods: {
    ...mapActions([
      'auth',
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
    ]),
    async init(){
      const urlObj = url.parse(window.location.href,true);
      var code = urlObj.query.code;
      const sendUrl = window.location.href.split('#')[0];
      try{
        if(code){
          // this.$store.commit(types.FETCH_STH);
          // $.showPreloader('加载中...');
          if(process.env.NODE_ENV == 'production'){
            await this.auth({appid:config.appid_dev,code});
            await this.getJsConfig(sendUrl);
          }else{
            await this.authLocal({userid: config.secret.userid, accessToken: config.secret.accessToken});
          }

        wx.config(this.jsConfig);
        await this.getUserRecords();
        await this.getTip();
        await this.getNews();
        await this.getUserInfo(this.userid)
        await this.getRanks(1);
        await this.getUserLottery();
        await this.getUserCards();

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
        redirctUrl = util.getAuthorizeURL(config.appid_dev, config.server.midServer, 'wechat', 'snsapi_userinfo');
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

</style>
