<template>

<div class="img-cell Grid -middle -center" @click="handleClick">
    <div class="img Cell -12of12">
        <img :src="lotteryData.cardPool.file?lotteryData.cardPool.file.URL:boximg" alt="" class=""/>
    </div>
    <div class="title Cell -12of12 ">
        {{lotteryData.cardPool.name}}
    </div>
</div>
</template>

<script>
import boximg from '../assets/box.jpg';
import { Toast } from 'mint-ui';
import { mapState, mapActions } from 'vuex';

    export default{
      props:['lotteryData','openBox','index'],
      components: {
      },
      data(){
        return {
          boximg
        }
      },
      computed:{
      },
      methods: {
        ...mapActions([
          'getUserCards',
          'getUserLottery'
        ]),
    async handleClick(){
        const data = await this.openBox({lotteryId:this.lotteryData._id,index:this.index});
        if(!data){
           Toast({
             message: `您的宝箱里没有卡`,
             position: 'middle',
             duration: 2000
           });
           await this.getUserLottery();

        }else{
          Toast({
          message: `获得-${data.card.name}`,
          position: 'middle',
          duration: 2000
         });
         await this.getUserCards();
         await this.getUserLottery();

        }

    },
      },
    }

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

</style>
