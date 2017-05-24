import config from '../config/config';
import service from './service';
const bigServer = config.server.bigServer;

export const getCardBag = () =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/myBag`)
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
      .get(`${bigServer}/lotterys`)
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
      .get(`${bigServer}/cardPools?ticketType=${type}`)
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
      .post(`${bigServer}/buyLottery`,
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
      .get(`${bigServer}/drawLottery/${lotteryId}`)
      .then(result => {
        const data = result.data.data;
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
