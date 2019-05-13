<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!--<router-view/>-->

    <div id="nav">
      <router-link v-if="this.authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />

  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "123",
                    password: "123"
                }
            }
        },
        mounted() {
            if(!localStorage.authenticated) {
                this.$router.replace({ name: "login" });
            }else {
                this.$router.replace({ name: "secure" });
            }
        },
        methods: {
            isAuthenticated(){
                return this.authenticated;
            },
            setAuthenticated(status) {
                localStorage.authenticated = status;
                this.authenticated = status;
            },
            logout() {
                localStorage.authenticated = false;
                this.authenticated = false;
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
