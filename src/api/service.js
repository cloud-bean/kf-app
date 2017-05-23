const axios = require('axios');
import config from '../config/config';
import store from '../vuex/store';


const service = axios.create({
    baseURL: config.server.bigServer, // api的base_url
    timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {  // Do something before request is sent
    if (store.state.accessToken) {
      config.headers['Authorization'] = `Bearer ${store.state.accessToken}`; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config;
  },
  error => {  // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
)

// respone拦截器

service.interceptors.response.use(
    response => response,
    error => {
      console.log('err' + error);
      return Promise.reject(error);
    }
  )

export default service;
