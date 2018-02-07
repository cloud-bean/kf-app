import Vue from 'vue';
import VueRouter from 'vue-router';
import RankPage from '../pages/Ranklist';
import TaskPage from '../pages/Task';
import InitPage from '../pages/Init';
import ProfilePage from '../pages/Profile';
import SignUpPage from '../pages/Signup';
import TaskDetailPage from '../pages/TaskDetail';
import CommentInputPage from '../pages/CommentInput';
import TeacherOrderListPage from '../pages/TeacherOrderList';
import TeacherOrderDetailPage from '../pages/TeacherOrderDetail';
import SuccessPage from '../pages/Success';
import CardBagPage from '../pages/cardBag';
import newsDetailPage from '../pages/NewsDetail';
import marketPage from '../pages/Market';
import recordVoicePage from '../pages/RecordVoice';
import introPage from '../pages/Intro';
import gameBoardPage from '../pages/gameBoardPage';


// import CardBagPage from '../components/Card';


Vue.use(VueRouter);
// Vue.directive('echarts', require('./directives/echarts'));

// {
//     history: true,
//     hashbang: false,
//     linkActiveClass: 'active'
// })
// router.mode = 'html5'

export default new VueRouter({
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
    { path: '/success', component: SuccessPage },
    { path: '/cardBag', component: CardBagPage },
    { path: '/newsDetail', component: newsDetailPage },
    { path: '/market', component: marketPage },
    { path: '/recordVoice', component: recordVoicePage },
    { path: '/intro', component: introPage },
    { path: '/match', component: gameBoardPage },

  ],
});
