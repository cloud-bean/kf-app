<template>
  <div  v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
  <div v-for="(task, index) in tasks">
    <task-item :taskdata="task" @click.native="handleClick(index)"></task-item>
  </div>
</div>
 </template>


<script>
    import TaskItem from '../components/TaskItem';
    // import { getTaskList, taskDetail } from '../vuex/actions';
    // const wx = require('weixin-js-sdk');
    import { mapState, mapActions } from 'vuex';

    export default{
      props:['tasks'],
      components: {
        TaskItem,
      },
      data(){
          return {
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
