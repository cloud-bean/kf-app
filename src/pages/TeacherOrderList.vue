<template>
  <div class="">
    <div class="card no-margin">
      <div class="card-content">
        <div v-if="!orders || (orders.length === 0)" style="padding: 10px;">
          <p>没有待批改的任务作业</p>
          <span style="color:grey; font-size: 10pt;">学生提交的作业会在这里看到，批改审核时，选择分数和快捷评语，或者输入评语。
            分数是[5，4，3，2，1]，会影响到完成任务获取的经验值和悦币的数量。</span>
        </div>
        <div class="page-box">
          <mt-button v-if="page > 1" @click.native="prePage">上一页</mt-button>
          <span>第{{ page }}页 / 共{{totalPage}}页, 共{{totalCount}}个</span>
          <mt-button v-if="page < totalPage" @click.native="nextPage">下一页</mt-button>
        </div>
        <div v-for="(item, index) in orders" :key="index" class="rank-list">
          <order-item :orderData='item' class="rank-item" @click.native="handleClick(index)"></order-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import orderItem from '../components/OrderItem';
import util from '../config/util';
import mockdata from '../../test/mock';
import { mapState, mapActions } from 'vuex';


export default {
  components:{orderItem},
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      page: 1,
      limit: 5
    }
  },
  methods:{
    ...mapActions([
      'getOrders',
      'orderDetail',
    ]),
    handleClick(index){
      this.orderDetail(index);
      this.$router.push('/orderDetail');
    },
    prePage(){
      this.page = this.page - 1;
      this.getOrders({
        page: this.page,
        limit: this.limit
      });
    },
    nextPage(){
      this.page = this.page + 1;
      this.getOrders({
        page: this.page,
        limit: this.limit
      });
    },
  },
  computed: {
      ...mapState({
      orders: state => state.score.orders,
      totalCount:  state => state.score.totalCount,
    }),
    totalPage() {
      return Math.ceil(this.totalCount/this.limit);
    }
  },
  // vuex: {
  //   getters: {
  //     orders: state => state.orders,
  //   },
  //   actions: {
  //     getOrders,
  //     orderDetail,
  //   }
  // },

  mounted(){
    this.$nextTick(()=> {
      // if(this.orders.length == 0){
        this.getOrders({
          page: this.page,
          limit: this.limit
        });
      // }
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
.name {
  font-size: 0.6rem;
}
  .rank-item{
    box-shadow: none !important;
    border-radius: 0 !important;
    /* border-bottom: 1px solid lightgray; */

  }
  .line{
    display: block;
    width: 100%;
    height: 0.05rem;
    background-color: red;
  }
  .no-margin{
    margin: 0;
    margin-top: 0.3rem;
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
  .page-box {
    text-align: center;
    background: #4FC1E9;
    margin: 10px;
    padding: 10px;
  }
</style>
