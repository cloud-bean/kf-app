import * as types from '../mutation_types';
import * as api from '../../api';

const state = {
  ranks: [],
};

const mutations = {
  [types.SET_RANK](state, ranks) {
    state.ranks = state.ranks.concat(ranks);
  },
  [types.LIKE_FRIEND](state, index) {
    state.ranks[index].isUpVoted = true;
    state.ranks[index].upCount++;
  },

};

const actions = {
  async getRanks({ commit }, page) {
    const ranks = await api.getRanks(page);
    commit(types.SET_RANK, ranks);
    return ranks;
  },
  async friendLike({ commit }, { user, index }) {
    if (user.isUpVoted) return;
    await api.friendLike(user);
    commit(types.LIKE_FRIEND, index - 1);
  },
};

export default {
  state,
  mutations,
  actions,
};
