<template>
    <div class="status-bar">
        <div class="sum-info Grid -left">
            <div class="awesome-day">
              <i class="fa fa-bolt" aria-hidden="true"></i> 续航 {{awesomeDays}} 天
            </div>
            <div class="awesome-week">
                <i class="fa fa-certificate" aria-hidden="true"></i> 完美周 {{keepInfo.perfectWeeks}} 个
            </div>
        </div>
        <div class="keep-status Grid -around">
            <div v-for="(item,index) in weekDay" :key="index" class="day Cell">
                {{item}}
                <div>
                    <i v-bind:class="[keepInfo.keepDays[index]?'fa-circle':'fa-circle-o', 'fa']"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.status-bar{
  color:#555;
    background-color: #eee;
    position: relative;
    font-size: 1rem;

}
.sum-info{
    padding: .5rem 1rem;
    border-bottom: 1px solid #ccc;
}
.awesome-week{
  margin-left: 2rem;
}
.keep-status{
    padding: .5rem;
}
i{
    color:#6F2DBD;
}
.more-info{
    position: absolute;
    right: .5rem;
    top:.5rem;
    font-size: .9rem;
}
</style>

<script>
export default {
  components: {

  },
  data() {
    return {
      weekDay: ['一', '二', '三', '四', '五', '六', '日'],
    };
  },
  computed: {
    awesomeDays() {
      let awesomeDayCount = 0;
      let contDay = 0;
      const keepDays = this.keepInfo.keepDays;
      for (const item of keepDays) {
        if (item) {
          contDay++;
          if (contDay > awesomeDayCount) {
            awesomeDayCount = contDay;
          }
        } else {
          contDay = 0;
        }
      }
      return awesomeDayCount;
    },
  },
  props: ['keepInfo'],
  methods: {

  },
};
</script>
