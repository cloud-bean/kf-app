<template>
<div class="">
  <div class="bag-title">
    我的卡包
  </div>
<div class="button-area">
  <mt-button @click="handleClick" type="danger" size="large">抽卡({{lottery.length}})</mt-button>
</div>
<!--<div class="button-area">
  <mt-button @click="handleBuy" type="danger" size="large">买宝箱(1悦维币买1次)</mt-button>
</div>-->

<div class="Grid -left bag-content">
  <div v-if="cards.length==0">
    你的卡包是空的
  </div>
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
import CardView from '../components/CardView';
import { Toast } from 'mint-ui';
import { getLotteryCard} from '../api';

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
    lottery: state => state.card.lottery,
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
         this.getUserLottery();
         this.getUserCards();
        
    })
  },
  methods: {
    ...mapActions(['getUserCards','getUserLottery']),
    async handleClick(){
      if(this.lottery.length>0){
        const data = await getLotteryCard(this.lottery[0]._id);
        if(!data){
           Toast({
             message: `很遗憾没有抽到`,
             position: 'middle',
             duration: 2000
           });
          await this.getUserLottery();
           return;
        }
        await this.getUserCards();
        await this.getUserLottery();
         Toast({
          message: `${data.user.displayName}-获得-${data.card.name}`,
          position: 'middle',
          duration: 2000
         });
      }else{
        Toast({
          message: '您用完了抽奖机会，快去做任务吧',
          position: 'middle',
          duration: 2000
       });
      }
    },
    handleBuy(){

    },
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
  }
}
</script>


<style scoped>
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
  margin-top:.5rem;
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
.content{

}
.opacity{background:rgba(0,0,0,.5); }
.button-area{
  margin: .5rem 1rem 0rem 1rem;
}

</style>
