<template>
    <div class="nav">
        <router-link to="movie" tag="span">电影</router-link>
        <router-link to="cinema" tag="span">影院</router-link>
        <router-link to="find" tag="span">发现</router-link>
        <router-link to="my" tag="span">我的</router-link>
    </div>
</template>

<script>
    import style from '../css/common.css';

    export default {
        data:function () {
            return{

            }
        }
    }
</script>

<style scoped>
    .nav{
        width: 100%;
        background: #20A0FF;
        border-bottom:1px solid #20A0FF;
        border-top: 1px solid #ccc;
        display:flex;
        height: 40px;
        line-height: 40px;
    }
    .nav span{
        flex: 1;
        text-align: center;
    }
</style>