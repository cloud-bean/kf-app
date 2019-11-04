<template>

  <div class="img-cell Grid -middle -around">
    <div class="img Cell -1of12 Grid -center -middle">
      <img :src="!!(this.goodData.detail.file)?this.goodData.detail.file.URL+'-kf.app.market.card':boximg" alt=""
        class="" />
    </div>
    <div class="Cell -6of12 Grid">
      <div class="title Cell -12of12" @click="showDetails">
        {{goodData.name}}
      </div>
      <!--<div class="desc Cell -12of12">-->
      <!--{{goodData.description}}-->
      <!--</div>-->
      <div class="subtitle Cell -12of12">
        售价{{goodData.price}}金币 <span style="color:#26a2ff;">来自{{goodData.owner.displayName}}</span>
      </div>
      <div class="desc">
        发布于 {{goodData.created | timefromNow}}
      </div>
    </div>

    <div class="icon Cell -2of12">
      <mt-button type="primary" size="small" @click="handleCancel" v-if="user && (user._id==goodData.owner._id)">撤回
      </mt-button>
      <mt-button type="primary" size="small" plain @click="handleBuy" v-else>购买</mt-button>

    </div>
    <div class="mask" v-if="popupVisible" @click="closeCard"></div>
    <transition enter-active-class=" animated flipInY" leave-active-class=" animated flipOutY">
      <card-view class="card-view" v-if="popupVisible" :card-data="card" @click.native="closeCard" :product="false">
      </card-view>
    </transition>
  </div>
</template>

<script>
  import boximg from '../assets/box.jpg';
  import {
    MessageBox,
    Toast
  } from 'mint-ui';
  import {
    mapState,
    mapActions
  } from 'vuex';
  import CardView from '../components/CardView';
  import FloatMessageBar from '../components/floatMessageBar';

  export default {
    props: ['goodData', 'buy', 'revert', 'user'],
    components: {
      CardView,
    },
    data() {
      return {
        boximg,
        popupVisible: false,
        card: {},
        showMsgBar: false,
      };
    },
    computed: mapState({
      money: state => state.profile.user.option.goldToken,
    }),
    mounted() {
      // this.img = this.goodData.file.URL||boximg;
    },
    methods: {
      closeCard() {
        this.popupVisible = false;
      },
      showDetails() {
        MessageBox(this.goodData.name, this.goodData.description);
      },
      async handleBuy() {
        if (this.money < this.goodData.price) {
          Toast({
            message: '没有足够的金币，快去完成任务吧',
            position: 'bottom',
          });
          return;
        }
        try {
          await MessageBox.confirm(`将花费${this.goodData.price}金币，确定购买吗？`);
          if (this.goodData.category === 'card') {
            this.card = this.goodData.detail;
            this.popupVisible = true;
          }
          console.log('will buy');
          await this.buy({
            goodId: this.goodData._id
          });
        } catch (e) {
          console.log('not buy');
          console.log(e);
        }
      },
      async handleCancel() {
        try {
          await MessageBox.confirm(`确定下架${this.goodData.name}吗？`);
          await this.revert({
            goodId: this.goodData._id
          });
        } catch (e) {
          console.log(e);
        }
      },
    },
  };

</script>


<style scoped>
  .img-cell {
    background-color: rgba(238, 238, 187, 0.46);
    width: 95%;
    margin: 0 auto;
    padding: .5rem .2rem;
    /*border: 1px solid #ccc;*/
    /*box-shadow:0 0 2px rgba(0, 0, 0, .5);*/
    box-shadow: 0 0 1px rgba(0, 0, 0, .2);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .img {
    width: 3rem;
    height: 3rem;
    /*box-shadow:0px 0px 2px #555555;*/
  }

  .title {
    font-size: 1.2rem;
  }

  .desc {
    color: #888;
    font-size: .8rem;
    margin-top: .3rem;
  }

  .subtitle {
    font-size: .8rem;
    color: #6F2DBD;
    margin-top: .3rem;
  }

  .money {
    color: #aaaaaa;
    font-size: .8rem;
  }

  img[lazy=loading] {
    /*width: 350px;*/
    height: 443px;
    background-image: url('../assets/cardLoading.png');
    background-size: contain;
    margin: auto;
  }

  .name {
    color: #ccc;
    font-size: 1.2rem;
  }

  .mask {
    position: fixed;
    height: 100%;
    width: 100%;
    _position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
    background: rgba(0, 0, 0, .8);
  }

  .card-view {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 2rem;
    /* bottom: 0px; */
    margin: auto;
    text-align: center;
    z-index: 999;
    width: 70%;
  }

</style>
