
<template>
</template>

<script>
import config from '../config/config';
import util from '../config/util';
import mockdata from '../../test/mock';
// import { auth, getUserInfo, authLocal, getJsConfig, getMyRecords, getTip, setLogin } from '../vuex/actions';
// import {loader} from '../config/util';
import { mapState, mapActions } from 'vuex';

const wurl = require('wurl');
const co = require('co');



export default {
  data() {
    return {
      mockdata,
    };
  },
  computed: mapState({
    loading: state => state.loading,
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
    ]),
    async init(){
      const query = wurl('?');
      const url = wurl();
      const sendUrl = url.split('#')[0];
      try{
        if(query && query.code){
          $.showPreloader('加载中...');
          if(process.env.NODE_ENV == 'production'){
            await this.auth({appid:config.appid,code:query.code});
            await this.getJsConfig(sendUrl);
        }else{
          await this.authLocal({userid: config.secret.userid, accessToken: config.secret.accessToken});
        }
        wx.config(this.jsConfig);
        await this.getUserRecords()
        await this.getTip();
        await this.getUserInfo(this.userid)

        $.hidePreloader();
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
