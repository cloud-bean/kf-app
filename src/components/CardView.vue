<template>
<div class="jw-card" @click.native="exit">
      <img :src="cardData.card.file.URL" alt="" class="card-img" v-bind:class="{lock}" width="100%"></img>
</div>
</template>
<style scoped>
.jw-card{
  height: auto;
  overflow:auto;
  margin: 0;
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
<script>

import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      // lock:false,
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    };
  },
  props:['cardData'],
  mounted() {
  },
  methods: {

  },
  computed:{
    ...mapState({
      user: state => state.profile.user
    }),
    lock(){
      if(this.cardData.card.level<this.user.option.level)return true;
    }

  },
  components: {

  }
}
</script>
