export default {
  appid: 'wxb3762a929cf9e070',
  //appid: 'wxf8e294c011cd47e1',

  // appsecret: '0a607b7dc2ff4fa027b8594a99f9e086',
  server:{
    midServer:'http://joywill.cc',
    // midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
    bigServer:'http://120.25.227.156:7000/api/base',
    //bigServer:'http://192.168.0.153:7000/api/base',
    //midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123',
  },
  secret: {

    accessToken: 'a2a9f061b9b04a9ce75eae70b40b1846eccaf08763830e611064209bb2c3a8a6',
  //  userid: '58306c044238e8014a52ce05',

    userid: '5817407d2a2d3adc2032290e',
  },
  task:{
    limit:10,
  },
  rank:{
    limit:20,
  }
};
