import * as types from '../mutation_types';
import { api } from '../../api';

const state = {
  allGoods: [],
  page: 1,
};

const mutations = {

  [types.SET_ALL_GOODS](state, goods) {
    // state.page++;
    // state.activities = state.activities.concat(activities);
    state.allGoods = goods;
  },
};

const actions = {

  async getAllGoods({ commit }, page) {
    try {
      commit(types.FETCH_STH);
      const goods = await api.getAllGoods();
      commit(types.SET_ALL_GOODS, goods);
      commit(types.GOT_STH);
    } catch (e) {
      console.log(e);
    }
  },
  async buyGood({ commit }, data) {
    try {
      commit(types.FETCH_STH);
      const res = await api.buyGood(data);
      commit(types.GOT_STH);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  async revertGood({ commit }, data) {
    try {
      commit(types.FETCH_STH);
      const res = await api.revertGood(data);
      commit(types.GOT_STH);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
};

// const getters = {
//   allCards(state) {
//     return state.allGoods.filter((item) => {
//       if (item.category == 'card') return item;
//     });
//   },
//   allErciyuan(state) {
//     return state.allGoods.filter((item) => {
//       if (item.category == 'erciyuan') return item;
//     });
//   },
// };

export default {
  state,
  mutations,
  actions,
  // getters,
};
