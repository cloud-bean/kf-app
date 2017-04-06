<template>
<div class="">

  <!-- <info :user="user"></info> -->
  <div class="blue-bg">
    任务列表
    <!--<div class="task-info">
      {{taskQuantityInfo.totalDone}} <span class="grey-small">个任务</span>

    </div>-->
  </div>
  <!--<mt-progress :value="progress" :barHeight='2'>

  </mt-progress>-->

  <!-- <p><a v-on:click="scan" class="button">scan</a></p> -->
  <!--<div class="Grid -around -middle button-area">
    <div class="Cell -5of12">
      <mt-button size="large" type="primary" plain>进行中</mt-button>
    </div>
    <div class="Cell -5of12">
      <mt-button size="large" type="primary" plain>已完成</mt-button>
    </div>
  </div>-->
  <div class="button-area">
  <mt-navbar v-model="selected">
    <mt-tab-item id="1" @click.native="showTaskProcess">
     <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
      进行中
    </mt-tab-item>
    <mt-tab-item id="2" @click.native="showAllTask">
      <i class="fa fa-check-circle" aria-hidden="true"></i>
      近期完成
      </mt-tab-item>
    </mt-navbar>
  </div>
 
  <div class="tasklist" >
    <p v-if="tasks.length==0" class="no-task">
      暂无任务
    </p>
    <!--<div
      v-infinite-scroll="loadMoreTask"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      >-->
      <div>
      <div v-for="(task, index) in tasks">
        <task-item :taskdata="task" @click.native="handleClick(index)"></task-item>
      </div>
    </div>
  </div>


  <!-- <div v-show="hasMore" class="load-more">
    <mt-button @click="loadMoreTask" size="large" type="primary" icon="more" plain>加载更多</mt-button>
  </div>
  <div v-show="!hasMore" class="load-more">
    <mt-button  size="large" type="primary" plain disabled>没有更多任务</mt-button>
  </div> -->
</div>
</div>

 </template>


<script>
    import TaskItem from '../components/TaskItem';
    import mockdata from '../../test/mock';
    import util from '../config/util';
    // import { getTaskList, taskDetail } from '../vuex/actions';
    // const wx = require('weixin-js-sdk');
    import { mapState, mapActions } from 'vuex';


    export default{
      components: {
        TaskItem,
      },
      data(){
          return {
            loading:false,
            hasMore:true,
            // selected:'1',
          };
      },
      created(){

      },
      mounted(){
        this.$nextTick(() => {
          this.init();
        });
      },
      methods: {
        ...mapActions([
          'getTaskList',
          'taskDetail',
          'getAllTaskList',
          'cleanTaskList',
          'changeNavbar',
        ]),
        async init(){
          if(this.tasks.length==0){
           await this.getTaskList();
          }
        },
        handleClick(index){
          this.taskDetail(index);
          this.$router.push('/taskDetail');
        },
        async showTaskProcess(){
          this.changeNavbar('1')
          this.cleanTaskList();
          await this.getTaskList('process');
        },
        async showAllTask(){
          this.changeNavbar('2')
          this.cleanTaskList();
          await this.getAllTaskList(this.page);
        },
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
        loadMoreTask(){
          if(this.selected=='1'){
          
          }else if(this.selected=='2'){

             if(this.hasMore){
            this.loading = true;
            this.getAllTaskList(this.page)
            .then(res => {
              if(res.length < 20){
                this.hasMore = false;
              }
              this.loading = false;
            });
          }

          }
         
           
        },
      },
      computed: {
        ...mapState({
          tasks: state => state.task.tasks,
          taskQuantityInfo: state => state.task.taskQuantityInfo,
          page: state => state.task.page,
          selected: state => state.task.selected,
        }),
        // progress(){
        //   return 100*this.taskQuantityInfo.totalDone/this.taskQuantityInfo.totalCount;
        // }
      }
      // vuex: {
      //   getters: {
      //     // user: state => state.user,
      //     tasks: state => state.tasks,
      //     taskInfo: state => state.taskInfo,
      //   },
      //   actions: {
      //     getTaskList,
      //     taskDetail,
      //   }
      // }
    }
</script>


<style scoped>
.mytitle{
  margin-top: 1rem;
}
.tasklist{
  font-size: 1rem;
}
.no-task{
  margin-top: 1rem;
  margin-left: 1rem;

}
.load-more{
  margin: 0.5rem auto;
  width: 350px;
  /*padding-left: 0.5rem;*/
  /*padding-right: 0.5rem;*/
}
.blue-bg{
  /*font-size: 0.7rem;*/
  /*height: 0.8rem !important;*/
  color: #ffffff;
  background-color: #26a2ff;
  padding: 1rem;
  font-size: 1rem;
}
.task-info{
  text-align: center;
  font-size: 2rem;
}
.grey-small{
  font-size: 0.3rem;
}

</style>
