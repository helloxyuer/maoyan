<template>
  <div class="movieListBox">
    <movieSearchBar></movieSearchBar>
    <div class="movieListBox">
      <div v-for="x in movielist" class="movie_box clearFloat">
        <div class="movie_post">
          <img :src="x.img" alt="">
        </div>
        <div class="movie_info" @click="goToDetails(x)">
          <div>
            <span>{{x.nm}}</span>
            <span class="movie_3d">3D</span>
            <span v-if="x.imax" class="movie_imax">imax</span>
          </div>
          <div v-if="!x.preSale">观众{{x.sc}}</div>
          <div v-if="x.preSale">{{x.wish}}想看</div>
          <div>{{x.scm}}</div>
          <div>{{x.showInfo}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import movieSearchBar from './movieSearchBar.vue';
  import style from '../assets/css/common.css';

  export default {
    data () {
      return {
        movielist: ''
      }
    },
    created: function () {
      axios.get('/movie/list.json?type=hot&offset=0&limit=1000').then((res) => {
        this.movielist = JSON.parse(res.request.response).data.movies;
      })
    },
    components: {
      'movieSearchBar': movieSearchBar
    },
    methods: {
      goToDetails: function (x) {
        this.$router.push({
          name: 'movieDetails',
          params: {'movieid': x.id}
        })
      }
    }
  }
</script>

<style>
  .movieListBox {
    height: calc(100% - 40px);
    overflow: auto;
  }

  .movie_3d {
    background: #b4ccc4;
    color: #ffffff;
    border-radius: 3px;
    padding: 2px 5px;
  }

  .movie_imax {
    background: #b4ccc4;
    color: #ffffff;
    border-radius: 3px;
    padding: 2px 5px;
  }

  .movie_post {
    width: 100px;
    float: left;
  }

  .movie_box {
    border-bottom: 1px solid #cccccc;
    margin: 5px;
  }

  .movie_post img {
    width: 100%;
  }

  .movie_info {
    width: calc(100% - 110px);
    margin-left: 110px;
  }
</style>
