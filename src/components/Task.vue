<template>
    <div class="task">
        <div class="record">{{record.name}}</div>
        <div class="exp">{{record.point}}</div>
    </div>

</template>

<script>
    export default{
      props:['record'],
    }
</script>


<style scoped>
.vs {
  /* Keep 记录: */
  font-size: 14px;
  color: #141515;
  background-color:green;
}

</style>