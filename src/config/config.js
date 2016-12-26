export default {
  appid: 'wxb3762a929cf9e070',
  // appid: 'wxf8e294c011cd47e1',

  // appsecret: '0a607b7dc2ff4fa027b8594a99f9e086',
  server:{
    midServer:'http://joywill.cc',
    // midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
    bigServer:'http://120.25.227.156:7000/api/base',
    // bigServer:'http://192.168.0.162:7000/api/base',
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123',
  },
  secret: {
    accessToken: '1eaeef7057e38eeb1df31387d33916944cc0e92e52b300fcf533ace27fc44e8a',
    userid: '5817407d2a2d3adc2032290e',
  },
  task:{
    limit:10,
  },
};
