<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <nav class="nav">
            <router-link to="movie" tag="span">电影</router-link>
            <router-link to="cinema" tag="span">影院</router-link>
            <router-link to="find" tag="span">发现</router-link>
            <router-link to="my" tag="span">我的</router-link>
        </nav>
        <div class="nav-shardow"></div>
    </div>
</template>
<style scoped>
    .nav{
        position: fixed;
        bottom:0;
        width: 100%;
        background: #20A0FF;
        border-bottom:1px solid #20A0FF;
        border-top: 1px solid #ccc;
        display:flex;
        height: 40px;
        line-height: 40px;
    }
    .nav-shardow{
        height: 40px;
        line-height: 40px;
    }
    .nav span{
        width: 25%;
        text-align: center;
    }
</style>