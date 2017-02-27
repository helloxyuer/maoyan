<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
  }
  .text-center{
    text-align: left;
  }
</style>
