<template lang="html">
  <div class="">


  <div class="task-detail">
    <div class="task-title">{{task.name}}</div>
     <div class="task-head">
       <div>发布 {{task.created | dateFormat}}</div>
       <div>过期 {{task.expireTime | dateFormat}}</div>
       <div>类型 {{task.type}}</div>
    </div>
       <div id="task-desc">
          <div v-html="tansMarkdown(task.description)">

          </div>
          <div v-html="tansMarkdown(task.summary)" v-if="task.isDone">

          </div>
       </div>
       {{task.cardPool.description}}
       <div class="button-area">
         <mt-button @click="photo" type="default" size="large" plain>
            <i class="fa fa-camera " slot="icon"></i>
             拍照提交
         </mt-button>
          <mt-button @click="handleComment" type="default" size="large" plain>
            <i class="fa fa-commenting" slot="icon"></i>
            讨论任务</mt-button>
       </div>


     <div class="task-footer">
       <!-- <span>难度:{{task.difficult}}</span>
       <span>经验:{{task.exp}}</span>
       <span>金币:{{task.goldToken}}</span> -->
         <head-list :user-list="task.taskDoneUsers"></head-list>

     </div>
 </div>

 <div v-for="comment in comments" class="message-item">
   <message-item :data="comment"></message-item>
 </div>


</div>



</template>

<script>
import HeadList from '../components/HeadList';
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
    HeadList,
    Toast,
  },
  computed: {
      ...mapState({
        task : state => state.task.activeTask,
        comments: state => state.task.activeComments,
    }),

  },
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
    this.getComments(this.task._id);
  },
  methods: {
    ...mapActions([
      'getComments',
      'leaveComment',
      'submitOrder',
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
    async photo(){
      await this.submitOrder(this.task._id)
      await this.leaveComment({content:'我上传了作业', taskId:this.task._id})
      Toast({
        message: '作业提交成功',
        position: 'middle',
        duration: 3000
      });
    },
    record(){
      wx.startRecord();
    },
  },
}
</script>

<style lang="css" scoped>

.task-detail{
  /*padding: 0.5rem 0.5rem;*/
  /*background-color: #eef;*/

}
.task-title{
  padding: 1rem 1rem;
  font-size: 1.5rem;
  background-color: #26a2ff;
  opacity: 0.8;
  color: white;
}
.task-head{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 1rem;
  height: 5rem;
  background-color: #26a2ff;
  font-size: 0.8rem;
  color: white;
}
.task-content{
  padding: 1rem 1rem;
  background-color: #eef;
  font-size: 0.8rem;
/*color: blue;*/
}
.task-content h1 {
  color: red;
}
.button-area{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 1rem;
  height: 6rem;
  font-size: 1rem;
  background-color: #eef;
}
.task-footer{
  padding: 1rem 1rem;
  margin-bottom: 0.2rem;
}
.message-item{
}
/*.image-content{
position: absolute;
z-index: 1;
left: 0;
bottom:0;
width: 100%;
color: #fff;
background: rgba(0,0,0,.5);
height: 2rem;
line-height: 2rem;
overflow: hidden;
}
.task-title {
  margin-left: 1rem;
}
.image-wrapper{
  width: 100% !important;
  position:relative;
}

.description{
  width: 100%;
  word-break:normal;
  word-wrap:break-word;
  white-space: normal;
  font-size: 0.7rem;
}

.message-item {
  margin-top: 0.8rem;
}
.card-footer{
  background-color: #eee;
}
.answer{
  text-align: center;
  padding: 0.1rem 0;
}*/
h1 {
  color: red;
/*margin: 0 auto;*/
}
</style>
