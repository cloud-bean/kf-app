import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as types from './mutation_types';
import profile from './modules/profile';
import task from './modules/task';
import rank from './modules/rank';
import score from './modules/score';
import card from './modules/card';
import news from './modules/news';


Vue.use(Vuex);

const state = {
    // user: {},
    // taskInfo:{},
    // tasks: [],
    // taskNotDone: 0,
    // ranks: [],
    // myRank: null,
    // activeTask: {},
    // activeComments:[],
    loading: false,
    accessToken: '',
    userid: '',
    unionid: '',
    // currentRoute: '',
    // feedbacks: [],
    jsConfig: {},
    // myRecords:{},
    // tip:{},
    login: false,
    progress: 0,

    // orders:[],
    // activeOrder:{},
};

const mutations = {
    [types.AUTH_CLIENT](state, { userid, accessToken, unionid }) {
        state.userid = userid;
        state.accessToken = accessToken;
        state.unionid = unionid;
        console.log(unionid);
        console.log('AUTH_CLIENT done ');
    },
    [types.FETCH_STH](state) {
        state.loading = true;
    },
    [types.GOT_STH](state) {
        state.loading = false;
    },
    [types.SET_LOGIN](state, login) {
        state.login = login;
    },
    [types.SET_JS_CONFIG](state, config) {
        state.jsConfig = config;
    },
    [types.SET_PROGRESS](state, progress) {
        state.progress = progress;
    },
    // GOT_USER(state, user) {
    //   state.user = user;
    //   state.loading = false;
    // },



    // GOT_TASKS(state, tasks) {
    //   state.tasks =  state.tasks.concat(tasks);
    //   // state.tasks = tasks;
    //   state.tasks.sort((a,b)=>{
    //     if (new Date(a.expireTime) > new Date(b.expireTime)){
    //       return -1;
    //     }else{
    //       return 1;
    //     }
    //   });
    //   state.loading = false;
    // },

    // TASK_NOT_DONE(state, num) {
    //   state.taskNotDone = num;
    // },

    // GOT_RANK (state, ranks) {
    //   state.ranks = state.ranks.concat(ranks);
    //   state.loading = false;
    // },
    // GOT_MY_RANK(state, rank ,index){
    //   state.myRank = {};
    //   state.myRank.content = rank;
    //   state.myRank.index = index;
    // },

    // GOT_MY_RANK (state, rank) {
    //   state.myRank = rank;
    //   state.loading = false;
    // },
    // LIKE_FRIEND(state, index){
    //   state.ranks[index].isUpVoted = true;
    //   state.ranks[index].upCount++;
    // },
    // SET_ACTIVE_TASK (state, task) {
    //   state.activeTask = task;
    //   state.currentRoute = '/taskDetail';
    // },
    // LEAVE_FEEDBACK(state, feedback){
    //   state.feedbacks.splice(0, 0, feedback);
    // },
    // GOT_FEEDBACKS(state, feedbacks){
    //   state.feedbacks = feedbacks;
    // },
    // SET_TASK_COMMENT (state, comment) {
    //   // if(state.activeTask.commits==undefined)
    //   //   state.activeTask.commits=[];
    //   state.activeComments.splice(0, 0, comment);
    // },
    // GOT_TASK_COMMENTS(state, comments){
    //   state.activeComments = comments;
    // },
    // CLEAR_TASK_COMMENTS(state){
    //   state.activeComments = [];
    // },

    // SET_TASK_INFO(state, taskInfo){
    //   state.taskInfo = taskInfo;
    // },
    // SET_MY_RECORDS(state, myRecords){
    //   state.myRecords = myRecords;
    // },
    // SET_TIP(state, tip){
    //   state.tip = tip;
    // },
    // SET_ORDERS(state, orders){
    //   state.orders = orders;
    // },
    // SET_ACTIVE_ORDER (state, order) {
    //   state.activeOrder = order;
    // },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        profile,
        task,
        rank,
        score,
        card,
        news,
    },
});
