<template>
  <div class="card facebook-card">
      <div class="card-header no-border">
        <div class="row ">
          <div class="col-50">
            <div class="facebook-avatar "><img :src="user.profileImageURL"  class="headimg"></div>
            <div class="facebook-name name">{{user.displayName}}</div>
            <div class="facebook-date rank-index">第{{rankIndex}}名</div>
          </div>

          <div class="col-50">
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
                <div class="linkicon" v-on:click="like">
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

    export default{
      props:['user','rankIndex'],
      data(){
        return {
        }
      },
      methods: {
        like(){
          if(this.user.isUpVoted)return;
          const userid = this.user.userid;
          console.log(userid);
          const accessToken = localStorage.getItem('kf_accessToken');
          util.friendLike(userid, accessToken)
          this.user.isUpVoted = true;
          this.user.upCount = this.user.upCount+1;
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
  font-size: 2rem;
  line-height: 3rem;

}
.like {
  padding-top: .4rem;
  padding-right: .3rem;
  text-align: center;
}
.likenum {
  line-height: 1rem;
  color: #7d7d7d;
  display: block;
}
.likeicon{
  line-height: 1.5rem;
  color: #ccc;
  display: block;

}
.headimg{
  height:60px;
  width:60px;
}
.name {
  padding-left: 1rem;
  font-size: 1rem;
}

.active {
  color: red;
}
.inactive{
  color: #ccc;
}
.rank-index {
  padding-left: 1rem;
  color: #ccc;
}
.detail {
  float: right;
  vertical-align: baseline;
}

</style>
