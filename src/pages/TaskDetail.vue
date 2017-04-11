<template lang="html">
  <div class="">
  <div class="task-detail">
    <div class="task-title">{{task.name}}</div>
     <div class="task-head">
       <div>发布 {{task.created | dateFormat}}</div>
       <div>过期 {{task.expireTime | dateFormat}}</div>
       <div>类型 {{task.type}}</div>
    </div>
       <div class="markdown-desc">
          <div v-html="tansMarkdown(task.description)">

          </div>
          <div v-if="task.audioFile || task.videoFile">
          <h1>任务素材</h1>
          <div class="play-video" v-if="task.videoFile">
          <video  :src="task.videoFile.URL" controls="controls" >
            您的浏览器不支持 video 标签。
          </video>
          </div>
          <div class="play-audio"  v-if="task.audioFile">
           <audio :src="task.audioFile.URL" controls="controls">
             您的浏览器不支持 audio 标签。
           </audio>
          </div>
          </div>
          <div class="summary" v-if="task.isDone">
          <div v-html="tansMarkdown(task.summary)" >

          </div>
          </div>
          

          <div class="task-footer">
            <head-list :user-list="task.taskDoneUsers"></head-list>
          </div>

       </div>
       <!-- {{task.cardPool.description}} -->

       <!--<div class="button-area Grid -around -middle">
         <div class="Cell -5of12">
           <mt-button @click="handleComment" type="primary" size="large" >
             <i class="fa fa-commenting" slot="icon"></i>
             讨论任务</mt-button>
         </div>
         <div class="Cell -5of12" v-if="!task.isDone">
           <mt-button @click="photo" type="primary" size="large" >
              <i class="fa fa-camera " slot="icon"></i>
               拍照提交
           </mt-button>
         </div>


       </div>-->



 </div>

 <div v-for="comment in comments" class="message-item">
   <message-item :data="comment"></message-item>
 </div>
 <div class="mulbutton">
  <multi-fuc-button :camera="photo" :text-input="handleComment" :voice="handleRecord"></multi-fuc-button>
 </div>

 <!--<div class="record-panel">
  <record-panel></record-panel>
 </div>-->
 

</div>



</template>

<script>
import HeadList from '../components/HeadList';
import MessageItem from '../components/MessageItem';
import MessageInput from '../components/MessageInput';
import MultiFucButton from '../components/MultiFucButton';
import RecordPanel from '../components/RecordPanel';

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
    MultiFucButton,
    RecordPanel,
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
    handleRecord(){
      this.$router.push('/recordVoice');
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
      try{
        await this.submitOrder(this.task._id)
        await this.leaveComment({content:'我上传了作业', taskId:this.task._id})
         Toast({
        message: '作业提交成功',
        position: 'middle',
        duration: 3000
       });
      }catch(err){
        console.log(err);
      }
      
     
    },
    // record(){
    //   wx.startRecord();
    // },
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

.button-area{
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: space-around;*/
  padding: .5rem 0.5rem;
  font-size: .8rem;
  background-color: #eef;
  margin-bottom: .5rem;
}
.task-footer{
  /*padding: 1rem 1rem;*/
  /*margin-bottom: 0.2rem;*/
  margin-top: .3rem;
  padding-top: .2rem;
  border-top: 1px solid #ccc;
}
.summary{
  background-color: #eee;
  padding: .5rem;
  border: 1px solid #ccc;
}
.play-audio{
  /*border: 1px solid #ccc;*/
  margin-bottom: .5rem;
  height: 2rem;
}
.play-audio audio{
  height:100%;
  width: 100%;
}

.play-video{
  height:10rem;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: .5rem;
}
.play-video video{
  height:100%;
  width: 100%;
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
.mulbutton{
  position: fixed;
  right: 3rem;
  bottom: 5rem;
}
.record-panel{
  position:fixed;
  margin:auto;
  left:0; 
  right:0; 
  top:8rem; 
  bottom:0;
  width:90%;
  /*height:10rem;*/
  /*padding: 1rem;*/
}
</style>
