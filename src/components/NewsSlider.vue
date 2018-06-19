<template>

<div class="">
<mt-swipe :auto="4000" :showIndicators="true">

    <mt-swipe-item  v-for="(item,index) in news"><news-item :newsData="item" @click.native="handleClick(index)"></news-item></mt-swipe-item>

</mt-swipe>
</div>


</template>

<script>
import NewsItem from '../components/NewsItem';


export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    };
  },
  props:['news','newsDetail'],

  // vuex: {
  //   getters: {
  //     user: state => state.user,
  //     myRecords: state => state.myRecords,
  //     tip: state => state.tip,
  //   },
  // },
  mounted() {
  },
  methods: {
    handleClick(index){
      console.log(index);
      this.newsDetail(index);
      this.$router.push('/newsDetail');
    }
  },
  components: {
      NewsItem,
    //   Swiper,
  }
}
</script>


<style scoped>

.tip{
  position: relative;
  z-index: -1;
}
.new-area{
  /* margin-top: .5rem; */
  margin-left: .3rem;
  margin-right: .3rem;

  /*background: #eee;*/
}
      .mint-swipe {
        height: 125px;
        width: 96%;
        margin: 0 auto;
        margin-top: 0.3rem;
      }
      /*.mint-swipe-item {
        line-height: 200px;
      }*/
</style>
