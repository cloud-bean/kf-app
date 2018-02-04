import config from '../config/config';
import service from './service';
const bigServer = config.server.bigServer;

// page=${page}&limit=${config.task.limit}
export const getTaskList = state =>
  new Promise((resolve, reject) => {
    let tasks = [];
    let taskQuantity = {};
    service
      .get(`${bigServer}/tasks?filter=${state}`)
      .then(result => {
        if (result.data.data) {
          tasks = result.data.data.tasks;
          taskQuantity = result.data.data.totalCount;
        }
        resolve({ tasks, taskQuantity });
      })
      .catch(err => {
        reject(err);
      });
  });
export const getAllTaskList = page =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/allTasks?page=${page}&limit=${config.task.limit}&filter=done`)
      .then(result => {
        const tasks = result.data.data;
        // const taskQuantity = result.body.data.totalCount;
        resolve(tasks);
      })
      .catch(err => {
        reject(err);
      });
  });

export const getTaskDoneQuantity = () =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/records/doneCount`)
      .then(result => {
        const taskDoneQuantity = result.data.data.doneCount;
        resolve({ taskDoneQuantity });
      })
      .catch(err => {
        reject(err);
      });
  });
export const getTaskComment = taskId =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/tasks/${taskId}/commits?limit=30`)
      .then(result => {
        const comments = result.data.data;
        resolve(comments);
      })
      .catch(err => {
        reject(err);
      });
  });

export const submitOrder = (taskId, serverId, type) =>
  new Promise((resolve, reject) => {
    const data = {
      task: taskId,
      file: {
        filename: serverId,
        URL: serverId,
        type,
        created: Date.now(),
      },
    };
    service
      .post(`${bigServer}/orders`, data)
      .then(result => {
        resolve(result.data.data);
      })
      .catch(err => {
        reject(err);
      });
  });
export const leaveComment = (content, taskId) =>
  new Promise((resolve, reject) => {
    service
      .post(`${bigServer}/tasks/${taskId}/commits`, {
        content,
      })
      .then(result => {
        // console.log('result', result.body.data)
        resolve(result.data.data);
      })
      .catch(err => {
        reject(err);
      });
  });
