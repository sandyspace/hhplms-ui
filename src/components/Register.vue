<template>
  <div class="register-wrap">
   <div class="section section-box-5">
    <div class="balloon-container">
     <h3>账号注册</h3>
     <div class="tu9-wrapper clear">

      <div v-if="success" class="form_item zc-cg-box">
       <span class="zc_zh">已注册成功，返回<router-link to="/login"><a>登录</a></router-link>页面</span>
      </div>
      <form v-else action="" class="submitForm">
       <div class="error-msg">{{errorMessage}}</div>
       <div class="form_item">
        <input type="text" name="mobile" placeholder="请输入手机号" v-model="user.mobile" maxlength="11" />
       </div>
       <div class="form_item">
        <input type="text" name="email" placeholder="请输入邮箱地址" v-model="user.email" maxlength="50" />
       </div>
       <div class="form_item">
        <input type="password" name="userpw1" placeholder="请输入密码" v-model="user.userpw1" maxlength="20" />
       </div>
       <div class="form_item">
        <input type="password" name="userpw2" placeholder="请确认密码" v-model="user.userpw2" maxlength="20" />
       </div>
       <div class="form_item" style="margin:0">
        <div class="submit-btn" @click="register">提交</div>
       </div>
       <div class="form_item">
        <span class="zc_zh">如果已有账号，点击<router-link to="/login"><a>立即登录</a></router-link></span>
       </div>
      </form>

     </div>
    </div>
   </div>
  </div>
</template>

<script>
/* eslint-disable */ 

export default {
  name: 'Register',
  data () {
    return {
      user: {
        mobile: '',
        email: '',
        userpw1: '',
        userpw2: ''
      },
      errorMessage: '',
      success: false
    }
  },
  mounted: function () {},
  methods: {
    register: function () {
      this.errorMessage = ''
      var mobile = this.user.mobile
	    var email = this.user.email
	    var userpw1 = this.user.userpw1
      var userpw2 = this.user.userpw2
      
      if(mobile == ''){
        this.errorMessage = '请输入手机号码'
        return false;
      }
      if(!this.G.isPoneAvailable(mobile)){
        this.errorMessage = '请输入有效的手机号码'
        return false;
      }
      if(email == ''){
        this.errorMessage = '请输入邮箱地址'
        return false;
      }
      if(!this.G.isEmailAvailable(email)){
        this.errorMessage = '请输入有效的邮箱地址'
        return false;
      }
      if(userpw1 == ''){
        this.errorMessage = '请输入密码'
        return false;
      }
      if(userpw1.length < 6){
        this.errorMessage = '密码不得少于6位'
        return false;
      }
      if(userpw2 == ''){
        this.errorMessage = '请输入确认密码'
        return false;
      }
      if(userpw2.length < 6){
        this.errorMessage = '密码不得少于6位'
        return false;
      }
      if(userpw1 != userpw2){
        this.errorMessage = '两次输入密码不一致'
        return false;
      }

      this.$http.post('/api/auth/account/register', {
        'mobile': mobile,
        'email': email,
        'password': userpw1
      })
      .then(response => {
        console.log(response)
        this.success=true
      })
      .catch(error => {
        console.log(error.response)
        if (!!error.response) {
          this.errorMessage = error.response.data.message
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .register-wrap{
    height: 100%;
    background: url(../../static/images/login_bj.png) no-repeat;
    background-size: 100% 100%;

    .error-msg{
      color: #fff;
      font-size: 15px;
      text-align: left;
      padding-left: 32px;
      width: 96%;
      margin: 0px auto 20px;
    }

    input{
      outline:none;
      background-color: transparent !important;
      box-shadow: 0 0 0px 1000px transparent inset !important;
    }
    input:-webkit-autofill {
        box-shadow: 0 0 0px 1000px transparent inset !important;
        border: 1px solid transparent !important;
        background-color: transparent !important;
    }

    .section{
      overflow: initial;
    }
    .balloon {
        opacity: 1;
        width: 5.7rem;
        margin: 2.6rem auto;
    }
    .section1 {
        width: 6.81rem;
        background-size: 100% 100%;
        left: -7rem;
        height: 7.2rem;
    }
    .submitForm label {
        font-size: 0.3rem;
        color: #fff;
        display: inline-block;
        font-weight:400;
    }
    .form_item{
        overflow: hidden;
        margin: 25px 0;
        padding: 0 28px;
    }
    .form_item:nth-of-type(1){
      margin-top:0;
    }
    .form_item .button-btn-box{
      background: #5162a8;
      color: #fff;
      border: navajowhite;
      width: 100%;
      height: 0.8rem;
      border-radius: 0.05rem;
      font-size: 0.3rem;
      margin-left: 0rem;
      text-align: center;
      line-height: 0.8rem;
    }
    .submitForm input, .submitForm textarea, .submitForm select {
        display: inline-block;
        width: 100%;
        border: 1px #eee solid;
        padding-left: 5px;
        color: #fff;
        height:34px;
        line-height:34px;
    }
    .submitForm input{
      height: 40px;
      width: 96%;
      border-radius: 20px;
      color:#fff;
      padding-left:10px;
    }
    .submitForm label{
      height: 0.6rem;
      line-height: 0.6rem;
      width: 100%;
      padding-bottom: 2px;
      padding-left: 2px;
    }
    .balloon-container{
      height:100%;
    }
    .tu9-wrapper{
      position: initial;
      left: initial;
      top: initial;
      transform: initial;
      z-index: 1000;
      position: relative;
      margin-top:60px;
    }
    .logo-img img{
      width:100%;
    }
    .balloon-container h3{
      text-align:center;
      font-size: 36px;
      font-weight:400;
      color:#fff;
      margin:0;
      margin-top: 90px;
      display: inline-block;
    }
    .submit-btn{
      background: #5162a8;
      color: #fff;
      border: navajowhite;
      width: 100%;
      border-radius: 0.05rem;
      font-size: 0.3rem;
      margin-left: 0rem;
      text-align: center;
      line-height: 0.8rem;
      display: block;
      height: 44px;
      line-height:44px;
      border-radius: 20px;
      font-size: 14px;
    }
    .zc_zh{
      font-size: 0.3rem;
      text-align: center;
      display: block;
      color: #fff;
      font-size: 14px;
    }
    .zc_zh a{
      padding-left:5px;
      text-decoration:underline;
      color:#fff;
    }
    #errorMsg{
      font-size: 0.3rem;
      padding: 0 28px;
      color: #fff;
    }
}
</style>
