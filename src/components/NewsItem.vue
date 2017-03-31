<template>
  <div class="news-item Grid  -center" :style="{backgroundImage: 'url(' + newsData.file.URL+'?imageView2/2/w/400/h/200/q/75|imageslim' + ')'}">
      <div class="news-content Cell -9of12">
        {{newsData.title}}
        <div class="subtitle">
          {{newsData.subTitle}}
        </div>
        <div class="date">
          <!-- {{newsData.created|dateFormat}} -->
        </div>
      </div>
      <!-- <img v-bind:src="newsData.file.URL+'?imageView2/2/w/200/h/100/q/75|imageslim'" alt=""/> -->
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
.news-item {
  padding: 1.5rem 2rem;
  font-size: 1rem;
  border-radius:5px;
  color: #fff;
}
.subtitle{
  margin-top: .5rem;
  font-size: 0.8rem;
  color: #ccc;

}
.news-content{
  background-color: rgba(0,0,0,.4);
  padding: .7rem .5rem;
}
.date{
  font-size: 0.8rem;
  color: #ccc;
}
img{
  width: 100%;
}

</style>
