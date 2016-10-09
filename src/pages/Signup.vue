<template>
  <div class="login">
    <img src="" alt="headpic" />
    <span class="info">姓名</span>
    <input type="text" placeholder="真实姓名" v-model="username" ></input>
    <input type="text" placeholder="手机号" v-model="password"></input>
    <button class="btn btn-default" v-on:click="login">login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
    methods: {

    }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

.avatar {
  width: 128px;
  height: 128px;
  margin: 0 auto;
  display: inline-block;
}

.info {
  background: yellow;
  width: 95%;
  padding: 0 10px;
  border: 1px solid black;
}
</style>
