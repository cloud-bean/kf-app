require('weixin-js-sdk');

import Vue from 'vue';
import App from './App';
import router from './router';
import { dateFormat1, dateFormat, level } from './filter';
import store from './vuex/store';

Vue.filter('dateFormat', dateFormat);
Vue.filter('dateFormat1', dateFormat1);
Vue.filter('level', level);

export const vue = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
