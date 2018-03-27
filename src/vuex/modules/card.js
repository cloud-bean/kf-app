import * as types from '../mutation_types';
import { api } from '../../api';

const state = {
  cards: [],
  lottery: [],
  cardPool: [],
};

const mutations = {
  [types.SET_USER_CARDS](state, cards) {
    state.cards = cards.cards;
  },
  [types.ADD_USER_CARD](state, card) {
    state.cards.splice(0, 0, card);
  },
  [types.SET_USER_LOTTERY](state, lottery) {
    state.lottery = lottery;
  },
  [types.MINUS_USER_LOTTERY](state, index) {
    state.lottery.splice(index, 1);
  },
  [types.ADD_USER_LOTTERY](state, lottery) {
    state.lottery.splice(0, 0, lottery);
  },
  [types.SET_CARD_POOL](state, cardPool) {
    state.cardPool = cardPool;
  },
};

const actions = {
  async getUserCards({ commit }) {
    commit(types.FETCH_STH);
    try {
      commit(types.SET_USER_CARDS, await api.getCardBag());
    } catch (err) {
      console.log(err);
    }
    commit(types.GOT_STH);
  },
  async getUserLottery({ commit }) {
    commit(types.FETCH_STH);
    try {
      commit(types.SET_USER_LOTTERY, await api.getLotterys());
    } catch (err) {
      console.log(err);
    }
    commit(types.GOT_STH);
  },
  async buyLottery({ commit }, { cardPoolId, money }) {
    commit(types.FETCH_STH);
    try {
      commit(types.ADD_USER_LOTTERY, await api.buyLottery(cardPoolId));
      commit(types.BUY_GOODS, money);
    } catch (err) {
      console.log(err);
    }
    commit(types.GOT_STH);
  },
  async getCardPool({ commit }, { type }) {
    commit(types.FETCH_STH);
    try {
      commit(types.SET_CARD_POOL, await api.getCardPool(type));
    } catch (err) {
      console.log(err);
    }
    commit(types.GOT_STH);
  },
  async openLotteryBox({ commit }, { lotteryId, index }) {
    commit(types.FETCH_STH);
    let data = {};
    try {
      data = await api.getLotteryCard(lotteryId);
            // commit(types.ADD_USER_CARD, data.card);
            // commit(types.MINUS_USER_LOTTERY, index);
    } catch (err) {
      console.log(err);
    }
    commit(types.GOT_STH);
    return data;
  },


};
export default {
  state,
  mutations,
  actions,
};
