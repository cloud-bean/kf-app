import config from '../config/config';
import service from './service';
const bigServerV2 = config.server.bigServerV2;

export const getFreeCourses = () =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServerV2}/freeCourses`) // 默认20，不够用
      .then(result => {
        const courses = result.data.data;
        resolve(courses);
      })
      .catch(err => {
        reject(err);
      });
  });

export const bindFreeCourse = (courseId) =>
  new Promise((resolve, reject) => {
    service
      .post(`${bigServerV2}/bindFreeCourse`, { courseId })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
