<template lang="html">
  <div class="content-padded">
    <div class="row">
      <div class="col-15">
          <img :src="data.user.profileImageURL"  class="userhead" alt="" />
      </div>
      <div class="col-85">
        <div class="username">
          {{data.user.displayName}} <span class="time">@ {{data.created | dateFormat}}</span>
        </div>
        <div class="message">
            {{data.content}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:['data'],
}
</script>

<style lang="css" scoped>
.userhead {
  width: 2.3rem;
}
.username{
  font-size: 0.7rem;
  color: #777;
  width: 100%;
}
.message{
  font-size: 0.7rem;
  width: 100%;
}
.time{
  font-size: 0.5rem;
  color: #999;
}
</style>
