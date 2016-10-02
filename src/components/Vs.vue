<template>
    <div class="vs">
        {{user}} vs {{user}}
    </div>

</template>

<script>
    export default{
      data(){
          return {
              user:'咸蛋超人'
          }
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