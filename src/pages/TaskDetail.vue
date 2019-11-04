<template lang="html">
  <div class="">
    <div class="task-detail">
      <div class="task-title">{{task.name}}

        <div class="" style="margin-top:.5rem;">
          <mt-badge class="" size="normal" color="#4fc1e9">经验:{{task.exp}}</mt-badge>
          <mt-badge class="" size="normal" style="margin-left:.3rem;" color="#ffc107">金币:{{task.goldToken}}</mt-badge>
        </div>

      </div>
      <div class="task-head">

        <!-- <div>发布 {{task.created | dateFormat}}</div>
       <div>过期 {{task.expireTime | dateFormat}}</div>
       <div>类型 {{task.type}}</div> -->
      </div>
      <div class="markdown-desc">

        <div v-html="task.description" v-if="task.description" style="min-height: 200px;">
        </div>
        <img :src="task.contentImage.URL" alt="" width="100%" v-if="task.contentImage" @click="previewImage(task.contentImage.URL)" />
        <div v-html="task.txVideoFrame">
        </div>
        <div v-if="task.videoFile || task.audioFile">
          <div class="play-video" v-if="task.videoFile">
            <video :src="task.videoFile.URL" controls="controls">
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <div class="play-audio" v-if="task.audioFile">
            <audio :src="task.audioFile.URL" controls="controls">
              您的浏览器不支持 audio 标签。
            </audio>
          </div>
        </div>
        <div class="summary" v-if="task.summary && (task.isDone || isExpired())">
          <img :src="task.summaryImage.URL" alt="" width="100%" v-if="task.summaryImage" />
          <div v-html="task.summary" v-if="task.summary">
          </div>
        </div>
        <!-- <div class="" style="border:1px solid #ccc;padding:.3rem;" v-if="task.cardPool && !hasOpen">
            <div class="" style="color:#6F2DBD;text-align:center">
              任务中包含通关密码，填写后开启宝箱
            </div>
            <mt-field label="通关密码" placeholder="ABCD" v-model="passCode"></mt-field>
            <div v-if="passCode==task.passCode"  @click="handleOpenBox">
              <card-pool-item :cardPoolData="task.cardPool"></card-pool-item>
            </div>
          </div> -->
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
    <div class="mask" v-if="popupVisible" @click="closeCard"></div>
    <transition enter-active-class=" animated flipInY" leave-active-class=" animated flipOutY">
      <card-view class="card-view" v-if="popupVisible" :card-data="card" @click.native="closeCard" :product="false">
      </card-view>
    </transition>
    <div class="bottom-msg">
      <div class="" v-if="new Date(task.expireTime) > new Date()">
        <div class="mulbutton" v-if="!task.isDone">
          <mt-button type="default" size="large" @click="showActionSheet" plain>
            <i class="fa fa-caret-right" aria-hidden="true" slot="icon"></i>
            提交作业
          </mt-button>
          <!-- <multi-fuc-button :camera="photo" :text-input="handleComment" :voice="handleRecord"></multi-fuc-button> -->

        </div>
      </div>
      <div v-else class="expire">
        已超期
      </div>
    </div>
    <div v-for="comment in comments" class="message-item">
      <message-item :data="comment"></message-item>
    </div>



    <mt-actionsheet :actions="actions" v-model="sheetVisible">
    </mt-actionsheet>
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
import cardPoolItem from '../components/cardPoolItem';
import CardView from '../components/CardView';

import {
  mapState,
  mapActions,
} from 'vuex';
import {
  Toast,
} from 'mint-ui';
// import VueMarkdown from 'vue-markdown'

const markdown = require('markdown').markdown;

// import { getComments, leaveComment, submitOrder } from '../vuex/actions';

