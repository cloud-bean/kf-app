<template>
  <div class="hello">
    <input type="text" placeholder="username" v-model="username"></input>
    <input type="text" placeholder="password" v-model="password"></input>
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
      msg: 'Hello World!',
      apiUrl:"http://120.25.227.156:7000/oauth/token",
      username: "test@test.com",
      password: "default"
    };
  },
    methods: {
        login() {
            console.log('login');
            this.$http.post(this.apiUrl,{
                    username:this.username,
                    password:this.password,
                    client_id: "kf-app",
                    client_secret: "prometheus",
                    grant_type: 'password',
            })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((response) => {
                    console.log('err',response);
                });
        }
    }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
