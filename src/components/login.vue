<template>
    <div class="login-bg">
        <div class="login-header">

        </div>
        <div class="text-center">
            <span>电话:</span>
            <input type="text" v-model="loginTel" maxlength="11">
        </div>
        <div class="text-center">
            <span>邮箱:</span>
            <input type="text" v-model="password" maxlength="11">
        </div>
        <div v-if="showTips" class="text-center">{{tips}}</div>
        <div class="loginBtn" @click="telLogin">登录</div>
    </div>
</template>

<script>
    import style from '../assets/css/common.css';

    export default {
        data:function () {
            return{
                loginTel:'',
                password:'',
                tips:''
            }
        },
        methods: {
            telLogin: function () {
                if(this.loginTel=='11'&&this.password=="22"){
                    this.$router.replace('/main')
                }else{
                    this.tips='账号11,密码22';
                }
            }
        },
        computed:{
            showTips:function () {
                if(this.tips){
                    return true
                }
            }
        },
    }
</script>

<style>
    .login-header{
        height: 200px;
    }
    .text-center{
        text-align: center;
    }
    .loginBtn{
        width: 100px;
        text-align: center;
        margin: 0 auto;
    }
</style>
