<template>
  <div class="register-wrap">
   <div class="section section-box-5">
    <div class="balloon-container">
     <h3>修改密码</h3>
     <div class="tu9-wrapper clear">

      <div v-if="success" class="form_item zc-cg-box">
       <span class="zc_zh">密码修改成功，返回<router-link to="/login"><a>登录</a></router-link>页面</span>
      </div>
      <form v-else action="" class="submitForm">
       <div class="error-msg">{{errorMessage}}</div>
       <div class="form_item">
        <input type="text" name="mobile" placeholder="请输入手机号" v-model="user.mobile" maxlength="11" @blur="blurs"/>
       </div>
       <div class="form_item verification">
        <input type="text" name="vcode" placeholder="请输入短信证码" v-model="user.vcode" maxlength="6" @blur="blurs"/>
        <div>
          <div v-if="sending" class="count-down" style="color: white">{{ countSecond }}s后重新发送</div>
          <div v-else class="send-btn" style="color: white" @click="handleSendClick">发送验证码</div>
        </div>
       </div>
       <div class="form_item">
        <input type="password" name="userpw1" placeholder="请输入密码" v-model="user.userpw1" maxlength="20" @blur="blurs"/>
       </div>
       <div class="form_item">
        <input type="password" name="userpw2" placeholder="请确认密码" v-model="user.userpw2" maxlength="20" @blur="blurs"/>
       </div>
       <div class="form_item" style="margin:0">
        <div class="submit-btn" @click="handleSubmit">提交</div>
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
  name: 'ChangePassword',
  data () {
    return {
      user: {
        mobile: '',
        vcode: '',
        userpw1: '',
        userpw2: ''
      },
      errorMessage: '',
      success: false,
      sending: false, // 是否正在发送验证码
      countSecond: null, // 倒计时秒数
      sendingInterval: null // 倒计时定时器
    }
  },
  mounted: function () {},
  methods: {
    // 防止input点击软键盘后背景上移问题
    blurs(){
			window.scroll(0, 0)
		},
    handleSubmit: function () {
      this.errorMessage = ''
      var mobile = this.user.mobile
	    var userpw1 = this.user.userpw1
      var userpw2 = this.user.userpw2
      var vcode = this.user.vcode
      
      if(mobile == ''){
        this.errorMessage = '请输入手机号码'
        return false;
      }
      if(!this.G.isPoneAvailable(mobile)){
        this.errorMessage = '请输入有效的手机号码'
        return false;
      }
      if(vcode == ''){
        this.errorMessage = '请输入短信验证码'
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
      // 发送修改密码请求
      this.changePwdRequest()
    },
    handleSendClick () {
      var that = this
      var mobile = that.user.mobile
      if(mobile == ''){
        that.errorMessage = '请输入手机号码'
        return false;
      }
      if(!that.G.isPoneAvailable(mobile)){
        that.errorMessage = '请输入有效的手机号码'
        return false;
      }
      that.sending = true
      that.countSecond = 60
      // 发送请求
      that.sendSmsReqeust(mobile)
      that.sendingInterval = setInterval(() => {
        that.countSecond = that.countSecond - 1
        if(that.countSecond === 0){
          that.sending = false
          clearInterval(that.sendingInterval)
        }
      }, 1000);
    },
    // 发送获取验证码请求
    sendSmsReqeust (mobile) {
      var that = this
      that.$http.post('/api/sys/dynamicCodes/retrieve', {
        'mobile': mobile
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        that.sending = false
        clearInterval(that.sendingInterval)
        if (!!error.response) {
          that.errorMessage = error.response.data.message
        }
      })
    },
    // 发送修改密码请求
    changePwdRequest () {
      var that = this
      that.$http.post('/api/auth/account/pwd/setting', {
        'dynamicCode': this.user.vcode,
        'mobile': this.user.mobile,
        'password': this.user.userpw1
      })
      .then(res => {
        that.success = true
      })
      .catch(error => {
        that.success = false
        if (!!error.response) {
          that.errorMessage = error.response.data.message
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .register-wrap{
    height: auto !important;
    background: url(../../static/images/login_bj.png) no-repeat;
    background-size: 100% 100%;
    min-height: 100%;
    .error-msg{
      color: #fff;
      font-size: 15px;
      text-align: left;
      padding-left: 32px;
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
      margin-top: 50px;
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
