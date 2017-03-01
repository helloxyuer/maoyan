<template>
    <div>
        <div v-for="(val,key) of cinemalist">
            <div class="cinemaZone">{{key}}</div>
            <div class="cinemaList" v-for="(item, index) of val">
                <span class="cinemaIndex">{{index}}</span>
                <span class="cinemaName">{{item.nm}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                cinemalist: []
            }
        },
        created:function () {
            axios.get('/cinemas.json').then((res) => {
                this.cinemalist = JSON.parse(res.request.response).data;
                console.log(JSON.parse(res.request.response).data)
            })
        },
        components:{

        },
        methods:{
            goToDetails:function(x){
                this.$router.push({
                    name:'details',
                    params:{'movieid': x.id}
                })
            }
        }
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

