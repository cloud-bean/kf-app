<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
<div class="">
  <div class="profile">
    <info :user="user"></info>

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

     <div class="subItem">
     <img-cell :title-img="rankImg" title="王者排行" :subtitle="`排在第 ${myRank.rankIndex} 名`" to="/rank"></img-cell>
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
      bagImg
    };
  },
  computed: mapState({
    user: state => state.profile.user,
    userRecords: state => state.profile.userRecords,
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
  methods: mapActions(['newsDetail']),
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

</style>
