const request = require('superagent');
import config from '../config/config';
import store from '../vuex/store';
const bigServer = config.server.bigServer;
const midServer = config.server.midServer;

export const auth = (appid, code) =>
    new Promise((resolve, reject) => {
        request.get(`${midServer}/admin/auth/`)
            .query({
                appid,
                code,
            })
            .then((result) => {
                const userid = result.body.userid;
                const accessToken = result.body.accessToken;
                resolve({ userid, accessToken });
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getUserInfo = (userid) =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/users/${userid}`)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                resolve(result.body.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
// page=${page}&limit=${config.task.limit}
export const getTaskList = (state) =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/tasks?filter=${state}`)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const tasks = result.body.data.tasks;
                const taskQuantity = result.body.data.totalCount;
                resolve({ tasks, taskQuantity });
            })
            .catch((err) => {
                reject(err);
            });
    });
export const getAllTaskList = (page) =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/allTasks?page=${page}&limit=${config.task.limit}`)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const tasks = result.body.data;
                // const taskQuantity = result.body.data.totalCount;
                resolve(tasks);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getTaskDoneQuantity = () =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/records/doneCount`)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const taskDoneQuantity = result.body.data.doneCount;
                resolve({ taskDoneQuantity });
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getRanks = (page) =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/ranks?page=${page}&limit=${config.rank.limit}`)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const ranks = result.body.data;
                resolve(ranks);
            })
            .catch((err) => {
                reject(err);
            });
    });


export const friendLike = (user) =>
    new Promise((resolve, reject) => {
        request.post(`${bigServer}/upVotes`)
            .send({ userId: user.userid })
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                resolve(result.body.data);
            })
            .catch((err) => {
                reject(err);
            });
    });


export const signUp = (userid, userInfo) =>
    new Promise((resolve, reject) => {
        request.put(`${bigServer}/users/${userid}`)
            .send(userInfo)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });

// 获取教师界面评分任务列表
export const getOrders = () =>
    new Promise(
        (resolve, reject) => {
            request
                .get(`${bigServer}/orders?limit=200`) // 默认20，不够用
                .set('Authorization', `Bearer ${store.state.accessToken}`)
                .then((result) => {
                    const orders = result.body.data;
                    resolve(orders);
                })
                .catch((err) => {
                    reject(err);
                });
        });

export const setScore = (score, comments, orderId) =>
    new Promise((resolve, reject) => {
        request.post(`${bigServer}/orders/${orderId}/record`)
            .send({ score, comments })
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const leaveComment = (content, taskId) =>
    new Promise((resolve, reject) => {
        request.post(`${bigServer}/tasks/${taskId}/commits`)
            .send({ content })
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                // console.log('result', result.body.data)
                resolve(result.body.data);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getTaskComment = (taskId) =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/tasks/${taskId}/commits?limit=30`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const comments = result.body.data;
                resolve(comments);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getUserRecords = () =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/records/me`)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const myRecords = result.body.data;
                resolve(myRecords);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getTips = () =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/documents?name=tip`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const tip = result.body.data[0];
                resolve(tip);
            })
            .catch((err) => {
                reject(err);
            });
    });


export const getJsConfig = (url) =>
    new Promise((resolve, reject) => {
        request.post(`${midServer}/admin/jssdk/`)
            .send({ url })
            .then((result) => {
                resolve(result.body);
            })
            .catch((err) => {
                reject(err);
            });
    });

// const chooseUploadImage = () =>
//     new Promise((resolve, reject) => {
//         wx.chooseImage({
//             count: 1, // 默认9
//             sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
//             sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//             success(res) {
//                 const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//                 wx.uploadImage({
//                     localId: localIds[0],
//                     isShowProgressTips: 1,
//                     success(result) {
//                         const serverId = result.serverId;
//                         resolve(serverId);
//                     },
//                     cancel() {
//                         reject();
//                     }
//                 });
//             },
//             cancel() {
//                 reject();
//             }
//         });
//     });


export const submitOrder = (taskId, serverId, type) =>
    new Promise((resolve, reject) => {
        const data = {
            task: taskId,
            file: {
                filename: serverId,
                URL: serverId,
                type: type,
                created: Date.now(),
            },
        };
        console.log(data);

        request.post(`${bigServer}/orders`)
            .send(data)
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                resolve(result.body.data);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getCardBag = () =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/myBag`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const cardBag = result.body.data;
                resolve(cardBag);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getLotterys = () =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/lotterys`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const lotterys = result.body.data;
                resolve(lotterys);
            })
            .catch((err) => {
                reject(err);
            });
    });
export const getCardPool = (type) =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/cardPools?ticketType=${type}`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const cardPool = result.body.data;
                resolve(cardPool);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const buyLottery = (cardPoolId) =>
    new Promise((resolve, reject) => {
        request.post(`${bigServer}/buyLottery`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .send({ cardPoolId, amount: 1 })
            .then((result) => {
                const data = result.body.data;
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getLotteryCard = (lotteryId) =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/drawLottery/${lotteryId}`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const data = result.body.data;
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });

export const getNews = () =>
    new Promise((resolve, reject) => {
        request.get(`${bigServer}/documents?type=news`)
            // .withCredentials()
            .set('Authorization', `Bearer ${store.state.accessToken}`)
            .then((result) => {
                const news = result.body.data;
                resolve(news);
            })
            .catch((err) => {
                reject(err);
            });
    });