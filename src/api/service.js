const axios = require('axios');
import config from '../config/config';
import store from '../vuex/store';

const service = axios.create({
  baseURL: config.server.bigServer, // api的base_url
  timeout: 5000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  req => {
    // Do something before request is sent
    // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    const Authorization = `Bearer ${store.state.accessToken}`;
    if (store.state.accessToken) {
      return {
        ...req,
        headers: {
          ...req.headers,
          Authorization,
        },
      };
    }
    return req;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器

service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error);
    return Promise.reject(error);
  }
);

const serviceV2 = axios.create({
  baseURL: `${config.server.bigServerV2}`, // api的base_url
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// request拦截器
serviceV2.interceptors.request.use((req) => {
    // Do something before request is sent
    // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  const Authorization = `Bearer ${store.state.accessToken}`;
  if (store.state.accessToken) {
    return {
      ...req,
      headers: {
        ...req.headers,
        Authorization,
      },
    };
  }
  return req;
}, (error) => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
},
);

// respone拦截器
serviceV2.interceptors.response.use(response => response, (error) => {
  console.log(`err: ${error}`);
  return Promise.reject(error);
},
);
const midService = axios.create({
  baseURL: `${config.server.midServer}`, // api的base_url,
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});


export {
  service,
  serviceV2,
  midService,
};
