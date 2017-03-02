<template lang="html">
  <message-input :handle-click="leaveComment" :task='activeTask'></message-input>
</template>

<script>
import MessageInput from '../components/MessageInput';
// import { leaveComment } from '../vuex/actions';
import {mapState, mapActions} from 'vuex';
export default {
  components: {
    MessageInput,
  },
  methods: mapActions(
    ['leaveComment'],
  ),
  computed: mapState({
    activeTask: state => state.task.activeTask,
  }),
  // vuex: {
  //   actions: {
  //     leaveComment,
  //   },
  // },
}
</script>

<style lang="css">
</style>
