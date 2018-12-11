<template>
  <div id="myApplication">
    <h1>Hello World</h1>
    <p>little text behind the title</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  #HelloWorld {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>