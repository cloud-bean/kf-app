<template lang="html">
  <div>
    <!-- <mt-cell :title="orderData.student.displayName" :label="orderData.task.name" is-link></mt-cell> -->

    <div class="white-bg">
        <p ><span class="name">[{{orderData.student.displayName}}]</span> 提交答案</p>
        <p>{{orderData.created | dateFormat}}</p>
        <p>{{orderData.task.name}}</p>
    </div>
    </div>
</template>

<script>
export default {
  props:['orderData'],
  data(){
    return {
    }
  },
}
</script>

<style lang="css" scoped>

.white-bg{
  padding: 0.5rem;
  font-size: 14px;
}
p{
  margin: 0.2rem;
}
.name{
  color: blue;
}

</style>
