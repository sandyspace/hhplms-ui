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
                <input type="text" name="name" placeholder="手机号" v-model="user.username" maxlength="50">
              </div>
              <div class="form_item">
                <input type="password" name="userpw" placeholder="密码" v-model="user.password" maxlength="20">
              </div>
              <div class="form_item">
                <span class="submit-btn" @click="login">提交</span>
              </div>
              <div class="form_item" style="padding: 0 40px;">
                <span class="zc_zh" style="float: right;"><router-link to="/changePassword"><a>找回密码</a></router-link></span>
                <span class="zc_zh">没有账号?<router-link to="/register"><a>立即注册</a></router-link></span>
              </div>
              <div v-if="openId" class="form_item wx_login">
                <a :to="{path: '/openIdBack', query: {openId : openId}}"><div class="box"><span></span></div><p>微信快速登陆</p></a>
              </div>
              <div v-if="wxAuthRequestUrl" class="form_item wx_login">
                <a :href="wxAuthRequestUrl"><div class="box"><span></span></div><p>微信快速登陆</p></a>
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
      errorMessage: '',
      // 已有微信openId
      openId: null,
      // 微信请求授权字符串
      wxAuthRequestUrl: null
    }
  },
  mounted () {
    // 判断用户是否登录，如果已登录直接去用户中心
    let access_token = window.localStorage[this.G.tokenKey]
    if (access_token != null && access_token != '' && access_token != undefined) {
      this.$router.push({path: '/user'})
      return false
    }
    // 获取本地缓存的openId
    let openId = window.localStorage[this.G.openIdKey]
    if (openId != null && openId != '' && openId != undefined) {
      this.openId = openId
    } else {
      let wxAppId = this.G.wxAppId
      let redirectUrl = encodeURIComponent(this.G.baseURL + '/api/auth/account/wechatAuthCallback')
      // 生成微信请求授权字符串
      this.wxAuthRequestUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxAppId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE`
    }
  },
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
    .wx_login{
      text-align: center !important;
      padding-top: 30px !important;
      a{
        display: inline-block;
      }
      .box{
        display: inline-flex;
        background: #ffffff26;
        padding: 6px;
        border-radius: 50%;
        span{
          width: 60px;
          height: 60px;
          display: inline-block;
          background: url(../../static/images/icon2.png) no-repeat;
          background-position-y: -61px;
        }
      }
      p{
        margin: 0;
        color: #fff;
        font-size: 14px;
        padding-top: 8px;
      }
    }
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
        text-align: initial;
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
      display: inline-block;
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
