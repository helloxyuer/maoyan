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
    </div>
</template>
<style>
    .nav{
        position: fixed;
        bottom:0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #fffadd;
        border-top: 1px solid #ccc;
        display:flex;
    }
    .nav span{
        width: 25%;
        text-align: center;
    }
</style>