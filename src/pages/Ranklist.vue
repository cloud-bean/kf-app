<template>
  <div class="">
    <!-- {{myRank.rankIndex}} -->
    <div class="my-rank">
      <rank-item :user='myRank' :rank-index='myRank.rankIndex'  class="rank-item" :is-me="true"></rank-item>

    </div>
<div class="divide">

</div>
  <div class="card no-margin">
      <div
        v-infinite-scroll="loadMoreRank"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="0">
        <div v-for="(rank, index) in ranks" class="rank-list">
          <rank-item :user='rank' :rank-index='index+1' :like='friendLike' class="rank-item"></rank-item>
        </div>
      </div>
    </div>
    <!-- <div v-show="hasMore" class="load-more">
      <mt-button @click="loadMoreRank" size="large" type="primary" icon="more" plain>加载更多</mt-button>
    </div> -->
    <!-- <div v-show="!hasMore" class="load-more">
      <mt-button  size="large" type="primary"  plain disabled>排名到底了</mt-button>
    </div> -->
  </div>

</template>

<script>
import rankItem from '../components/RankItem';
import util from '../config/util';
// import {getRanks} from '../vuex/actions';
import mockdata from '../../test/mock';
import { mapState, mapActions } from 'vuex';

export default {
  components:{ rankItem },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      loading:false,
      hasMore:true,
    }

  },
  computed: mapState({
    ranks: state => state.rank.ranks,
    myRank: state => state.rank.myRank,
    page: state => state.rank.page,
  }),

  // vuex: {
  //   getters: {
  //     ranks: state => state.ranks,
  //     myRank: state => state.myRank,
  //   },
  //   actions: {
  //     getRanks,
  //   }
  // },
  mounted(){
    // this.$nextTick(()=> {
    //   if(this.ranks.length == 0){
    //     this.getRanks(this.page);
    //   }
    // })
  },
  methods:{
    ...mapActions([
      'getRanks',
      'friendLike',
    ]),
    loadMoreRank(){
      this.loading = true;
      if(this.hasMore){
        this.getRanks(this.page)
        .then(res => {
          if(res.length < 10){
            // console.log(res.length);
            this.hasMore = false;
          }
          this.loading = false;

        })
      }
    },
  },
};
</script>

<style scoped>
.divide{
  width: 100%;
  height: 1rem;
}
/*table{
  width: 100%;
}
.table th{
  text-align: center;
}
  .table td{
    text-align: center;

  }
  .img-circle{
    border-radius: 1.25rem;
  }
  .table tr {
    height: 2.5rem;
  }*/
  .rank-list:last-child .rank-item{
    border-bottom: none !important;

  }
.name {
  font-size: 0.6rem;
}
  .rank-item{
    box-shadow: none !important;
    border-radius: 0 !important;
    border-bottom: 1px solid lightgray;

  }
  .line{
    display: block;
    width: 100%;
    height: 0.05rem;
    background-color: red;
  }
  .no-margin{
    margin: 0;
    margin-top: 0rem;
    border-radius: 0;
    box-shadow: 0 0rem 0rem rgba(0, 0, 0, 0.3);
  }
  .blue-bg{
    /*font-size: 0.7rem;*/
    /*height: 0.8rem !important;*/
    color: #ffffff;
    background-color: #4FC1E9;
    padding: 0.5rem;
    font-size: 0.5rem;
    text-align: center;
  }
  .white-bg{
    color: #000000;
    background-color: #ffffff;
    padding: 0.9rem;
    font-size: 0.8rem;
    text-align: center;
  }
  .headimg {
    width: 3rem;
    text-align: center;
    border-radius: 50%;
  }
  .load-more{
    margin: 0.3rem auto;
    width: 300px;
    /*padding-left: 0.5rem;*/
    /*padding-right: 0.5rem;*/
  }
  .divide{
    height: .3rem;
    background-color: #eee;
  }
  .my-rank{
    background-color: #eeeeff;
  }
</style>
