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
        height: 30px;
        line-height: 30px;
        border:1px solid black;
        display:flex;
    }
</style>