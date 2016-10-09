const querystring = require('querystring');

function getAuthorizeURL(appid, redirect, state, scope) {
  const url = 'https://open.weixin.qq.com/connect/oauth2/authorize';
  const info = {
    appid,
    redirect_uri: redirect,
    response_type: 'code',
    scope: scope || 'snsapi_base',
    state: state || '',
  };

  return `${url}?${querystring.stringify(info)}#wechat_redirect`;
}

function storeUserInfo(accessToken, user) {
  localStorage.setItem('kf_accessToken', accessToken);
  localStorage.setItem('kf_user', JSON.stringify(user));
}

function auth(appid, code) {
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
}

function getUserInfo(userid, accessToken) {
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

export default {
  getAuthorizeURL,
  storeUserInfo,
  auth,
  getUserInfo,
};
