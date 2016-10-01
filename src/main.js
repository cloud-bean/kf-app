import Vue from 'vue';
import App from './App';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import ViewA from './components/Hello';
import ViewB from './components/cb';
import ViewC from './pages/Ranklist';
import ViewD from './pages/Login';

/* eslint-disable no-new */

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// });


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter();

router.map({
  '/a': { component: ViewA },
  '/b': { component: ViewB },
  '/c': { component: ViewC },
  '/d': { component: ViewD },

});

router.start(App, 'app');

