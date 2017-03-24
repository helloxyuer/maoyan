<template>
    <div class="shareBar headBarHeight">
        <div class="shareBar_left" @click="goback">﹤</div>
        <div class="shareBar_right" @click="sharePage">◪</div>
    </div>
</template>

<script>
    import style from '../assets/css/common.css';

    export default {
        data:function () {
            return{
            }
        },
        methods: {
            goback: function () {
                this.$router.go(-1);
            },
            sharePage:function () {
                console.log('share---todo')
            }
        },
        computed:{
            showTips:function () {

            }
        },
    }
</script>

<style>
    .shareBar{
        width: 100%;
        background: #20A0FF;
    }
    .shareBar_left{
        font-size: 20px;
        margin-left: 10px;
        float: left;
    }
    .shareBar_right{
        font-size: 20px;
        margin-right: 10px;
        float: right;
    }
</style>