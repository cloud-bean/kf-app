import config from '../config/config';
import { service } from './service';

export const getOrders = () =>
  new Promise((resolve, reject) => {
    service
      .get('/orders?limit=100') // 默认20，不够用
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
      .post(`/orders/${orderId}/record`, { score, comments })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
