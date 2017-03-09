<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
<div class="">
  <div class="profile">
    <info :user="user"></info>
    <div class="tip">
      <tips :tip="tip"></tips>
    </div>
    <div class="chart">
      <my-chart :my-chart-data="userRecords"></my-chart>

    </div>
</div>

</div>


</template>

<script>
import Info from '../components/HeadInfo';
import MyChart from '../components/MyChart';
import Tips from '../components/Tips';

// import { getMyRecords } from '../vuex/actions';
import { mapState, mapActions } from 'vuex';

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
  computed: mapState({
    user: state => state.profile.user,
    userRecords: state => state.profile.userRecords,
    tip: state => state.profile.tip,
  }),
  // vuex: {
  //   getters: {
  //     user: state => state.user,
  //     myRecords: state => state.myRecords,
  //     tip: state => state.tip,
  //   },
  // },
  created() {

  },
  methods: {

  },
  components: {
      Info,
      MyChart,
      Tips,
  }
}
</script>


<style scoped>
.profile{
  /*background-color: #eef;*/
}
.chart{
  width: 100%;
}
.user-wrap{

}
.tip{
  position: relative;
  z-index: -1;
}
</style>
