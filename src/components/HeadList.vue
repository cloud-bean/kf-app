<template lang="html">
  <div class="">

  <ul>
    <li v-for="user in shortList">
      <img :src="user.profileImageURL" alt="" />
    </li>

  </ul>
  {{userList.length}}人完成任务
<div class="clearfix">

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
ul {
  margin: 0;
  padding: 0;
  vertical-align: bottom;

}
ul li {
  list-style-type: none;
  float: left;
  margin-left: 0.1rem;
}
ul li img{
  border: 1px solid #fff;
  border-radius:50%;
  width: 1.5rem;
}
.clearfix{
  clear: both;
}
</style>
