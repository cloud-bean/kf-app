<template>
<div class="">

</div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

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
  mounted() {
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
.info-card{
  background-color: #3C6DF9;
}

</style>
