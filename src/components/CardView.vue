<template>
<div class="jw-card">
    <img :src="cardData.card.file.URL" alt="" width="100%"></img>
</div>
</template>
<style scoped>
/*.jw-card{
  height: auto;
  overflow:auto;
  margin: 0;
  position: absolute;
  z-index: 100;
  top:0;
  left:0;
}

image[lazy=loading] {
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

export default {
  data() {
    return {
      // display:false,
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

  },
  components: {

  }
}
</script>
