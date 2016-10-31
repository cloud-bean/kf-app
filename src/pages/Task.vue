<template>

  <info :user="user"></info>
  <div class="content-block-title mytitle">任务列表</div>

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
        if(this.tasks.length==0){
          this.getTaskList()
            .catch(err => {
              console.log(err);
          });
        }

      },
      methods: {
        handleClick(index){
          this.taskDetail(index);
          this.$router.go('/taskDetail');
        }
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
