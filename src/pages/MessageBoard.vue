<template lang="html">
  <div class="content-padded">
    <message-input></message-input>
    <div class="message-item">
      <message-item></message-item>
    </div>
    <div class="message-item">
      <message-item></message-item>
    </div>
    <div class="message-item">
      <message-item></message-item>
    </div>
    <div class="message-item">
      <message-item></message-item>
    </div>

  </div>

</template>

<script>
import MessageItem from '../components/UserMessageItem';
import MessageInput from '../components/MessageInput';

export default {
  components: {
    MessageItem,
    MessageInput,
  }

}
</script>

<style lang="css">
.message-item {
  margin-top: 1rem;
}
</style>
