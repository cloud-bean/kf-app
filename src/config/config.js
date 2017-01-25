export default {
  // appid: 'wxb3762a929cf9e070',
  appid: 'wxf8e294c011cd47e1',

  // appsecret: '0a607b7dc2ff4fa027b8594a99f9e086',
  server:{
    // midServer:'http://joywill.cc',
    // midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
    bigServer:'http://120.25.227.156:7000/api/base',
    // bigServer:'http://192.168.0.162:7000/api/base',
    midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123',
  },
  secret: {
    accessToken: '5e52ab6e3003edccc6a3d73cd43c77809967d7e13de566bdbc04a0bb80f7755f',
    userid: '58306c044238e8014a52ce05',
  },
  task:{
    limit:10,
  },
};
