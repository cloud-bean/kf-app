<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
    <div class="">
    <small-head-info :user="user"></small-head-info>

    <div class="commodity" v-for="(item,index) in cardPool">
        <commodity-item :commodityData='item' :buy='buyLottery'></commodity-item>
    </div>
</div>

</div>


</template>

<script>

import CommodityItem from '../components/CommodityItem';
import SmallHeadInfo from '../components/SmallHeadInfo';

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
    'buyLottery'
  ]),
  components: {
   CommodityItem,
   SmallHeadInfo,
  },
}
</script>


<style scoped>
.commodity{
    margin-top: .5rem;
}

</style>
