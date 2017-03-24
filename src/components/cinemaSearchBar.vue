<template>
    <div class="cinemaBar headBarHeight">
        <input class="searchInput" type="text" v-model="keyword" v-on:input="sendChange">
    </div>
</template>

<script>
    import style from '../assets/css/common.css';
    export default {
        data:function () {
            return{
                keyword:''
            }
        },
        methods: {
            sendChange:function () {
                this.$emit('keyword',this.keyword)
            }
        },
        computed:{
            showTips:function () {

            }
        },
    }
</script>

<style>
    .cinemaBar{
        width: 100%;
        background: #20A0FF;
        text-align: center;
    }
</style>