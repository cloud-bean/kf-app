<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
<div class="">
  <div class="profile">
    <info :user="user"></info>
    <div class="tip">
      <tips :tip="tip"></tips>
    </div>
    <!-- <div class="chart">
      <my-chart :my-chart-data="userRecords"></my-chart>
    </div> -->
    <div class="new-area" v-for="(item,index) in news">
      <news-item :newsData="item" @click.native="handleClick(index)"></news-item>
    </div>

    <!--<mt-cell title="我的排名" label="完成任务越高，排行越靠前" is-link></mt-cell>
    <mt-cell title="我的宝箱" label="完成任务获取抽奖机会" is-link></mt-cell>
    <mt-cell title="我的卡包" label="我拥有的所有卡牌" is-link></mt-cell>-->

</div>

</div>


</template>

<script>
import Info from '../components/HeadInfo';
import MyChart from '../components/MyChart';
import Tips from '../components/Tips';
import NewsItem from '../components/NewsItem';

// import { getMyRecords } from '../vuex/actions';
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
    };
  },
  computed: mapState({
    user: state => state.profile.user,
    userRecords: state => state.profile.userRecords,
    tip: state => state.profile.tip,
    news: state => state.news.news,
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
    handleClick(index){
      console.log(index);
      this.newsDetail(index);
      this.$router.push('/newsDetail');
    }
  },
  components: {
      Info,
      MyChart,
      Tips,
      NewsItem,
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
</style>
