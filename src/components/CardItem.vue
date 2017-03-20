<template>
<div class="jw-card Grid -middle -center">
  <div class="card-color">
  </div>
  <div class="card-desc Grid -center -middle">
      <div class=" Cell card-name -12of12">
        {{cardData.card.name}}
      </div>
      <div class="Cell card-content -12of12">
        {{cardData.card.playScript}}
      </div>
      <img :src="cardData.card.file.URL+'?imageView2/2/w/157/h/200/q/75|imageslim'" alt="" class="card-img Cell -12of12" v-bind:class="{lock}"></img>
  </div>

  <!-- <div class="tip" v-if="lock"> 等级不够无法使用 </div> -->
</div>
</template>
<style scoped>
.jw-card{
  height: auto;
  overflow:auto;
  margin: .3rem;
  position: relative;
  background-color: #eee;
  box-shadow:0px 0px 5px #555555;
  padding: 0rem 1rem;

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
  /*padding: .5rem .5rem;*/
  margin: .5rem .5rem;
  /*background-color: #fff;*/
  height:18rem;


}
.card-img{
  /*height: 8rem;*/
  border: 4px solid #aaa;
}
.card-name{
  font-size: 1rem;

}
.card-content{
  font-size: 0.5rem;
  color: #666;
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
