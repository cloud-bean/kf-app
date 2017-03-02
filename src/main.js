require('weixin-js-sdk');

import Vue from 'vue';
import App from './App';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
const VueValidator = require('vue-validator');


import RankPage from './pages/Ranklist';
import TaskPage from './pages/Task';
import InitPage from './pages/Init';
import ProfilePage from './pages/Profile';
import SignUpPage from './pages/Signup';
import TaskDetailPage from './pages/TaskDetail';
import CommentInputPage from './pages/CommentInput';
import TeacherOrderListPage from './pages/TeacherOrderList';
import TeacherOrderDetailPage from './pages/TeacherOrderDetail';
import SucessPage from './pages/Sucess';

import { dateFormat1, dateFormat, level } from './filter';
/* eslint-disable no-new */

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// });
Vue.filter('dateFormat', dateFormat);
Vue.filter('dateFormat1', dateFormat1);
Vue.filter('level', level);

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);

// Vue.directive('echarts', require('./directives/echarts'));

 // {
//     history: true,
//     hashbang: false,
//     linkActiveClass: 'active'
// })
// router.mode = 'html5'

const router = new VueRouter({
  routes: [
    { path: '/', component: InitPage },
    { path: '/rank', component: RankPage },
    { path: '/task', component: TaskPage },
    { path: '/signup', component: SignUpPage },
    { path: '/profile', component: ProfilePage },
    { path: '/taskDetail', component: TaskDetailPage },
    { path: '/taskComment', component: CommentInputPage },
    { path: '/teacherOrderList', component: TeacherOrderListPage },
    { path: '/orderDetail', component: TeacherOrderDetailPage },
    { path: '/success', component: SucessPage },
  ],
});


new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
