
<template>
loading....
</template>

<script>
import config from '../config/config';
import util from '../config/util';

const wurl = require('wurl');

export default {
  data() {
    return {
    };
  },

  created() {
    const query = wurl('?');
    if(query && query.code){
      console.log('code');
    }

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
