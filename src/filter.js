const moment = require('moment');
moment.lang('zh-cn');

export const dateFormat = (expireTime) => {
  const today = moment().startOf('day');
  if (moment(expireTime).isSame(today, 'd')) return '今日挑战';
  const result = moment(expireTime).format('YYYY-MM-DD');
  return result;
};

export const timefromNow = (dateTime) => {
  const result = moment(dateTime).fromNow();
  return result;
};

export const expire = (expireTime) => {
  const expireTimel = new Date(expireTime);
  const now = new Date();
  const result = !((expireTimel - now) > 0);
  return result;
};

export const level = (experience) => {
  const levelExp = [50, 100, 200, 350, 550, 800, 1100, 1450, 1850, 2300, 2800, 3350, 3950, 4600, 5300, 6050, 6850, 7700, 8600, 9550];
  const maxlevel = levelExp.length;
  for (const key in levelExp) {
    if (experience < levelExp[key]) return Number(key) + 1;
  }
  return maxlevel;
};
