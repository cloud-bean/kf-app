
import config from '../config/config';
import { service, serviceV2 } from './service';
const bigServer = config.server.bigServer;


export const getAllGoods = () =>
      new Promise((resolve, reject) => {
        serviceV2
          .get('/goods')
          .then((result) => {
            resolve(result.data.data);
          })
          .catch((err) => {
            reject(err);
          });
      });

export const buyGood = data =>
      new Promise((resolve, reject) => {
        serviceV2
          .post('/buyGood', data)
          .then((result) => {
            resolve(result.data.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
