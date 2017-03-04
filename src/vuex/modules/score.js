import * as types from '../mutation_types';
import * as api from '../../api';

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
    commit(types.SET_ORDERS, await api.getOrders());
  },
  orderDetail({ commit, state }, index) {
    const orders = state.orders;
    const current = orders[index];
    commit(types.SET_ACTIVE_ORDER, current);
  },
  async setScore({ commit }, { score, comments, orderId }) {
    await api.setScore(score, comments, orderId);
  },
};

export default {
  state,
  mutations,
  actions,
};
