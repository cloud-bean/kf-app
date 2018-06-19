<template>
  <!-- <info></info>
  <expbar></expbar>
  <chart></chart> -->
  <div class="">
    <info class="user-info" :user="user" :rank="myRank.rankIndex"></info>
    <!-- <news-slider :news="news" :news-detail="newsDetail"></news-slider> -->

    <div class="activitylist">
      <mt-loadmore :top-method="loadTop"  ref="loadmore">
        <p v-if="activities.length==0" class="no-task">
          暂无动态
        </p>

        <div v-infinite-scroll="loadMoreTask"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
          <activity-item v-for="activity in activities" :key="activity._id"
            class="activity-item" :activityData="activity" :user="user"
            :upVote="upVote" :loadTop="loadTop">
          </activity-item>
        </div>
      </mt-loadmore>

    </div>


  </div>


</template>

<script>
  import activityItem from '../components/activityItem';
  import { api } from '../api';
  import { MessageBox, Toast, Indicator } from 'mint-ui';
  import { mapState, mapActions } from 'vuex';
  import NewsSlider from '../components/NewsSlider';

  import Info from '../components/HeadInfo';
  // import Expbar from '../components/Expbar';
  // import Chart from '../components/Chart';
  import config from '../config/config';
  // import util from '../config/util';
  // import mockdata from '../../test/mock';
  export default {
    data() {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        // rankImg,
        // bagImg,
        display: true,
        loading: false,
        hasMore: true,
      };
    },
    computed: mapState({
      activities: state => state.activity.activities,
      page: state => state.activity.page,
      user: state => state.profile.user,
      myRank: state => state.rank.myRank,
      news: state => state.news.news,

    }),
    // vuex: {
    //   getters: {
    //     user: state => state.user,
    //     myRecords: state => state.myRecords,
    //     tip: state => state.tip,
    //   },
    // },
    mounted() {
    },
    methods: {
      ...mapActions([
        'getActivities',
        'friendLike',
        'refreshActivities',
        'upVote',
      ]),
      async init() {
        // if(this.tasks.length == 0){
        //  await this.getAllTaskList(this.page);
        // }
      },
      loadTop() {
        this.loading = true;
        this.refreshActivities()
          .then(res => {
            if (res.type != 'error') {
              if (res.length < config.activity.limit) {
                this.hasMore = false;
              }
              this.loading = false;
              this.$refs.loadmore.onTopLoaded();
            }
          });
      },
      loadMoreTask() {
        if (this.hasMore) {
          this.loading = true;
          this.getActivities(this.page)
            .then(res => {
              if (res.type != 'error') {
                if (res.length < config.activity.limit) {
                  this.hasMore = false;
                }
                this.loading = false;
              }
            });
        }
      },
    },
    //   async handleMove(){
    //     const user = this.user;
    //     const unionid = this.unionid;
    //     const providerData = Object.assign({}, user.providerData, { unionid });
    //     const newuser = Object.assign({}, user, { providerData });
    //     await api.updateUserInfo(user._id, newuser);
    //     Indicator.open({
    //       text: '迁移中...',
    //       spinnerType: 'fading-circle'
    //     });
    //     await setTimeout(()=>{
    //       Indicator.close()
    //       Toast({
    //         message: '迁移成功！',
    //         iconClass: 'fa fa-check',
    //         duration: 1000,
    //       });
    //       this.display = false;
    //     },5000);
    //
    //   },
    //   closeCard(){
    //     this.display = false;
    //   }
    // },
    components: {
      activityItem,
      Info,
      NewsSlider,
    },
  };
</script>


<style scoped>
  .activitylist {
    margin-top: 7.5rem;

    background-color: #ccc;
  }

  .activity-item {
    margin-top: 0.3rem;
  }

  .user-info {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
  }
  .tip{
    position: relative;
    z-index: -1;
  }
</style>
