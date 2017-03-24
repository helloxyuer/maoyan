<template>
    <div class="nav bottomBarHeight">
        <router-link to="movie" tag="span">电影</router-link>
        <router-link to="cinema" tag="span">影院</router-link>
        <router-link to="find" tag="span">发现</router-link>
        <router-link to="my" tag="span">我的</router-link>
    </div>
</template>

<script>
    import style from '../assets/css/common.css';

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
        display:flex;
    }
    .nav span{
        flex: 1;
        text-align: center;
    }
</style>