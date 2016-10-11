<template>

   <div class="content native-scroll">
              <!-- 这里是页面内容区 -->
          <div class="page-index">
            <ul>
              <li class="item-content" v-for="task in tasks">
                  <task-item :taskdata='task'></task-item>
              </li>
            </ul>

        </div>
    </div>
 </template>


<script>
    import TaskItem from '../components/TaskItem';
    import mockdata from '../../test/mock';
    export default{
        components:{
            TaskItem,
        },
      data(){
          return {
              tasks:mockdata.task
          };
      }

    }
</script>


<style scoped>
.vs {
  /* Keep 记录: */
  font-size: 14px;
  color: #141515;
  background-color:green;
}
ul {
  list-style-type: none;
  padding: 0;
}

</style>
