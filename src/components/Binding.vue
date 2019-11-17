<template>
  <div class="register-wrap">
   <div class="section section-box-5">
    <div class="balloon-container">
     <h3>绑定手机号</h3>
     <div class="tu9-wrapper clear">

      <div v-if="success" class="form_item zc-cg-box">
       <span class="zc_zh">已绑定成功，去<router-link to="/user"><a>用户中心</a></router-link></span>
      </div>
      <form v-else action="" class="submitForm">
       <div class="error-msg">{{errorMessage}}</div>
       <div class="form_item">
        <input type="text" name="mobile" placeholder="请输入手机号" v-model="user.mobile" maxlength="11" />
       </div>
       <div class="form_item verification">
        <input type="text" name="vcode" placeholder="请输入短信证码" v-model="user.vcode" maxlength="6" />
        <div>
          <div v-if="sending" class="count-down" style="color: white">{{ countSecond }}s后重新发送</div>
          <div v-else class="send-btn" style="color: white" @click="sendSms">发送验证码</div>
        </div>
       </div>
       <div class="form_item" style="margin:0">
        <div class="submit-btn" @click="binding">提交</div>
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
  name: 'Binding',
  data () {
    return {
      user: {
        openId: '',
        mobile: '',
        vcode: ''
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
    binding() {
      this.errorMessage = ''
      var mobile = this.user.mobile
	    var vcode = this.user.email
      
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
      this.success=true
    },
    sendSms() {
      var mobile = this.user.mobile
      if(mobile == ''){
        this.errorMessage = '请输入手机号码'
        return false;
      }
      if(!this.G.isPoneAvailable(mobile)){
        this.errorMessage = '请输入有效的手机号码'
        return false;
      }

      var that = this
      that.sending = true
      that.countSecond = 60
      that.sendingInterval = setInterval(() => {
        that.countSecond = that.countSecond - 1
        console.log( that.countSecond )
        if(that.countSecond === 0){
          that.sending = false
          clearInterval(that.sendingInterval)
        }
      }, 1000);
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
