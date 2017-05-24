import config from '../config/config';
import service from './service';
const bigServer = config.server.bigServer;

export const getRanks = page =>
  new Promise((resolve, reject) => {
    service
      .get(`${bigServer}/ranks?page=${page}&limit=${config.rank.limit}`)
      .then(result => {
        const ranks = result.data.data;
        resolve(ranks);
      })
      .catch(err => {
        reject(err);
      });
  });
export const friendLike = user =>
  new Promise((resolve, reject) => {
    service
      .post(`${bigServer}/upVotes`, {
        userId: user.userid,
      })
      .then(result => {
        resolve(result.data.data);
      })
      .catch(err => {
        reject(err);
      });
  });
