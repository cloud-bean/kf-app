<template>

  <info :user="user"></info>
  <div class="content-block-title mytitle">任务列表</div>
  <p><a v-on:click="scan" class="button">scan</a></p>

  <div class="tasklist" >
    <p v-if="tasks.length==0" class="no-task">
      暂无任务
    </p>
    <div v-for="task in tasks">
      <task-item :taskdata="task" v-on:click="handleClick($index)"></task-item>

    </div>


  </div>

 </template>


<script>
    import TaskItem from '../components/TaskItem';
    import mockdata from '../../test/mock';
    import Info from '../components/HeadInfo';
    import Exp from '../components/Expbar';
    import Timeline from '../components/Timeline';
    import util from '../config/util';
    import { getTaskList, taskDetail } from '../vuex/actions';
    const wx = require('weixin-js-sdk');

    import { spinner } from 'vue-strap'

    export default{
        components:{
            TaskItem,
            Info,
            Exp,
            spinner,
            Timeline,
        },
      data(){
          return {
          };
      },
      created(){


      },
      ready(){
        // if(this.tasks.length==0){
          $.showPreloader('加载中...');
          this.getTaskList()
          .then(res => {
            $.hidePreloader();
          })
          .catch(err => {
              console.log(err);
          });
        // }
      },
      methods: {
        handleClick(index){
          this.taskDetail(index);
          this.$router.go('/taskDetail');
        },
        scan(){
          wx.onMenuShareTimeline({
            title: 'joywill', // 分享标题
            link: 'joywill.cc', // 分享链接
            imgUrl: '', // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          });
        },
      },
      vuex: {
        getters: {
          user: state => state.user,
          accessToken: state => state.accessToken,
          tasks: state => state.tasks,
        },
        actions: {
          getTaskList,
          taskDetail,
        }
      }


    }
</script>


<style>
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
</style>
