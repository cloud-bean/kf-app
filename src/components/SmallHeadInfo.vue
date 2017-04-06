<template>
  <div class="" >
    <div class="userhead Grid -between">
       
        <div class="Cell -4of12">
            <div class="detailInfo">
                <div> 剩余悦币 {{user.option.goldToken}}</div>
            </div>
        </div>
        <!-- <div class="Cell -4of12">
          <div class="detailInfo">
                <div> 背包容量 </div>
            </div>
        </div> -->
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


.detailInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  color: #fff;
  /*padding-top: 5px;*/
}

/*.headimg{
  width: 44px;
  height: 44px;
}*/
.name{
  font-size: 1.2rem;
  color: #fff;
}

.detailInfo{
  font-size: 1.2rem;

}
.avatar {
  width: 3rem;
  height: 3rem;
  /*border: 2px solid white;*/
  border-radius:50%;
}


.userhead{
  // background-size:cover;
  // filter: blur(10px);

  background-color:#26a2ff;
  width: 100%;
  height: 4rem;
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
