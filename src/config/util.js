const request = require('superagent');
const querystring = require('querystring');
const localMoment = require('momentjs');

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
    request.get('http://joywill.cc/admin/auth')
      .query({
        appid,
        code
      })
      .then((result) => {
        console.log('auth', result);
        const userid = result.body.userid;
        const accessToken = result.body.accessToken;
        resolve({
          userid,
          accessToken
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getUserInfo(userid, accessToken) {
  return new Promise((resolve, reject) => {
    request.get(`http://120.25.227.156:7000/api/base/users/${userid}`)
      // .withCredentials()
      .set('Authorization', `Bearer ${accessToken}`)
      .then((result) => {
        resolve(result.body.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getTaskList(accessToken) {
  return new Promise((resolve, reject) => {
    request.get('http://120.25.227.156:7000/api/base/tasks/')
      // .withCredentials()
      .set('Authorization', `Bearer ${accessToken}`)
      .then((result) => {
        resolve(result.body.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getRanks(accessToken) {
  return new Promise((resolve, reject) => {
    request.get('http://120.25.227.156:7000/api/base/ranks/')
      // .withCredentials()
      .set('Authorization', `Bearer ${accessToken}`)
      .then((result) => {
        resolve(result.body.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getLevel(exp) {
  const levelExp = [50, 100, 200, 350, 550, 800, 1100, 1450, 1850, 2300, 2800, 3350, 3950, 4600, 5300, 6050, 6850, 7700, 8600, 9550];
  const maxlevel = levelExp.length;
  for (const key in levelExp) {
    if (exp < levelExp[key]) return Number(key) + 1;
  }
  return maxlevel;
}

export default {
  getAuthorizeURL,
  storeUserInfo,
  auth,
  getUserInfo,
  getTaskList,
  getLevel,
  getRanks,
  localMoment,
};
