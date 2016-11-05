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
// 加载动画
export const loader = {
  show () {
    if ($('.ball-beat')[0]) {
      return
    }
    let modalContainer = document.body
    $(modalContainer).append('<div class="loader-inner ball-beat"><div></div><div></div><div></div></div>')
  },
  hide () {
    $('.ball-beat').remove()
  }
}

export default {
  getAuthorizeURL,
  // auth,
  // getUserInfo,
  // getTaskList,
  // getLevel,
  // getRanks,
  // localMoment,
  // friendLike,
};
