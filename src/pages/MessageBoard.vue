<template lang="html">
  <div class="">
    <message-input></message-input>
    <div class="content-padded">
      <div v-for="feedback in feedbacks" class="message-item">
        <message-item :data="feedback"></message-item>
      </div>
    </div>
  </div>

</template>

<script>
import MessageItem from '../components/MessageItem';
import MessageInput from '../components/MessageInput';
import { getFeedbacks } from '../vuex/actions';
export default {
  components: {
    MessageItem,
    MessageInput,
  },
  vuex: {
    getters: {
      feedbacks: state => state.feedbacks,
    },
    actions: {
      getFeedbacks,
    }
  },
  mounted(){
    this.$nextTick(()=>{
      if(this.feedbacks.length == 0){
        $.showPreloader('加载中...');
        this.getFeedbacks()
        .then(res => {
          $.hidePreloader();
        });
      }
    })
  },


}
</script>

<style lang="css">
.message-item {
  margin-top: 0.8rem;
}
</style>
