<template>
  <div>
    <div class="user-info">
      <info :user="user" :rank="myRank.rankIndex"></info>
    </div>

    <div class="commodity-list">
      <mt-navbar v-model="active" class="selecter">
        <mt-tab-item id="good">跳蚤市场</mt-tab-item>
        <mt-tab-item id="commodity">官方卡包</mt-tab-item>
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
          <div class="commodity" v-for="(item, index) in allCards" :key="index" >
            <good-item :goodData='item' :buy='buyTheGood' :revert='revertTheGood' :user="user"></good-item>
          </div>
          <div v-if="!allCards || allCards.length === 0" style="padding: 10px;">
            <p>暂无二手卡牌，可以出售自己的卡牌哦, 还可以从官方卡包中购买卡牌~</p>
          </div>
          <!--</div>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>


  </div>
</template>

<script>
  import CommodityItem from '../components/CommodityItem';
  import goodItem from '../components/goodItem';
  import Info from '../components/HeadInfo';

  // import { getMyRecords } from '../vuex/actions';
  import {
    mapState,
    mapActions,
    mapGetters,
  } from 'vuex';
  import {
    TabContainer,
    TabContainerItem,
    Button,
  } from 'mint-ui';
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
        // user: state => state.profile.user,
        // userRecords: state => state.profile.userRecords,
        // tip: state => state.profile.tip,
        // news: state => state.news.news,
        cardPool: state => state.card.cardPool,
        allGoods: state => state.market.allGoods,
        user: state => state.profile.user,
        myRank: state => state.rank.myRank,
      }),
      allCards() {
        return this.allGoods.filter((item) => {
          if (item.category === 'card') {
            return item;
          }
        });
      },
      allErciyuan() {
        return this.allGoods.filter((item) => {
          if (item.category === 'erciyuan') return item;
        });
      },
      // ...mapGetters('market',[
      //   'allCards',
      //   'allErciyuan',
      // ]),
    },

    // vuex: {
    //   getters: {
    //     user: state => state.user,
    //     myRecords: state => state.myRecords,
    //     tip: state => state.tip,
    //   },
    // },
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
  .commodity {
    margin-top: .5rem;
  }

  .commodity-list {
    margin-top: 8rem;
  }

  .good-list {
    margin-top: .5rem;
  }

  .user-info {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
  }

  .selecter {
    font-size: 1rem !important;
  }

</style>
