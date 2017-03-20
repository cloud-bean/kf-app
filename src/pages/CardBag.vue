<template>
<div class="">
  <div class="bag-title">
    我的卡包
  </div>

<div class="Grid -left">
  <div class="Cell -6of12 card-item" v-for="card in cards">
        <card :card-data="card"></card>
  </div>
</div>
<div class="">
  <button  @click="lottery" class="button button-big">抽奖</button>

</div>

</div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Card from '../components/CardItem';
import {getLotterys, getLotteryCard} from '../api';
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
    cards: state => state.card.cards,
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
    })
  },
  methods: {
    ...mapActions(['getUserCards']),
    async lottery(){
      const lotterys = await getLotterys();
      const card = await getLotteryCard(lotterys[0]._id);
      console.log(card);
    }
  },
  components: {
    Card,
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
}
.card-item{
  padding: 0.1rem 0.3rem;
}

</style>
