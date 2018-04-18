import config from '../config/config';
import { service } from './service';

export const getActivities = page =>
  new Promise((resolve, reject) => {
    service
      .get(`/timelines?page=${page}&limit=${config.activity.limit}&sort=-created`)
      .then(result => {
        if (result.data.code == 'success') {
          const activities = result.data.data;
          resolve(activities);
        }
        resolve([]);
      })
      .catch(err => {
        reject(err);
      });
  });


export const upvoteActivity = id =>
  new Promise((resolve, reject) => {
    service
      .post(`/timelines/${id}/addUpVote`)
      .then(result => {
        if (result.data.code == 'success') {
          const activity = result.data.data;
          resolve(activity);
        }
        resolve({});
      })
      .catch(err => {
        reject(err);
      });
  });

export const addMsgToActivity = (id, content) =>
  new Promise((resolve, reject) => {
    service
      .post(`/timelines/${id}/addMessage`, {
        content,
      })
      .then(result => {
        if (result.data.code === 'success') {
          const activity = result.data.data;
          resolve(activity);
        }
        resolve({});
      })
      .catch(err => {
        reject(err);
      });
  });

