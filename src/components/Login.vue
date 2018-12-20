<template>
  <div class="index-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <h3>账号登录</h3>
        <div class="tu9-wrapper clear">
          <form action="" class="submitForm">
            <div class="error-msg">{{errorMessage}}</div>
              <input type="hidden" name="placeholder">
              <div class="form_item">
                <input type="text" name="name" placeholder="账号" v-model="user.username" maxlength="50">
              </div>
              <div class="form_item">
                <input type="password" name="userpw" placeholder="密码" v-model="user.password" maxlength="20">
              </div>
              <div class="form_item">
                <span class="submit-btn" @click="login">提交</span>
              </div>
              <div class="form_item">
                 <span class="zc_zh">如果还没有账号，点击<router-link to="/register"><a>立即注册</a></router-link></span>
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
  name: 'Login',
  data () {
    return {
      user: {
        userName: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  mounted: function () {},
  methods: {
    login: function () {
      this.errorMessage = ''
      var username = this.user.username
      var password = this.user.password
      if (username === '') {
        this.errorMessage = '请输入用户名~'
        return false
      }
      if (password === '') {
        this.errorMessage = '请输入密码~'
        return false
      }
      this.$http.post('/api/auth/account/login', {
        'username': username,
        'password': password
      })
      .then(response => {
        console.log(response)
        window.localStorage[this.G.tokenKey] = response.data.token;
        //登录成功去个人中心
        this.$router.push({path: '/user'})
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
  .index-wrap{
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
