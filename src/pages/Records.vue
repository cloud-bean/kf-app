<template>
    <task :record=a></task>

</template>

<script>
    import Task from '../components/Task';
    export default{
        components:{
            Task,
        },
      data(){
          return {
              a:{
                  name:'听力训练',
                  point:15,
              }
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

</style>