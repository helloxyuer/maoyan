<template>
  <div>
    <share-bar></share-bar>
    <div class="mov-del-box">
      <div class="mov-del-img">
        <img :src="mdm.img" alt="">
      </div>
      <div class="mov-del-msg">
        <div>{{mdm.nm}}</div>
        <div>观众评分:{{mdm.sc}}</div>
      </div>
    </div>
    <div class="mov-del-pic">
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  import shareBar from './shareBar.vue'

  export default {
    data: function () {
      return {
        mdm: '',
        crm: ''
      }
    },
    methods: {},
    components: {
      'share-bar': shareBar
    },
    created: function () {
      const movieid = this.$route.params.movieid;
      axios.get('/movie/' + movieid + '.json').then((res) => {
        const backmsg = JSON.parse(res.request.response).data;
        this.crm = backmsg.CommentResponseModel;
        this.mdm = backmsg.MovieDetailModel;
        console.log(backmsg.CommentResponseModel);
        console.log(backmsg.MovieDetailModel);
      })
    },
    computed: {},
  }
</script>

<style>
  .mov-del-box {
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.75);
    color: #ffffff;
  }

  .mov-del-box:after {
    display: block;
    content: '';
    clear: both;
  }

  .mov-del-img {
    width: 100px;
    margin: 5px;
    float: left;
  }

  .mov-del-img img {
    width: 100%;
  }

  .mov-del-msg {
    margin-left: 110px;
  }
</style>
