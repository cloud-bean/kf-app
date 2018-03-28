<template>
<div class="card-item">
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
      <div class="jw-card" v-bind:class="[transType]"></div>
      <mt-badge class="card-quantity" size="small" type="primary"" v-if="cardData.count>1">{{cardData.count}}</mt-badge>
      <img v-lazy="cardData.file.URL+'?imageView2/2/h/200/q/100|imageslim'" alt="" class="card-img image" v-bind:class="{lock}"></img>
  <!--</div>-->
      <div class="name"> {{cardData.name}} </div>
     <!-- <div class="tip"> {{cardData.name}} </div> -->
</div>
</template>
<style scoped>
.card-item{
  position: relative;
}
.card-quantity{
  position: absolute;
  top:.1rem;
  right:.3rem;
}
.name{
  font-size: .8rem;
  color: #888;
  text-align: center;
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
  border: 2px solid #ccc;
  box-shadow: 0px 0px 1px 1px rgba(216,216,216,.8);
  border-radius: 5px;

}

img[lazy=loading] {
  /*width: 100px;*/
  height: 100px;
  background-image: url('../assets/cardLoading.png');
  margin: auto;
}

.spcial{
  background-color: rgba(0,0,255,.8);
}
.forge{
  background-color: rgba(0,255,255,.8);
}
.addon{
  background-color: rgba(255,0,255,.8);
}
.tech{
  background-color: rgba(0,255,0,.8);
}
.assist{
  background-color: rgba(255,255,0,.8);
}
.def{
  background-color: rgba(100,255,0,.8);
}
.kill{
  background-color: rgba(0,0,100,.8);
}
.jw-card{
  /* height:5px; */
  /* border: 2px solid #ccc; */
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
