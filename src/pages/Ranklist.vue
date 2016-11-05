<template>
  <rank-item :user='myRank.content' :rank-index='myRank.index'></rank-item>

  <div class="card">
      <div class="card-header">排行榜</div>
      <div class="card-content">

        <div v-for="rank in ranks" class="rank-list">
          <rank-item :user='rank' :rank-index='$index+1' class="rank-item"></rank-item>
        </div>
      <!-- </div> -->
      </div>
      <!-- <div class="card-footer">每天更新</div> -->
    </div>


</template>

<script>
import vs from '../components/Vs';
import rankItem from '../components/RankItem';
import util from '../config/util';
import {getRanks} from '../vuex/actions';
import mockdata from '../../test/mock';
export default {
  components:{vs,rankItem},
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.

    }

  },
  vuex: {
    getters: {
      ranks: state => state.ranks,
      myRank: state => state.myRank,
    },
    actions: {
      getRanks,
    }
  },
  created(){

  },
  ready(){
    if(this.ranks.length == 0){
      $.showPreloader('加载中...');
      this.getRanks()
      .then((res) => {
        $.hidePreloader();
      })
      .catch(err => {
        console.log(err);
      })
    }

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
</style>
