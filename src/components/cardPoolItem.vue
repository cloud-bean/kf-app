<template>

<div class="img-cell Grid -middle -center">
    <div class="img Cell -12of12">
        <img :src="!!cardPoolData.file?cardPoolData.file.URL:boximg" alt="" class=""/>
    </div>
    <!-- <div class="title Cell -12of12 ">
        {{cardPoolData.name}}
    </div> -->
</div>
</template>

<script>
import boximg from '../assets/box.jpg';
import { Toast } from 'mint-ui';
import { mapState, mapActions } from 'vuex';

export default{
  props: ['cardPoolData', 'openBox', 'index'],
  components: {
  },
  data() {
    return {
      boximg,
    };
  },
  computed: {
  },
  methods: {

  },
};

</script>


<style scoped>
.img-cell{
    /*background-color: #eeeeee;*/
    margin: 0 auto;
    text-align: center;
    /*padding: .2rem .2rem;*/
    /*box-shadow:0 0 2px rgba(0, 0, 0, .5); */
}

.title{
    font-size:.6rem;
    text-align: center;

}
.img-cell img {
    width: 64px;
    height: 64px;
}

</style>
