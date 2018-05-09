<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
<div class="">
  <div class="user-info">

      <info :user="user" :rank="myRank.rankIndex"></info>

    <!--<div class="tip">
      <tips :tip="tip"></tips>
    </div>-->
    <!-- <div class="chart">
      <my-chart :my-chart-data="userRecords"></my-chart>
    </div> -->
<!--
      <mt-cell title="王者排行" label="快追上你的对手吧" is-link to="/rank">
       <mt-badge size="normal">第{{myRank.rankIndex}}名</mt-badge>
        <i class="fa fa-users" slot="icon" aria-hidden="true" ></i>
      </mt-cell>
      <mt-cell title="背包系统" label="拥有的所有物品" is-link to="/cardBag">
        <i class="fa fa-eercast" slot="icon" aria-hidden="true" ></i>
     </mt-cell>-->

    <!-- <div class="mask opacity" v-if="!user.providerData.unionid && display" @click="closeCard">
      <div class="info">
        为了给用户更好的使用体验，解决部分苹果用户的兼容问题，JoyBox团队加班设计及开发了悦盒的微信小程序
        ，需要大家对现有数据进行迁移，迁移完毕后可以继续使用公众号也可以使用悦盒小程序，感谢您对悦盒的支持和鼓励。
      </div>
      <div class="move-button">
          <mt-button type="default" size="large" class="move" @click="handleMove">迁移用户数据到小程序</mt-button>
      </div>
    </div> -->

     <!-- <div class="subItem">
     <img-cell :title-img="rankImg" title="王者排行" subtitle="查看您的排名" to="/rank"></img-cell>
     </div>
     <div class="subItem">
     <img-cell :title-img="bagImg" title="背包系统" subtitle="宝箱、卡牌" to="/cardBag"></img-cell>
     </div> -->
   </div>
   <div class="profile-content">

     <news-slider :news="news" :news-detail="newsDetail"></news-slider>

     <!-- <div class="button-area"> -->
     <!-- <mt-navbar v-model="selected">
       <mt-tab-item id="1" @click.native="showTaskProcess">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
         进行中
       </mt-tab-item>
       <mt-tab-item id="2" @click.native="showAllTask">
         <i class="fa fa-check-circle" aria-hidden="true"></i>
         近期完成
         </mt-tab-item>
       </mt-navbar>
     </div> -->
     <div class="new-student-tasks">
       <new-student-tasks :tasks="allNewStudentTasks"></new-student-tasks>
     </div>


     <div class="tasklist" >
       <p v-if="taskByDate.length==0" class="no-task">
         已完成所有挑战
       </p>
       <!--<div
         v-infinite-scroll="loadMoreTask"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10"
         >-->
         <div  v-infinite-scroll="loadMoreTask"
               infinite-scroll-disabled="loading"
               infinite-scroll-distance="10">

         <div class="task-date" v-for="(data, index) in taskByDate" :key="index">
           <div class="timeline-icon">
              <i class="fa fa-circle" aria-hidden="true" ></i>
              <span>{{data.date|dateFormat}}</span>
            </div>
            <!-- <transition enter-active-class="fadeInRight" leave-active-class="fadeOutRight"> -->

             <task-item v-for="(task) in data.tasks" class="task-item" :taskdata="task"
             :key="task._id"
             @click.native="handleClick(task._id)"></task-item>
           <!-- </transition> -->

         </div>

       </div>

     </div>
     <!-- <div class="more">
       <mt-button  type="default" size="large" plain>
         <i class="fa fa-caret-right" aria-hidden="true" slot="icon"></i>
         加载更多...
      </mt-button>
     </div> -->



     <!-- <div v-show="hasMore" class="load-more">
       <mt-button @click="loadMoreTask" size="large" type="primary" icon="more" plain>加载更多</mt-button>
     </div>
     <div v-show="!hasMore" class="load-more">
       <mt-button  size="large" type="primary" plain disabled>没有更多任务</mt-button>
     </div> -->
   </div>
   </div>

</div>


</template>

<script>
import Info from '../components/HeadInfo';
import MyChart from '../components/MyChart';
import Tips from '../components/Tips';
import NewsSlider from '../components/NewsSlider';
import imgCell from '../components/ImgCell';
import TaskItem from '../components/TaskItem';
import newStudentTasks from '../components/newStudentTasks';

const moment = require('moment');
moment.lang('zh-cn');
// import { getMyRecords } from '../vuex/actions';
// import rankImg from '../assets/rank.jpg';
// import bagImg from '../assets/bag.jpg';
import { api } from '../api';
import { MessageBox, Toast, Indicator } from 'mint-ui';
import { mapState, mapActions } from 'vuex';

