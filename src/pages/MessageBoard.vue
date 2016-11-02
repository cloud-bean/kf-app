<template lang="html">
  <message-input></message-input>
  <div class="content-padded">
    <div v-for="feedback in feedbacks" class="message-item">
      <message-item :data="feedback"></message-item>
    </div>
  </div>
</template>

<script>
import MessageItem from '../components/UserMessageItem';
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
  created(){
    this.getFeedbacks();
  }


}
</script>

<style lang="css">
.message-item {
  margin-top: 0.8rem;
}
</style>
