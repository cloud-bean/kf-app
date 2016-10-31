<template>
  <div class="popup popup-service" style="display: block;">
    <header class="bar bar-nav">
      <a class="button button-link button-nav pull-right close-popup">
        关闭
      </a>
      <h1 class="title">关于SUI Mobile</h1>
    </header>
    <div class="content native-scroll">
      <div class="content-inner">
        <div class="content-block">
          <p>SUI Mobile 是阿里巴巴共享业务事业部SDC团队（UED）提供的一套手机UI库。</p>
          <p>我们的目的是为手机千牛、百川以及任何手机端的H5页面提供标准的设计规范和前端实现。</p>
          <p>SUI Mobile并没有重新发明轮子，我们主要参考了 <a href="http://goratchet.com" external="" target="_blank">ratchet</a> 和 <a href="http://framework7.taobao.org/" external="" target="_blank">Framework7</a></p>
          <p>这里只是一个官方示例，详细文档请参考：<a href="http://m.sui.taobao.org/" external="" target="_blank">http://m.sui.taobao.org/</a></p>
          <p></p>
          <p><a class="button close-popup">确定</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['task'],
}
</script>
