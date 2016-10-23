<template>

  <info :user="user"></info>
  <div class="content-block-title mytitle">任务列表</div>

  <div class="tasklist" >
    <p v-if="!tasks.length" class="no-task">
      暂无任务
    </p>
    <div v-for="task in tasks">
      <task-item :taskdata="task"></task-item>

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
              tasks:null,
              user:{},
          };
      },
      created(){
        this.user = JSON.parse(localStorage.getItem('kf_userInfo'));
        const accessToken = localStorage.getItem('kf_accessToken');
        if(!this.tasks){
          util.getTaskList(accessToken)
          .then((res)=>{
            this.tasks = res;
            const taskNotDone =  this.tasks.filter((item) => {
              return (!item.isDone);
            })
            console.log(taskNotDone);
            this.$dispatch('tasknum', taskNotDone.length);
          })
        }
      },


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
