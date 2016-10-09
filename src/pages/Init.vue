
<template>
loading....
</template>

<script>
import config from '../config/config';
import util from '../config/util';

export default {
  data() {
    return {
    };
  },

  created() {
    if(!localStorage.getItem('kf_accessToken')){
      const redirctUrl = util.getAuthorizeURL(config.appid,'http://joywill.cc/auth', 'wechat', 'snsapi_userinfo');
      console.log(redirctUrl);
      window.location.href = redirctUrl;
    }else{
      this.$router.go('/auth?state=user');
    }
  },
}
</script>
