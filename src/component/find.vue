<template>
    <div>
        <router-view></router-view>
        <router-view name="today"></router-view>
        <router-view name="jocker"></router-view>
    </div>
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