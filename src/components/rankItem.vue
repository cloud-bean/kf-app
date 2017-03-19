<template>
  <div class="rank-item">
          <div class="rank-left">
              <span class="rank-index">{{rankIndex}}</span>
              <img :src="user.profileImageURL"  class="headimg">
              <span class="name">
                <div class="">
                  {{user.displayName }} Lv.{{user.exp|level}}
                </div>
                <div class="grey-small" v-if="!this.isMe">
                  收获{{user.totalVoteCount}}赞
                </div>
              </span>
          </div>

          <div class="rank-right">
                <div class="exp">
                  {{user.exp}}
                </div>
              <div class="like" v-if="!this.isMe">
                <div class="likenum">
                    {{user.upCount}}
                </div>
                <div class="likeicon" v-on:click="like({user, index: rankIndex})" >
                  <i class="fa fa-heart fa-lg " v-bind:class="{active:user.isUpVoted,inactive:!user.isUpVoted}"></i>
                </div>
              </div>
          </div>


    </div>
</template>

<script>

    export default{
      props:['user','rankIndex','like','isMe'],
      data(){
        return {
        }
      },
      // vuex: {
      //   actions: {
      //     friendLike,
      //   },
      // },
    }

</script>


<style scoped>
.rank-left{
  width:60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.rank-right{
  width:30%;
  display:flex;
  justify-content:space-around;
  align-items: center;

}
.rank-item{
  display: flex;
  padding: 1rem;
  justify-content:space-between;
}
.rank-index {
  color: #ccc;
  font-size: 1.3rem;
}
.headimg{
  height:3rem;
  width:3rem;
  border-radius: 50%;
}
.name {
  font-size: 0.8rem;
}
.grey-small{
  color: #ccc;
  font-size: 0.7rem;
}
.exp {
  padding-right: 0.5rem;
  color: #23ee2f;
  font-size: 1.5rem;
}
.like{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.likeicon{
  color: #ccc;
  font-size: 1rem;
}
.likenum {
  color: #7d7d7d;
}
.active {
  color: red;
}
.inactive{
  color: #ccc;
}
/*
p{
  margin-bottom: 2px;
}
.exp {
  padding-right: 0.5rem;
  color: #23ee2f;
  font-size: 1.5rem;
}
.like {
  padding-right: .3rem;
  text-align: center;
}
.likenum {
  color: #7d7d7d;
  display: block;
}
.likeicon{
  color: #ccc;
  display: block;
}

.name {
  padding-top: 0.1rem;
  font-size: 0.7rem;
}



.detail {
  float: right;
}

*/

</style>
