<template>
  <div id="app" class="container">
      <nav class="navbar navbar-fixed-bottom navbar-light bg-faded">
      <a class="navbar-brand" href="#">Joy & Will</a>
      <a class="btn btn-default" v-link="{ path: '/auth'}">Profile</a>
      <a class="btn btn-default" v-link="{ path: '/rank'}">Rank</a>
    </nav>

    <div id="routerDiv">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: 100px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

</style>
