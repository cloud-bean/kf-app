<template lang="html">

<div class="recorder">
     <div class="recorder-status">
        {{recordStatus}}   
    </div>
    <div class="recorder-icon " :class="[(recordStatus=='录音中')?'recorder-active':'']">
        <i class="fa fa-microphone"></i>
    </div>
    <div class="recorder-time">
        {{duration}}  
    </div>
   
    <div class="button-group Grid -middle -center">
        <div class=" Cell -4of12">
            <div class="button button-play" @click="playRecord" v-bind:class="{disabled:playDisabled}">
                <i class="fa fa-play-circle-o"></i> 
                 <div class="button-text">播放</div> 
            </div>
        </div>
        <div class="Cell -4of12" v-if="recordStatus=='已停止'||recordStatus=='播放中'" >
                <div class="button button-record" @click="startRecord"  v-bind:class="{disabled:recordDisabled}">
                    <i class="fa fa-circle"></i>
                     <div class="button-text">录制</div> 
                </div>
        </div>
        <div class="Cell -4of12" v-if="recordStatus=='录音中'">
                <div class="button button-stop" @click="stopRecord">
                    <i class="fa fa-stop-circle-o"></i>
                     <div class="button-text">完成</div> 
                </div>
        </div>
        <div class="Cell -4of12">
             <div class="button button-play" @click="submit" v-bind:class="{disabled:uploadDisabled}">
                <i class="fa fa-check-circle-o"></i>
                <div class="button-text">上传</div> 
            </div>
        </div>
    </div>
     <div class="cancel" @click="cancel">
        <mt-button type="default" size="large" plain>取消返回</mt-button>
    </div>
</div>
</template>

<script>
// const moment = require('momentjs');
import { mapState, mapActions } from 'vuex';
import { Toast } from 'mint-ui';

export default {
  props:[''],
  components: {
      Toast,
  },
  data(){
      return {
          recordStatus:'已停止',
          localId:'',
          duration:'00:00',
          timer:{},
          playDisabled:true,
          recordDisabled:false,
          uploadDisabled:true
      }
  },
  computed:mapState({
    task : state => state.task.activeTask,
  }),
  created(){
     this.configRecord();
  },
  methods:{
      ...mapActions([
        'leaveComment',
        'submitOrder',
      ]),
      configRecord(){
        const that = this;
        wx.onVoiceRecordEnd({
          // 录音时间超过一分钟没有停止的时候会执行 complete 回调
         complete: function (res) {
            that.recordStatus='已停止';
            that.stopCount();
            that.localId = res.localId;
            that.setButtonDisabled(false,false,false);
         }
        });
        wx.onVoicePlayEnd({
             success: function (res) {
                that.recordStatus='已停止';
                that.stopCount();
                that.localId = res.localId; // 返回音频的本地ID
                that.setButtonDisabled(false,false,false);
            }
        });
      },
      startRecord(){
        if(!this.recordDisabled){
            this.recordStatus='录音中';
            this.clearCount()
            this.startCount();
            wx.startRecord();
        }
      },
      stopRecord(){
        const that = this;
        this.recordStatus='已停止';
        this.stopCount();
        this.setButtonDisabled(false,false,false);
        wx.stopRecord({
            success: function (res) {
                    that.localId = res.localId;
                    
                }
            });
      },
      playRecord(){
          if(!this.playDisabled){
                this.setButtonDisabled(true,true,true);
                const that = this;
                this.recordStatus='播放中';
                this.clearCount()
                this.startCount();
                wx.playVoice({
                    localId:that.localId,
                });
          }
       
      },
      cancel(){
          this.$router.push('/taskDetail');
      },
      startCount(){
        const that = this;
        let n = 0;
        this.timer = setInterval(function () {
                n++;
                var m=parseInt(n/60);
                var s=parseInt(n%60);
                that.duration=that.toDub(m)+":"+that.toDub(s);
            },1000/60);
      },
      clearCount(){
        this.duration='00:00';
      },
      stopCount(){
        clearInterval(this.timer);
      },
      toDub(n){
        return n<10?"0"+n:""+n;
      },
      setButtonDisabled(play,record,upload){
          console.log('set');
          this.playDisabled=play;
          this.recordDisabled=record;
          this.uploadDisabled=upload; 
      },
      async uploadVoice(localId){
        return new Promise((resolve, reject) =>{
             wx.uploadVoice({
                localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    const serverId = res.serverId; // 返回音频的服务器端ID
                    resolve(serverId);
                 },
                 fail(){
                     reject();
                 }
                });   
        });
      },
      async submit(){
          if(!this.uploadDisabled){
              try{
                const serverId = await this.uploadVoice(this.localId);
                await this.submitOrder({taskId:this.task._id, serverId, type:1})
                await this.leaveComment({content:'我提交了语音答案', taskId:this.task._id})
                Toast({
                    message: '提交成功',
                    position: 'middle',
                    duration: 3000
                });  
            }catch(err){
                console.log(err);
            }finally{
                this.$router.push('/taskDetail');
            }
          } 
      }
      
  }
}
</script>

<style lang="css" scoped>
.recorder{
    /*background-color: #eee;*/
    /*padding: 5rem 0;*/
    /*margin-top: expression((clientHeight-50)/2);*/
    /*border-radius: 10px;*/
    /*box-shadow: 0 0 10px #555555;*/
}
.recorder-icon{
  text-align: center;
  margin: 0 auto;
  margin-top: 5rem;
  width:6rem;
  height:6rem;
  border: 1px solid #555;
  border-radius: 10px;
  font-size: 3rem;
  color: #555;
  background-color: #eee;
}
.button-group{
    margin-top: 5rem;
}

.recorder-icon i{
    margin-top: 1.5rem;
}
.recorder-status{
  text-align: center;
  color: #555;
  padding: 0.5rem;
  position: fixed;
  top:0;
  width: 100%;
  font-size: 1.5rem;
  background-color: #ccc;
  padding: .3rem 0;
}

.recorder-time{
  text-align: center;
  color: #999;
  padding: 0.5rem;
  width: 100%;
}

.button{
    text-align: center;
    font-size: 4rem;
    width: 4rem;
    height: 4rem;
    /*padding-top: 1rem;*/
    margin: 0 auto;
    /*border-radius: 50%;*/
    /*background-color: #ccc;*/
}
.button-record{
    color: red;
}
.button-text{
    font-size: 1rem;
    color:#555;
}
.cancel{
    padding: 0 2rem;
    margin-top: 3rem;
}
.disabled{
    color:#ddd;
}
.recorder-active{
    color: red;
}
</style>

