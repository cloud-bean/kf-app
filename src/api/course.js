import { serviceV2 } from './service';

export const getFreeCourses = () =>
  new Promise((resolve, reject) => {
    serviceV2
      .get('/freeCourses') // 默认20，不够用
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
    serviceV2
      .post('/bindFreeCourse', { courseId })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
