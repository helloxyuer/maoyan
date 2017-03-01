<template>
    <div>
        <div class="shareBar">
            <div class="shareBar-center-box">
                <span>热映</span>
                <span>待映</span>
                <span>找片</span>
            </div>
            <div class="shareBar_right" @click="sharePage">◪</div>
        </div>
        <div style="height: 40px"></div>
    </div>

</template>

<script>
    export default {
        data:function () {
            return{
            }
        },
        methods: {
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
        height: 40px;
        line-height: 40px;
        position: fixed;
        width: 100%;
        background: #20A0FF;
    }
    .shareBar-center-box{
        width: 200px;
        margin: 0 auto;
        text-align: center;
        background: #ff0009;
        border-radius: 4px;
    }
    .shareBar-center-box .choice{
        background: #91d6ff;
        border-radius: 3px;
        color: #ffffff;
        margin: 0px 5px;
        padding: 0px 5px;
    }
    .shareBar_right{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 20px;
        margin-right: 10px;
    }
</style>