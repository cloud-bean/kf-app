<template>
  <div v-if="activityData.module === 'battle'">
    <div :style="{backgroundImage: 'url(' + activityData.detail.themeCoverImage.URL+ '?imageView2/1/w/400/h/200/q/75|imageslim)'}" class="battle-card">
      <mt-badge color="#fff">
        <span style="color: gray; font-weight: lighter;">{{ activityData.detail.mode }}</span>
        &nbsp;
        <span style="color: #cb47ca; font-weight: bolder">{{ activityData.detail.themeName }}</span>
      </mt-badge>

      <br>
      <div style="background-color: rgba(203,71,202,0.55); color: #fff; padding: 10px; margin: 5px;" v-if="battleScore">
        <p>分数 | 战队</p>
        <p v-for="(name, index) in activityData.detail.groupNames" :key="index">
          {{activityData.detail.scoreStr.split(':')[index]}} {{ name }}
        </p>
      </div>

    </div>
    <div style="padding: 5px;">
      <p>
        王者战队：<span style="color: #cb47ca; font-weight: bolder">{{activityData.detail.wonTeam.name}}</span>
      </p>

      <p>MVP: <span style="color: #cb47ca; font-weight: bolder">{{activityData.detail.mvp.displayName}}</span></p>

      <div style="display: block; margin-top: 5px;">
        <span>{{activityData.created | timefromNow}}</span> &nbsp;&nbsp;&nbsp;&nbsp;

        <mt-badge color="#eee" @click.native="toggleBattleScore">
          <span style="color: gray;"> {{ battleScore ? '收起战队分数' : '显示战队分数'}}</span>
        </mt-badge>

        <mt-badge color="#eee" @click.native="upVoteIt">
          <i class="fa fa-heart fa-lg " v-bind:class="{active:hasVoted,inactive:!hasVoted}" > </i>
          <span class="active">{{activityData.upVotes.length > 0 ? activityData.upVotes.length : ''}}</span>
        </mt-badge>

        <mt-badge @click.native="toggleShowMsgs" color="#eee">
          <i class="fa fa-comments fa-lg" v-bind:class="{active2: hasMsgs,inactive:!hasMsgs}"></i>
          <span class="active2">{{activityData.messages.length > 0 ? activityData.messages.length : ''}}</span>
        </mt-badge>

        <div v-if="showMsgs" style="display:block; width: 100%; padding: 5px; margin: 5px;">
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
    </div>

  </div>
  <div v-else-if="activityData.user">
    <div class="img-cell Grid -middle -around" >

      <div class="img Cell -2of12 Grid -top">
        <img :src="!!(activityData.user.profileImageURL) ? activityData.user.profileImageURL : ''" alt=""
             style=" -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;width: 40px; height: 40px;border: 1px solid gold;" />
      </div>

      <div class="Cell -6of12 Grid">
        <div v-if="activityData.module === 'battle'" :style="{backgroundImage: 'url(' + activityData.detail.themeCoverImage.URL + '?imageView2/2/w/400/h/200/q/75|imageslim' + ')'}">
          <mt-badge>{{ activityData.mode }} - {{ activityData.themeName}}</mt-badge>
        </div>
        <div v-else>
          <div class=" Cell -12of12">
            <p style="color: #286dff;">{{activityData.user ? activityData.user.displayName : '--' }}</p>

            <p>{{activityData.title}}
              <span style="color: #6f2dbd;"> {{activityData.detail.name}}</span>
            </p>
          </div>
          <div class="desc">
            {{activityData.created | timefromNow}}
          </div>
        </div>
      </div>
      <div class="icon Cell -2of12">
        <mt-badge color="#eee">
          <i class="fa fa-heart fa-lg " v-bind:class="{active:hasVoted,inactive:!hasVoted}" v-on:click="upVoteIt">
          </i>
          <span class="active">{{activityData.upVotes.length > 0 ? activityData.upVotes.length : ''}}</span>
        </mt-badge>
      </div>

<!--      <mt-badge color="#eee" @click.native="upVoteIt">-->
<!--        <i class="fa fa-heart fa-lg " v-bind:class="{active:hasVoted,inactive:!hasVoted}" > </i>-->
<!--        {{activityData.upVotes.length}}-->
<!--      </mt-badge>-->

      <mt-badge @click.native="toggleShowMsgs" color="#eee">
        <i class="fa fa-comments fa-lg" v-bind:class="{active2: hasMsgs,inactive:!hasMsgs}"></i>
        <span class="active2">{{ activityData.messages.length > 0 ? activityData.messages.length : ''}}</span>
      </mt-badge>

<!--      <div class="icon Cell -2of12" @click="addMsg">-->
<!--        &lt;!&ndash; <mt-badge color="#888"><i class="fa fa-comments fa-lg" v-bind:class="{active2: hasMsgs,inactive:!hasMsgs}"></i>-->
<!--          吐槽-->
<!--          {{activityData.messages ? activityData.messages.length : 0}}-->
<!--        </mt-badge> &ndash;&gt;-->
<!--         <mt-button size="small" plain @click="addMsg">吐槽</mt-button>-->
<!--      </div>-->

      <div v-if="showMsgs&&activityData.messages.length>0" style="display:block; width: 100%; padding: 10px; margin: 5px;">
        <mt-cell style="border: none;">
          <mt-button size="small" plain @click="addMsg">+ 评论</mt-button>
        </mt-cell>

        <mt-cell :title="message.user" :label="message.created | timefromNow"
                 style="border-bottom: 1px dashed #ccc5;"
                 v-for="message in activityData.messages" :key="message._id">
          <span >{{ message.content}}</span>
        </mt-cell>
      </div>
  </div>
</div>
</template>

<script>
  import { Toast, MessageBox, Badge } from 'mint-ui';
  import {api} from '../api';

  export default {
    props: ['activityData', 'user', 'upVote', 'loadTop'],
    components: {},
    data() {
      return {
        showMsgs: true,
        battleScore: false,
      };
    },
    computed: {
      hasVoted() {
        return this.activityData.upVotes.indexOf(this.user._id) !== -1;
      },
      hasMsgs() {
        return this.activityData.messages ? this.activityData.messages.length > 0 : 0;
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
        } else {
          this.upVote(this.activityData._id);
          this.activityData.upVotes.push(this.user._id);
          // this.loadTop();
        }
      },
      toggleBattleScore() {
        this.battleScore = !this.battleScore;
      },
      toggleShowMsgs() {
        this.showMsgs = !this.showMsgs;
      },
      addMsg() {
        MessageBox.prompt('想说点什么?', '').then(({ value, action }) => {
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
  .battle-card {
    background-position: center;
    background-size: cover;
    height: 200px;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }
  .activity-item {
    padding: .5rem 1rem;
    background-color: #fff;
  }

  img {
    width: 2.5rem;
  }

  .desc {
    color:#ccc;
  }

  .title {
    font-size: 1rem;
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
    color: #888;
  }
  .active {
    color: rgba(241, 55, 55, 0.753);
  }
  .active2 {
    color: rgba(84, 84, 209, 0.671);
  }
  .inactive{
    color: #888;
  }
</style>
