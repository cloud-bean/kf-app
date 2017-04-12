import * as types from '../mutation_types';
import * as api from '../../api';

const state = {
    taskQuantityInfo: {},
    tasks: [],
    selected: '1',
    activeTask: {},
    activeComments: [],
    page: 1,
};

const mutations = {
    [types.ADD_TASK_COMMENT](state, comment) {
        state.activeComments.splice(0, 0, comment);
    },
    [types.SET_ACTIVE_TASK_COMMENTS](state, comments) {
        state.activeComments = comments;
    },
    [types.CLEAR_ACTIVE_TASK_COMMENTS](state) {
        state.activeComments = [];
    },
    [types.SET_TASK_QUANTITY_INFO](state, taskQuantityInfo) {
        state.taskQuantityInfo = taskQuantityInfo;
    },
    [types.SET_ACTIVE_TASK](state, task) {
        state.activeTask = task;
    },
    [types.SET_TASKS](state, tasks) {
        state.page++;
        state.tasks = state.tasks.concat(tasks);
        if (state.selected == '1') {
            state.tasks.sort((a, b) => {
                if (new Date(a.expireTime) > new Date(b.expireTime)) {
                    return 1;
                } else {
                    return -1;
                }
            });
        } else {
            state.tasks = state.tasks.filter((item) => {
                if (item.isDone) return item;
            });
        }

    },
    [types.RESET_TASKS](state) {
        state.page = 1;
        state.tasks = [];
    },
    [types.CHANGE_NAVBAR](state, selected) {
        state.selected = selected;
    },
    // [types.SET_PROCESS_TASKS](state, tasks) {
    //     state.tasksProcess = tasks;
    // },
};

const actions = {
    async getTaskList({ commit }, state = "process") {
        commit(types.FETCH_STH);
        const { tasks, taskQuantity } = await api.getTaskList(state);
        const { taskDoneQuantity } = await api.getTaskDoneQuantity();
        const taskinfo = {
            totalDone: taskDoneQuantity,
            totalCount: taskQuantity,
        };
        commit(types.SET_TASK_QUANTITY_INFO, taskinfo);
        commit(types.SET_TASKS, tasks);
        commit(types.GOT_STH);
        return tasks;
    },
    async getAllTaskList({ commit }, page) {
        commit(types.FETCH_STH);
        const tasks = await api.getAllTaskList(page);
        commit(types.SET_TASKS, tasks);
        commit(types.GOT_STH);
        return tasks;
    },
    cleanTaskList({ commit }) {
        commit(types.RESET_TASKS);
    },
    changeNavbar({ commit }, selected) {
        commit(types.CHANGE_NAVBAR, selected);
    },
    // async getTaskListDone({ commit }, state = "done") {
    //     commit(types.FETCH_STH);
    //     const { tasks, taskQuantity } = await api.getTaskList(state);
    //     const { taskDoneQuantity } = await api.getTaskDoneQuantity();
    //     const taskinfo = {
    //         totalDone: taskDoneQuantity,
    //         totalCount: taskQuantity,
    //     };
    //     commit(types.SET_TASK_QUANTITY_INFO, taskinfo);
    //     commit(types.SET_TASKS, tasks);
    //     commit(types.GOT_STH);
    //     return tasks;
    // },
    // async getTaskList({ commit }, page) {
    //     commit(types.FETCH_STH);
    //     const { tasks, taskQuantity } = await api.getTaskList(page);
    //     const { taskDoneQuantity } = await api.getTaskDoneQuantity();
    //     const taskinfo = {
    //         totalDone: taskDoneQuantity,
    //         totalCount: taskQuantity,
    //     };
    //     commit(types.SET_TASK_QUANTITY_INFO, taskinfo);
    //     commit(types.SET_TASKS, tasks);
    //     commit(types.GOT_STH);
    //     return tasks;
    // },
    taskDetail({ commit, state }, index) {
        commit(types.FETCH_STH);
        const tasks = state.tasks;
        const current = tasks[index];
        commit(types.SET_ACTIVE_TASK, current);
    },
    async leaveComment({ commit }, { content, taskId }) {
        commit(types.FETCH_STH);
        commit(types.ADD_TASK_COMMENT, await api.leaveComment(content, taskId));
        commit(types.GOT_STH);
    },
    async getComments({ commit }, taskId) {
        commit(types.FETCH_STH);
        commit(types.CLEAR_ACTIVE_TASK_COMMENTS);
        commit(types.SET_ACTIVE_TASK_COMMENTS, await api.getTaskComment(taskId));
        commit(types.GOT_STH);
    },
    async submitOrder({ commit }, { taskId, serverId, type }) {
        commit(types.FETCH_STH);
        try {
            await api.submitOrder(taskId, serverId, type);

        } finally {
            commit(types.GOT_STH);
        }
    },
};

export default {
    state,
    mutations,
    actions,
};