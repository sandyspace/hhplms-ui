<template>
  <div class="index-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <h3>账号登录</h3>
        <div class="tu9-wrapper clear">
          <form action="" class="submitForm">
            <div id="errorMsg" class="error-msg"></div>
              <div class="form_item">
                <input type="text" name="name" placeholder="账号" maxlength="50">
              </div>
              <div class="form_item">
                <input type="password" name="userpw" placeholder="密码" maxlength="20">
              </div>
              <div class="form_item">
                <span class="submit-btn" onclick="login();">提交</span>
              </div>
              <div class="form_item">
                 <span class="zc_zh">如果还没有账号，点击<a href="register.html">立即注册</a></span>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  mounted: function () {},
  methods: {}
}
</script>
<style lang="less" scoped>
  .index-wrap{
    height: 100%;
    background: url(/static/images/login_bj.png) no-repeat;
    background-size: 100% 100%;

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
        float: left;
        font-weight:400;
    }
    .form_item{
        overflow: hidden;
        margin: 0.5rem 0;
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
        float: left;
        border: 1px #eee solid;
        padding-left: 5px;
        color: #fff;
        height:34px;
        line-height:34px;
    }
    .submitForm textarea{
      height:100px;
      padding-top: 6px;
    }
    .submitForm input{
      height: 40px;
      width: 97%;
      background: initial;
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
      font-size:0.7rem;
      font-weight:400;
      color:#fff;
      margin:0;
      margin-top: 90px;
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
    }
    .zc_zh{
      font-size: 0.3rem;
      text-align: center;
      display: block;
      color: #fff;
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
