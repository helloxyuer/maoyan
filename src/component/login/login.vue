<template>
    <div class="login-bg">
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
                    router.push('/main')
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
    .text-center{
        text-align: center;
    }
    .loginBtn{
        width: 100px;
        text-align: center;
        margin: 0 auto;
    }
</style>
