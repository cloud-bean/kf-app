<template>
  <div class="" >
    <div class="userhead Grid">
        <div class="avatar-wrapper Grid Cell -3of12 -center -middle">
          <img :src="user.profileImageURL" alt="" class="avatar" @click="gotoSetting"/>
        </div>
        <div class="exp-wrapper Grid Cell -9of12 -left -middle">
          <div class="title-bar">
            <span class="name">{{user.displayName}}  </span>
            <span class="level"> Lv.{{user.option.exp | level}}</span>
            <span @click="showAccRules"><mt-badge size="small" type="success">x1.0</mt-badge></span>
          </div>
          <div class="exp">
            <span class=""> 成长值 {{user.option.exp}}</span> .
            <span class=""> 悦币 {{user.option.goldToken}}</span> .
            <span class=""> 排位 {{rank}}</span>
          </div>
          <div class="">
            <mt-progress :value="expPercent" :barHeight="8">
            </mt-progress>
          </div>
          <!-- <div class="slogan">{{user.option.slogan || 'Learning with joy, achieving with will.'}}</div> -->
        </div>
    </div>
    <!-- <div class="info">
      <status-bar></status-bar>
    </div> -->

  </div>



</template>

<script>
  import { Toast } from 'mint-ui';
  import StatusBar from './statusBar';

export default {
  props: ['user', 'rank'],
  components: {
    StatusBar,
  },
  methods: {
    showAccRules() {
      Toast({
        message: '加速值规则说明',
        position: 'middle',
        duration: 1500,
      });
    },
    gotoSetting() {
      this.$router.push('/signup');
    },
  },
  computed: {
    expPercent() {
      const levelExp = [50, 100, 200, 350, 550, 800, 1100, 1450, 1850, 2300,
        2800, 3350, 3950, 4600, 5300, 6050, 6850, 7700, 8600, 9550];
      const exp = this.user.option.exp;
      for (const key in levelExp) {
        if (exp < levelExp[key]) {
          const start = Number(levelExp[key - 1]);
          const end = Number(levelExp[key]);
          const width = end - start;
          const percent = 100 * ((exp - start) / width);
          return percent;
        }
      }
      return 100;
    },
  },
};
</script>


<style lang="less"scoped>
@import '../style/color.less';

.title-bar{
  // background-color: #5DA9E9;
  padding:.2rem 0rem;
}
.name{
  font-size: 1.1rem;
  color: #fff;
}
.title {
  text-align: left;
  padding-left: 12px;
  padding-top: 5px;
  font-size: 12px;
}
.info{
  width:100%;
  text-align: center;
  // font-size: 0.8rem;

  /*display: flex;*/
  /*flex-direction: row;*/
  /*justify-content: space-around;*/
  /*align-items: center;*/
  margin: 0 auto;
  // margin-top:-0.8rem;
  // box-shadow:0px 0px 5px #555555;
  // border-radius: 5px;

  /*border-top: 1px solid white;*/
}
.exp-bar{
  width: 80%;
}
.detailInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  color: #999;
  /*padding-top: 5px;*/
}
.number{
  font-size: 1rem;
  margin-top: 0.3rem;
  color: #000;


}
.level{
  font-size: 1rem;
  // margin-top: 0.3rem;
  color: #fff;
  // text-align: center;
}
/*.headimg{
  width: 44px;
  height: 44px;
}*/

.headimg {

}

.avatar {
  width: 4rem;
  height: 4rem;
  border: 2px solid white;
  border-radius:5px;
  // box-shadow:0px 0px 5px #555555;
}
.avatar-wrapper{
  // width: 30%;
}
.exp-wrapper{
  display: inline-block;
  margin-left: 1rem;
  width:70%;
  text-align: left;
  // width: 60%;
}

.pull-left{
  float:left;
  display: inline-block;
}
.slogan{
  color:#fff;
  // background-color:#5DA9E9;
  font-size: .8rem;

}
.exp{
  color: #fff;
  font-size: 0.8rem;
}
.blue-bg{
  height: 7rem;
}
.item{
}

.userhead{
  // background-size:cover;
  // filter: blur(10px);
  /* Rectangle: */
  // background-image: linear-gradient(-180deg, #FFFFFF 0%, #C9C9C9 100%);
  // border: 1px solid #979797;
  background-color:#6F2DBD;
  padding: 1rem 1rem;
  width: 100%;
  // height: 8rem;
  // text-align: center;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;
  // align-items: center;
}
.rank{
  background-color: #eeeeff;
  color: #555555;
}
</style>
