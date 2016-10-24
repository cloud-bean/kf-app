
<template>
  <spinner v-ref:loading fixed="true" size="md" fixed text="Loading"></spinner>
</template>

<script>
import config from '../config/config';
import util from '../config/util';
import { spinner } from 'vue-strap';
import mockdata from '../../test/mock';

const wurl = require('wurl');
const co = require('co');

export default {
  data() {
    return {
      mockdata,
    };
  },
  components: {
    spinner,
  },
  created() {


  },
  ready(){
    this.$refs.loading.show();
    let self = this;
    co(function * () {
      try {
        const query = wurl('?');

        // if(localStorage.getItem('kf_accessToken')){
        //   self.$router.go('/task');
        // }
        if(query && query.code){
          let secret = config.secret;
          if(process.env.NODE_ENV == 'production'){
            secret = yield util.auth(config.appid,query.code);
          }
          localStorage.setItem('kf_accessToken', secret.accessToken);
          localStorage.setItem('kf_userid', secret.userid);
          const userInfo = yield util.getUserInfo(secret.userid, secret.accessToken);
          console.log('userInfo',userInfo);
          if(userInfo.option.phone){
            localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
            self.$router.go('/task');
          }else{
            localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
            self.$router.go('/signup');
          }

        }
        else {
          let redirctUrl = config.route.testRedirect;
          console.log(process.env);
          if(process.env.NODE_ENV == 'production'){
              redirctUrl = util.getAuthorizeURL(config.appid,'http://joywill.cc/', 'wechat', 'snsapi_userinfo');
          }
          window.location.href = redirctUrl;
        }
      }
      catch (err) {
        console.log(err);
      }
    });
  },
  methods: {
    // auth(appid, code) {
    //   return new Promise((resolve, reject) => {
    //     this.$http.get(`${config.route.auth}?appid=${appid}&code=${code}`)
    //     .then((result) => {
    //       console.log(result);
    //       const userid = result.body.userid;
    //       const accessToken = result.body.accessToken;
    //       resolve({ userid, accessToken });
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    //   });
    // },
    //
    // getUserInfo(userid, accessToken) {
    //   return new Promise((resolve, reject) => {
    //     this.$http.get(`${config.route.user}${userid}`,
    //       {
    //         withCredentials: true,
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       })
    //     .then((result) => {
    //       console.log(result);
    //       resolve(result.body.data);
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    //   });
    // }
  }
}
</script>
