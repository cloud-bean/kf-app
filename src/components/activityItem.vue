<template>
<!--v-bind:class="{mask:expire}"-->
  <div class="activity-item">

    <div class="head Grid ">
      <div class="Grid Cell -2of12 -center -middle">
        <img :src="activityData.user.profileImageURL"  class="userhead" alt="" />
      </div>
      <div class="Cell -4of12">
        <div class="name">
          {{activityData.user.displayName}}
        </div>
        <div class="date">
          {{activityData.created | timefromNow}}
        </div>
      </div>
    </div>
    <div class="content">
      <i class="fa fa-tasks" style="color:#888"></i>  <span class="desc">{{activityData.title}}</span>
    </div>

    <!-- <div class="rank-right Cell -3of12">
          <div class="exp">
            {{activityData.user.exp}}
          </div>
        <div class="like" v-if="!this.isMe">
          <div class="likenum">
              {{activityData.user.upCount}}
          </div>
          <div class="likeicon" v-on:click="like({user, index: rankIndex})" >
            <i class="fa fa-heart fa-lg " v-bind:class="{active:activityData.user.isUpVoted,inactive:!activityData.user.isUpVoted}"></i>
          </div>
        </div>
    </div> -->
  </div>




</template>

<script>

    export default{
      props:['activityData'],
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
.activity-item{
  padding: .5rem 1rem;
  background-color:#fff;
}
img{
  width: 2.5rem;
}
.desc{

}
.name{
  color:#555;
}
.date{
  color: #aaa;
  font-size: .8rem;
}
.content{
  background-color: #eee;
  padding: .5rem 1rem;
  margin-top: .5rem;
  /* color:#6F2DBD; */
  font-size: .8rem;
}
</style>
