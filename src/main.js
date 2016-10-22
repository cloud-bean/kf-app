import Vue from 'vue';
import App from './App';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


import RankPage from './pages/Ranklist';
import loginPage from './pages/Login';
import TaskPage from './pages/Task';
// import InitPage from './pages/Init';
import ProfilePage from './pages/Profile';
import SignUpPage from './pages/Signup';
import TimeLine from './components/Timeline';



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
 // {
//     history: true,
//     hashbang: false,
//     linkActiveClass: 'active'
// })
// router.mode = 'html5'

router.map({
  // '/': { component: InitPage },
  '/timeline': { component: TimeLine },
  '/rank': { component: RankPage },
  '/auth': { component: loginPage },
  '/task': { component: TaskPage },
  '/signup': { component: SignUpPage },
  '/profile': { component: ProfilePage },
});

router.start(App, 'app');