export default {
  data() {
    return {
      actions: [
        // { name: '文本', method: this.handleComment },
        {
          name: '录音',
          method: this.handleRecord,
        },
        {
          name: '拍照',
          method: this.photo,
        },
      ],
      passCode: '',
      sheetVisible: false,
      card: {},
      chance: true,
      popupVisible: false,
    };
  },
  components: {
    MessageItem,
    HeadList,
    Toast,
    MultiFucButton,
    cardPoolItem,
    CardView,
  },
  computed: {
    ...mapState({
      task: state => state.task.activeTask,
      comments: state => state.task.activeComments,
      user: state => state.profile.user,
    }),
    hasOpen() {
      const res = (this.task.openLotteryUserIds.indexOf(this.user._id) !== -1);
      console.log('hasOpen', res);
      return res;
    },
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
    this.configWx();
  },
  methods: {
    ...mapActions([
      'getComments',
      'leaveComment',
      'submitOrder',
      'openCardPool',
      'getUserCards',
      'getUserLottery',
    ]),
    previewImage(url) {
      wx.previewImage({
        current: url,
        urls: [url],
      });
    },
    configWx() {
      let imgUrl = 'https://qn.file.classmaster.cn/classmaster-wxgzh-logo.png';
      if (this.task.contentImage && this.task.contentImage.URL) {
        imgUrl = this.task.contentImage.URL;
      }
      wx.onMenuShareTimeline({
        title: `【课堂大师】${this.task.name}`, // 分享标题
        link: 'https://joybox.classmaster.cn/#/intro', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl, // 分享图标
        success() {
          // 用户确认分享后执行的回调函数
          console.log('分享成功');
        },
        cancel() {
          // 用户取消分享后执行的回调函数
        },
      });

      wx.onMenuShareAppMessage({
        title: '【课堂大师】让学习上瘾！', // 分享标题
        desc: `#挑战：${this.task.name}`, // 分享描述
        link: 'https://joybox.classmaster.cn/#/intro', // 分享链接
        imgUrl: '../assets/logo.jpg', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success() {
          // 用户确认分享后执行的回调函数
        },
        cancel() {
          // 用户取消分享后执行的回调函数
        },
      });
    },
    isExpired() {
      if (new Date(this.task.expireTime) < new Date()) return true;
      return false;
    },
    showActionSheet() {
      this.sheetVisible = !this.sheetVisible;
    },
    tansMarkdown(content) {
      return markdown.toHTML(content);
    },
    handleComment() {
      this.$router.push('/taskComment');
    },
    handleRecord() {
      this.$router.push('/recordVoice');
    },
    async handleOpenBox() {
      this.chance = false;
      const data = await this.openCardPool({
        taskId: this.task._id,
        userId: this.user._id,
      });
      if (!data.card) {
        Toast({
          iconClass: ' fa-hand-peace-o fa',
          message: '很不幸我的朋友，你没有获得卡牌!',
          position: 'middle',
          duration: 1000,
        });
      } else if (data.card) {
        this.card = data.card;
        this.popupVisible = true;
      }
      await this.getUserLottery();
      await this.getUserCards();
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
    async photo() {
      try {
        const serverId = await this.chooseUploadImage();
        await this.submitOrder({
          taskId: this.task._id,
          serverId,
          type: 0,
        });
        await this.leaveComment({
          content: '我提交了图片答案',
          taskId: this.task._id,
        });
        Toast({
          message: '作业提交成功',
          position: 'middle',
          duration: 3000,
        });
      } catch (err) {
        console.log(err);
      }
    },
    closeCard() {
      this.popupVisible = false;
    },
    chooseUploadImage() {
      return new Promise((resolve, reject) => {
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success(res) {
            const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            wx.uploadImage({
              localId: localIds[0],
              isShowProgressTips: 1,
              success(result) {
                const serverId = result.serverId;
                resolve(serverId);
              },
              cancel() {
                reject();
              },
            });
          },
          cancel() {
            reject();
          },
        });
      });
    },
    // record(){
    //   wx.startRecord();
    // },
  },
};

</script>

<style lang="css" scoped>
.task-detail {
  /*padding: 0.5rem 0.5rem;*/
  /*background-color: #eef;*/
}

.task-title {
  padding: 1rem 1rem;
  font-size: 1.2rem;
  background-color: #6f2dbd;
  opacity: 0.8;
  color: white;
}

.task-head {
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 1rem; */
  /* height: 5rem; */
  background-color: #26a2ff;
  /* font-size: 0.8rem; */
  /* color: white; */
}

.task-content {
  padding: 1rem 1rem;
  background-color: #eef;
  font-size: 0.8rem;
  /*color: blue;*/
}

.button-area {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: space-around;*/
  padding: 0.5rem 0.5rem;
  font-size: 0.8rem;
  background-color: #eef;
  margin-bottom: 0.5rem;
}

.task-footer {
  /*padding: 1rem 1rem;*/
  /*margin-bottom: 0.2rem;*/
  margin-top: 0.3rem;
  padding-top: 0.2rem;
  border-top: 1px solid #fbfbfb;
}

.summary {
  background-color: #eee;
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.play-audio {
  /*border: 1px solid #ccc;*/
  margin-bottom: 0.5rem;
  height: 2rem;
}

.play-audio audio {
  height: 100%;
  width: 100%;
}

.play-video {
  height: 10rem;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
}

.play-video video {
  height: 100%;
  width: 100%;
}

.expire {
  text-align: center;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
  background-color: rgba(255, 0, 0, 0.8);
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
.mulbutton {
  /*position: fixed;*/
  /*right: 3rem;*/
  /*bottom: 3.5rem;*/
  /* width:100%; */
  /* padding: .2rem .5rem; */
}

.record-panel {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 8rem;
  bottom: 0;
  width: 90%;
  /*height:10rem;*/
  /*padding: 1rem;*/
}

.bottom-msg {
  /* position: fixed; */
  width: 90%;
  /* bottom: 4rem;
  right: 0;
  left: 0; */
  margin: 1rem auto;
  margin-top: 0;
}

.mask {
  position: fixed;
  height: 100%;
  width: 100%;
  _position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.8);
}

.card-view {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 2rem;
  /* bottom: 0px; */
  margin: auto;
  text-align: center;
  z-index: 999;
  width: 70%;
}
</style>
