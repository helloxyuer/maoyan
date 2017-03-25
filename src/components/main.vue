<template>
  <div class="mainPage">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <navBar></navBar>
  </div>
</template>

<script>
  import axios from 'axios';
  import navBar from './navBar.vue';

  export default {
    components: {
      'navBar': navBar
    }
  }
</script>

<style scoped>
  .mainPage {
    height: 100%;
  }
</style>
