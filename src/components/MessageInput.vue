<template lang="html">
  <div class="input-area">

  <div class="">
    留言板
  </div>
  <textarea class="message-input"></textarea>
  <div class="row">

      <a href="#" class="button button-fill button-success leave-message-button">留言</a>

  </div>
</div>

</template>

<script>
export default {
}
</script>

<style lang="css">
.leave-message-button{
  width: 5rem;
  float: right;
}
.message-input{
  width: 100%;
  height: 5rem;
  font-size: 0.6rem;
  padding: 0.5rem;

}
.input-area{
  padding: 0.5rem;
}
</style>
