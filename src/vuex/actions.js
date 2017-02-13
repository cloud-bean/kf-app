const request = require('superagent');
// const querystring = require('querystring');
// const localMoment = require('momentjs');
import config from '../config/config';
const wurl = require('wurl');
const bigServer = config.server.bigServer;
let midServer = config.server.midServer;
const wx = require('weixin-js-sdk');


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

export const  getTaskList = ({ dispatch, state }, page) => {
  dispatch('GET_STH_BACKEND');
  return new Promise((resolve, reject) => {
    request.get(`${bigServer}/tasks?page=${page}&limit=${config.task.limit}`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const tasks = result.body.data.tasks;
        const taskinfo = {};
        taskinfo.totalCount = result.body.data.totalCount;
        request.get(`${bigServer}/records/doneCount`)
        .set('Authorization', `Bearer ${state.accessToken}`)
        .then((result) => {
          taskinfo.totalDone = result.body.data.doneCount;
          dispatch('SET_TASK_INFO', taskinfo);
        });

        // const taskNotDone = tasks.filter((item) => {
        //   return (!item.isDone);
        // });
        // dispatch('TASK_NOT_DONE', taskNotDone.length);
        dispatch('GOT_TASKS', tasks);
        resolve(tasks);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getRanks = ({ dispatch, state },page) => {
  dispatch('GET_STH_BACKEND');
  return new Promise((resolve, reject) => {
    request.get(`${bigServer}/ranks?page=${page}&limit=${config.rank.limit}`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const ranks = result.body.data;
        dispatch('GOT_RANK', ranks);
        resolve(ranks);
        // ranks.some((item, index) => {
        //   if (item.userid === state.userid) {
        //     // console.log('item',item);
        //     dispatch('GOT_MY_RANK', item, (index + 1));
        //     resolve();
        //     return true;
        //   }
        //   return false;
        // });
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


export const getOrders = ({ dispatch, state }) => {
  dispatch('GET_STH_BACKEND');
  return new Promise(
    (resolve, reject) => {
      request
      .get(`${bigServer}/orders`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const orders = result.body.data;
        dispatch('SET_ORDERS', orders);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const orderDetail = ({ dispatch, state }, index) => {
  const orders = state.orders;
  const current = orders[index];
  dispatch('SET_ACTIVE_ORDER', current);
};

export const setLogin = ({ dispatch, state }, login) => {
  dispatch('SET_LOGIN', login);
};

export const leaveComment = ({ dispatch, state }, content, taskId) => {
  dispatch('GET_STH_BACKEND');
  // const user = {
  //   displayName: state.user.displayName,
  //   profileImageURL: state.user.profileImageURL,
  // };
  const comment = {
    content,
  };
  return new Promise((resolve, reject) => {
    request.post(`${bigServer}/tasks/${taskId}/commits`)
      .send(comment)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        console.log(result.body.data);
        dispatch('SET_TASK_COMMENT', result.body.data);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setScore = ({ dispatch, state }, score, comments, orderId) => {
  dispatch('GET_STH_BACKEND');
  const data = {
    score,
    comments,
  }
  return new Promise((resolve, reject) => {
    request.post(`${bigServer}/orders/${orderId}/record`)
      .send(data)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
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

export const getMyRecords = ({ dispatch, state }) => {
  return new Promise((resolve, reject) => {
    request.get(`${bigServer}/records/me`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const myRecords = result.body.data;
        dispatch('SET_MY_RECORDS', myRecords);
        resolve(myRecords);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTip = ({ dispatch, state }) => {
  return new Promise((resolve, reject) => {
    request.get(`${bigServer}/documents?name=tip`)
      // .withCredentials()
      .set('Authorization', `Bearer ${state.accessToken}`)
      .then((result) => {
        const tip = result.body.data[0];
        dispatch('SET_TIP', tip);
        resolve(tip);
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

// const chooseImage = () => {
//   return new Promise((resolve, reject) => {
//     wx.chooseImage({
//       count: 1, // 默认9
//       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//       success: function (res) {
//         const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//         resolve(localIds);
//       }
//     });
//   });
// }
const chooseUploadImage = () => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        wx.uploadImage({
          localId: '' + localIds[0],
          isShowProgressTips: 1,
          success: function(res) {
            const serverId = res.serverId;
            resolve(serverId);
          }
        });
      }
    });
  });
}

export const submitOrder = ({dispatch, state}, taskId) => {
  return new Promise((resolve, reject) => {
    chooseUploadImage()
    .then((serverId) => {
      const data = {
        task:taskId,
        file:{
          filename:serverId,
          URL:serverId,
          type:0,
          created:Date.now(),
        }
      };
      request.post(`${bigServer}/orders`)
        .send(data)
        // .withCredentials()
        .set('Authorization', `Bearer ${state.accessToken}`)
        .then((result) => {
          resolve(result.body.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
    .catch((err) => {
      reject(err);
    });

  });
};

// export const takePhotoSubmitOrder = ({ dispatch, state }, taskId) => {
//   chooseUploadImage()
//   .then((serverId) => {
//     const data = {
//       task:taskId,
//       file:{
//         filename:serverId,
//         URL:serverId,
//         type:0,
//         created:Date.now(),
//       }
//     };
//     return submitOrder(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }

// wx.chooseImage({
//   count: 1, // 默认9
//   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//   success: function (res) {
//     console.log('res',res);
//     const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//     wx.uploadImage({
//       localId: '' + localIds[0],
//       isShowProgressTips: 1,
//       success: function(res) {
//         const serverId = res.serverId;
//         that.postOrder(serverId)
//         .then(()=>{
//           that.leaveComment('我上传了作业',that.task._id,)
//           .then(()=>{
//             $.toast("提交作业成功");
//           })
//         })
//         .catch((err)=>{
//           console.log(err);
//         })
//       }
//     });
//   }
// });


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
