import config from '../config/config';
import service from './service';
const bigServer = config.server.bigServer;

export const getNews = () =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/documents?type=news`)
      .then(result => {
        const news = result.data.data;
        resolve(news);
      })
      .catch(err => {
        reject(err);
      });
  });

// export const getTips = () =>
//   new Promise((resolve, reject) => {
//     service
//       .get(`${bigServer}/documents?name=tip`)
//       .then(result => {
//         const tip = result.data.data[0];
//         resolve(tip);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
