<template>
  <div class="">
    <div v-for="task in tasks" :key="task._id">
      <new-student-task-item :taskdata="task" @click.native="handleClick(task)"></new-student-task-item>
    </div>
  </div>

</template>


<script>
    import newStudentTaskItem from '../components/newStudentTaskItem';
    // import { getTaskList, taskDetail } from '../vuex/actions';
    // const wx = require('weixin-js-sdk');
    import { mapActions } from 'vuex';

    export default{
      props: ['tasks'],
      components: {
        newStudentTaskItem,
      },
      data() {
        return {
          // loading:false,
          // hasMore:true,
        };
      },
      created() {

      },
      mounted() {

      },
      methods: {
        ...mapActions([
          'getTaskList',
          'taskNewStudentDetail',
          'getAllTaskList',
          'cleanTaskList',
          'changeNavbar',
        ]),

        handleClick(task) {
          this.taskNewStudentDetail(task._id);
          this.$router.push('/taskDetail');
        },
      },
      computed: {
      },
    };
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
