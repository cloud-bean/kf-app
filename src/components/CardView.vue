<template>
<div class="jw-card">
    
    <img v-lazy="cardData.file.URL+'?imageView2/2/h/540/q/100|imageslim'" alt="" width="100%"></img>
    <mt-badge size="large"  type="primary">{{cardData.name}}</mt-badge>
    <mt-badge size="large" type="success">{{cardData.category}}</mt-badge>
    <!--<qrcanvas :options="{data:cardData._id}"></qrcanvas>-->
</div>
</template>
<style scoped>
img[lazy=loading] {
  /*width: 350px;*/
  height: 480px;
  background-image: url('../assets/cardLoading.png');
  background-size:contain;
  margin: auto;
}
.jw-card{
  height: auto;
  overflow:auto;
  margin: 0;
  /*position: relative;*/
  z-index: 100;
}
.type{
  width: 50%;
  margin: 0 auto;
  margin-bottom: .4rem;
  padding: .4rem .5rem;
  color: #fff;
  background-color:#00f;
  font-size:1rem; 
  border-radius: 2px; 
}

/*image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.close{
  top:0.3rem;
  right:0.3rem;
  color: #cccccc;
  position: absolute;
}*/
</style>
<script>
import Qrcanvas from 'qrcanvas-vue';

export default {
  data() {
    return {
      // display:false,
      // lock:false,
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      type:'tech',
    };
  },
  props:['cardData'],
  mounted() {
    
  },
  methods: {
  

  },
  computed:{

  },
  components: {
    Qrcanvas,
  }
}
</script>
