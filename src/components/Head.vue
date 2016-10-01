<template>
    <div class="title">Keep记录</div>
    <div class="keeprecord"><span>累计</span>24</div>
    <div class="detail">
      <div class='row'>
        <div class='col-xs-4'>
          <div class="detailInfo">
            <div>经验值</div>
            <div>1000</div>
          </div>
        </div>
        <div class='col-xs-4'>
          <div class="detailInfo">
            <div>经验值</div>
            <div>1000</div>
          </div>
        </div>
        <div class='col-xs-4'>
          <div class="detailInfo">
            <div>经验值</div>
            <div>1000</div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    export default{
      name:'Head',
      data(){
      }
    }
</script>


<style scoped>
.title {
  /* Keep 记录: */
  text-align: left;
  padding-left: 12px;
  padding-top: 5px;
  font-size: 14px;
  color: #141515;
}
.keeprecord {
  /* 20: */
  font-size: 36px;
  color: #141515;
}
.line {
  border-bottom: 1px solid #fcfcfc;
}
.detail {
  padding-top: 20px;
  padding-bottom: 10px;
}

.keeprecord span {
    /* 累计: */
  font-size: 10px;
  color: #141515;

}

.detailInfo {
  /* 经验值: */
 font-size: 9.97px;
 color: #141515;
 text-align: center;
 list-style-type: none;
}


</style>