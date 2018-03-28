<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
    <div class="">
      <div class="user-info">
        <info :user="user" :rank="myRank.rankIndex"></info>

      </div>
      <div class="commodity-list">
        <div class="commodity" v-for="(item,index) in cardPool">
            <commodity-item :commodityData='item' :buy='buyLottery' :openLotteryBox='openLotteryBox'></commodity-item>
        </div>
      </div>

</div>

</div>


</template>

<script>

import CommodityItem from '../components/CommodityItem';
import Info from '../components/HeadInfo';

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
    // user: state => state.profile.user,
    // userRecords: state => state.profile.userRecords,
    // tip: state => state.profile.tip,
    // news: state => state.news.news,
    cardPool: state => state.card.cardPool,
    user: state => state.profile.user,
    myRank: state => state.rank.myRank,

  }),
  // vuex: {
  //   getters: {
  //     user: state => state.user,
  //     myRecords: state => state.myRecords,
  //     tip: state => state.tip,
  //   },
  // },
  mounted() {
      this.getCardPool({type:1});
  },
  methods: mapActions([
    'getCardPool',
    'buyLottery',
    'openLotteryBox',
  ]),
  components: {
   CommodityItem,
   Info,
  },
}
</script>


<style scoped>
.commodity{
    margin-top: .5rem;
}
.commodity-list{
    margin-top: 8rem;
}
.user-info{
  position: fixed;
  width: 100%;
  top: 0;
  z-index:2;
}

</style>
