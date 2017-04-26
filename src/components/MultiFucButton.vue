<template>
    <mt-palette-button content="+"
      direction="lt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;box-shadow:0px 0px 8px #555555;
" style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @click="voice"><i class="fa fa-microphone" aria-hidden="true"></i></div>
      <div class="my-icon-button indexicon icon-popup" @click="textInput"><i class="fa fa-font" aria-hidden="true"></i></div>
      <div class="my-icon-button indexicon icon-popup" @click="camera"><i class="fa fa-camera" aria-hidden="true"></i></div>
    </mt-palette-button>
</template>

<script>
    export default{
      props:['voice','textInput','camera'],
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
/*.pb{
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: #FFF;
    position:absolute;
    bottom: 30px;
  }*/
  .my-icon-button{
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:#26a2ff;
    color: #fff;
    line-height:30px;
    text-align:center;
  }
</style>
