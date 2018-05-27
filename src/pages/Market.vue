<template>
  <div>
    <div class="user-info">
      <info :user="user" :rank="myRank.rankIndex"></info>
    </div>

    <div class="commodity-list">
      <mt-navbar v-model="active" class="selecter">
        <mt-tab-item id="good">个人</mt-tab-item>
        <mt-tab-item id="commodity">官方</mt-tab-item>
        <mt-tab-item id="erciyuan">二次元</mt-tab-item>
      </mt-navbar>
      <!-- <mt-button plain @click="setActive('commodity')">官方</mt-button>
      <mt-button plain @click="setActive('good')">个人</mt-button>
      <mt-button plain @click="setActive('erciyuan')">二次元</mt-button> -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="commodity">
          <div class="commodity" v-for="(item, index) in cardPool" :key="index">
            <commodity-item :commodityData='item' :buy='buyLottery' :openLotteryBox='openLotteryBox'></commodity-item>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="good">
          <!--<div class="good-list">-->
            <div class="commodity" v-for="(item, index) in allCards" :key="index">
              <good-item :goodData='item' :buy='buyTheGood' :revert='revertTheGood' :user="user"></good-item>
            </div>
          <!--</div>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="erciyuan">
          <div class="commodity" v-for="(item, index) in allErciyuan" :key="index">
            <good-item :goodData='item' :buy='buyTheGood'></good-item>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>


  </div>
</template>

<script>

import CommodityItem from '../components/CommodityItem';
import goodItem from '../components/goodItem';
import Info from '../components/HeadInfo';

import { mapState, mapActions } from 'vuex';
import { TabContainer, TabContainerItem, Button } from 'mint-ui';
import Vue from 'vue';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);

export default {
  data() {
    return {
      active: 'good',
    };
  },
  computed: {
    ...mapState({
      cardPool: state => state.card.cardPool,
      allGoods: state => state.market.allGoods,
      user: state => state.profile.user,
      myRank: state => state.rank.myRank,
    }),
    allCards() {
      return this.allGoods.filter((item) => item.category === 'card');
    },
    allErciyuan() {
      return this.allGoods.filter((item) => item.category === 'erciyuan');
    },
  },
  mounted() {
    this.getCardPool(1);
    this.getAllGoods();
  },
  methods: {
    ...mapActions([
      'getCardPool',
      'buyLottery',
      'openLotteryBox',
      'getAllGoods',
      'buyGood',
      'revertGood',
      'getUserInfo',
    ]),
    async buyTheGood(data) {
      await this.buyGood(data);
      await this.getAllGoods();
      await this.getCardPool(1);
      await this.getUserInfo(this.user._id);
    },
    async revertTheGood(data) {
      await this.revertGood(data);
      await this.getAllGoods();
      await this.getCardPool(1);
    },
    setActive(id) {
      this.active = id;
    },
  },

  components: {
    CommodityItem,
    goodItem,
    Info,
  },
};
</script>


<style scoped>
.commodity{
    margin-top: .5rem;
}
.commodity-list{
    margin-top: 8rem;
}
.good-list{
  margin-top: .5rem;
}
.user-info{
  position: fixed;
  width: 100%;
  top: 0;
  z-index:2;
}
.selecter{
  font-size: 1rem !important;
}

</style>
