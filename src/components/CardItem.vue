<template>
<div class="jw-card Grid -left">
  <div class="card-color">
  </div>
  <div class="card-desc Grid -left ">
    <div class="Cell ">
      <div class="card-name">
        {{cardData.card.name}}
      </div>
      <div class="card-content">
        {{cardData.card.playScript}}
      </div>
    </div>
    <div class="Cell">
      <img :src="cardData.card.file.URL" alt="" class="card-img" v-bind:class="{lock}"></img>
    </div>
  </div>

  <!-- <div class="tip" v-if="lock"> 等级不够无法使用 </div> -->
</div>
</template>
<style scoped>
.jw-card{
  height: auto;
  overflow:auto;
  margin: 0;
  position: relative;
}
.tip{
  text-align: center;
  position: absolute;
  top: 3rem;
  color: #ccc;
  font-size: 0.5rem;
  padding: 0.3rem 0.2rem;
  text-align: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  /*margin-top: -3rem;*/
}
.lock{
}
.card-color{
  width: 5%;
  background-color: #abc;
}
.card-desc{
  width: 95%;
  padding: .5rem .5rem;
  margin: .5rem .5rem;
  background-color: #fff;


}
.card-img{
  height: 8rem;
  border: 4px solid #aaa;
}
.card-name{
  font-size: 1rem;

}
.card-content{
  font-size: 0.5rem;
  color: #ccc;
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
