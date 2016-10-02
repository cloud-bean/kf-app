import Vue from 'vue';
import App from './App';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


import RankPage from './pages/Ranklist';
import loginPage from './pages/Login';

/* eslint-disable no-new */

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// });


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.directive('echarts', require('./directives/echarts'));

const router = new VueRouter();

router.map({

  '/rank': { component: RankPage },
  '/auth': { component: loginPage },

});

router.start(App, 'app');

