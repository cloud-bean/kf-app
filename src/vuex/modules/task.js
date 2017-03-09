import * as types from '../mutation_types';
import * as api from '../../api';

const state = {
  taskQuantityInfo: {},
  tasks: [],
  activeTask: {},
  activeComments: [],
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
    state.tasks =  state.tasks.concat(tasks);
    state.tasks.sort((a, b) => {
      if (new Date(a.expireTime) > new Date(b.expireTime)) {
        return -1;
      } else {
        return 1;
      }
    });
  },
};

const actions = {
  async getTaskList({ commit }, page) {
    commit(types.FETCH_STH);
    const { tasks, taskQuantity } = await api.getTaskList(page);
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
  async submitOrder({ commit }, taskId) {
    commit(types.FETCH_STH);
    await api.submitOrder(taskId);
    commit(types.GOT_STH);
  },
};

export default {
  state,
  mutations,
  actions,
};
