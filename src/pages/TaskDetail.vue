<template lang="html">
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
       <p class="grey">任务详情:</p>
       <p>{{task.description}}</p>
     </div>
   </div>
   <div class="card-footer">
     <span>难度:{{task.difficult}}</span>
     <span>经验:{{task.exp}}</span>
     <span>金币:{{task.goldToken}}</span>
   </div>
 </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  vuex: {
    getters: {
      task : state => state.activeTask,
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
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
</style>
