import * as types from '../mutation_types';
import { api } from '../../api';

const state = {
  cards: [],
  lottery: [],
  cardPool: [],
};

const mutations = {
  [types.SET_USER_CARDS](state, cards) {
    const orgCards = cards.cards;
    const allArr = [];
    // 检测每种卡牌数量
    for (let i = 0; i < orgCards.length; i++) {
      let flag = true;
      const count = 1;
      for (let j = 0; j < allArr.length; j++) {
        if (orgCards[i].cardId == allArr[j].cardId) {
          flag = false;
          allArr[j].count++;
        }
      }
      if (flag) {
        orgCards[i].count = 1;
        allArr.push(orgCards[i]);
      }
    }

    state.cards = allArr;
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
  async sellCard({ commit }, data) {
    commit(types.FETCH_STH);
    try {
      const res = await api.sellCard(data);
      console.log(res);
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
    let data = {};
    try {
      const lottery = await api.buyLottery(cardPoolId);
      data = await api.getLotteryCard(lottery[0]._id);

      // commit(types.ADD_USER_LOTTERY, await api.buyLottery(cardPoolId));
      commit(types.BUY_GOODS, money);
    } catch (err) {
      console.log(err);
    }
    commit(types.GOT_STH);
    return data;
  },
  async getCardPool({ commit }, type) {
    commit(types.FETCH_STH);
    try {
      commit(types.SET_CARD_POOL, await api.getCardPool(type));
    } catch (err) {
      console.log(err);
    }
    commit(types.GOT_STH);
  },
  async openLotteryBox({ commit }, { lotteryId }) {
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
  async openCardPool({ commit }, { taskId, userId }) {
    commit(types.FETCH_STH);
    let data = {};
    try {
      data = await api.openCardPool(taskId);
      commit(types.OPEN_TASK_LOTTERY, userId);
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
