<template>

  <info :user="user"></info>
  <div class="content-block-title mytitle">任务列表</div>
  <div class="tasklist" >
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
</style>
