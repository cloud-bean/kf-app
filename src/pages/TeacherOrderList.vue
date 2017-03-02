<template>
  <div class="">
    <div class="card no-margin">
      <div class="card-content">
        <div v-for="(item, index) in orders" class="rank-list">
          <order-item :orderData='item' class="rank-item" @click.native="handleClick(index)"></order-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import vs from '../components/Vs';
import orderItem from '../components/OrderItem';
import util from '../config/util';
// import {getOrders,orderDetail} from '../vuex/actions';
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
    }

  },
  methods:{
    ...mapActions([
      'getOrders',
      'orderDetail',
    ]),
    handleClick(index){
      console.log(index);
      this.orderDetail(index);
      this.$router.push('/orderDetail');
    },
  },
  computed: mapState({
    orders: state => state.score.orders,
  }),
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
        $.showPreloader('加载中...');
        this.getOrders()
        .then((res) => {
          $.hidePreloader();
        })
        .catch(err => {
          console.log(err);
        })
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
</style>
