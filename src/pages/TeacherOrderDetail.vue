<template lang="html">
  <div class="order-detail">
    <div class="">
      {{activeOrder.student}}
    </div>
    <div class="">
      {{activeOrder.task.name}}
    </div>
    <div class="">
      <img :src="localId" alt="" width="100%">
    </div>
    <div class="mark">
      <input type="text" name="" value="" placeholder="分数" >
    </div>
    <div class="">
        <input type="text" name="" value="" placeholder="评语" >
    </div>

      <button type="button" name="button" class="button">提交</button>
    </div>


  </div>


</template>

<script>
const wx = require('weixin-js-sdk');

export default {
  data(){
    return {
      localId:'',
    }
  },
  vuex: {
    getters: {
      activeOrder : state => state.activeOrder,
    },
    actions: {
    }
  },
  mounted(){
    this.getImageFromWechat();
  },
  methods:{
    getImageFromWechat(){
      const serverId = this.activeOrder.files[0].URL;
      console.log(serverId);
      const that = this;
      wx.downloadImage({
        serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
        isShowProgressTips: 0, // 默认为1，显示进度提示
        success: function (res) {
          console.log(res.localId);
          that.localId = res.localId; // 返回图片下载后的本地ID
        },
        fail: function(res) {
          console.log('无资源');
        },
      });
    }
  }
}
</script>

<style lang="css" scoped>
.order-detail{
  width:100%;
}
</style>
