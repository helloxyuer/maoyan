/**
 * Created by bychen on 2017/3/24.
 */
import common from './common';

export default class Validata {
  constructor({tel='',pwd=''}){
      this.tel = tel;
      this.password = pwd;
  }

  rightTel(){
    const trimData = common.trim(this.tel);
    if(!trimData){
      return{
        state:false,
        message:'手机号不能为空'
      }
    }else if(Number.isNaN(Number(trimData))){
      return{
        state:false,
        message:'手机号应为纯数字'
      }
    }else if(trimData.length!==11){
      return{
        state:false,
        message:'手机号应为11位'
      }
    }else{
      return{
        state:true,
        message:'手机号格式正确'
      }
    }
  }
  rightPwd(){
    const trimData = common.trim(this.password);
    if(!trimData){
      return{
        state:false,
        message:'密码不能为空'
      }
    }else{
      return{
        state:true,
        message:'密码号格式正确'
      }
    }
  }
}
