<template>

  <div class="img-cell Grid -middle -around">
    <!-- <float-message-bar desc="很不幸我的朋友，你没有获得卡牌" :show.sync="showMsgBar"></float-message-bar> -->
    <div class="img Cell -1of12 Grid -center -middle">
        <img :src="!!(this.commodityData.file)?this.commodityData.file.URL:boximg" alt="" class=""/>
    </div>
    <div class="Cell -6of12 Grid good-item" style="">
        <div class="title Cell -12of12" @click="showDetails">
          {{commodityData.name}}
         </div>
         <div class="subtitle Cell -12of12">
        售价{{commodityData.ticketPrice}}悦币 <span style="color:#26a2ff;">来自悦盒官方</span>
        </div>
      <div class="desc">
        获奖概率 {{commodityData.threshold + '%'}}
      </div>
    </div>

    <div class="icon Cell -2of12">
      <mt-button type="primary" size="small" plain @click="handleBuy">购买</mt-button>
    </div>
    <div class="mask" v-if="popupVisible" @click="closeCard"></div>
    <transition enter-active-class=" animated flipInY" leave-active-class=" animated flipOutY">
        <card-view class="card-view" v-if="popupVisible" :card-data="card" @click.native="closeCard" :product="false"></card-view>
    </transition>
  </div>


  <!-- <transition enter-active-class="fadeInRight" leave-active-class="fadeOutRight">
    <div>
       <img v-lazy="cardData.file.URL+'?imageView2/2/h/540/q/100|imageslim'" alt="" width="100%"></img>
         <div class="name">{{cardData.name}}</div>
         <div class="desc">{{cardData.description}}</div>
         <mt-button type="primary" size="normal" @click="sale">出  售</mt-button>


     </div>
   </transition> -->







</template>

<script>
import boximg from '../assets/box.jpg';
import { MessageBox,Toast } from 'mint-ui';
import { mapState, mapActions } from 'vuex';
import CardView from '../components/CardView';
import FloatMessageBar from '../components/floatMessageBar';


    export default{
      props:['commodityData','buy','openLotteryBox'],
      components: {
        CardView,
        FloatMessageBar,
      },
      data(){
        return {
         boximg,
         popupVisible:false,
         card:{},
         showMsgBar:false,
        }
      },
      computed:mapState({
        money:state => state.profile.user.option.goldToken,
      }),
      mounted(){
        // this.img = this.commodityData.file.URL||boximg;
      },
      methods: {
        closeCard(){
          this.popupVisible= false;
        },
        showDetails() {
          MessageBox(this.commodityData.name, this.commodityData.description);
        },
       async handleBuy(){
          if(this.money<this.commodityData.ticketPrice){
            Toast({
                message:'没有足够的悦维币，快去完成任务吧',
                position:'bottom',
              });
            return;
          }

          try{
            await MessageBox.confirm(`确定购买吗，将花费${this.commodityData.ticketPrice}悦币`);
            const data = await this.buy({cardPoolId:this.commodityData._id, money:this.commodityData.ticketPrice});
            console.log(data);
            if(!data.card){
              Toast({
                iconClass:' fa-hand-peace-o fa',
                 message: `很不幸我的朋友，你没有获得卡牌!`,
                 position: 'middle',
                 duration: 1000
               });
              // this.showMsgBar=true;
              // setTimeout(()=>{
              //   this.showMsgBar = false;
              // },1000);
            }
            else if(data.card){
              this.card = data.card;
              this.popupVisible = true;
             //  Toast({
             //  iconClass:'fa-bolt fa',
             //  message: `上帝眷顾勤奋的人，您获得${data.card.name}一张`,
             //  position: 'middle',
             //  duration: 2000
             // });
            }
          }catch(e){
            console.log(e);
          }


       }
      },
    }

</script>


<style scoped>
.img-cell{
    background-color: rgba(238, 238, 255, 0.45);
    width: 95%;
    margin: 0 auto;
    padding: .5rem .2rem;
    /*border: 1px solid #ccc;*/
    box-shadow:0 0 1px rgba(0, 0, 0, .2);
  -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;

}
.img{
  width: 3rem;
  height: 3rem;
  /*box-shadow:0px 0px 2px #555555;*/
}
.title{
    font-size:1.2rem;
}
.desc{
  font-size:.8rem;
  color: #888;
  margin-top: .3rem;
}
.subtitle{
  font-size:.9rem;
  color: #6F2DBD;
  margin-top: .3rem;
}
.money{
    color: #aaaaaa;
    font-size: .8rem;
}
img[lazy=loading] {
  /*width: 350px;*/
  height: 443px;
  background-image: url('../assets/cardLoading.png');
  background-size:contain;
  margin: auto;
}
.name{
  color:#ccc;
  font-size: 1.2rem;
}

.mask{
  position:fixed;
  height:100%;
  width:100%;
  _position:absolute;
  top:0;
  left:0;
  z-index:998;
  background:rgba(0,0,0,.8);
}
.card-view{
  position: fixed;
  left:0px;
  right: 0px;
  top:2rem;
  /* bottom: 0px; */
  margin: auto;
  text-align: center;
  z-index: 999;
  width:70%;
}

  .good-item {
  }
</style>
