<template>
<div class="">

  <!-- <info :user="user"></info> -->
  <div class="blue-bg">
    已完成
    <div class="task-info">
      {{taskQuantityInfo.totalDone}} / {{taskQuantityInfo.totalCount}}<span class="grey-small"></span>

    </div>
  </div>
  <mt-progress :value="progress" :barHeight='2'>

  </mt-progress>
  <!-- <p><a v-on:click="scan" class="button">scan</a></p> -->

  <div class="tasklist" >
    <p v-if="tasks.length==0" class="no-task">
      暂无任务
    </p>
    <div
      v-infinite-scroll="loadMoreTask"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0">
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
            page:0,
            loading:false,
            hasMore:true,
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
        ]),
        async init(){
          // if(this.tasks.length==0){
          //  await this.getTaskList(this.page)
          // }
        },
        handleClick(index){
          console.log(index);
          this.taskDetail(index);
          this.$router.push('/taskDetail');
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
            this.loading = true;
            this.page++;
            this.getTaskList(this.page)
            .then(res => {
              if(res.length < 10){
                // console.log(res.length);
                this.hasMore = false;
              }
              this.loading = false;
            });
          },
      },
      computed: {
        ...mapState({
          tasks: state => state.task.tasks,
          taskQuantityInfo: state => state.task.taskQuantityInfo,
        }),
        progress(){
          return 100*this.taskQuantityInfo.totalDone/this.taskQuantityInfo.totalCount;
        }
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
  font-size: 0.5rem;
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
  font-size: 0.5rem;
}
.task-info{
  text-align: center;
  font-size: 2rem;
}
.grey-small{
  font-size: 0.3rem;
}
</style>
