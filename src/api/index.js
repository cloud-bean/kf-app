// const request = require('superagent');
// import config from '../config/config';
// import store from '../vuex/store';
// import service from './service';

import * as cardApi from './card';
import * as rootApi from './root';
import * as rankApi from './rank';
import * as articleApi from './article';
import * as taskApi from './task';
import * as teacherApi from './teacher';
import * as userApi from './user';
import * as courseApi from './course';
import * as activityApi from './activity';
import * as marketApi from './market';


export const api = {
  getNews: articleApi.getNews,
  getLotteryCard: cardApi.getLotteryCard,
  buyLottery: cardApi.buyLottery,
  getCardPool: cardApi.getCardPool,
  getLotterys: cardApi.getLotterys,
  getCardBag: cardApi.getCardBag,
  getJsConfig: rootApi.getJsConfig,
  auth: rootApi.auth,
  authL: rootApi.authL,
  getUserInfo: userApi.getUserInfo,
  submitOrder: taskApi.submitOrder,
  getTaskList: taskApi.getTaskList,
  getTaskComments: taskApi.getTaskComments,
  getAllTaskList: taskApi.getAllTaskList,
  getTaskDoneQuantity: taskApi.getTaskDoneQuantity,
  getRanks: rankApi.getRanks,
  friendLike: rankApi.friendLike,
  signUp: userApi.signUp,
  setMemberAvatar: userApi.setMemberAvatar,
  getAllMemberAvatars: userApi.getAllMemberAvatars,
  updateUserInfo: userApi.updateUserInfo,
  getOrders: teacherApi.getOrders,
  setScore: teacherApi.setScore,
  leaveComment: taskApi.leaveComment,
  getTaskComment: taskApi.getTaskComment,
  getUserRecords: userApi.getUserRecords,
  getFreeCourses: courseApi.getFreeCourses,
  bindFreeCourse: courseApi.bindFreeCourse,
  getActivities: activityApi.getActivities,
  upvoteActivity: activityApi.upvoteActivity,
  addMsgToActivity: activityApi.addMsgToActivity,
  sellCard: cardApi.sellCard,
  getAllGoods: marketApi.getAllGoods,
  buyGood: marketApi.buyGood,
};
