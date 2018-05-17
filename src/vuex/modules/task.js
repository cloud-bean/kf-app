import * as types from '../mutation_types';
import { api } from '../../api';
const moment = require('moment');

const state = {
  taskQuantityInfo: {},
  tasks: [],
  allNewStudentTasks: [],
  taskByDate: [],
  selected: '1',
  activeTask: {},
  activeComments: [],
  page: 1,
  activeNewTask: {},
};

const mutations = {
  [types.ADD_TASK_COMMENT](state, comment) {
    state.activeComments.splice(0, 0, comment);
  },
  [types.SET_ACTIVE_TASK_COMMENTS](state, comments) {
    state.activeComments = comments;
  },
  [types.SET_NEW_STUDENT_TASKS](state, tasks) {
    state.allNewStudentTasks = tasks;
  },
  [types.OPEN_TASK_LOTTERY](state, userId) {
    state.activeTask.openLotteryUserIds.push(userId);
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
    state.tasks.sort((a, b) => {
      if (new Date(a.startTime) > new Date(b.startTime)) {
        return -1;
      }
      return 1;
    });
    const taskByDate = [];
    const orgTasks = state.tasks;
    if (state.tasks[0]) {
      let flag = true;
      for (let i = 0; i < orgTasks.length; i++) {
        flag = true;
        if (orgTasks[i].course.name === '新人训练营') {
          // skip 新人训练营
        } else {
          for (let j = 0; j < taskByDate.length; j++) {
            if (taskByDate[j].date.isSame(moment(orgTasks[i].startTime), 'day')) {
              taskByDate[j].tasks.push(orgTasks[i]);
              flag = false;
            }
          }
          if (flag === true) {
            taskByDate.push({ date: moment(orgTasks[i].startTime), tasks: [orgTasks[i]] });
          }
        }
      }
    }
    state.taskByDate = taskByDate;
    // if (state.selected == '1') {
    //   state.tasks.sort((a, b) => {
    //     if (new Date(a.startTime) > new Date(b.startTime)) {
    //       return 1;
    //     } else {
    //       return -1;
    //     }
    //   });
    // } else {
    //   state.tasks = state.tasks.filter((item) => {
    //     if (item.isDone) return item;
    //   });
    // }
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
  async getTaskList({ commit }, state = 'process') {
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
  async getAllNewStudentTasks({ commit }, ) {
    commit(types.FETCH_STH);
    const tasks = await api.getAllNewStudentTasks();
    commit(types.SET_NEW_STUDENT_TASKS, tasks.reverse());

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
  taskDetail({ commit }, id) {
    commit(types.FETCH_STH);
    const tasks = state.tasks.concat(state.allNewStudentTasks);
    const current = tasks.filter(item => (item._id == id));

    commit(types.SET_ACTIVE_TASK, current[0]);
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
const getters = {
  isAllNewTasksDone(state) {
    let res = true;
    for (const task of state.allNewStudentTasks) {
      res = res && !!task.isDone;
    }
    return res;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
