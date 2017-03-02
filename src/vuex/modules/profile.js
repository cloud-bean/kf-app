import * as types from '../mutation_types';
import * as api from '../../api';

const state = {
  user: {},
  userRecords: {},
  tip: {},
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
  [types.USER_SIGNUP](state, user) {
    state.user = user;
  },
};

const actions = {
  async getUserInfo({ commit }, userid) {
    try {
      commit(types.SET_USER_INFO, await api.getUserInfo(userid));
    } catch (err) {
      console.log(err);
    }
  },
  async getUserRecords({ commit }) {
    try {
      commit(types.SET_USER_RECORDS, await api.getUserRecords());
    } catch (err) {
      console.log(err);
    }
  },
  async getTip({ commit }) {
    commit(types.SET_TIP, await api.getTips());
  },
  async signUp({ state }, displayName, phone, slogan) {
    const user = state.user;
    const option = Object.assign({}, user.option, { phone }, { slogan });
    const newuser = Object.assign({}, user, { option }, { displayName });
    await api.signUp(user._id, newuser);
  },
};
export default {
  state,
  mutations,
  actions,
};
