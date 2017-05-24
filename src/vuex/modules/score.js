import * as types from '../mutation_types';
import { api } from '../../api';

const state = {
  orders: [],
  activeOrder: {},
};

const mutations = {
  [types.SET_ORDERS](state, orders) {
    state.orders = orders;
  },
  [types.SET_ACTIVE_ORDER](state, order) {
    state.activeOrder = order;
  },
};

const actions = {
  async getOrders({ commit }) {
    commit(types.FETCH_STH);
    commit(types.SET_ORDERS, await api.getOrders());
    commit(types.GOT_STH);
  },
  orderDetail({ commit, state }, index) {
    const orders = state.orders;
    const current = orders[index];
    commit(types.SET_ACTIVE_ORDER, current);
  },
  async setScore({ commit }, { score, comments, orderId }) {
    commit(types.FETCH_STH);
    await api.setScore(score, comments, orderId);
    commit(types.GOT_STH);
  },
};

export default {
  state,
  mutations,
  actions,
};
