import config from '../config/config';
import { service } from './service';

export const getOrders = (page, limit) =>
  new Promise((resolve, reject) => {
    service
      .get(`/orders?limit=${limit}&page=${page}`) // 默认20，不够用
      .then(result => {
        const orders = result.data.data.orders;
        const totalCount = result.data.data.totalCount;
        console.log(result);
        resolve({
          orders,
          totalCount,
        });
      })
      .catch(err => {
        reject(err);
      });
  });

export const setScore = (score, comments, orderId) =>
  new Promise((resolve, reject) => {
    service
      .post(`/orders/${orderId}/record`, { score, comments, flag: 'speed' })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
