<template>
  <div id="app">
    <div class="list-group">
     <a class="list-group-item" v-link="{ path: '/a'}">Records</a>
     <a class="list-group-item" v-link="{ path: '/b'}">Profile</a>
    <a class="list-group-item" v-link="{ path: '/c'}">Rank</a>
    <a class="list-group-item" v-link="{ path: '/d'}">Login</a>

    </div>

    <div id="routerDiv">

    <router-view><!-- matched component renders here --></router-view>

    </div>
  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
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
