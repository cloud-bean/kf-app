import config from '../config/config';
import service from './service';
const bigServer = config.server.bigServer;

export const getOrders = () =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/orders?limit=200`) // 默认20，不够用
      .then(result => {
        const orders = result.data.data;
        resolve(orders);
      })
      .catch(err => {
        reject(err);
      });
  });

export const setScore = (score, comments, orderId) =>
  new Promise((resolve, reject) => {
    service
      .post(`${bigServer}/orders/${orderId}/record`)
      .send({ score, comments })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
