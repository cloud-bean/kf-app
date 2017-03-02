const querystring = require('querystring');
import config from './config';

function getAuthorizeURL(appid, redirect, state, scope) {
  const url = config.route.weixin;
  const info = {
    appid,
    redirect_uri: redirect,
    response_type: 'code',
    scope: scope || 'snsapi_base',
    state: state || '',
  };

  return `${url}?${querystring.stringify(info)}#wechat_redirect`;
}


export default {
  getAuthorizeURL,
};
