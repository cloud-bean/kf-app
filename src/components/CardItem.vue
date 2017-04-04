<template>
<div class="jw-card Grid -middle -center" >
  <!--<div class="card-color">
  </div>
  <div class="card-desc Grid -center -middle">-->
      <!--<div class=" Cell card-name -12of12">
        {{cardData.card.name}}
      </div>
      <div class="Cell card-content -12of12">
        {{cardData.card.playScript}}
      </div>-->
      <!-- <div class="type"> {{cardData.name}} </div> -->

      <img v-lazy="cardData.file.URL+'?imageView2/2/h/150/q/100|imageslim'" alt="" class="card-img Cell -12of12 image" v-bind:class="{lock}"></img>
  <!--</div>-->
      <!-- <div class="cata"> {{cardData.name}} </div> -->
     <!-- <div class="tip"> {{cardData.name}} </div> -->
</div>
</template>
<style scoped>
.jw-card{
  margin: .3rem;
  /*background-color: #eee;*/
  /*box-shadow:0px 0px 10px #555555;*/
  /*padding: 0rem 1rem;*/
  box-shadow:0px 0px 8px rgba(0,0,255,.5);
}

.tip{
  text-align: center;
  /*position: absolute;*/
  /*top: 3rem;*/
  color: #000;
  font-size: 1rem;
  padding: 0.2rem 0.2rem;
  text-align: center;
  width: 100%;
  background: #ccc;
  /*margin-top: -3rem;*/
}
img{
  /*border: 2px solid #aaaaaa;*/
}

img[lazy=loading] {
  /*width: 100px;*/
  height: 150px;
  background-image: url('../assets/cardLoading.png');
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
    // ...mapState({
    //   user: state => state.profile.user
    // }),
    // lock(){
    //   if(this.cardData.card.level<this.user.option.level)return true;
    // }

  },
  components: {

  }
}
</script>
