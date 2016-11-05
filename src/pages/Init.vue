
<template>
  <!-- <spinner v-ref:loading fixed="true" size="md" fixed text="Loading"></spinner> -->
</template>

<script>
import config from '../config/config';
import util from '../config/util';
import { spinner } from 'vue-strap';
import mockdata from '../../test/mock';
import { auth, getUserInfo, authLocal } from '../vuex/actions';
import {loader} from '../config/util'

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
  vuex: {
    getters: {
      loading: state => state.loading,
      userid: state => state.userid,
      user: state => state.user,
    },
    actions: {
      auth,
      getUserInfo,
      authLocal,
    }
  },
  ready(){
    $.showPreloader('加载中...');
    // this.$refs.loading.show();
    let self = this;
    const query = wurl('?');

    co(function * (){
      try{
        if(query && query.code){
          let secret = config.secret;
          if(process.env.NODE_ENV == 'production'){
            yield self.auth(config.appid,query.code);
          }else{
            self.authLocal(secret.userid, secret.accessToken)
          }
          // localStorage.setItem('kf_accessToken', secret.accessToken);
          // localStorage.setItem('kf_userid', secret.userid);
          yield self.getUserInfo(self.userid)
          .then((res) => {
            if(self.user.option.phone){
              // localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
              self.$router.go('/task');
            }else{
              // localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
              self.$router.go('/signup');
            }
          })
          .catch(err => {
            console.log(err);
          })
        }else {
          let redirctUrl = config.route.testRedirect;
          if(process.env.NODE_ENV == 'production'){
            redirctUrl = util.getAuthorizeURL(config.appid,'http://joywill.cc/', 'wechat', 'snsapi_userinfo');
          }
          window.location.href = redirctUrl;
        }
      }catch(e){
        console.log(e);
      }

    });
    // if(localStorage.getItem('kf_accessToken')){
    //   self.$router.go('/task');
    // }





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
  },

}
</script>
