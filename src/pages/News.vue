<template lang="html">
  <div class="news-detail">
  <div class="news-image">
    <img v-bind:src="newsData.file.URL+'?imageView2/2/w/414/h/190/q/75|imageslim'" alt="" class="back-img"/>
  </div>
  <div class="news-content markdown-desc">
          <div v-html="tansMarkdown(task.description)">

          </div>
  </div>
<!--
 <div v-for="comment in comments" class="message-item">
   <message-item :data="comment"></message-item>
 </div>-->
</div>



</template>

<script>
import MessageItem from '../components/MessageItem';
import MessageInput from '../components/MessageInput';
import { mapState, mapActions } from 'vuex';
import { Toast } from 'mint-ui';
// import VueMarkdown from 'vue-markdown'

const markdown = require('markdown').markdown;

// import { getComments, leaveComment, submitOrder } from '../vuex/actions';

export default {
  data: function () {
    return {
    }
  },
  components: {
    MessageItem,
  },
  computed: mapState({
      news : state => state.news.activeNews,
    //   comments: state => state.task.activeComments,
  }),
  //
  // vuex: {
  //   getters: {
  //     task : state => state.activeTask,
  //     comments: state => state.activeComments,
  //   },
  //   actions: {
  //     getComments,
  //     leaveComment,
  //     submitOrder,
  //   }
  // },
  mounted() {
    // this.getComments(this.task._id);
  },
  methods: {
    ...mapActions([
      'getComments',
      'leaveComment',
    ]),
    tansMarkdown(content){
      return markdown.toHTML(content);
    },
    handleComment(){
      this.$router.push('/taskComment');
    },
    // postOrder(serverId){
    //   const data = {
    //     task:this.task._id,
    //     file:{
    //       filename:serverId,
    //       URL:serverId,
    //       type:0,
    //       created:Date.now(),
    //     }
    //   };
    //   return this.submitOrder(data);
    // },

  },
}
</script>

<style lang="css" scoped>


.back-img{
  width: 100%;
  height:180px;
}

</style>
