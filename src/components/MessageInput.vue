<template lang="html">
  <div class="input-area">
    讨论区
  <!-- <textarea class="message-input" v-model="comment"></textarea> -->
  <mt-field v-model="comment" type="textarea" rows="4"></mt-field>


      <!-- <button v-on:click="leaveMessage" class="button button-fill button-success leave-message-button">留言</button> -->
  <mt-button type="primary" size="large"  @click="leaveMessage">留言</mt-button>

</div>

</template>

<script>
import { Toast } from 'mint-ui';
export default {
  // vuex: {
  //   getters: {
  //     activeTask: state => state.activeTask,
  //   }
  // },
  props:['handleClick','task'],
  data(){
    return {
      comment:'',
    }
  },
  methods: {
    async leaveMessage(){
      console.log(this.comment);
      console.log(this.task._id);
      if(this.comment === ''){
        Toast('说点啥呢？');
      }else{

        await this.handleClick({ content:this.comment, taskId:this.task._id });
        this.comment = '';
        this.$router.push('/taskDetail');
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
  background-color: #eef;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15rem;
}

</style>
