<template>
<div>
  xxx
  <!-- <div class="panel" v-if="board">

    <mt-badge type="primary" :content="board.aliveCount + '人'"></mt-badge>
    <mt-badge type="success" :content="board.totalRewardTokens + '悦币'"></mt-badge>


    <h2>
        {{ board.tip }}
    </h2>

    <div v-if="board.hasEnd">
      共 {{ board.userIds.length }} 人瓜分 {{ board.totalRewardTokens }} 个悦币

      <p v-if="wdUserInfo && wdUserInfo.isAlive">恭喜您获得 {{ wdUserInfo.gotTokens }} 个悦币！</p>
      <p v-if="wdUserInfo && !wdUserInfo.isAlive">下次再战，当王者赚悦币！</p>
    </div>

    <div v-if="wdUserInfo && !wdUserInfo.isAlive">
      <div v-if="wdUserInfo.actionAskRecovery && !wdUserInfo.hasRecovery">
        <h3>大侠，你还有一次复活的机会！</h3>
        <button type="button" class="am-btn am-round am-btn-success" @click="recovery('yes')">我要复活</button>
        <button type="button" class="am-btn am-round  am-btn-danger" @click="recovery('no')">后会有期</button>
      </div>
      <p v-if="wdUserInfo.actionAskRecovery && wdUserInfo.hasRecovery">每场只能复活一次哦，大侠后会有期~</p>
      <p v-if="!wdUserInfo.actionAskRecovery">大侠后会有期~</p>
    </div>

  </div>



  <div class="panel" v-if="wdUserInfo && board && board.question">
    <div v-if="board.question">
      <div v-if="board.question && board.question.choices.length > 1">
        <blockquote>
          <p>{{board.question.title}}</p>
        </blockquote>
        <div v-if="board.showAnalysis">
          <div v-if="board.question.choices && board.analysis">
            <button v-if="board.question.choices[0]" class="default-choice-btn" :class="{'answer-right-a': board.question.choices[0].isRight, 'answer': !board.question.choices[0].isRight}">{{ board.question.choices[0].text }} {{ getPeopleText(board.analysis[0].count) }}</button>
            <button v-if="board.question.choices[1]" class="default-choice-btn" :class="{'answer-right-b': board.question.choices[1].isRight, 'answer': !board.question.choices[1].isRight}">{{ board.question.choices[1].text }} {{ getPeopleText(board.analysis[1].count) }}</button>
            <button v-if="board.question.choices[2]" class="default-choice-btn" :class="{'answer-right-c': board.question.choices[2].isRight, 'answer': !board.question.choices[2].isRight}">{{ board.question.choices[2].text }} {{ getPeopleText(board.analysis[2].count) }}</button>
            <button v-if="board.question.choices[3]" class="default-choice-btn" :class="{'answer-right-d': board.question.choices[3].isRight, 'answer': !board.question.choices[3].isRight}">{{ board.question.choices[3].text }} {{ getPeopleText(board.analysis[3].count) }}</button>
            <br>
            <p>
              <span style="border: 1px solid gray; border-radius: 5px; padding: 2px; font-size: .8em; margin: 5px; background-color: lightskyblue">解析</span> {{ board.answer }}
            </p>
          </div>
        </div>

        <div v-else>
          <div v-if="board.stopTime > 0">
            <h3>倒计时：{{ board.stopTime }}</h3>
            <div v-if="board.question.isMultipleChoice && board.question.choices">
              <button v-if="board.question.choices[0]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-a': choices.indexOf(0) !== -1}" @click="toggleChoice(0)">{{ board.question.choices[0].text }}</button>
              <button v-if="board.question.choices[1]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-b': choices.indexOf(1) !== -1}" @click="toggleChoice(1)">{{ board.question.choices[1].text }}</button>
              <button v-if="board.question.choices[2]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-c': choices.indexOf(2) !== -1}" @click="toggleChoice(2)">{{ board.question.choices[2].text }}</button>
              <button v-if="board.question.choices[3]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-d': choices.indexOf(3) !== -1}" @click="toggleChoice(3)">{{ board.question.choices[3].text }}</button>

            </div>
            <div v-else-if="board.question.choices">
              <button v-if="board.question.choices[0]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-a': tmpChoice === 0}" @click="checkAnswer(0)">{{ board.question.choices[0].text }}</button>
              <button v-if="board.question.choices[1]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-b': tmpChoice === 1}" @click="checkAnswer(1)">{{ board.question.choices[1].text }}</button>
              <button v-if="board.question.choices[2]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-c': tmpChoice === 2}" @click="checkAnswer(2)">{{ board.question.choices[2].text }}</button>
              <button v-if="board.question.choices[3]" :disabled="!wdUserInfo.isAlive" class="default-choice-btn" :class="{'choice-d': tmpChoice === 3}" @click="checkAnswer(3)">{{ board.question.choices[3].text }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="control" v-if="wdUserInfo && !wdUserInfo.isAlive && wdUserInfo.actionAskRecovery">
      <button class="btn btn-active" @click="recovery('yes')">复活</button>
      <button class="btn btn-die" @click="recovery('no')">死吧</button>
    </div>
  </div>

  <div class="panel" v-if="!userId || !wdUserInfo">
    <p>{{ userInfo.displayName }}</p>
    <button type="button" class="am-btn am-btn-success" @click="enterGame(userInfo._id)">加入游戏</button>
  </div>
  <div class="panel" v-else>
    <mt-button class="demo-chip" @delete="exitGame" color="green" showDelete>
      <img :src="userInfo.profileImageURL" /> {{ userInfo.displayName }}
    </mt-button>
    <span v-if="!wdUserInfo.isAlive">&nbsp;&nbsp;等待下次冲顶</span>
  </div> -->
</div>
</template>

<script>
  import http from 'axios';
  import { mapGetters } from 'vuex';
  import config from '../config/config';

  const baseURL = config.server.gameBoardServer;

  export default {
    name: 'game-board',
    data() {
      return {
        board: null,
        userId: '',
        wdUserInfo: null,
        choices: [],
        tmpChoice: -1,
      };
    },
    computed: {
      ...mapGetters([
        'userInfo',
      ]),
      startTime() {
        const getTime = (time) => {
          const T = time.split('T');
          return `${T[0]} ${T[1].split('.')[0]}`;
        };
        return this.board ? getTime(this.board.startTime) : 'unknown';
      },
    },
    methods: {
      checkAnswer(choice) {
        if (this.wdUserInfo.isAlive) {
          this.tmpChoice = choice;
        }
      },
      sendAnswer() {
        http.post(`${baseURL}/api/checkAnswer`, {
          userId: this.userId,
          questionId: this.board.question.questionId,
          choice: this.tmpChoice,
        }).then((res) => {
          console.log(res.data);
        });
        this.tmpChoice = -1;
      },
      getPeopleText(count) {
        if (count && parseInt(count, 10) > 0) {
          return `（${count}人选择）`;
        }
        return '';
      },
      recovery(code) {
        console.log('recovery:', code);
        http.post(`${baseURL}/api/recovery`, {
          userId: this.userId,
          code,
        });
      },
      toggleChoice(index) {
        if (this.choices.indexOf(index) === -1) {
          this.choices.push(index);
        } else {
          this.choices.splice(this.choices.indexOf(index), 1);
        }
        this.choices.sort();
      },
      submitChoices() {
        const choice = this.choices.sort().join(',');
        http.post(`${baseURL}/api/checkAnswer`, {
          userId: this.userId,
          questionId: this.board.question.questionId,
          choice,
        }).then((res) => {
          console.log(res.data);
        });
        this.choices = [];
      },
      exitGame() {
        http.post(`${baseURL}/api/exitGame`, {
          userId: this.userId,
        });
        this.userId = '';
        this.wdUserInfo = null;
      },
      enterGame(id) {
        this.userId = id;
        const userId = this.userId;
        if (userId.length > 0) {
          const that = this;
          console.log('enterGame, reset for ', userId);
          http.post(`${baseURL}/api/enterGame`, {
            userId,
          }).then(() => {
            that.$root.$wilddogRefs.ref.child(`/users/${userId}`).on('value', (snapshot) => {
              that.wdUserInfo = snapshot.val();
              console.log(that.wdUserInfo);
            });
          });
        }
      },
    },
    mounted() {
      const that = this;
      this.$root.$wilddogRefs.ref.child('/board').on('value', (snapshot) => {
        that.board = snapshot.val();
      });
      setInterval(() => {
        if (that.wdUserInfo
          && (that.wdUserInfo.submitAnswerState === 0)
          && (that.board.stopTime === 0)) {
          if (that.board.question.isMultipleChoice) {
            that.submitChoices();
            console.log('sendAnswer for multiple choice question', that.wdUserInfo.submitAnswerState);
          } else {
            that.sendAnswer();
            console.log('sendAnswer for single choice question', new Date());
          }
        }
      }, 1000);
    },
  };
</script>

<style scoped>

  .panel {
    margin: 5px; padding: 5px; border:1px solid white;
    background-color: white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
.tip {
  margin: 5px;
  padding: 5px;
  border: 2px solid gold;
  background-color: palegoldenrod;
}

.control {
  width: 100%;
  margin: 5px;
  padding: 0;
}
  .question {
    background-color: rgba(255, 255, 255, 0.92);
    border-radius: 5px;
    display: block;
    margin: 10px;
    padding: 10px;
  }

.headBox {
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 5px;
  display: block;
  margin: 10px;
  padding: 10px;
}

.answer {
    background-color: white;
    border: 1px solid black;
  }
  .btn {
    margin: 0 5px;
    border-radius: .1rem;
    text-align: center;
    width: 1.5rem;
    height: .8rem;
  }

  .btn-ghost {
    background: #cccccc;
    border: .05rem solid #cccccc;
    color: black;
  }

  .btn-newb {
    background: #ffab0f;
    border: .05rem solid #ff6d10;
    color: #ffffff;
  }

  .btn-always {
    background: #57c5ff;
    border: .05rem solid #3ccdff;
    color: #ffffff;
  }

  .btn-active {
    border: .05rem solid #059406;
    background: #0BB20C;
    color: #fff;
  }

  .btn-die {
    border: .05rem solid #808080;
    background: #cccccc;
    color: #fff;
  }



  .default-choice-btn {
    display: block;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    width: 80%;
    background-color: rgba(128, 128, 128, 0.52);
    color: white;
    font-size: 1em;
    text-align: left;
  }

  .choice-a {
    border: 3px solid #4A90E2;
  }

  .answer-right-a {
    border: none;
    background-color: #4A90E2;
  }

  .choice-b {
    border: 3px solid #F5A623;
  }

  .answer-right-b {
    border: none;
    background-color: #F5A623;
  }

  .answer {
    border: none;
    background-color: #D8D8D8;
  }

  .choice-c {
    border: 3px solid #BD10E0;
  }

.answer-right-c {
  border: none;
  background-color: #BD10E0;
}

  .choice-d {
    border: 3px solid #50E3C2;
  }

.answer-right-d {
  border: none;
  background-color: #50E3C2;
}





</style>
