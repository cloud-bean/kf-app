<template>
  <div class="" >
    <div class="userhead">
          <img :src="user.profileImageURL" alt="" class="avatar"/>
          <div class="name">{{user.displayName}}</div>
          <div class="slogan">{{user.option.slogan || 'Learning with joy, achieving with will.'}}</div>

    </div>
   
    <div class="info Grid">
      <div class="item Cell -4of12">
        <div class="detailInfo">
          <div>经验</div>
          <div class="number">
            {{user.option.exp}}
          </div>
        </div>
      </div>
      <div class="item Cell -4of12">
        <div class="detailInfo">
          <div>悦币</div>
          <div class="number">
            {{user.option.goldToken}}
          </div>
        </div>
      </div>
      <div class="item Cell -4of12">
        <div class="detailInfo">
          <div>等级</div>
          <div class="number">
            {{user.option.exp | level}}
          </div>
        </div>
      </div>
    </div>
   


  </div>



</template>

<script>

    export default{
      props:['user','rank'],
      components:{

      },
      methods:{

      },
    }
</script>


<style lang="less"scoped>
@import '../style/color.less';


.title {
  text-align: left;
  padding-left: 12px;
  padding-top: 5px;
  font-size: 12px;
}
.info{
  width:100%;
  text-align: center;
  font-size: 0.8rem;
  padding: 0.5rem 0.3rem;
  /*display: flex;*/
  /*flex-direction: row;*/
  /*justify-content: space-around;*/
  /*align-items: center;*/
  background-color: #eef;
  color: #000;
  margin: 0 auto;
  // margin-top:-0.8rem;
  // box-shadow:0px 0px 5px #555555;
  // border-radius: 5px;

  /*border-top: 1px solid white;*/
}

.detailInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  color: #999;
  /*padding-top: 5px;*/
}
.number{
  font-size: 1rem;
  margin-top: 0.3rem;
  color: #000;


}
/*.headimg{
  width: 44px;
  height: 44px;
}*/
.name{
  font-size: 1.2rem;
  color: #fff;
}
.headimg {

}

.avatar {
  width: 5rem;
  height: 5rem;
  /*border: 2px solid white;*/
  border-radius:50%;
  box-shadow:0px 0px 5px #555555;
}

.pull-left{
  float:left;
  display: inline-block;
}
.slogan{
  color:#eee;
  font-size: .8rem;
}
.blue-bg{
  height: 10rem;
}
.item{
}
.userhead{
  // background-size:cover;
  // filter: blur(10px);

  background-color:#26a2ff;
  padding: 0.8rem 0;
  width: 100%;
  height: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.rank{
  background-color: #eeeeff;
  color: #555555;
}
</style>
