<template lang="html">
  <div class="input-area">

  <div class="">
    任务讨论  
  </div>
  <textarea class="message-input" v-model="feedback"></textarea>
  <div class="row">

      <button v-on:click="handClick" class="button button-fill button-success leave-message-button">留言</button>

  </div>
</div>

</template>

<script>
import { leaveFeedback } from '../vuex/actions'

export default {
  vuex: {
    actions: {
      leaveFeedback,
    }
  },
  data(){
    return {
      feedback:'',
    }
  },
  methods: {
    handClick(){
      if(this.feedback === ''){
        $.alert('总还是要说点什么吧，科科')
      }else if(this.feedback.length>280){
        $.alert('话那么多，哼')
      }else{
        this.leaveFeedback(this.feedback);
        this.feedback = '';
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
