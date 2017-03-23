<template>
    <div>
        <div class="cinemaBar height40px">
            <input class="searchInput" type="text" v-model="keyword" v-on:input="sendChange">
        </div>
        <div class="height40px"></div>
    </div>

</template>

<script>
    import style from '../css/common.css';
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
        position: fixed;
        width: 100%;
        background: #20A0FF;
        text-align: center;
    }
</style>