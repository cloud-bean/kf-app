<template lang="html">
  <div class="message-item">
      <div class="headimg">
          <img :src="data.user.profileImageURL"  class="userhead" alt="" />
      </div>
      <div class="content">
        <div class="username">
          {{data.user.displayName}} <span class="time">@ {{data.created | dateFormat}}</span>
        </div>
        <div class="message">
            {{data.content}}
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
.message-item{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /*align-items: center;*/
  padding: 0.3rem 0.5rem;
  background-color: #F0F8FF;
  width: 92%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  border-radius: 5px;

}
.headimg{
  width:15%;
}
.content{
  padding-left:0.5rem;
  width:75%;
}
.userhead {
  width: 100%;
}
.username{
  font-size: 0.8rem;
  color: #777;
  width: 100%;
}
.message{
  font-size: 0.8rem;
  width: 100%;
}
.time{
  font-size: 0.5rem;
  color: #999;
}
</style>
