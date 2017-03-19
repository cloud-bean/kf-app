import * as types from '../mutation_types';
import * as api from '../../api';

const state = {
  cards: [],
};

const mutations = {
  [types.SET_USER_CARDS](state, cards) {
    state.cards = cards;
  },
};

const actions = {
  async getUserCards({ commit }) {
    try {
      commit(types.SET_USER_CARDS, await api.getCardBag());
    } catch (err) {
      console.log(err);
    }
  },
};
export default {
  state,
  mutations,
  actions,
};
