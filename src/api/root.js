import config from '../config/config';
import service from './service';
const midServer = config.server.midServer;

export const auth = (appid, code) =>
  new Promise((resolve, reject) => {
    service
      .get(`${midServer}/admin/auth/`, {
        params: {
          appid,
          code,
        },
      })
      .then(result => {
        const userid = result.data.userid;
        const accessToken = result.data.accessToken;
        const unionid = result.data.unionid;
        resolve({ userid, accessToken, unionid });
      })
      .catch(err => {
        reject(err);
      });
  });

export const authL = (appid, openid) =>
  new Promise((resolve, reject) => {
    service
      .get(`${midServer}/admin/authLocal/`, {
        params: {
          appid,
          openid,
        },
      })
      .then(result => {
        const userid = result.data.userid;
        const accessToken = result.data.accessToken;
        const unionid = result.data.unionid;
        resolve({ userid, accessToken, unionid });
      })
      .catch(err => {
        reject(err);
      });
  });

export const getJsConfig = url =>
  new Promise((resolve, reject) => {
    service
      .post(`${midServer}/admin/jssdk/`, {
        url,
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
