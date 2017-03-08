<template lang="html">
  <div class="">
<div class="head-list">
  <div v-for="user in shortList">
    <img :src="user.profileImageURL" alt="" />
  </div>

</div>
<div class="">
  {{userList.length}}人完成任务
</div>

</div>

</template>

<script>
export default {
  props:['userList'],
  computed: {
  shortList: function () {
    return this.userList.slice(0,10);
  }
}
}
</script>

<style lang="css" scoped>
.head-list{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.head-list img {
  border-radius: 50%;
  width: 2rem;
  padding: 0.2rem 0.1rem;
}
</style>
