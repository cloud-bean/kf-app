import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: {},
  tasks: [],
  taskNotDone: 0,
  ranks: [],
  myRank: null,
  activeTask: {},
  activeComments:[],
  loading: false,
  accessToken: '',
  userid: '',
  currentRoute: '',
  feedbacks: [],
  jsConfig:{},
};

const mutations = {
  AUTH_CLIENT(state, userid, accessToken){
    state.userid = userid;
    state.accessToken = accessToken;
  },
  GET_STH_BACKEND(state){
    state.loading = true;
  },

  GOT_USER(state, user) {
    state.user = user;
    state.loading = false;
  },

  SIGNUP_USER(state, user) {
    state.user = user;
  },

  GOT_TASKS(state, tasks) {
    state.tasks =  state.tasks.concat(tasks);
    // state.tasks = tasks;
    state.loading = false;
  },

  TASK_NOT_DONE(state, num) {
    state.taskNotDone = num;
  },

  GOT_RANK (state, ranks) {
    state.ranks = ranks;
    state.loading = false;
  },
  GOT_MY_RANK(state, rank ,index){
    state.myRank = {};
    state.myRank.content = rank;
    state.myRank.index = index;
  },

  // GOT_MY_RANK (state, rank) {
  //   state.myRank = rank;
  //   state.loading = false;
  // },
  LIKE_FRIEND(state, index){
    state.ranks[index].isUpVoted = true;
    state.ranks[index].upCount++;
  },

  SET_ACTIVE_TASK (state, task) {
    state.activeTask = task;
    state.currentRoute = '/taskDetail';
  },
  // LEAVE_FEEDBACK(state, feedback){
  //   state.feedbacks.splice(0, 0, feedback);
  // },
  // GOT_FEEDBACKS(state, feedbacks){
  //   state.feedbacks = feedbacks;
  // },
  SET_TASK_COMMENT (state, comment) {
    // if(state.activeTask.commits==undefined)
    //   state.activeTask.commits=[];
    state.activeComments.splice(0, 0, comment);
  },
  GOT_TASK_COMMENTS(state, comments){
    state.activeComments = comments;
  },
  CLEAR_TASK_COMMENTS(state){
    state.activeComments = [];
  },
  SET_JS_CONFIG(state, config){
    state.jsConfig = config;
  },
};


export default new Vuex.Store({
  state,
  mutations,
});
