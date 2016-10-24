<template>
  <div class="card">
      <div class="card-header">排行榜</div>
      <div class="card-content">

        <rank-item :user='myRank' :rank-index='myIndex'></rank-item>
        <div class="divide"></div>
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

import mockdata from '../../test/mock';
export default {
  components:{vs,rankItem},
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      ranks:[],
      myRank: null,
      myIndex: null,
    }

  },
  created(){
    util.getRanks()
    .then((res) => {
      this.ranks = res;
      const userid = localStorage.getItem('kf_userid');
      // console.log('userid',userid);
      this.ranks.some((item, index) => {
        if (item.userid == userid) {
          // console.log('item',item);
          this.myRank = item;
          this.myIndex = index+1;
          return true;
        }else{
          return false;
        }
      })
    })
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
