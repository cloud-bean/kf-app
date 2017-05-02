const moment = require('moment');

export const dateFormat = (expireTime) => {
    const result = moment(expireTime).format('YYYY-MM-DD HH:mm');
    return result;
};
export const dateFormat1 = (expireTime) => {
    const expireTimel = new Date(expireTime);
    const now = new Date();
    const result = (expireTimel - now) > 0 ? moment(expireTime).format('YYYY-MM-DD HH:mm') : '已过期';
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
