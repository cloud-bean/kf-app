<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
    <div class="card info-card">
      <div class="card-content">
        <div class="card-content-inner">
          <div class="info">
            <info :user="user"></info>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content">

          <div class="info">
            <chart></chart>
          </div>
      </div>
    </div>



</template>

<script>
import Info from '../components/Head';
import Expbar from '../components/Expbar';
import Chart from '../components/Chart';
import config from '../config/config';
import util from '../config/util';
import mockdata from '../../test/mock';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.

    };
  },
  created() {
     this.user = mockdata.user

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
      Expbar,
      Chart,
  }
}
</script>


<style scoped>
.info-card{
  background-color: #3C6DF9;
}

</style>
