export default {
    appid: 'wxb3762a929cf9e070',
    appid_dev: 'wxf8e294c011cd47e1',
    // appsecret: '0a607b7dc2ff4fa027b8594a99f9e086',
    server: {
        midServer: 'http://dev.joywill.cc',
        // midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
        bigServer: 'http://120.25.227.156:7000/api/base',
        //bigServer:'http://192.168.0.153:7000/api/base',
        //midServer:'http://sab4h63cag.proxy.qqbrowser.cc',
    },
    route: {
        auth: '/admin',
        weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        testRedirect: 'http://localhost:8080?code=123',
    },
    secret: {
        accessToken: '40569602fd214376fccc542dcbdb5e4dd3d788607fe673abeabaef94c44e063c',
        //  userid: '58306c044238e8014a52ce05',
        // userid:'583a8905bb1a619b3b2b1d34',//张彦云
        //  userid:'581717002a2d3adc2032206e',//崔
        // userid: '58cf339913a9ca10230e1d25',
        // userid: '58306c044238e8014a52ce05',
        userid: '5817407d2a2d3adc2032290e',
    },
    task: {
        limit: 30,
    },
    rank: {
        limit: 20,
    },
};