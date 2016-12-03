<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->

  <info :user="user"></info>
  <my-chart></my-chart>




</template>

<script>
import Info from '../components/HeadInfo';
import MyChart from '../components/MyChart'
// import Expbar from '../components/Expbar';
// import Chart from '../components/Chart';
// import config from '../config/config';
// import util from '../config/util';
// import mockdata from '../../test/mock';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.

    };
  },
  vuex: {
    getters: {
      user: state => state.user,
    },
  },
  created() {

    // this.getUserInfo('57f44a1674e8b8f5664c76c3')
    // .then((res)=>{
    //   this.user = res;
    // })
  },
  methods: {
    // getUserInfo(userid, accessToken) {
    //   return new Promise((resolve, reject) => {
    //     this.$http.get(`${config.route.user}${userid}`)
    //     .then((result) => {
    //       console.log(result);
    //       resolve(result.body.data);
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    //   });
    // }
  },
  components: {
      Info,
      MyChart,
  }
}
</script>


<style scoped>
.info-card{
  background-color: #3C6DF9;
}

</style>
