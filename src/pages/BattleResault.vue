<template>
    <!-- <info></info>
    <expbar></expbar>
    <chart></chart> -->
    <div class="title">
      即将上线，敬请期待

    </div>


</template>

<script>


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

}
</script>


<style scoped>
.title{
  text-align: center;
  color: #ccc;
  font-size: 2.2rem;
  margin-top: 5rem;
}
</style>
