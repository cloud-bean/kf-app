<template>
  <div class="card facebook-card">
      <div class="card-header no-border">
        <div class="row ">
          <div class="col-60">
            <div class="row rank-left">
              <span class="col-30 rank-index">{{rankIndex}}</span>
              <span class="col-30 avatar "><img :src="user.profileImageURL"  class="headimg"></span>
              <span class="col-40 name">
                <div class="">
                  {{user.displayName}} Lv.{{user.exp | level}}
                </div>
                <div class="grey-small">
                  收获{{user.totalVoteCount}}赞
                </div>
              </span>
            </div>
          </div>

          <div class="col-40">
            <div class="row detail">
              <div class="col-70 pull-right">
                <div class="exp">
                  {{user.exp}}
                </div>
              </div>
              <div class="col-30 like">
                <div class="likenum">
                    {{user.upCount}}
                </div>
                <div class="linkicon" v-on:click="friendLike(user, rankIndex)">
                  <i class="fa fa-heart fa-lg " v-bind:class="{active:user.isUpVoted,inactive:!user.isUpVoted}"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
import util from '../config/util';
import { friendLike } from '../vuex/actions';

    export default{
      props:['user','rankIndex'],
      data(){
        return {
        }
      },
      vuex: {
        actions: {
          friendLike,
        },
      },
    }

</script>


<style scoped>
p{
  margin-bottom: 2px;
}
.exp {
  padding-right: 0.5rem;
  color: #23ee2f;
  font-size: 1.5rem;
  /*line-height: 3rem;*/

}
.like {
  /*padding-top: .4rem;*/
  padding-right: .3rem;
  text-align: center;
}
.likenum {
  /*line-height: 1rem;*/
  color: #7d7d7d;
  display: block;
}
.likeicon{
  /*line-height: 1.5rem;*/
  color: #ccc;
  display: block;

}
.headimg{
  height:2rem;
  width:2rem;
  border-radius: 50%;
}
.name {
  /*padding-left: 1rem;*/
  padding-top: 0.1rem;
  font-size: 0.7rem;
}

.active {
  color: red;
}
.inactive{
  color: #ccc;
}
.rank-index {
  color: #ccc;
  font-size: 1.3rem;
  width: 2rem;
}
.detail {
  float: right;
}
.rank-left{
  vertical-align: middle;
  text-align: left;
}
.grey-small{
  color: #ccc;
  font-size: 0.6rem;
}

</style>
