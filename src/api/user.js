import config from '../config/config';
import service from './service';
const bigServer = config.server.bigServer;

export const getUserInfo = userid =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/users/${userid}`)
      .then(result => {
        console.log(result);
        resolve(result.data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const signUp = (userid, userInfo) =>
  new Promise((resolve, reject) => {
    service
      .put(`${bigServer}/users/${userid}`)
      .send(userInfo)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
export const getUserRecords = () =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/records/me`)
      .then(result => {
        const myRecords = result.data.data;
        resolve(myRecords);
      })
      .catch(err => {
        reject(err);
      });
  });
