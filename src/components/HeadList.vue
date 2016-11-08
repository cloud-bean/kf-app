<template lang="html">
  已完成1000次
  <ul>
    <li><img src="../../static/photo-1.jpg" alt="" /></li>
    <li><img src="../../static/photo-1.jpg" alt="" /></li>
    <li><img src="../../static/photo-1.jpg" alt="" /></li>
    <li><img src="../../static/photo-1.jpg" alt="" /></li>
    <li><img src="../../static/photo-1.jpg" alt="" /></li>

    <li><img src="../../static/photo-1.jpg" alt="" /></li>
    <li><img src="../../static/photo-1.jpg" alt="" /></li>
    <li><img src="../../static/photo-1.jpg" alt="" /></li>

  </ul>
<div class="clearfix">

</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
ul {
  margin: 0;
  padding: 0;
  vertical-align: bottom;

}
ul li {
  list-style-type: none;
  float: left;
  margin-left: -0.2rem;
}
ul li img{
  border: 1px solid #ccc;
  border-radius:50%;
  width: 1.5rem;
}
.clearfix{
  clear: both;
}
</style>
