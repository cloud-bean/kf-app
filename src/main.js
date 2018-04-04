require('weixin-js-sdk');

import Vue from 'vue';
import App from './App';
import router from './router';
import { expire, dateFormat, level, timefromNow } from './filter';
import store from './vuex/store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import animate from 'animate.css';

Vue.use(animate);
Vue.use(MintUI);


Vue.filter('dateFormat', dateFormat);
Vue.filter('expire', expire);
Vue.filter('level', level);
Vue.filter('timefromNow', timefromNow);


export const vue = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
