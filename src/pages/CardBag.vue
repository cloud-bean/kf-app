<template>
<div class="">
  <div class="bag-title">
    背包系统
  </div>

<div class="title" v-if="lotterys.length!=0">我的宝箱</div>
<div class="Grid -left bag-content">

  <div class="Cell -4of12 card-item" v-for="(lottery,index) in lotterys">
        <lottery-item :lottery-data="lottery" :open-box="openLotteryBox" :index="index"></lottery-item>
  </div>
</div>

<!--<div class="button-area">
  <mt-button @click="handleBuy" type="danger" size="large">买宝箱(1悦维币买1次)</mt-button>
</div>-->
<div class="title" v-if="cards.length!=0">我的卡牌</div>
<div class="Grid -left bag-content">
  <div class="Cell -4of12 card-item" v-for="(card,index) in cards" v-if="card.status==0">
        <card :card-data="card" @click.native="openCard(index)"></card>
  </div>
</div>
<div class="mask opacity" v-if="display" @click="closeCard">
  <card-view :card-data="activeCard"></card-view>
</div>

</div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Card from '../components/CardItem';
import LotteryItem from '../components/LotteryItem';

import CardView from '../components/CardView';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      activeCard:{},
      display:false,
    };
  },
  computed: mapState({
    cards: state => state.card.cards,
    lotterys: state => state.card.lottery,
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
    this.$nextTick(()=> {

      this.getUserCards();
      this.getUserLottery();
    })
  },
  methods: {
    ...mapActions([
      'openLotteryBox',
      'getUserCards',
      'getUserLottery',
    ]),

    openCard(index){
      if(this.display==false){
        this.activeCard = this.cards[index];
        this.display = true;
      }else{
        this.display= false;
      }
    },
    closeCard(){
      this.display= false;
    },

  },
  components: {
    Card,
    CardView,
    LotteryItem,
  }
}
</script>


<style scoped>
.title{
  padding-left:1rem;
  /*border-bottom: 1px solid #eeeeff;*/
  /*background-color: #eee;*/

}
.info-card{
  background-color: #3C6DF9;
}
.bag-title{
  background-color: #4b4b4b;
  text-align: center;
  color: #fff;
  padding: 0.8rem;

}
.bag-content{
  padding: 0.5rem;
  height: auto;
  /*background-color: #eee;*/
}
.card-item{
  padding: 0.1rem 0.3rem;
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
.button-area{
  margin: .5rem 1rem 0rem 1rem;
}

</style>
