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
//
// function auth(appid, code) {
//   return new Promise((resolve, reject) => {
//     request.get(config.route.auth)
//       .query({
//         appid,
//         code,
//       })
//       .then((result) => {
//         console.log('auth', result);
//         const userid = result.body.userid;
//         const accessToken = result.body.accessToken;
//         resolve({
//           userid,
//           accessToken,
//         });
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
//
// function getUserInfo(userid, accessToken) {
//   return new Promise((resolve, reject) => {
//     request.get(`${config.route.base}/users/${userid}`)
//       // .withCredentials()
//       .set('Authorization', `Bearer ${accessToken}`)
//       .then((result) => {
//         resolve(result.body.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
//
// function getTaskList(accessToken) {
//   return new Promise((resolve, reject) => {
//     request.get(`${config.route.base}/tasks/`)
//       // .withCredentials()
//       .set('Authorization', `Bearer ${accessToken}`)
//       .then((result) => {
//         resolve(result.body.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
//
// function getRanks(accessToken) {
//   return new Promise((resolve, reject) => {
//     request.get(`${config.route.base}/ranks`)
//       // .withCredentials()
//       .set('Authorization', `Bearer ${accessToken}`)
//       .then((result) => {
//         resolve(result.body.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
//
// function friendLike(friendId, accessToken) {
//   return new Promise((resolve, reject) => {
//     request.post(`${config.route.base}/upVotes`)
//       .send({ userId: friendId })
//       // .withCredentials()
//       .set('Authorization', `Bearer ${accessToken}`)
//       .then((result) => {
//         resolve(result.body.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
//
//
// function getLevel(exp) {
//   const levelExp = [50, 100, 200, 350, 550, 800, 1100, 1450, 1850, 2300, 2800, 3350, 3950, 4600, 5300, 6050, 6850, 7700, 8600, 9550];
//   const maxlevel = levelExp.length;
//   for (const key in levelExp) {
//     if (exp < levelExp[key]) return Number(key) + 1;
//   }
//   return maxlevel;
// }

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
