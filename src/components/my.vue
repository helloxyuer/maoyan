<template>
    <div class="mybox">my</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
    .mybox{
        height:calc(100% - 40px);
        overflow: auto;
    }
</style>