// import Expbar from '../components/Expbar';
// import Chart from '../components/Chart';
import config from '../config/config';
// import util from '../config/util';
// import mockdata from '../../test/mock';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      // rankImg,
      // bagImg,
      display: true,
      loading: false,
      hasMore: true,
      selectedTasks: [],
    };
  },
  computed: {
    ...mapState({
      user: state => state.profile.user,
      userRecords: state => state.profile.userRecords,
      unionid: state => state.unionid,
      tip: state => state.profile.tip,
      news: state => state.news.news,
      myRank: state => state.rank.myRank,
      cards: state => state.card.cards,
      tasks: state => state.task.tasks,
      allNewStudentTasks: state => state.task.allNewStudentTasks,

      taskByDate: state => state.task.taskByDate,
      taskQuantityInfo: state => state.task.taskQuantityInfo,
      page: state => state.task.page,
      selected: state => state.task.selected,
    }),

  },
  // vuex: {
  //   getters: {
  //     user: state => state.user,
  //     myRecords: state => state.myRecords,
  //     tip: state => state.tip,
  //   },
  // },
  mounted() {
      this.getAllNewStudentTasks();
    // this.getAllTaskList(this.page);
    // this.selectedTasks = this.taskByDate.filter((data) => {
    //   const today = moment().startOf('day');
    //   // console.log(moment(data.date));
    //   if (moment(data.date).isSame(today, 'd')) return data;
    // });
    // console.log(this.selectedTasks);
  },
  methods: {
    ...mapActions([
      'newsDetail',
      'getTaskList',
      'taskDetail',
      'getAllTaskList',
      'cleanTaskList',
      'changeNavbar',
      'getAllNewStudentTasks',
    ]),
    loadAllTasks() {
      // this.selectedTasks = this.taskByDate;
    },
    async init() {
      // if(this.tasks.length == 0){
      //  await this.getAllTaskList(this.page);
      // }
    },
    handleClick(id) {
      this.taskDetail(id);
      this.$router.push('/taskDetail');
    },
    // async showTaskProcess(){
    //   this.changeNavbar('1')
    //   this.cleanTaskList();
    //   await this.getTaskList('process');
    // },
    // async showAllTask(){
    //   this.changeNavbar('2')
    //   this.cleanTaskList();
    //   await this.getAllTaskList(this.page);
    // },
    // scan(){
    //   wx.onMenuShareTimeline({
    //     title: 'joywill', // 分享标题
    //     link: 'joywill.cc', // 分享链接
    //     imgUrl: '', // 分享图标
    //     success: function () {
    //       // 用户确认分享后执行的回调函数
    //     },
    //     cancel: function () {
    //       // 用户取消分享后执行的回调函数
    //     }
    //   });
    // },
    loadMoreTask() {
      if (this.hasMore) {
        this.loading = true;
        this.getAllTaskList(this.page)
        .then(res => {
          if (res.type != 'error') {
            if (res.length < config.task.limit) {
              this.hasMore = false;
            }
            this.loading = false;
          }
        });
      }
    },
  },
  //   async handleMove(){
  //     const user = this.user;
  //     const unionid = this.unionid;
  //     const providerData = Object.assign({}, user.providerData, { unionid });
  //     const newuser = Object.assign({}, user, { providerData });
  //     await api.updateUserInfo(user._id, newuser);
  //     Indicator.open({
  //       text: '迁移中...',
  //       spinnerType: 'fading-circle'
  //     });
  //     await setTimeout(()=>{
  //       Indicator.close()
  //       Toast({
  //         message: '迁移成功！',
  //         iconClass: 'fa fa-check',
  //         duration: 1000,
  //       });
  //       this.display = false;
  //     },5000);
  //
  //   },
  //   closeCard(){
  //     this.display = false;
  //   }
  // },
  components: {
    Info,
    MyChart,
    Tips,
    NewsSlider,
    imgCell,
    TaskItem,
    newStudentTasks,
  },
};
</script>


<style scoped>
.move-button{
  padding: .5rem 1rem;
  margin-top: 2rem;
}
.info{
  color: #eee;
  margin-top: 10rem;
}
.move{
  margin: 0 auto;
}
.profile{
  /*background-color: #eef;*/
}
.chart{
  width: 100%;
}
.user-wrap{

}
.tip{
  position: relative;
  z-index: -1;
}
.new-area{
  margin-top: .5rem;
  margin-left: .3rem;
  margin-right: .3rem;

  /*background: #eee;*/
}
.subItem{
  margin-top: .5rem;
}
.mask{
  height:100%;
  width:100%;
  position:fixed;
  _position:absolute;
  top:0;
  left:0;
  z-index:998;
  text-align: center;
  padding: 2rem 2rem;
}
.tasklist{
  position: relative;
padding:  0 .5rem 0 2rem;

margin-top: 1rem;
}
.tasklist::before{
  content: '';
  position: absolute;
  top: 0;
  left: 1rem;
  height: 100%;
  width: 4px;
  background: #d7e4ed;
}
.timeline-icon{
  position: relative;
  font-size: .8rem;
  margin-left: -1.2rem;
  /* margin-top: -0.5rem; */

  color: #888;
}
.timeline-icon i{
  font-size: 0.8rem;
  color: #6F2DBD;
}
.task-item{
  margin-top: 0.3rem;
}
.user-info{
  position: fixed;
  width: 100%;
  top: 0;
  z-index:2;
}
.profile-content{
  margin-top: 7.5rem;
}
.task-date{
  margin-bottom: .5rem;
}
.more{
  width: 80%;
  margin: 0 auto;
}
.opacity{background:rgba(0,0,0,.5); }
</style>
