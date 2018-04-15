<template>
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
      <div class="like">
        <div class="likenum">
          {{activityData.upVotes.length }}
        </div>
        <div class="likeicon" v-on:click="upVoteIt" >
          <i class="fa fa-heart fa-lg " v-bind:class="{active:hasVoted,inactive:!hasVoted}"></i>
        </div>
      </div>
    </div>
  </div>
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
          this.activityData.upVotes.push(this.user._id);
          // this.loadTop();
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
    font-size: 1.2rem;
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
</style>
