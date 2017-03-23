import * as types from '../mutation_types';
import * as api from '../../api';

const state = {
    news: [],
    activeNews: {},
};

const mutations = {
    [types.SET_NEWS](state, news) {
        state.news = news;
    },
    [types.SET_ACTIVR_NEWS](state, news) {
        state.activeNews = news;
    },
};

const actions = {
    async getNews({ commit }) {
        commit(types.FETCH_STH);
        try {
            commit(types.SET_NEWS, await api.getNews());
        } catch (err) {
            console.log(err);
        }
        commit(types.GOT_STH);
    },
    newsDetail({ commit, state }, index) {
        commit(types.FETCH_STH);
        const news = state.news;
        const current = news[index];
        commit(types.SET_ACTIVR_NEWS, current);
    },

};
export default {
    state,
    mutations,
    actions,
};