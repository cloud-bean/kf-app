import config from '../config/config';
import { service, serviceV2 } from './service';

export const getCardBag = () =>
  new Promise((resolve, reject) => {
    service
      .get('/myBag')
      .then(result => {
        const cardBag = result.data.data;
        resolve(cardBag);
      })
      .catch(err => {
        reject(err);
      });
  });
export const getLotterys = () =>
  new Promise((resolve, reject) => {
    service
      .get('/lotterys')
      .then(result => {
        const lotterys = result.data.data;
        resolve(lotterys);
      })
      .catch(err => {
        reject(err);
      });
  });
export const getCardPool = type =>
  new Promise((resolve, reject) => {
    service
      .get(`/cardPools?ticketType=${type}`)
      .then(result => {
        const cardPool = result.data.data;
        resolve(cardPool);
      })
      .catch(err => {
        reject(err);
      });
  });
export const buyLottery = cardPoolId =>
  new Promise((resolve, reject) => {
    service
      .post('/buyLottery',
      { cardPoolId, amount: 1 })
      .then(result => {
        const data = result.data.data;
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
export const getLotteryCard = lotteryId =>
  new Promise((resolve, reject) => {
    service
      .get(`/drawLottery/${lotteryId}`)
      .then(result => {
        const data = result.data.data;
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const sellCard = data =>
      new Promise((resolve, reject) => {
        serviceV2
          .post('/sellCard', data) // sell card --- '/api/v2/saleCard'
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
