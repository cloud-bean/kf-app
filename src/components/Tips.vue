<template lang="html">

  <div class="cite"  v-if="display">
    <!-- <h3 class="grey">{{tip.title}}</h3>
    <p class="tip">
      {{tip.content}}
    </p> -->
    <i class="fa fa-remove close" @click.native="close" ></i>
    <img v-bind:src="tip.file.URL+'?imageView2/2/w/414/h/190/q/75|imageslim'" alt="" class="back-img"/>
  </div>


</template>

<script>


export default {
  props:['tip'],
  data(){
    return {
      display:true,
    }
  },
  components: {
  },
  methods:{
    close(){
      console.log('111');
      this.display=false;
    }
  }
}
</script>

<style lang="css" scoped>

.cite{
  text-align: center;
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
