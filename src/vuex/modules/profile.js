import * as types from '../mutation_types';
import { api } from '../../api';
import { level } from '../../filter';

const state = {
  user: {},
  userRecords: {},
  tip: {},
  lotterys: [],
  keepInfo: {},
};

const mutations = {
  [types.SET_USER_INFO](state, user) {
    state.user = user;
  },
  [types.SET_USER_RECORDS](state, userRecords) {
    state.userRecords = userRecords;
  },
  [types.SET_TIP](state, tip) {
    state.tip = tip;
  },
  [types.SET_USER_LEVEL](state, level) {
    state.user.option.level = level;
  },
  [types.USER_SIGNUP](state, user) {
    state.user = user;
  },
  [types.BUY_GOODS](state, money) {
    state.user.option.goldToken -= money;
  },
  [types.SET_KEEP_INFO](state, keepInfo) {
    state.keepInfo = keepInfo;
  },
};
const getters = {
  userInfo: state => state.user,
};

const actions = {
  async getUserInfo({ commit }, userid) {
    try {
      commit(types.FETCH_STH);
      commit(types.SET_USER_INFO, await api.getUserInfo(userid));
      commit(types.GOT_STH);
    } catch (err) {
      console.log(err);
    }
  },
  async getUserRecords({ commit }) {
    try {
      commit(types.FETCH_STH);
      commit(types.SET_USER_RECORDS, await api.getUserRecords());
      commit(types.GOT_STH);
    } catch (err) {
      console.log(err);
    }
  },
  async getKeepInfo({ commit }) {
    try {
      commit(types.FETCH_STH);
      commit(types.SET_KEEP_INFO, await api.getKeepInfo());
      commit(types.GOT_STH);
    } catch (err) {
      console.log(err);
    }
  },
  async getTip({ commit }) {
    commit(types.FETCH_STH);
    commit(types.SET_TIP, await api.getTips());
    commit(types.GOT_STH);
  },
  async signUp({ commit, state }, { displayName, phone, slogan, school, qq }) {
    commit(types.FETCH_STH);
    const user = state.user;
    const option = Object.assign({}, user.option, { slogan }, { school });
    const newUser = Object.assign({}, user, { option }, { phone }, { displayName }, { qq });
    await api.updateUserInfo(user._id, newUser);
    commit(types.SET_USER_INFO, newUser);
    commit(types.SET_LOGIN, true);
    commit(types.GOT_STH);
  },
  setUserLevel({ commit }, exp) {
    commit(types.SET_USER_LEVEL, level(exp));
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
