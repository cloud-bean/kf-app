import * as types from '../mutation_types';
import { api } from '../../api';

const state = {
  orders: [],
  totalCount: 0,
  activeOrder: {},
};

const mutations = {
  [types.SET_ORDERS](state, { orders, totalCount}) {
    state.orders = orders;
    state.totalCount = totalCount;
  },
  [types.SET_ACTIVE_ORDER](state, order) {
    state.activeOrder = order;
  },
};

const actions = {
  async getOrders({ commit }, { page, limit }) {
    commit(types.FETCH_STH);
    console.log('enter get orders', page, limit);
    commit(types.SET_ORDERS, await api.getOrders(page, limit));
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
