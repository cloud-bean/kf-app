import * as types from '../mutation_types';
import * as api from '../../api';

const state = {
    cards: [],
    lottery: [],
};

const mutations = {
    [types.SET_USER_CARDS](state, cards) {
        state.cards = cards;
    },
    [types.SET_USER_LOTTERY](state, lottery) {
        state.lottery = lottery;
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

};
export default {
    state,
    mutations,
    actions,
};