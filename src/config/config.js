const baseUrl = 'https://joybox-api.classmaster.cn';
const midServerURL = 'https://joybox.classmaster.cn';
// const baseUrl = 'http://127.0.0.1:7000';
// const midServerURL = 'http://127.0.0.1:5555';
export default {
  appid: 'wx9d399e46dcb4c0f9',
  server: {
    midServer: midServerURL,
    bigServer: `${baseUrl}/api`,
    bigServerV2: `${baseUrl}/v2`,
    // gameBoardServer: 'http://127.0.0.1:3000',
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123',
  },
  secret: {
    accessToken: 'b8a94cfea5924d9650d4a72e8b10137f8a609c87d477f11ebe04b006ba427672',
    userid: '59ed737f3b601c873f41417a',
  },
  openid: 'o-Jyvv3aUdYlVwRY8MyRCw5vhsQM', // 公众号的openid， 可以用来本地调试的用户
  // openid: 'o-Jyvv6oPTPHeVYZiGA8nE6JDAx0', // teacher
  task: {
    limit: 5,
  },
  activity: {
    limit: 20,
  },
  rank: {
    limit: 20,
  },
};
