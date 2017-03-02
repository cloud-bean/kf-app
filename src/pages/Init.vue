
<template>
</template>

<script>
import config from '../config/config';
import util from '../config/util';
import mockdata from '../../test/mock';
import { auth, getUserInfo, authLocal, getJsConfig, getMyRecords, getTip, setLogin } from '../vuex/actions';
import {loader} from '../config/util';

const wurl = require('wurl');
const co = require('co');



export default {
  data() {
    return {
      mockdata,
    };
  },

  vuex: {
    getters: {
      loading: state => state.loading,
      userid: state => state.userid,
      user: state => state.user,
      jsConfig: state => state.jsConfig,
    },
    actions: {
      auth,
      getUserInfo,
      authLocal,
      getJsConfig,
      getMyRecords,
      getTip,
      setLogin,
    }
  },
  mounted(){

    let self = this;
    const query = wurl('?');
    const url = wurl();
    const sendUrl = url.split('#')[0];
    this.$nextTick(() => {
      co(function * (){
        try{
          if(query && query.code){
            $.showPreloader('加载中...');
            if(process.env.NODE_ENV == 'production'){
              yield self.auth(config.appid,query.code);
              yield self.getJsConfig(sendUrl);
            }else{
              self.authLocal(config.secret.userid, config.secret.accessToken)
            }
            wx.config(self.jsConfig);
            yield self.getMyRecords();
            yield self.getTip();
            yield self.getUserInfo(self.userid)
            .then((res) => {
              $.hidePreloader();
              if(self.user.option.phone){
                self.setLogin(true);
                self.$router.push('/profile');
              }else{
                self.$router.push('/signup');
              }
            })
            .catch(err => {
              console.log(err);
            })
          }else {

             let redirctUrl = config.route.testRedirect;
            // let redirctUrl = util.getAuthorizeURL(config.appidTest, config.server.testServer, 'wechat', 'snsapi_userinfo');
            if(process.env.NODE_ENV == 'production'){
               redirctUrl = util.getAuthorizeURL(config.appid, config.server.midServer, 'wechat', 'snsapi_userinfo');
            }
            window.location.href = redirctUrl;
          }
        }catch(e){
          console.log(e);
        }

      });

    });
  // if(localStorage.getItem('kf_accessToken')){
  //   self.$router.go('/task');
  // }





},
methods: {

},

}
</script>
