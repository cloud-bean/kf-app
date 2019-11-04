<template lang="html">
  <div class="news-detail">
    <div class="news-image">
      <img :src="news.file.URL+'?imageView2/2/w/400/h/200/q/75|imageslim'" alt="" class="back-img"/>
    </div>
    <div class="title">
      {{news.name}}
    </div>
    <div class="date">
      {{news.created | dateFormat}}
    </div>
    <div class="markdown-desc">
      <div v-html="news.content">
      </div>
    </div>
  </div>



</template>

<script>
  import MessageItem from '../components/MessageItem';
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {};
    },
    components: {
      MessageItem,
    },
    computed: mapState({
      news: state => state.news.activeNews,
    }),
    methods: {
      ...mapActions([
        'getComments',
        'leaveComment',
      ]),
      handleComment() {
        this.$router.push('/taskComment');
      },
    },
  };
</script>

<style lang="css" scoped>

  .title{
    font-size: 1.6rem;
    color: #555555;
    padding: 0rem 1.5rem;
  }
  .date{
    color: #ccc;
    padding: .3rem 1.5rem;
    font-size: .8rem;

  }
  .back-img{
    width: 100%;
    height:180px;
  }
  .news-content {
    padding: 0.3rem 1rem;
    color: #333333;
  }

</style>
