<template>
  <div class="card">
      <div class="card-header">排行榜</div>
      <div class="card-content">
        <!-- <div class="card-content-inner"> -->
          <!-- <table class="table">
          <thead>
            <tr>
              <th>排名</th>
              <th>头像</th>
              <th>姓名</th>
              <th>等级</th>
              <th>经验</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
            <tr>
              <td>1</td>
              <td><img :src="user.profileImageURL" style="width:34px;" class="img-circle"></td>
              <td>{{user.displayName}}</td>
              <td>{{user.option.level}}</td>
              <td>{{user.option.exp}}</td>
            </tr>
          </tbody>
        </table> -->
        <div v-for="rank in ranks">
          <rank-item :user='rank' :rank-index='$index+1'></rank-item>
        </div>
      <!-- </div> -->
      </div>
      <!-- <div class="card-footer">每天更新</div> -->
    </div>


</template>

<script>
import vs from '../components/Vs';
import rankItem from '../components/rankItem';
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
    }

  },
  created(){
    util.getRanks()
    .then((res) => {
      this.ranks = res;
    })
  },
};
</script>

<style scoped>
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
</style>
