<template lang="html">
  <div>
    <div class="white-bg" v-if="orderData.task">
      <p ><span class="name">[{{orderData.student.displayName}}]</span> 提交答案#{{type}}</p>
      <p>{{orderData.created | dateFormat}}</p>
      <p>{{orderData.task.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['orderData', 'handleClick'],
  data(){
    return {
    }
  },
  computed:{
    type(){
      return (this.orderData.files[0].type == 0)?'图片':'语音';
    },
  }
}
</script>

<style lang="css" scoped>

.white-bg{
  font-size: 14px;
  background-color: aliceblue;
  margin: .5em;
  padding: .5em;
  /* border: 1px solid gray; */
}
p{
  margin: 0.2rem;
}
.name{
  color: blue;
}

</style>
