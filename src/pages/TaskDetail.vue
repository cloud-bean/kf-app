<template lang="html">
  <div class="content">

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
         {{{tansMarkdown(task.description)}}}
         <!-- <h1 class="grey">老师评价:</h1> -->
         <!-- {{task}} -->
       </div>
       <p><a v-on:click="handleComment" class="button">讨论任务</a></p>


     </div>

   </div>
   <div class="card-footer complete-list">
     <!-- <span>难度:{{task.difficult}}</span>
     <span>经验:{{task.exp}}</span>
     <span>金币:{{task.goldToken}}</span> -->

   </div>


 </div>
 <div v-for="comment in comments" class="message-item">
   <message-item :data="comment"></message-item>
 </div>

</div>

</template>

<script>
const markdown = require('markdown').markdown;
import MessageItem from '../components/UserMessageItem';
import { getComments } from '../vuex/actions';
export default {
  data: function () {
    return {
    }
  },
  components: {
    MessageItem,
  },
  vuex: {
    getters: {
      task : state => state.activeTask,
      comments: state => state.activeTask.commits,
    },
    actions: {
      getComments,
    }
  },
  created() {
    this.getComments(this.task._id);
  },
  methods: {
    tansMarkdown(content){
      return markdown.toHTML(content);
    },
    handleComment(){
      this.$router.go('/taskComment');
    },
  },
}
</script>

<style lang="css">
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
  font-size: 1rem;
}
.desc h2 {
  font-size: 0.8rem;
}
.desc h3 {
  font-size: 0.6rem;
}
.message-item {
  margin-top: 0.8rem;
}
</style>
