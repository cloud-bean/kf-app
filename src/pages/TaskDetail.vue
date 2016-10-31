<template lang="html">
  <div class="card demo-card-header-pic">
   <div valign="bottom" class="card-header color-white no-border no-padding">
     <img class='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="200px;" height="200px;" alt="">
   </div>
   <div class="card-content">
     <div class="card-content-inner">
       <p class="color-gray">发表于 2015/01/15</p>
       <p>{{task.subject}}</p>
     </div>
   </div>
   <div class="card-footer">
     <!-- <a href="#" class="link">赞</a>
     <a href="#" class="link">更多</a> -->
     <audio controls="controls" style="width:100%">

     </audio>
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
</style>
