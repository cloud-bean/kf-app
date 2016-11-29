export default {
  appid: 'wxb3762a929cf9e070',
  // appid: 'wxf8e294c011cd47e1',

  // appsecret: '0a607b7dc2ff4fa027b8594a99f9e086',
  server:{
    midServer:'http://joywill.cc',
    // midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
    bigServer:'http://120.25.227.156:7000/api/base',
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123',
  },
  secret: {
    accessToken: '17ca48f2a0ba3d7a993312031a3de2832ee4fcab8f8238fbc4fe2fce3ac54530',
    userid: '5817407d2a2d3adc2032290e',
  },
  task:{
    limit:10,
  },
};
