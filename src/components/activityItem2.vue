<template>
  <!--v-bind:class="{mask:expire}"-->
  <div class="img-cell Grid -middle -around">
    <div class="img Cell -2of12 Grid -center -middle">
      <img :src="!!(activityData.user.profileImageURL) ? activityData.user.profileImageURL : ''" alt=""
           style=" -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;"/>
      <span>{{activityData.user.displayName}}</span>
    </div>
    <div class="Cell -6of12 Grid">
      <div class=" Cell -12of12">
        <span class="title">{{activityData.title}}</span>
      </div>
      <div class="desc">
        {{activityData.created | timefromNow}}
      </div>
    </div>

    <div class="icon Cell -1of12">
      <i class="fa fa-thumbs-up" size="large" aria-hidden="true"
         style="font-size: 1.5em;" v-bind:class="[hasVoted ? 'voted': '']" @click="upVoteIt"></i>
      <span v-if="activityData.upVotes.length > 0">
        {{activityData.upVotes.length}}
      </span>
      <!--<mt-button type="primary" size="small" plain @click="handleBuy">点赞</mt-button>-->
    </div>
  </div>

  <!--<div class="activity-item">-->

  <!--<div class="head Grid ">-->
  <!--<div class="Grid Cell -2of12 -center -middle">-->
  <!--<img :src="activityData.user.profileImageURL"  class="userhead" alt="" />-->
  <!--</div>-->
  <!--<div class="Cell -4of12">-->
  <!--<div class="name">-->
  <!--{{activityData.user.displayName}}-->
  <!--</div>-->
  <!--<div class="date">-->
  <!--{{activityData.created | timefromNow}}-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="content">-->
  <!--<i class="fa fa-tasks" style="color:#888"></i>  <span class="desc">{{activityData.title}}</span>-->
  <!--</div>-->

  <!--&lt;!&ndash; <div class="rank-right Cell -3of12">-->
  <!--<div class="exp">-->
  <!--{{activityData.user.exp}}-->
  <!--</div>-->
  <!--<div class="like" v-if="!this.isMe">-->
  <!--<div class="likenum">-->
  <!--{{activityData.user.upCount}}-->
  <!--</div>-->
  <!--<div class="likeicon" v-on:click="like({user, index: rankIndex})" >-->
  <!--<i class="fa fa-heart fa-lg " v-bind:class="{active:activityData.user.isUpVoted,inactive:!activityData.user.isUpVoted}"></i>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div> &ndash;&gt;-->
  <!--</div>-->


</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    props: ['activityData', 'user', 'upVote', 'loadTop'],
    components: {},
    data() {
      return {};
    },
    computed: {
      hasVoted() {
        return this.activityData.upVotes.indexOf(this.user._id) !== -1;
      },
    },
    created() {
    },
    methods: {
      upVoteIt() {
        if (this.hasVoted) {
          Toast({
            message: '已经点过赞了',
            position: 'middle',
            duration: 1000,
          });
        }
        else {
          this.upVote(this.activityData._id);
          this.loadTop();
        }
      },
    },
  };
</script>


<style scoped>
  .activity-item {
    padding: .5rem 1rem;
    background-color: #fff;
  }

  img {
    width: 2.5rem;
  }

  .desc {

  }

  .title {
    font-size: 1.3rem;
    color: #6f2dbd;
  }

  .date {
    color: #aaa;
    font-size: .8rem;
  }

  .content {
    background-color: #eee;
    padding: .5rem 1rem;
    margin-top: .5rem;
    /* color:#6F2DBD; */
    font-size: .8rem;
  }

  .voted {
    color: #ee503b;
  }
</style>
