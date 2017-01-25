<template lang="html">
  <div>
    <div class="white-bg">
      <div>
        {{orderData.student}}
      </div>
      <div class="row">
        <div class="col-50">
          {{orderData.task.name}}
        </div>
        <div class="col-50">
          {{orderData.created}}
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

.white-bg{
  padding: 1rem;
}
</style>
