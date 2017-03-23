<template>
  <div class="news-item Grid">
      <div class="news-content Cell -7of12">
        {{newsData.title}}
      </div>
      <div class="news-image  Cell -3of12">
        <img v-bind:src="newsData.file.URL+'?imageView2/2/w/414/h/190/q/75|imageslim'" alt=""/>
      </div>
  </div>
</template>

<script>

    export default{
      props:['newsData'],
      components: {
      },
      data(){
        return {
         
        }
      },
      created(){
    
      },
      methods: {
      }
    }

</script>


<style scoped>


</style>
