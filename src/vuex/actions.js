const request = require('superagent');
// const querystring = require('querystring');
// const localMoment = require('momentjs');
import config from '../config/config';
const wurl = require('wurl');
const bigServer = config.server.bigServer;
let midServer = config.server.midServer;


export const auth = ({ dispatch }, appid, code) => {
  return new Promise((resolve, reject) => {
    request.get(`${midServer}/admin/auth/`)
      .query({
        appid,
        code,
      })
      .then((result) => {
        console.log('auth', result);
        const userid = result.body.userid;
        const accessToken = result.body.accessToken;
        dispatch('AUTH_CLIENT', userid, accessToken);
        resolve();
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
  return new Promise((resolve, reject) => {
    request.get(`${bigServer}/users/${userid}`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        console.log('user',result.body.data);
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
    request.get(`${bigServer}/tasks/`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const tasks = result.body.data;
        const taskNotDone = tasks.filter((item) => {
          return (!item.isDone);
        });
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
    request.get(`${bigServer}/ranks`)
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

// export const getMyRank = ({ dispatch, state }) => {
//   dispatch('GET_STH_BACKEND');
//   return new Promise((resolve, reject) => {
//     request.get(`${config.route.base}/ranks/me`)
//       // .withCredentials()
//       .set('Authorization', `Bearer ${state.accessToken}`)
//       .then((result) => {
//         console.log(result);
//         const rank = result.body.data;
//         dispatch('GOT_MY_RANK', rank);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

export const friendLike = ({ dispatch, state }, user, index, ) => {
  if (user.isUpVoted) return;
  dispatch('LIKE_FRIEND',index - 1);
  return new Promise((resolve, reject) => {
    request.post(`${bigServer}/upVotes`)
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


export const signUp = ({ dispatch, state }, displayName, phone, slogan ) => {
  const user = state.user;
  const option = Object.assign({},user.option,{phone},{slogan});
  const newuser = Object.assign({},user,{option},{displayName});
  console.log(newuser);

  return new Promise((resolve, reject) => {
    request.put(`${bigServer}/users/${user._id}`)
      .send(newuser)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        dispatch('SIGNUP_USER',newuser);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const taskDetail = ({ dispatch, state }, index) => {
  const tasks = state.tasks;
  const current = tasks[index];
  dispatch('SET_ACTIVE_TASK', current);
};


export const leaveComment = ({ dispatch, state }, content, taskId) => {
  dispatch('GET_STH_BACKEND');
  const user = {
    displayName: state.user.displayName,
    profileImageURL: state.user.profileImageURL,
  };
  const comment = {
    content,
  };
  return new Promise((resolve, reject) => {
    request.post(`${bigServer}/tasks/${taskId}/commits`)
      .send(comment)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        dispatch('SET_TASK_COMMENT', result.data);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getComments = ({ dispatch, state }, taskId) => {
  dispatch('CLEAR_TASK_COMMENTS');
  return new Promise((resolve, reject) => {
    request.get(`${bigServer}/tasks/${taskId}/commits`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const comments = result.body.data;
        dispatch('GOT_TASK_COMMENTS', comments);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getJsConfig = ({ dispatch, state }, url) => {
  dispatch('GET_STH_BACKEND');

  return new Promise((resolve, reject) => {
    request.post(`${midServer}/admin/jssdk/`)
      .send({url})
      .then((result) => {
        console.log(result.body);
        dispatch('SET_JS_CONFIG', result.body);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// signUp() {
//   if(!this.$validation1.valid){
//     $.alert('请完整填写信息');
//     return;
//   }
//   const userInfo = JSON.parse(localStorage.getItem('kf_userInfo'));
//   const phone = this.phone;
//   const solgan = this.solgan;
//   const displayName = this.displayName;
//   // const headimg = this.headimg;
//   const accessToken = localStorage.getItem('kf_accessToken');
//   const userid = localStorage.getItem('kf_userid');
//   const useroption = Object.assign(userInfo.option,{phone},{solgan});
//   const user1 = Object.assign(userInfo, useroption);
//   const user = Object.assign(user1, {displayName});
//
//   this.$http.put(`${config.route.base}/users/${user._id}`, user, {
//     withCredentials: true,
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   })
//   .then((result) => {
//     util.getUserInfo(userid, accessToken)
//     .then((user)=>{
//       localStorage.setItem('kf_userInfo',JSON.stringify(user));
//       this.$router.go('/task');
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// },
