<template lang="html">
  <message-input :handle-click="leaveComment"></message-input>
</template>

<script>
import MessageInput from '../components/MessageInput';
import { leaveComment } from '../vuex/actions';

export default {
  components: {
    MessageInput,
  },
  vuex: {
    actions: {
      leaveComment,
    },
  },
}
</script>

<style lang="css">
</style>
