<template>

  <info :user="user"></info>
  <div class="example">
		<h4 class="example-title">Task Records</h4>
        <div class="row">
		  <div class="col-md-12">
			  <div class="timeline">
				  <dl>
            <dd v-for="task in tasks" class="pos-right clearfix">
              <task-item :taskdata='task'></task-item>
            </dd>
				  </dl>
			  </div>
		  </div>
		</div>
    </div>

   <!-- <div class="content native-scroll">
          <div class="page-index">
            <ul>
              <li class="item-content" v-for="task in tasks">
                  <task-item :taskdata='task'></task-item>
              </li>
            </ul>

        </div>
    </div> -->
 </template>


<script>
    import TaskItem from '../components/TaskItem';
    import mockdata from '../../test/mock';
    import Info from '../components/Head';
    import Exp from '../components/Expbar';
    import { spinner } from 'vue-strap'

    export default{
        components:{
            TaskItem,
            Info,
            Exp,
            spinner,
        },
      data(){
          return {
              tasks:mockdata.task,
              user:{},
          };
      },
      created(){
        this.user = localStorage.getItem('kf_userInfo');
      },


    }
</script>


<style scoped>

</style>
