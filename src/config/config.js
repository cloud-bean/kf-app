export default {
  appid: 'wxb3762a929cf9e070',
  // appid: 'wxf8e294c011cd47e1', // dev
    // appsecret: '0a607b7dc2ff4fa027b8594a99f9e086',
  // openid: 'oBSpWs96E0WY7ZI63zOzxjR1ap7w', // xinxin
  openid: 'oBSpWs4ypPXs-dLdOqf-lgNYvmHw', // 康老师
  // openid: 'oBSpWsx1zRDhDuDwptpV9ANkVdLM', // ghh
  server: {
    midServer: 'https://joywill.cc',
    bigServer: 'https://joywill.cc/api',
    bigServerV2: 'https://joywill.cc/v2',
    // bigServer: 'http://127.0.0.1:7000/api/base',
    // bigServerV2: 'http://localhost:7000/api/v2',
    gameBoardServer: 'http://127.0.0.1:3000',

    // midServer: 'http://dev.joywill.cc',
    // midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
    // bigServer:'http://192.168.0.153:7000/api/base',
    // midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123',
  },
  secret: {
    accessToken: 'b8a94cfea5924d9650d4a72e8b10137f8a609c87d477f11ebe04b006ba427672',
    // userid: '581c96e5a5c363bc28af1a69',
    userid: '59ed737f3b601c873f41417a',
  },
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
