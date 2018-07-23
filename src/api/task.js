import config from '../config/config';
import { service } from './service';
const bigServer = config.server.bigServer;

// page=${page}&limit=${config.task.limit}
export const getTaskList = state =>
  new Promise((resolve, reject) => {
    let tasks = [];
    let taskQuantity = {};
    service
      .get(`/tasks?filter=${state}`)
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
      .get(`/allTasks?page=${page}&limit=${config.task.limit}&sortBy=-startTime`)
      .then(result => {
        if (result.data.code == 'success') {
          const tasks = result.data.data;
          // const taskQuantity = result.body.data.totalCount;
          resolve(tasks);
        }
        resolve([]);
      })
      .catch(err => {
        reject(err);
      });
  });
export const getAllNewStudentTasks = () =>
    new Promise((resolve, reject) => {
      service
        .get('/allNewStudentTasks')
        .then(result => {
          if (result.data.code == 'success') {
            const tasks = result.data.data;
            // const taskQuantity = result.body.data.totalCount;
            resolve(tasks);
          }
          resolve([]);
        })
        .catch(err => {
          reject(err);
        });
    });

export const getTaskDoneQuantity = () =>
  new Promise((resolve, reject) => {
    service
      .get('/records/doneCount')
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
      .get(`/tasks/${taskId}/commits?limit=30`)
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
      .post('/orders', data)
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
      .post(`/tasks/${taskId}/commits`, {
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
