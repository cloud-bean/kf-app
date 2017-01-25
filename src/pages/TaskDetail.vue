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
       <div class="desc">
         <h1 class="grey">任务详情:</h1>
         <div v-html="tansMarkdown(task.description)">

         </div>
         <!-- <h1 class="grey">老师评价:</h1> -->
         <!-- {{task}} -->
       </div>
       <div class="answer">
         <div class="row">
           <div class="col-50">
             <a v-on:click="photo" class="button button-success"><i class="fa fa-camera fa-lg "></i> 拍照提交</a>
           </div>
           <div class="col-50">
             <a v-on:click="record" class="button button-success"><i class="fa fa-microphone fa-lg"></i> 录音提交</a>
           </div>
         </div>
       </div>
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

const markdown = require('markdown').markdown;

import { getComments, leaveComment, submitOrder } from '../vuex/actions';

export default {
  data: function () {
    return {
    }
  },
  components: {
    MessageItem,
    HeadList
  },
  vuex: {
    getters: {
      task : state => state.activeTask,
      comments: state => state.activeComments,
    },
    actions: {
      getComments,
      leaveComment,
      submitOrder,
    }
  },
  mounted() {
    this.getComments(this.task._id);
  },
  methods: {
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
    photo(){
      this.submitOrder(this.task._id)
      .then(() => {
        console.log('leave');
        return this.leaveComment('我上传了作业',this.task._id);
      })
      .then(()=> {
        $.toast("提交作业成功");
      })
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
.desc h1 {
  font-size: 0.5rem;
}
.desc h2 {
  font-size: 0.4rem;
}
.desc h3 {
  font-size: 0.3rem;
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
