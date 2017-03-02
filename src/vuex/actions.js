import * as api from '../api';

export async function auth({ dispatch }, appid, code) {
  dispatch('AUTH_CLIENT', await api.auth(appid, code));
}

export const authLocal = ({ dispatch }, userid, accessToken) => {
  dispatch('AUTH_CLIENT', { userid, accessToken });
};

export async function getUserInfo({ dispatch, state }, userid) {
  dispatch('GOT_USER', await api.getUserInfo(userid));
}
export async function getTaskList({ dispatch, state }, page) {
  const { tasks, taskQuantity } = await api.getTaskList(page);
  const { taskDoneQuantity } = await api.getTaskDoneQuantity();
  const taskinfo = {
    totalDone: taskDoneQuantity,
    totalCount: taskQuantity,
  };
  dispatch('SET_TASK_INFO', taskinfo);
  dispatch('GOT_TASKS', tasks);
}

export const taskDetail = ({ dispatch, state }, index) => {
  const tasks = state.tasks;
  const current = tasks[index];
  dispatch('SET_ACTIVE_TASK', current);
};

export async function getRanks({ dispatch, state }, page) {
  dispatch('GOT_RANK', await api.getRanks(page));
}

export async function friendLike({ dispatch, state }, user, index) {
  if (user.isUpVoted) return;
  await api.friendLike(user);
  dispatch('LIKE_FRIEND', index - 1);
}

export async function signUp({ dispatch, state }, displayName, phone, slogan) {
  const user = state.user;
  const option = Object.assign({}, user.option, { phone }, { slogan });
  const newuser = Object.assign({}, user, { option }, { displayName });
  await api.signUp(user._id, newuser);
}

export async function getOrders({ dispatch }) {
  dispatch('SET_ORDERS', await api.getOrders());
}

export const orderDetail = ({ dispatch, state }, index) => {
  const orders = state.orders;
  const current = orders[index];
  dispatch('SET_ACTIVE_ORDER', current);
};

export const setLogin = ({ dispatch, state }, login) => {
  dispatch('SET_LOGIN', login);
};

export async function leaveComment({ dispatch, state }, content, taskId) {
  dispatch('SET_TASK_COMMENT', await api.leaveComment(content, taskId));
}

export async function setScore({ dispatch, state }, score, comments, orderId) {
  await api.setScore(score, comments, orderId);
}

export async function getComments({ dispatch, state }, taskId) {
  dispatch('CLEAR_TASK_COMMENTS');
  dispatch('GOT_TASK_COMMENTS', await api.getTaskComment(taskId));
}

export async function getMyRecords({ dispatch }) {
  dispatch('SET_MY_RECORDS', await api.getMyRecords());
}

export async function getTip({ dispatch }) {
  dispatch('SET_TIP', await api.getTips());
}

export async function getJsConfig({ dispatch }, url) {
  dispatch('SET_JS_CONFIG', await api.getJsConfig(url));
}

export async function submitOrder({ dispatch }, taskId) {
  await api.submitOrder(taskId);
}
