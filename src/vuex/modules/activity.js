import * as types from '../mutation_types';
import { api } from '../../api';

const state = {
  activities: [],
  page: 1,
};

const mutations = {

  [types.SET_ACTIVITIES](state, activities) {
    state.page++;
    state.activities = state.activities.concat(activities);
  },

};

const actions = {

  async getActivities({ commit }, page) {
    commit(types.FETCH_STH);
    const activities = await api.getActivities(page);
    commit(types.SET_ACTIVITIES, activities);
    commit(types.GOT_STH);
    return activities;
  },

};

export default {
  state,
  mutations,
  actions,
};
