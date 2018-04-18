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
  [types.RESET_ACTIVITIES](state, activities) {
    state.activities = [];
    state.page = 1;
  },
};

const actions = {
  async refreshActivities({ commit }) {
    commit(types.RESET_ACTIVITIES);
    commit(types.FETCH_STH);
    const activities = await api.getActivities(1);
    commit(types.SET_ACTIVITIES, activities);
    commit(types.GOT_STH);
    return activities;
  },
  async getActivities({ commit }, page) {
    commit(types.FETCH_STH);
    const activities = await api.getActivities(page);
    commit(types.SET_ACTIVITIES, activities);
    commit(types.GOT_STH);
    return activities;
  },
  async upVote({ commit }, id) {
    const activity = await api.upvoteActivity(id);
    return activity;
  }
};

export default {
  state,
  mutations,
  actions,
};
