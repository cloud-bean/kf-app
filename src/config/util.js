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

export default {
  getAuthorizeURL,
  storeUserInfo,
};
