<template lang="html">
  <div class="content-padded">
    <div class="info">
      <p>{{activeOrder.task.name}}</p>
      <p>学生姓名：{{activeOrder.student.displayName}}</p>
      <p>提交时间：{{activeOrder.created | dateFormat}}</p>
    </div>

    <div class="pic">
      <input v-model="score" class="input" type="number" name="" value="" placeholder="分数" />
      <textarea v-model="comments" class="input" type="text" name="" value="" placeholder="评语" />
      <button @click="handleClick" type="button" name="button" class="button input" >提交</button>
    </div>
    <div class="pic">
      <img :src="localId" alt="" width="100%">
    </div>


  </div>


</template>

<script>
// const wx = require('weixin-js-sdk');
import { setScore } from '../vuex/actions';
import { mapState, mapActions } from 'vuex';

export default {
  data(){
    return {
      localId:'',
      score:'',
      comments:'',
    }
  },
  computed: mapState({
    activeOrder : state => state.score.activeOrder,
  }),
  // vuex: {
  //   getters: {
  //     activeOrder : state => state.activeOrder,
  //   },
  //   actions: {
  //     setScore
  //   }
  // },
  created(){
    this.getImageFromWechat();
  },
  methods:{
    ...mapActions([
      'setScore',
    ]),
    getImageFromWechat(){
      const serverId = this.activeOrder.files[0].URL;
      console.log('serverId:',serverId);
      const that = this;
      wx.downloadImage({
        serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
          console.log('localId',res.localId);
          that.localId = res.localId;
           // 返回图片下载后的本地ID
        },
        fail: function(res) {
          console.log('无资源');
          $.hidePreloader();
        },
      });
    },
    handleClick(){
      $.showPreloader('加载中...');
      const orderId = this.activeOrder._id;
      const score = this.score;
      const comments = this.comments;
      this.setScore({score,comments,orderId})
      .then(()=>{
        $.hidePreloader();
        this.$router.push('/success');

      })
    }
  }
}
</script>

<style lang="css" scoped>

.pic {
  padding: 0.5rem;
  border: 1px solid #cccccc;
  margin-bottom: 0.5rem;
}
.input{
  width:100%;
  font-size: 16px;
  margin-bottom: 0.4rem;
}
.info{
  font-size: 14px;
}
</style>
