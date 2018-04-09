import config from '../config/config';
import { service } from './service';

export const getActivities = page =>
  new Promise((resolve, reject) => {
    service
      .get(`/timelines?page=${page}&limit=${config.activity.limit}&sort=-created`)
      .then(result => {
        if (result.data.code == 'success') {
          const activities = result.data.data;
          console.log(activities);
          resolve(activities);
        }
        resolve([]);
      })
      .catch(err => {
        reject(err);
      });
  });
