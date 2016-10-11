<template>
    <div class="keeprecord">
      <div class="nickname">
        {{user.displayName}}
      </div>
      <div class="headimg">
        <img :src="user.profileImageURL" alt="" style="width:80px;" />
      </div>
    </div>
    <div class="detail">
      <div class='row'>
        <div class='col-25'>
          <div class="detailInfo">
            <div>经验值</div>
            <div>{{user.option.exp}}</div>
          </div>
        </div>
        <div class='col-25'>
          <div class="detailInfo">
            <div>悦维币</div>
            <div>{{user.option.goldtoken}}</div>
          </div>
        </div>
        <div class='col-25'>
          <div class="detailInfo">
            <div>等级</div>
            <div>{{user.option.level}}</div>
          </div>
        </div>
        <div class='col-25'>
          <div class="detailInfo">
            <div>排名</div>
            <div>{{user.option.level}}</div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    export default{
      props:['user'],

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
  text-align: center;
  /* 20: */
  font-size: 16px;
  color: #141515;
}
.line {
  border-bottom: 1px solid #111111;
}
.detail {
  padding-top: 20px;
  padding-bottom: 10px;
}
.headimg {
  padding-top: 10px;
}
.nickname{
  color: #ffffff;
}
.detailInfo {
  /* 经验值: */
 font-size: 12px;
 color: #FFFFFF;
 text-align: center;
}


</style>
