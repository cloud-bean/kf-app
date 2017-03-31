<template>

  <div class="img-cell Grid -middle -between"  @click="handleClick">
    <div class="img Cell -2of12 Grid -center -middle">
        <img :src="titleImg" alt="" class=""/>
    </div>
    <div class="title Cell -4of12">
    {{title}}
    </div>
    <div class="subtitle Cell -4of12">
    {{subtitle}}
    </div>
    <div class="icon Cell -1of12">
    <i class="fa fa-caret-right"/>
    </div>


</div>




</template>

<script>

    export default{
      props:['titleImg','title','subtitle','to'],
      components: {
      },
      data(){
        return {
         
          
        }
      },
      created(){
       
      },
      methods: {
       handleClick(){
            this.$router.push(this.to);
       }
      },
    }

</script>


<style scoped>
.img-cell{
    background-color: #eeeeee;
    width: 95%;
    margin: 0 auto;
    /*padding: .2rem .2rem;*/
    box-shadow:0 0 2px rgba(0, 0, 0, .5); 
}
.img{
  width: 5rem;
  height: 5rem;
  /*box-shadow:0px 0px 2px #555555;*/
}
.title{
    font-size:1.2rem;
}
.subtitle{
    font-size:.8rem;
    color: #aaa;
}
</style>
