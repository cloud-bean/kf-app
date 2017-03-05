<template>
  <!-- <div class="login"> -->
    <!-- <img :src="mockdata.user.profileImageURL" alt="" class="avatar"/> -->
    <div class="">

    <header class="bar bar-nav">
  <h1 class='title'>补充你的信息</h1>
</header>
  <div class="content" novalidate>
    <div class="headimg">

        <img :src="user.profileImageURL" alt="" class="avatar"/>
      <p>
        <span class="name">{{displayName}}</span>
      </p>
    </div>

    <div class="list-block">
      <ul>
        <!-- Text inputs -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label" for="displayName">姓名</div>
              <div class="item-input">
                <input id="displayName" type="text" placeholder="" v-model="displayName">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label" for="phone">手机</div>
              <div class="item-input">
                <input id="phone" type="text" placeholder="" v-model="phone">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">座右铭</div>
              <div class="item-input" for="phone">
                <input type="text" placeholder="" v-model="slogan">
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>
    <div class="content-block">
      <div class="row">
        <div class="col-50"><a  class="button button-big button-fill button-danger" v-on:click="cleanUp">重填</a></div>
        <div class="col-50"><a  class="button button-big button-fill button-success" v-on:click="submit()">提交</a></div>
      </div>
    </div>
  </div>

</div>

</template>

<script>
import config from '../config/config';
import util from '../config/util';
import { mapState, mapActions } from 'vuex';


export default {
  data() {
    return {
      displayName: '',
      phone: '',
      slogan: '',
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  // vuex: {
  //   actions: {
  //     signUp,
  //     setLogin,
  //   },
  //   getters: {
  //     user: state => state.user,
  //   }
  // },
  computed: mapState({
    user: state => state.profile.user,
  }),
  methods: {
    ...mapActions([
      'signUp',
      'setLogin',
    ]),
    async submit() {

      // if(!this.$validation1.valid){
      //   $.alert('请完整填写信息');
      //   return;
      // }
      const displayName = this.displayName;
      const phone = this.phone;
      const slogan = this.slogan;
      try {
        await this.signUp({displayName, phone, slogan});
      } catch (err) {
        console.log(err);
      }
      this.$router.push('/profile');
    },
    cleanUp(){
      this.phone = '';
      this.displayName = '';
    }
  }
}
</script>

<style scoped>
h3 {
  color: #42b983;
}

.headimg {
  width: 100%;
  margin: 1rem auto;
  text-align: center;
  font-size: 0.5rem;
}
.label{
  width: auto !important;
}

.avatar {
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  border: 1px solid white;
}
.name{
  height: 0.7rem;
}
.info {
  background: yellow;
  width: 95%;
  padding: 0 10px;
  border: 1px solid black;
}
</style>
