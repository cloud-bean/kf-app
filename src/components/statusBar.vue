<template>
    <div class="status-bar">
        <div class="sum-info Grid -left">
            <div class="awesome-day">
                续航
                <div>0 <i class="fa fa-bolt" aria-hidden="true"></i></div>
            </div>
            <div class="awesome-week">
                完美周数
                <div>2 <i class="fa fa-certificate" aria-hidden="true"></i></div>
            </div>
        </div>
        <div class="keep-status Grid -around">
            <div class="day Cell">
                日
                <div>
                    <i class="fa fa-circle"></i>
                </div>
            </div>
            <div class="day Cell">
                一
                <div>
                    <i class="fa fa-circle"></i>
                </div>
            </div>
            <div class="day Cell">
                二
                <div>
                    <i class="fa fa-circle"></i>
                </div>
            </div>
            <div class="day Cell">
                三
                <div>
                    <i class="fa fa-circle-o"></i>
                </div>
            </div>
            <div class="day Cell">
                四
                <div>
                    <i class="fa fa-circle"></i>
                </div>
            </div>
            <div class="day Cell">
                五
                <div>
                    <i class="fa fa-circle-o"></i>
                </div>
            </div>
            <div class="day Cell">
                六
                <div>
                    <i class="fa fa-circle"></i>
                </div>
            </div>
        </div>
        <div class="more-info">更多</div>

    </div>
</template>
<style scoped>
.status-bar{
    background-color: #eee;
    position: relative;
}
.sum-info{
    padding: .5rem 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid #ccc;
}
.awesome-week{
    margin-left: 1rem;
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
  methods: {

  },
};
</script>


