<template lang="html">
  <div class="score">
    <mt-button @click.native="gotoListPage">返回作业列表</mt-button>
    <div class="info">
      <div>{{activeOrder.task.name}}</div>
      <div>学生姓名：{{activeOrder.student.displayName}}</div>
      <div>提交时间：{{activeOrder.created | dateFormat}}</div>
    </div>
    <div class="inputarea">
      <!-- <input v-model="score" class="input" type="number" name="" value="" placeholder="分数" /> -->

      <mt-radio title="评分(完美、优秀、可以、差强人意、非常差)" v-model="score" :options="['5', '4', '3', '2', '1']">
      </mt-radio>

      <mt-radio title="快捷评语（下方输入框中可以点评知识点~）" v-model="comments"
        :options="['简直完美！', '非常棒！', '不错，加油~ ', '努力！', '一定要好好努力哈~']">
      </mt-radio>

      <!-- <textarea v-model="comments" class="input" type="text" name="" value="" placeholder="评语" /> -->
      <mt-field placeholder="评语" type="textarea" v-model="comments" rows="4"></mt-field>

      <br />
      <!-- <button  type="button" name="button" class="button input" >提交</button> -->
      <mt-button @click="handleClick" type="primary" size="large">提交</mt-button>

    </div>
    <div style="border: 1px solid blue; padding: 2px;">
      <p>学生提交的作业材料：</p>
      <br />
      <div class="pic" v-if="activeOrder.files[0].type==0">
        <img :src="localData" width="100%" style="display:block;" @click="previewImage(localData)">
        <!-- <img :src="activeOrder.files[0].URL" width="100%" style="display:block;"> -->
      </div>
      <div class="voice" v-if="activeOrder.files[0].type==1">
        <i class="fa fa-play-circle-o" @click="playVoice"></i>
        <!-- <audio :src="activeOrder.files[0].URL" controls="controls">
          您的浏览器不支持 audio 标签。
        </audio> -->
      </div>
    </div>
  </div>
</template>

<script>
  // const wx = require('weixin-js-sdk');
  import { Toast } from 'mint-ui';

  import {
    setScore,
  } from '../vuex/actions';
  import {
    mapState,
    mapActions,
  } from 'vuex';
  export default {
    data() {
      return {
        localData: '',
        score: '',
        comments: '',
      };
    },
    computed: mapState({
      activeOrder: state => state.score.activeOrder,
    }),
    // vuex: {
    //   getters: {
    //     activeOrder : state => state.activeOrder,
    //   },
    //   actions: {
    //     setScore
    //   }
    // },
    created() {
      if (this.activeOrder.files[0].type === 0) {
        this.getImageFromWechat();
      } else if (this.activeOrder.files[0].type === 1) {
        this.getVoicefromWechat();
      }
    },
    methods: {
      ...mapActions([
        'setScore',
      ]),
      previewImage(url) {
        wx.previewImage({
          current: url,
          urls: [url],
        });
      },
      gotoListPage() {
        this.$router.back();
      },
      getImageFromWechat() {
        const URL = this.activeOrder.files[0].URL;
        if (URL.indexOf('http') === -1) {
          const serverId = this.activeOrder.files[0].URL;
          const that = this;
          wx.downloadImage({
            serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success(res) {
              const localId = res.localId;
              if (window.__wxjs_is_wkwebview) {
                // MessageBox('Notice', localId);
                wx.getLocalImgData({
                  localId, // 图片的localID
                  success(res) {
                    // MessageBox('Notice', res.localData);
                    that.localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                  },
                });
              } else {
                that.localData = localId;
              }
            },
            fail(res) {
              console.log('无资源');
            },
          });
        } else {
          this.localData = URL;
          console.log('this.localData');
        }
      },
      getVoicefromWechat() {
        const URL = this.activeOrder.files[0].URL;
        if (URL.indexOf('http') !== -1) {
          this.localData = URL;
          console.log('11', this.localData);
          return;
        }

        const serverId = this.activeOrder.files[0].URL;
        const that = this;
        wx.downloadVoice({
          serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success(res) {
            const localId = res.localId;
            that.localData = localId;
          },
          fail(res) {
            console.log('无资源');
          },
        });
      },
      playVoice() {
        wx.playVoice({
          localId: this.localData, // 需要播放的音频的本地ID，由stopRecord接口获得
        });
      },
      handleClick() {
        const orderId = this.activeOrder._id;
        const score = this.score;
        const comments = this.comments;
        if (score === '' || comments === '') {
          Toast({
            message: '请填写完整，分数和评语都需要。',
            position: 'bottom',
          });
        } else {
          this.setScore({
            score,
            comments,
            orderId,
          }).then(() => {
            this.$router.push('/success');
          });
        }
      },
    },
  };

</script>

<style lang="css" scoped>
  .pic {
    padding: 0.5rem;
    border: 1px solid #eef;
    margin-top: 1rem;
  }

  .info {
    font-size: 14px;
    padding: .5rem 0.5rem;
    background: #eef;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 6rem;
  }

  .score {
    height: auto;
    /*height: auto;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    /*background: #eee;*/
    margin: .5em;
    padding: .5em;
  }

  .inputarea {
    padding: 0.5rem 0.5rem;
    /*display: flex;
    flex-direction: column;
    justify-content: space-around;
    /*height:16rem;*/
    background: #eef;
  }

  .voice {
    text-align: center;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 5rem;
  }

</style>
