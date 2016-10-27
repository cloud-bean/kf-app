const request = require('superagent');
// const querystring = require('querystring');
// const localMoment = require('momentjs');
import config from '../config/config';



export const auth = ({ dispatch }, appid, code) => {
  dispatch('GET_STH_BACKEND');
  return new Promise((resolve, reject) => {
    request.get(config.route.auth)
      .query({
        appid,
        code,
      })
      .then((result) => {
        console.log('auth', result);
        const userid = result.body.userid;
        const accessToken = result.body.accessToken;
        return dispatch('AUTH_CLIENT', userid, accessToken);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const authLocal = ({ dispatch }, userid, accessToken) => {
  dispatch('AUTH_CLIENT', userid, accessToken);
};

export const getUserInfo = ({ dispatch, state }, userid) => {
  dispatch('GET_STH_BACKEND');
  return new Promise((resolve, reject) => {
    request.get(`${config.route.base}/users/${userid}`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        dispatch('GOT_USER', result.body.data);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const  getTaskList = ({ dispatch, state }) => {
  dispatch('GET_STH_BACKEND');
  return new Promise((resolve, reject) => {
    request.get(`${config.route.base}/tasks/`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const tasks = result.body.data;
        const taskNotDone = tasks.filter((item) => {
          return (!item.isDone);
        });
        console.log(tasks);
        dispatch('TASK_NOT_DONE', taskNotDone.length);
        dispatch('GOT_TASKS', tasks);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getRanks = ({ dispatch, state }) => {
  dispatch('GET_STH_BACKEND');
  return new Promise((resolve, reject) => {
    request.get(`${config.route.base}/ranks`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const ranks = result.body.data;
        dispatch('GOT_RANK', ranks);
        ranks.some((item, index) => {
          if (item.userid === state.userid) {
            // console.log('item',item);
            dispatch('GOT_MY_RANK', item, (index + 1));
            resolve();
            return true;
          }
          return false;
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const friendLike = ({ dispatch, state }, user, index, ) => {
  if (user.isUpVoted) return;
  dispatch('LIKE_FRIEND',index - 1);
  return new Promise((resolve, reject) => {
    request.post(`${config.route.base}/upVotes`)
      .send({ userId: user.userid })
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        resolve(result.body.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
