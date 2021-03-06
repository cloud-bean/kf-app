import { service, serviceV2 } from './service';

export const getUserInfo = userid =>
  new Promise((resolve, reject) => {
    service
      .get(`/users/${userid}`)
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
  .put(`/users/${userid}`, userInfo)
  .then(result => {
    resolve(result.data);
  })
  .catch(err => {
    reject(err);
  });
});
export const updateUserInfo = (userid, userInfo) =>
new Promise((resolve, reject) => {
  service
  .put(`/users/${userid}`, userInfo)
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
      .get('/records/me')
      .then(result => {
        const myRecords = result.data.data;
        resolve(myRecords);
      })
      .catch(err => {
        reject(err);
      });
  });
export const getKeepInfo = () =>
  new Promise((resolve, reject) => {
    serviceV2
      .get('/keep')
      .then(result => {
        const keepInfo = result.data.data;
        console.log('1');
        resolve(keepInfo);
      })
      .catch(err => {
        reject(err);
      });
  });
export const setMemberAvatar = (id, data) => service.put(`/users/${id}/change/avatar`, data);
export const getAllMemberAvatars = () => service.get('/imageGallerys?name=avatarForMember');
