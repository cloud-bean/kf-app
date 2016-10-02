import Vue from 'vue';
import App from './App';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import ViewA from './components/Chart';
import ViewB from './pages/Profile';
import ViewC from './pages/Ranklist';
import ViewD from './pages/Records';

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
  '/a': { component: ViewD },
  '/b': { component: ViewB },
  '/c': { component: ViewC },
  '/d': { component: ViewA },

});

router.start(App, 'app');

