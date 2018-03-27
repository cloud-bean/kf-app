<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
<div class="">
  <div class="profile">

    <info :user="user" :rank="myRank.rankIndex"></info>

    <!--<div class="tip">
      <tips :tip="tip"></tips>
    </div>-->
    <!-- <div class="chart">
      <my-chart :my-chart-data="userRecords"></my-chart>
    </div> -->

    <news-slider :news="news" :news-detail="newsDetail"></news-slider>
<!--
      <mt-cell title="王者排行" label="快追上你的对手吧" is-link to="/rank">
       <mt-badge size="normal">第{{myRank.rankIndex}}名</mt-badge>
        <i class="fa fa-users" slot="icon" aria-hidden="true" ></i>
      </mt-cell>
      <mt-cell title="背包系统" label="拥有的所有物品" is-link to="/cardBag">
        <i class="fa fa-eercast" slot="icon" aria-hidden="true" ></i>
     </mt-cell>-->

    <div class="mask opacity" v-if="!user.providerData.unionid && display" @click="closeCard">
      <div class="info">
        为了给用户更好的使用体验，解决部分苹果用户的兼容问题，JoyBox团队加班设计及开发了悦盒的微信小程序
        ，需要大家对现有数据进行迁移，迁移完毕后可以继续使用公众号也可以使用悦盒小程序，感谢您对悦盒的支持和鼓励。
      </div>
      <div class="move-button">
          <mt-button type="default" size="large" class="move" @click="handleMove">迁移用户数据到小程序</mt-button>
      </div>
    </div>

     <div class="subItem">
     <img-cell :title-img="rankImg" title="王者排行" subtitle="查看您的排名" to="/rank"></img-cell>
     </div>
     <div class="subItem">
     <img-cell :title-img="bagImg" title="背包系统" subtitle="宝箱、卡牌" to="/cardBag"></img-cell>
     </div>

</div>

</div>


</template>

<script>
import Info from '../components/HeadInfo';
import MyChart from '../components/MyChart';
import Tips from '../components/Tips';
import NewsSlider from '../components/NewsSlider';
import imgCell from '../components/ImgCell';
// import { getMyRecords } from '../vuex/actions';
import rankImg from '../assets/rank.jpg';
import bagImg from '../assets/bag.jpg';
import { api } from '../api';
import { MessageBox,Toast, Indicator } from 'mint-ui';
import { mapState, mapActions } from 'vuex';

// import Expbar from '../components/Expbar';
// import Chart from '../components/Chart';
// import config from '../config/config';
// import util from '../config/util';
// import mockdata from '../../test/mock';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      rankImg,
      bagImg,
      display: true,
    };
  },
  computed: mapState({
    user: state => state.profile.user,
    userRecords: state => state.profile.userRecords,
    unionid: state => state.unionid,
    tip: state => state.profile.tip,
    news: state => state.news.news,
    myRank: state => state.rank.myRank,
    cards: state => state.card.cards,
  }),
  // vuex: {
  //   getters: {
  //     user: state => state.user,
  //     myRecords: state => state.myRecords,
  //     tip: state => state.tip,
  //   },
  // },
  mounted() {

  },
  methods: {
    ...mapActions(['newsDetail']),
    async handleMove(){
      const user = this.user;
      const unionid = this.unionid;
      const providerData = Object.assign({}, user.providerData, { unionid });
      const newuser = Object.assign({}, user, { providerData });
      await api.updateUserInfo(user._id, newuser);
      Indicator.open({
        text: '迁移中...',
        spinnerType: 'fading-circle'
      });
      await setTimeout(()=>{
        Indicator.close()
        Toast({
          message: '迁移成功！',
          iconClass: 'fa fa-check',
          duration: 1000,
        });
        this.display = false;
      },5000);

    },
    closeCard(){
      this.display = false;
    }
  },
  components: {
      Info,
      MyChart,
      Tips,
      NewsSlider,
      imgCell
  }
}
</script>


<style scoped>
.move-button{
  padding: .5rem 1rem;
  margin-top: 2rem;
}
.info{
  color: #eee;
  margin-top: 10rem;
}
.move{
  margin: 0 auto;
}
.profile{
  /*background-color: #eef;*/
}
.chart{
  width: 100%;
}
.user-wrap{

}
.tip{
  position: relative;
  z-index: -1;
}
.new-area{
  margin-top: .5rem;
  margin-left: .3rem;
  margin-right: .3rem;

  /*background: #eee;*/
}
.subItem{
  margin-top: .5rem;
}
.mask{
  height:100%;
  width:100%;
  position:fixed;
  _position:absolute;
  top:0;
  left:0;
  z-index:998;
  text-align: center;
  padding: 2rem 2rem;
}

.opacity{background:rgba(0,0,0,.5); }
</style>
