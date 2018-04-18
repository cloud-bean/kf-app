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

    <!-- <div class="icon Cell -1of12">
      <div class="like">
        <div class="likenum">
          {{activityData.upVotes.length }}
        </div>
        <div class="likeicon" v-on:click="upVoteIt" >
          <i class="fa fa-heart fa-lg " v-bind:class="{active:hasVoted,inactive:!hasVoted}"></i>
        </div>
      </div>
    </div> -->

    <div class="icon Cell -2of12">
       <mt-badge color="#eeef">
          <i class="fa fa-heart fa-lg " v-bind:class="{active:hasVoted,inactive:!hasVoted}" v-on:click="upVoteIt">
          </i>
          {{activityData.upVotes.length}}
      </mt-badge>
    </div>

    <div class="icon Cell -2of12" @click="toggleShowMsgs">
      <mt-badge color="#eeef"><i class="fa fa-comments fa-lg" v-bind:class="{active2: hasMsgs,inactive:!hasMsgs}"></i>
      {{activityData.messages.length}}
      </mt-badge>

    </div>

    <div v-if="showMsgs" style="display:block; width: 100%; padding: 10px; margin: 5px; border: 1px solid #ccc5;">
      <mt-cell style="border: none;">
        <mt-button size="small" plain @click="addMsg">评论</mt-button>
      </mt-cell>

      <mt-cell :title="message.user" :label="message.created | timefromNow"
        style="border-bottom: 1px dashed #ccc5;"
       v-for="message in activityData.messages" :key="message._id">
        <span >{{ message.content}}</span>
       </mt-cell>
    </div>
  </div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  import {api} from '../api';

  export default {
    props: ['activityData', 'user', 'upVote', 'loadTop'],
    components: {},
    data() {
      return {
        showMsgs: false,
      };
    },
    computed: {
      hasVoted() {
        return this.activityData.upVotes.indexOf(this.user._id) !== -1;
      },
      hasMsgs() {
        return this.activityData.messages.length > 0;
      }
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
      toggleShowMsgs() {
        this.showMsgs = !this.showMsgs;
      },
      addMsg() {
        MessageBox.prompt('说点什么?', '').then(({ value, action }) => {
          console.log(value, action);
          if (value.length > 0) {
            // send msg to api
            api.addMsgToActivity(this.activityData._id, value);
            this.activityData.messages.unshift({
              user: this.user.displayName,
              content: value
            });
          }
        }, () => {});
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
    color: rgba(241, 55, 55, 0.753);
  }
  .active2 {
    color: rgba(84, 84, 209, 0.671);
  }
  .inactive{
    color: #ccc;
  }
</style>
