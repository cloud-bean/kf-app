<template lang="html">
  <div class="input-area">

  <div class="">
    讨论区
  </div>
  <textarea class="message-input" v-model="comment"></textarea>
  <div class="row">

      <button v-on:click="leaveMessage" class="button button-fill button-success leave-message-button">留言</button>

  </div>
</div>

</template>

<script>

export default {
  vuex: {
    getters: {
      activeTask: state => state.activeTask,
    }
  },
  props:['handleClick'],
  data(){
    return {
      comment:'',
    }
  },
  methods: {
    leaveMessage(){
      if(this.comment === ''){
        $.alert('总还是要说点什么吧，科科')
      }
      // else if(this.comment.length>280){
      //   $.alert('话那么多，哼')
      // }
      else{
        this.handleClick(this.comment, this.activeTask._id)
        .then(()=>{
          this.comment = '';
          this.$router.push('/taskDetail');
        })

      }
    }
  }

}
</script>

<style lang="css" scoped>
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
textarea{
  resize: none;
}
</style>
