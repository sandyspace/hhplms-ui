<template>
  <div class="userhome-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <div class="tu9-wrapper clear">
          <div class="information">
            <div class="head-portrait"><span><img src="static/images/touxiang.jpg"></span></div>
            <h3><span>{{user.username}}</span></h3>
            <div class="data-box">
                <span><img src="static/images/telephone.png">{{user.mobile}}</span>
                <span><img src="static/images/mailbox.png">{{user.email}}</span>
            </div>
          </div>
          <div class="form_item">
            <router-link to="/uploadCompanyInfo"><a href=""><span><img src="static/images/shanchuan.png"></span>上传企业信息</a></router-link>
            <router-link to="/joinCompany"><a href="" style="margin:0;"><span style="font-size: 18px;">+</span>加入企业</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 

export default {
  name: 'UserHome',
  data () {
    return {
      user: {
        mobile: '',
        email: '',
        realName: '',
        nickName: ''
      },
      accessToken: null,
      errorMessage: ''
    }
  },
  mounted: function () {
    // 判断用户是否登录，如果未登录去登录页面
    let access_token = window.localStorage[this.G.tokenKey];
    if(access_token == null || access_token == '' || access_token == undefined) {
      this.$router.push({path: '/login'})
      return false
    }
    this.accessToken = access_token
    this.$http.get('/api/auth/user/profile', {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken,
        }
      })
      .then(response => {
        console.log(response)
        this.user = response.data.basicInfo
        var username = '匿名'
        if (this.user.realName != null && this.user.realName != '') {
            username = this.user.realName
        }else{
          if (this.user.nickName != null && this.user.nickName != '') {
            username = this.user.nickName
          }
        }
        this.user.username = username
      })
      .catch(error => {
        if(!!error.response){
          console.log(error.response)
          this.G.validateTokenExpired(this, error.response.data)
        }
      })
  }
}
</script>
<style lang="less" scoped>
.userhome-wrap{
  height: 100%;
  background: url(../../static/images/login_bj.png) no-repeat;
  background-size: 100% 100%;

  .section{
    overflow: initial;
  }
  .balloon {
      opacity: 1;
      width: 5.7rem;
      margin: 2.6rem auto;
  }
  .submitForm label {
    font-size: 0.3rem;
    color: #fff;
    display: inline-block;
    font-weight:400;
  }
  .form_item{
    overflow: hidden;
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
  .form_item{
    font-size: 0.3rem;
    text-align: center;
    color: #fff;
    margin-top: 60px;
  }
  .form_item a{
    color:#fff;
    width: 100%;
    display: inline-block;
    background: #4e58c9;
    color: #fff;
    height: 44px;
    line-height: 44px;
    text-decoration:none;
    margin-bottom: 36px;
    border-radius: 6px;
    width:220px;
    font-size: 14px;
  }
  .form_item a span{
    display: inline-block;
    padding-right: 6px;
  }
  .form_item a span img{
    width: 14px;
  }
  .information{
    text-align:center;
  }
  .information > .head-portrait{
    width: 100px;
    height: 100px;
    display: inline-block;
    border-radius: 50%;
    background: #ccc;
      margin-bottom: 5px;
    margin-top: 90px;
    overflow: hidden;
    background:#fff;
  }
  .information > .head-portrait img{
    width:100%;
    height:100%;
    border-radius: 50%;
  }
  .information > .head-portrait span{
    display: block;
    padding: 3px;     
  }
  .information > h3{
    margin: 0;
    font-size: 12px;
  }
  .information > h3 span{
    font-size: 22px;
  }
  .information .data-box > span{
    margin: 0;
    font-size: 14px;
    padding-top: 10px;
    color: #fff;
    display: block;
    opacity: 0.6;
  }
  .data-box > span img{
    width: 17px;
    display: inline-block;
    position: relative;
    top: 2px;
    padding-right: 5px;
  }
}
</style>
