<template>
<transition enter-active-class=" animated fadeInDown" leave-active-class=" animated fadeOut">
  <div class="msg-bar" v-if="show">
    <span>{{desc}}</span><span style="color:#6F2DBD;">{{value}}</span> <span style="color:#6F2DBD;">{{times}}</span>
  </div>
</transition>

</template>
<style scoped>
.msg-bar{
  position:fixed;
  width:90%;
  left:0;
  right:0;
  margin: auto;
  top:1rem;
  background-color: rgba(0,0,0,.8);
  color: #fff;
  padding: .5rem 1rem;
  border-radius: 5px;
  z-index:10000;
  text-align: center;
  font-size: .9rem;
}

</style>
<script>

export default {
  data() {
    return {

    };
  },
  props:{
    show:{
      default:false,
    },
    desc:{
      required:true,
    },
    value:{
      default:'',
    },
    times:{
      default:'',
    },
  },
  methods: {

  },
  mounted(){
    // this.type = this.transType(this.cardData.category);
    setTimeout(() => {
      this.show = false
    }, 2000)

  },
  computed:{

  },
  components: {

  }
}
</script>
