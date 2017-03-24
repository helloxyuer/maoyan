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

        <div class="onMoviesList">
            <div class="movieul">
                <div @click="resetCurMovie(x)" class="moviesli" :class="{cmovies:x.img==currentMovie.img}" v-for="(x,index) in movies"><img  :src="x.img" alt=""></div>
            </div>
        </div>
        <div class="movieMsg">
            <div class="movieMsg_name">
                <span>{{currentMovie.nm}}</span>
                <span class="score" v-if="!currentMovie.isShowing">待映</span>
                <span class="score" v-if="currentMovie.isShowing">{{currentMovie.sc}}</span>
            </div>
        </div>
        <div class="seat">
            <div class="showDate">
                <span v-for="x in Dates" :class="{'choied':datechoice==x.slug}" @click="choiceDate(x)">{{x.text}}</span>
            </div>
            <div v-for="(time,key) in  DateShowAfter">
                <div v-for="y in time" class="timeBox clearFloat">
                    <div class="time-box1">
                        <span>{{y.tm}}</span><br>
                        <span>结束:{{y.end}}</span>
                    </div>
                    <div class="time-box2">
                        <span>{{y.lang}}{{y.tp}}</span><br>
                        <span>{{y.th}}</span>
                    </div>
                </div>
                <div class="noseat" v-if="time.length==0">暂无排场</div>
            </div>
        </div>

    </div>
</template>


<script>
    import axios from 'axios';
    import shareBar from './shareBar.vue'

    export default {
        data:function () {
            return{
                cinemaDetailModel:'',
                currentMovie:'',
                movies:'',
                DateShow:'',
                Dates:'',
                datechoice:''
            }
        },
        methods: {
            getThisMovies:function (x) {
                const id = this.$route.params.cinemaid;
                let movieid;
                x!=undefined?movieid = x.id:movieid = '';
                axios.get('showtime/wrap.json?cinemaid='+id+'&movieid='+movieid).then((res) => {
                    const backmsg = JSON.parse(res.request.response).data;
                    this.cinemaDetailModel = backmsg.cinemaDetailModel;
                    this.currentMovie = backmsg.currentMovie;
                    this.movies = backmsg.movies;
                    this.DateShow = backmsg.DateShow;
                    this.Dates = backmsg.Dates;
                })
            },
            resetCurMovie:function (x) {
                this.getThisMovies(x);
            },
            choiceDate:function (x) {
                this.datechoice = x.slug;
            }
        },
        components:{
            'share-bar':shareBar
        },
        created:function () {
            this.getThisMovies();
        },
        computed:{
            DateShowAfter:function () {
                let newDate ={};
                if(this.datechoice){
                    for(let x in this.DateShow){
                        if(x == this.datechoice){
                            newDate[x] = this.DateShow[x];
                        }
                    }
                }else{
                    for(let x in this.DateShow){
                        this.datechoice = x;
                        newDate[x] = this.DateShow[x];
                        return newDate;
                    }
                }
                return newDate;
            }
        },
    }
</script>

<style>
    .cinemaName{
        line-height: 40px;
        font-size: 18px;
        margin-left: 10px;
    }
    .cinemaAdress{
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
    .score{
        background: #ff9900;
        color: #ffffff;
        border-radius: 3px;
        padding: 0 4px;
    }
    .movieMsg_name{
        text-align: center;
        line-height: 40px;
    }
    .showDate{
        line-height: 50px;
    }
    .showDate span{
        display: inline-block;
        padding: 5px;
    }
    .timeBox{
        border-bottom: 1px solid #cccccc;
        padding: 5px;
    }
    .time-box1{
        width: 140px;
        float: left;
    }
    .time-box1>span:nth-child(1){
        font-size: 20px;
    }
    .time-box1>span:nth-child(2){
        font-size: 12px;
        color: #cccccc;
    }
    .choied{
        color: #8dcca2;
        border-bottom: 1px solid #8dcca2;
    }
    .noseat{
        font-size: 22px;
        margin: 20px;
        line-height: 60px;
        color: #cccccc;
        text-align: center;
    }
    .cmovies{
        background: #7a7a7a;
    }
</style>
