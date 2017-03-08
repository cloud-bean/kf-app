<template lang="html">

  <div class="cite"  v-bind:class="{'shut':display}">
    <!-- <h3 class="grey">{{tip.title}}</h3>
    <p class="tip">
      {{tip.content}}
    </p> -->
    <i class="fa fa-remove close" v-on:click="close" ></i>
    <img v-bind:src="tip.file.URL" alt="" class="back-img"/>
  </div>


</template>

<script>


export default {
  props:['tip'],
  data(){
    return {
      display:false,
    }
  },
  components: {
  },
  methods:{
    close(){
      this.display=true;
    }
  }
}
</script>

<style lang="css" scoped>

.cite{
  text-align: center;
  margin-top:0.3rem;
  /*background-image:url('../../static/background.jpg');*/
  background-repeat:no-repeat;
  background-size: cover;
  background-color: #ffffff;
  width: 100%;
  /*padding: 0.3rem 1rem;*/
  position: relative;
}
.grey{
    color: #cccccc;
    font-size: 0.7rem;
}
.tip{
  /*color: #ffffff;*/
}
.back-img{
  width: 100%;
  height:180px;
}
.close{
  top:0.3rem;
  right:0.3rem;
  color: #cccccc;
  position: absolute;
}
.shut{
  display: none;
}

</style>
