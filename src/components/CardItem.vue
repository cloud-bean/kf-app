<template>
<div class="jw-card Grid -middle -center"  v-bind:class="[transType]">
  <!--<div class="card-color">
  </div>
  <div class="card-desc Grid -center -middle">-->
      <!--<div class=" Cell card-name -12of12">
        {{cardData.card.name}}
      </div>
      <div class="Cell card-content -12of12">
        {{cardData.card.playScript}}
      </div>-->
      <!--<div class="type"> {{cardData.name}} </div> -->

      <img v-lazy="cardData.file.URL+'?imageView2/2/h/200/q/100|imageslim'" alt="" class="card-img Cell -12of12 image" v-bind:class="{lock}"></img>
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
  position:relative;
  /*box-shadow:0px 0px 8px rgba(0,0,255,.5);*/
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

.spcial{
  box-shadow:0px 0px 10px rgba(0,0,255,.8);
}
.forge{
  box-shadow:0px 0px 10px rgba(0,255,255,.8);
}
.addon{
  box-shadow:0px 0px 10px rgba(255,0,255,.8);
}
.tech{
  box-shadow:0px 0px 10px rgba(0,255,0,.8);
}
.assist{
  box-shadow:0px 0px 10px rgba(255,255,0,.8);
}
.def{
  box-shadow:0px 0px 10px rgba(100,255,0,.8);
}
.kill{
  box-shadow:0px 0px 10px rgba(0,0,100,.8);
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
      type:'tech',
    };
  },
  props:['cardData'],
  methods: {
 
  },
  created(){
    // this.type = this.transType(this.cardData.category);
  },
  computed:{
     transType(){
          const taskType = ['特殊类','熔炉类','技能类','增益类','辅助类','防御类','伤害类'];
          const typeLogo = ['spcial','forge','tech','addon','assist','def','kill'];
          const index = taskType.indexOf(this.cardData.category);
          return  typeLogo[index];
      }
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
