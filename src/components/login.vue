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
        <div class="text-tips">{{tips}}</div>
        <div class="btnBox">
            <div class="loginBtn" @click="telLogin">登录</div>
            <div class="registerBtn" @click="telRegister">去注册</div>
        </div>
    </div>
</template>

<script>
    import style from '../assets/css/common.css';
    import common from '../assets/js/common';
    import validate from  '../assets/js/validate';

    export default {
        data () {
            return{
                loginTel:'',
                password:'',
                tips:''
            }
        },
        methods: {
            telLogin() {
                const mydate = common.getMyData();
                const vali = new validate({
                  tel:this.loginTel,
                  pwd:this.password
                }).rightTel();
                if(!vali.state){
                  this.tips = vali.message;
                  return;
                }
                if(this.loginTel in mydate){
                    if(mydate[this.loginTel]===this.password){
                        this.tips = '登陆中...';
                        this.$router.replace('/main')
                    }else{
                        this.tips = '密码错误!'
                    }
                }else{
                    this.tips = '账号未注册';
                }
            },
            telRegister(){
                const mydate = common.getMyData();
                if(this.loginTel in mydate){
                    this.tips = this.loginTel+'已被注册!';
                }else{
                    mydate[this.loginTel] = this.password;
                    this.tips = this.loginTel+'注册成功,跳转中..';
                    let thisRouter = this.$router;
                    setTimeout(function () {
                        thisRouter.replace('/main');
                    },200)
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
        margin: 0 auto;
    }

    .login-header{
        height: 200px;
    }
    .text-tips{
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }
    .btnBox{
        display: flex;
    }
    .loginBtn{
        flex: 1;
        width: 100px;
        text-align: center;
        margin: 0 auto;
    }
    .registerBtn{
        flex: 1;
        width: 100px;
        text-align: center;
        margin: 0 auto;
    }
</style>
