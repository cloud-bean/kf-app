<template>

  <div class="img-cell Grid -middle -around">
    <div class="img Cell -1of12 Grid -center -middle">
        <img :src="boximg" alt="" class=""/>
    </div>
    <div class="Cell -6of12 Grid">
        <div class="title Cell -12of12">
        {{commodityData.name}} 
         </div>
         <div class="subtitle Cell -12of12">
        {{commodityData.description}}
        </div>
         <div class="subtitle Cell -12of12">
        价值{{commodityData.ticketPrice}}悦币
        </div>
    </div>
    
    <div class="icon Cell -2of12">
        <mt-button type="primary" size="small" plain @click="handleBuy">购买</mt-button>
    </div>


</div>




</template>

<script>
import boximg from '../assets/box.jpg';
import { MessageBox,Toast } from 'mint-ui';

    export default{
      props:['commodityData','buy'],
      components: {
      },
      data(){
        return {
         boximg,
        }
      },
      created(){
       
      },
      methods: {
       async handleBuy(){
           MessageBox.confirm(`确定购买吗，将花费${this.commodityData.ticketPrice}悦币`).then(action => {
                this.buy({cardPoolId:this.commodityData._id})
                .then(value => {
                    console.log(value);
                    Toast({
                         message: '购买成功',
                         iconClass: 'fa fa-success'
                        });
                });
           });
       }
      },
    }

</script>


<style scoped>
.img-cell{
    background-color: #eeeeff;
    width: 95%;
    margin: 0 auto;
    padding: .5rem .2rem;
    box-shadow:0 0 2px rgba(0, 0, 0, .5); 
}
.img{
  width: 3rem;
  height: 3rem;
  /*box-shadow:0px 0px 2px #555555;*/
}
.title{
    font-size:1.2rem;
}
.subtitle{
    font-size:.8rem;
    color: #aaa;
}
.money{
    color: #aaaaaa;
    font-size: .8rem;
}
</style>
