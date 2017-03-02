<template>
    <div>
        <cinema-bar v-on:keyword="getKeyword"></cinema-bar>
        <div></div>
        <div v-for="(val,key) of cinemalistfiflter">
            <div class="cinemaZone">{{key}}</div>
            <router-link class="cinemaList" v-for="(item, index) of val" :to="{name:'cinemaDetails',params:{cinemaid:item.id}}" tag="div">
                <span class="cinemaIndex">{{index}}</span>
                <span class="cinemaName">{{item.nm}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import cinemaSearchBar from '../../component/bar/cinemaSearchBar.vue';

    export default {
        data () {
            return {
                cinemalist: '',
                mykeyword:''
            }
        },
        created:function () {
            axios.get('/cinemas.json').then((res) => {
                this.cinemalist = JSON.parse(res.request.response).data;
            })
        },
        components:{
            'cinema-bar':cinemaSearchBar
        },
        methods:{
            getKeyword:function(x){
                this.mykeyword = x;
            }
        },
        computed:{
            cinemalistfiflter: function () {
                const count={},word = this.mykeyword;
                for(let x in this.cinemalist){
                    count[x]= this.cinemalist[x].filter(function (data) {
                        if(word){
                            if(data.nm.toString().indexOf(word)!=-1){
                                return data
                            }
                        }else{
                            return data
                        }
                    })
                }
                return count;
            }
        },
    }
</script>

<style>
    .cinemaZone{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #b4ccc4;
        margin-left: 10px;
    }
    .cinemaList{
        margin-left: 30px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #b4ccc4;
    }
    .cinemaIndex{
        color: #ffffff;
        height: 20px;
        line-height: 20px;
        display: inline-block;
        background: #20A0FF;
        border-radius: 10px;
        margin-top: 5px;
        width: 30px;
        text-align: center;
    }
    .cinemaName{

    }
</style>

