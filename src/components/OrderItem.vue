<template lang="html">
  <div>
    <div class="white-bg">
      <div class="row">
        <div class="col-33">
          {{orderData.user}}
        </div>
        <div class="col-33">
          {{orderData.task}}
        </div>
        <div class="col-33">
          {{orderData.date}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['orderData'],
  data(){
    return {
    }
  },
}
</script>

<style lang="css">


</style>
