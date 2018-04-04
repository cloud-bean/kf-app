import * as types from '../mutation_types';
import { api } from '../../api';
const moment = require('moment');

const state = {
  freeCourses: [],
};

const mutations = {
  [types.SET_FREE_COURSES](state, courses) {
    state.freeCourses = courses;
  },
};

const actions = {
  async getFreeCourses({ commit }) {
    commit(types.FETCH_STH);
    const courses = await api.getFreeCourses();
    commit(types.SET_FREE_COURSES, courses);
    commit(types.GOT_STH);

    return courses;
  },
  async bindFreeCourse({ commit }, couresId) {
    commit(types.FETCH_STH);
    await api.bindFreeCourse(couresId);
    commit(types.GOT_STH);
  },
};

export default {
  state,
  mutations,
  actions,
};
