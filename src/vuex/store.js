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
  loading: false,
  accessToken: '',
  userid: '',

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

  GOT_MY_RANK(state, rank ,index){
    state.myRank = {};
    state.myRank.content = rank;
    state.myRank.index = index;
  },

  GOT_TASKS(state, tasks) {
    state.tasks = tasks;
    state.loading = false;
  },

  TASK_NOT_DONE(state, num) {
    state.taskNotDone = num;
  },

  GOT_RANK (state, ranks) {
    state.ranks = ranks;
    state.loading = false;
  },
  LIKE_FRIEND(state, index){
    state.ranks[index].isUpVoted = true;
    state.ranks[index].upCount++;
  },

  SET_ACTIVE_TASK (state, task) {
    state.activeTask = task;
  },
};


export default new Vuex.Store({
  state,
  mutations,
});
