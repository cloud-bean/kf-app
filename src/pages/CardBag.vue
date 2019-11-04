<template>
  <div class="card-bag">
    <transition enter-active-class=" animated zoomIn" leave-active-class=" animated zoomOut">
      <card-view class="card-view" v-if="display" :card-data="activeCard" @click.native="closeCard" :product="true"
        :sellCard="sellMyCard"></card-view>
    </transition>
    <info :user="user" :rank="myRank.rankIndex"></info>


    <!-- <div class="title" v-if="lotterys.length!=0">我的宝箱</div>
<div class="Grid -left bag-content">

  <div class="Cell -3of12 card-item" v-for="(lottery,index) in lotterys" if="lotterys">
        <lottery-item :lottery-data="lottery" :open-box="openLotteryBox" :index="index"></lottery-item>
  </div>
</div> -->

    <!--<div class="button-area">
  <mt-button @click="handleBuy" type="danger" size="large">买宝箱(1金币买1次)</mt-button>
</div>-->
    <!-- <div class="title" v-if="cards.length!=0">我的卡牌</div> -->

    <div class="Grid -left bag-content">
      <div class="Cell -3of12 card-item" v-for="(card,index) in cards" v-if="card.status==0">
        <card class="card" :card-data="card" @click.native="openCard(index)"></card>
      </div>
      <div style="padding:10px;" v-if="!cards || (cards.length === 0)">
        <p>你还没有卡牌。</p>
        <span style="color:grey; font-size: 10pt;">做任务、参加课堂对战都可以赢得金币，在集市里面可以购买官方卡牌和二手卡牌。卡牌可以兑换实物奖励、在课堂上使用等，收集卡牌，解锁更多玩法。</span>
      </div>
    </div>

    <div class="mask opacity" v-if="display" @click="closeCard" @touchmove.prevent></div>
  </div>
</template>

<script>
  import Info from '../components/HeadInfo';
  import {
    mapState,
    mapActions,
  } from 'vuex';
  import Card from '../components/CardItem';
  import LotteryItem from '../components/LotteryItem';
  import {
    Toast,
  } from 'mint-ui';

  import CardView from '../components/CardView';

  export default {
    data() {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        activeCard: {},
        display: false,
      };
    },
    computed: mapState({
      cards: state => state.card.cards,
      lotterys: state => state.card.lottery,
      user: state => state.profile.user,
      myRank: state => state.rank.myRank,
      // userRecords: state => state.profile.userRecords,
      // tip: state => state.profile.tip,
    }),

    // vuex: {
    //   getters: {
    //     user: state => state.user,
    //     myRecords: state => state.myRecords,
    //     tip: state => state.tip,
    //   },
    // },
    mounted() {
      this.$nextTick(() => {
        this.getUserCards();
        // this.getUserLottery();
      });
    },
    methods: {
      ...mapActions([
        'openLotteryBox',
        'getUserCards',
        'getUserLottery',
        'sellCard',
      ]),
      async sellMyCard(cardData) {
        await this.sellCard(cardData);
        await this.getUserCards();
        await Toast({
          message: '出售卡牌成功，在市场中查看，坐等收钱',
          position: 'middle',
          duration: 2000,
        });
      },

      openCard(index) {
        if (this.display == false) {
          this.activeCard = this.cards[index];
          this.display = true;
        } else {
          this.display = false;
        }
      },
      closeCard() {
        this.display = false;
      },

    },
    components: {
      Card,
      CardView,
      LotteryItem,
      Info,
    },
  };

</script>


<style scoped>
  .card-bag {
    /* position: relative; */
  }

  .card {
    margin-top: .5rem;
  }

  .bag-content {
    margin: 0 0.5rem;
    height: auto;
    /*background-color: #eee;*/
  }

  .card-item {
    padding: 0.1rem 0.3rem;
  }

  .mask {
    height: 100%;
    width: 100%;
    position: fixed;
    /* _position:absolute; */
    top: 0;
    left: 0;
    z-index: 998;
    background: rgba(0, 0, 0, .8);
  }

  .card-view {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 2rem;
    /* bottom: 0px; */
    margin: auto;
    text-align: center;
    z-index: 999;
    width: 70%;
  }

  .button-area {
    margin: .5rem 1rem 0rem 1rem;
  }

</style>
