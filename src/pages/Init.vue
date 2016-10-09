
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
    let self = this;
    co(function * () {
      try {
        const query = wurl('?');

        if(localStorage.getItem('kf_accessToken')){
          self.$router.go('/auth?state=user');
        }
        else if(query && query.code){
          console.log('code');
          const res = yield self.auth(config.appid,query.code);
          console.log(res);
          localStorage.setItem('kf_accessToken', res.accessToken);
          const userInfo = yield self.getUserInfo(res.userid);
          console.log(userInfo);
          localStorage.setItem('kf_userInfo', JSON.stringify(userInfo));
          self.$router.go('/auth?state=user');
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
  },
  methods: {
    auth(appid, code) {
      return new Promise((resolve, reject) => {
        this.$http.get(`http://joywill.cc/admin/auth?appid=${appid}&code=${code}`)
        .then((result) => {
          console.log(result);
          const userid = result.userid;
          const accessToken = result.accessToken;
          resolve({ userid, accessToken });
        })
        .catch((err) => {
          reject(err);
        });
      });
    },

    getUserInfo(userid, accessToken) {
      return new Promise((resolve, reject) => {
        this.$http.get(`http://120.25.227.156:7000/api/base/users/${userid}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
        .then((result) => {
          console.log(result);
          resolve(result.data);
        })
        .catch((err) => {
          reject(err);
        });
      });
    }
  }
}
</script>
