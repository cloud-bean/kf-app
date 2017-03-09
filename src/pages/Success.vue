<template lang="html">
<div class="center">
  <i class="fa fa-check-circle my-icon" aria-hidden="true"></i>
  <p>操作完成</p>
  <mt-button @click="handleClick" type="default" size="large" plain>返回评分列表</mt-button>
</div>

</template>

<script>
export default {
  methods:{
    handleClick(){
      this.$router.push('/teacherOrderList')
    }
  }
}
</script>

<style lang="css" scoped>
.my-icon{
  font-size: 10rem;
  color: #4FC1E9;
}
.center{
  text-align: center;
  padding: 2rem;
}
</style>
