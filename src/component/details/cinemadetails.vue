<template>
    <div>
        <share-bar></share-bar>
        <div class="cinemaMsg">
            <div class="cinemaName">{{cinemaDetailModel.nm}}</div>
            <div class="cinemaAdress">{{cinemaDetailModel.addr}}</div>
            <div class="cinemaTags clearFloat">
                <span v-for="x in cinemaDetailModel.featureTags">{{x.tag}}</span>
            </div>
        </div>
        <div class="onMoviesList" @touchedmove:native="move(e)">
            <div class="movieul">
                <div @click="resetCurMovie(index)" class="moviesli" v-for="(x, index) in movies"><img  :src="x.img" alt=""></div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    import shareBar from '../../component/bar/shareBar.vue'

    export default {
        data:function () {
            return{
                cinemaDetailModel:'',
                currentMovie:'',
                movies:'',
                DateShow:'',
                Dates:'',
            }
        },
        methods: {
            resetCurMovie:function (index) {
                console.log(index);
            },
            move:function (e) {
                console.log(e)
            }
        },
        components:{
            'share-bar':shareBar
        },
        created:function () {
            const id = this.$route.params.cinemaid;
            axios.get('showtime/wrap.json?cinemaid='+id+'&movieid=').then((res) => {
                const backmsg = JSON.parse(res.request.response).data;
                this.cinemaDetailModel = backmsg.cinemaDetailModel;
                this.currentMovie = backmsg.currentMovie;
                this.movies = backmsg.movies;
                this.DateShow = backmsg.DateShow;
                this.Dates = backmsg.Dates;
                console.log(backmsg.cinemaDetailModel);
            })
        },
        computed:{

        },
    }
</script>

<style>
    .cinemaName{
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        margin-left: 10px;
    }
    .cinemaAdress{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        margin-left: 15px;
        color: #b4ccc4;
    }
    .cinemaTags{
        margin-left: 10px;
        margin-bottom: 5px;
    }
    .cinemaTags span{
        float: left;
        border: 1px solid skyblue;
        padding:0 4px;
        color: skyblue;
        margin: 3px 5px;
        border-radius: 4px;
        font-size: 10px;
    }
    .onMoviesList{
        overflow: scroll;
        background-color: rgba(0,0,0,0.8);
        height: 150px;
        width: 100%;
    }
    .movieul{
        margin: 0;
        padding: 0;
        margin-left: calc(50% - 45px);
        margin-right: calc(50% - 45px);
        white-space: nowrap;
        height: 100%;
    }
    .moviesli{
        display: inline-block;
        list-style: none;
        padding:10px;
        width: 91px;
        height: 130px;
    }
    .moviesli img{
        height: 100%;
    }

</style>
