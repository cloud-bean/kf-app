<template lang="html">
  <div class="">

  <div class="card demo-card-header-pic">
   <div valign="bottom" class="card-header color-white no-border no-padding">
     <div class="image-wrapper">
       <img class='card-cover' :src="task.titleImage.URL" style="height:8rem;"  alt="">
       <div class="image-content">
         <span class="task-title">{{task.name}}</span>
       </div>
     </div>
   </div>
   <div class="card-content">
     <div class="card-content-inner">
       <ul>
         <li>发布 {{task.created | dateFormat}}</li>
         <li>过期 {{task.expireTime | dateFormat}}</li>
         <li>类型 {{task.type}}</li>
       </ul>
       <div class="description">
         <h1 class="grey">任务详情:</h1>
         <div  v-html="tansMarkdown(task.description)">

         </div>
         <!-- <h1 class="grey">老师评价:</h1> -->
         <!-- {{task}} -->
       </div>
       <!-- <div class="answer">
         <div class="row">
           <div class="col-50">
             <a v-on:click="photo" class="button button-success"><i class="fa fa-camera fa-lg "></i> 拍照提交</a>
           </div>
           <div class="col-50">
             <a v-on:click="record" class="button button-success"><i class="fa fa-microphone fa-lg"></i> 录音提交</a>
           </div>
         </div>
       </div> -->
       <p><a v-on:click="photo" class="button button-success"><i class="fa fa-camera fa-lg "></i> 拍照提交</a></p>

       <p><a v-on:click="handleComment" class="button">讨论任务</a></p>
     </div>

   </div>
   <div class="card-footer">
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

const markdown = require('markdown').markdown;

// import { getComments, leaveComment, submitOrder } from '../vuex/actions';

export default {
  data: function () {
    return {
    }
  },
  components: {
    MessageItem,
    HeadList
  },
  computed: mapState({
    task : state => state.task.activeTask,
    comments: state => state.task.activeComments,
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
      console.log(this.task._id);
      await this.submitOrder(this.task._id)
      await this.leaveComment({content:'我上传了作业', taskId:this.task._id})
      $.toast("提交作业成功");
    },
    record(){
      wx.startRecord();
    },
  },
}
</script>

<style lang="css" scoped>
.image-content{
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
.description h1{
  font-size: 1rem;
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
}
</style>
