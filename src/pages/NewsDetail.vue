<template lang="html">
  <div class="news-detail">
  <div class="news-image">
    <img :src="news.file.URL+'?imageView2/2/w/400/h/200/q/75|imageslim'" alt="" class="back-img"/>
  </div>
  <div class="title">
    {{news.name}}
  </div>
  <div class="date">
    {{news.created | dateFormat}}
  </div>
  <div class="news-content markdown-desc">
          <div v-html="tansMarkdown(news.content)">

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

.title{
  font-size: 2rem;
  color: #ccc;
  padding: 0rem 1.5rem;
}
.date{
  color: #ccc;
  padding: .3rem 1.5rem;
  font-size: .8rem;

}
.back-img{
  width: 100%;
  height:180px;
}

</style>
