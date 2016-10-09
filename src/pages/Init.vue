
<template>
loading....
</template>

<script>
import config from '../config/config';
import util from '../config/util';

const wurl = require('wurl');
const co = require('co');

export default {
  data() {
    return {
    };
  },

  created() {
    co(function * () {
      try {
        const query = wurl('?');

        if(localStorage.getItem('kf_accessToken')){
          this.$router.go('/auth?state=user');
        }
        else if(query && query.code){
          console.log('code');
          const res = yield util.auth(config.appid,query.code);
          console.log(res);
          localStorage.setItem('kf_accessToken', res.accessToken);
          const userInfo = yield util.getUserInfo(res.userid);
          console.log(userInfo);
          localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
          this.$router.go('/auth?state=user');
        }
        else {
          const redirctUrl = util.getAuthorizeURL(config.appid,'http://joywill.cc/', 'wechat', 'snsapi_userinfo');
          console.log(redirctUrl);
          window.location.href = redirctUrl;
        }
      }
      catch (err) {
        console.log(err);
      }
    });

    // if(!localStorage.getItem('kf_accessToken')){
    //   const redirctUrl = util.getAuthorizeURL(config.appid,'http://joywill.cc/admin', 'wechat', 'snsapi_userinfo');
    //   console.log(redirctUrl);
    //   window.location.href = redirctUrl;
    // }else{
    //   this.$router.go('/login?state=user');
    // }
  },
}
</script>
