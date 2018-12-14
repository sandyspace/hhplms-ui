<template>
  <div class="joincompany-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <div v-if="success" class="tips-box">
          <span class="zc_zh">
            <div>
              <img src="static/images/chenggong.png"></div>您的申请已提交成功，我们正在努力审核，请耐心等待！
              <router-link to="/user"><a>返回</a></router-link></span>
        </div>
        <div v-else class="tu9-wrapper clear">
          <form action="" class="submitForm">
            <div class="title-box">
              <h4>企业信息</h4></div>
              <div class="form_item">
                <label for="">
                  <span class="bt-box">*</span>企业名称：</label>
                <input type="text" name="name" v-model="company.name" placeholder="请输入企业名称" maxlength="20">
              </div>
              <div class="form_item">
                <label for=""><span class="bt-box">*</span>企业类型：</label>
                <div style="position: relative;">
                  <select name="type" v-model="company.type">
                    <option value="">请选择企业类型</option>
                    <option value="llc">有限责任公司</option>
                    <option value="jsc">股份有限公司</option>
                    <option value="soe">国有企业</option>
                    <option value="pb">私营企业</option>
                    <option value="lp">有限合伙企业</option>
                    <option value="fie">外商投资企业</option>
                    <option value="sp">个人独资企业</option>
                    <option value="hmt">港澳台</option>
                    <option value="other">其他</option></select>
                  <img src="static/images/sanjiao.png" class="img-sanjiao"></div>
              </div>
              <div class="form_item">
                <label for="">
                  <span class="bt-box">*</span>企业地址：</label>
                <input type="text" name="address" v-model="company.address" placeholder="请输入企业地址" maxlength="100"></div>
              <div class="form_item">
                <label for="">
                  <span class="bt-box">*</span>联系人：</label>
                <input type="text" name="contactName" v-model="company.contactName" placeholder="请输入联系人姓名" maxlength="15"></div>
              <div class="form_item">
                <label for="">
                  <span class="bt-box">*</span>联系电话：</label>
                <input type="text" name="contactMobile"  v-model="company.contactMobile" placeholder="请输入联系电话" maxlength="11"></div>
              <div class="title-box">
                <h4>业主信息</h4></div>
              <div class="form_item">
                <label for="">
                  <span class="bt-box">*</span>业主姓名：</label>
                <input type="text" name="companyOwnerName" v-model="company.companyOwnerName" placeholder="请输入业主姓名" maxlength="100"></div>
              <div class="form_item">
                <label for="" style="width: initial;">
                  <span class="bt-box">*</span>业主性别：</label>
                <div class="gender-box">
                  <div>
                    <input type="radio" name="companyOwnerSex" v-model="company.companyOwnerSex" value="male">
                    <span>男</span></div>
                  <div>
                    <input type="radio" name="companyOwnerSex" v-model="company.companyOwnerSex" value="female">
                    <span>女</span></div>
                </div>
              </div>
              <div class="form_item company-owner">
                <label for="">业主手机：</label>
                <div id="companyOwnerPhone">{{companyOwnerPhone}}</div>
              </div>
              <div class="form_item company-owner">
                <label for="">业主邮箱：</label>
                <div id="companyOwnerEmail">{{companyOwnerEmail}}</div>
              </div>
              <div id="errorMsg" class="error-msg">{{errorMessage}}</div>
              <div class="form_item" style="margin:0;margin-top: 40px;display: flex;margin-bottom: 40px;">
                <span class="button-btn-box" @click="commit">提交</span>
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
  name: 'UploadCompanyInfo',
  data () {
    return {
      company: {
        name: '',
        type: '',
        address: '',
        contactName: '',
        contactMobile: '',
        companyOwnerName: '',
        companyOwnerSex: 'male'
      },
      companyOwnerPhone:  '',
      companyOwnerEmail: '',
      accessToken: null,
      errorMessage: '',
      success: false
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
    //查询用户信息
    this.$http.get('/api/auth/user/profile', {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken,
        }
      })
      .then(response => {
        console.log(response)
        let basicInfo = response.data.basicInfo;
        if(basicInfo != null){
          this.companyOwnerPhone = basicInfo.mobile
          this.companyOwnerEmail = basicInfo.email
        }
      })
      .catch(error => {
        if(!!error.response){
          console.log(error.response)
          this.G.validateTokenExpired(this, error.response.data)
        }
      })
  },
  methods: {
    commit () {
      this.errorMessage = ''
      var name = this.company.name
	    var type = this.company.type
      var address = this.company.address
      var contactName = this.company.contactName
      var contactMobile = this.company.contactMobile
      var companyOwnerName = this.company.companyOwnerName
      var companyOwnerSex = this.company.companyOwnerSex
      
      if(name == ''){
       this.errorMessage = '请输入企业名称'
        return false;
      }
      if(type == ''){
       this.errorMessage = '请输入企业类型'
        return false;
      }
      if(address == ''){
        this.errorMessage = '请输入企业地址'
        return false;
      }
      if(contactName == ''){
       this.errorMessage = '请输入联系人'
        return false;
      }
      if(contactMobile == ''){
        this.errorMessage = '请输入联系电话'
        return false;
      }
      if(!this.G.isPoneAvailable(contactMobile)){
        this.errorMessage = '请输入有效的手机号码'
        return false;
      }
      if(companyOwnerName == ''){
        this.errorMessage = '请输入业主姓名'
        return false;
      }
      this.$http.patch('/api/ana/account/joinCompany', {
        	  'address': address,
            'code': '',
            'contactPhone': contactMobile,
            'contactName': contactName,
            'name': name,
            'type': type,
            'companyOwnerName': companyOwnerName,
            'companyOwnerSex': companyOwnerSex
      },
      {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken,
        }
      })
      .then(response => {
        console.log(response)
        this.success=true
      })
      .catch(error => {
        console.log(error.response)
        if (!!error.response) {
          this.errorMessage = error.response.data.errorMsg
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.joincompany-wrap{
  height: auto !important;
  background: url(/static/images/form-bj.png) no-repeat;
  background-size: 100% 100%;
  text-align: left;

  .balloon {
    opacity:1;
    width:5.7rem;
    margin:2.6rem auto;
  }
  .section1 {
    width:6.81rem;
    background-size:100% 100%;
    left:-7rem;
    height:7.2rem;
  }
  .submitForm label {
    font-size: 15px;
    color:#333;
    display:inline-block;
    font-weight:400;
  }
  .form_item {
    margin: 15px 0;
    padding: 0 28px;
  }
  .form_item:nth-of-type(1) {
    margin-top:0;
  }
  .form_item .button-btn-box {
    background:#5162a8;
    color:#fff;
    border:navajowhite;
    width:100%;
    height: 40px;
    border-radius: 2.5px;
    font-size: 15px;
    margin-left: 0;
    text-align: center;
    line-height: 40px;
  }
  .submitForm input,.submitForm textarea,.submitForm select {
    display:inline-block;
    width:100%;
    border:1px #eee solid;
    padding-left:5px;
    color:#666;
    height:34px;
    line-height:34px;
  }
  .submitForm textarea {
    height:100px;
    padding-top:6px;
  }
  .submitForm input {
    height: 34px;
    width: 98%;
  }
  .submitForm label {
    height: 36px;
    line-height: 36px;
    width:100%;
    padding-bottom:2px;
    padding-left:2px;
  }
  .balloon-container {
    height:100%;
  }
  .tu9-wrapper {
    padding-top: 60px;
  }
  .logo-img img {
    width:100%;
  }
  #errorMsg {
    padding:0 28px;
    font-size:14px;
    color:red;
  }
  .bt-box {
    color:red;
    padding-right:3px;
  }
  .submitForm h4 {
    font-size: 15px;
    margin:0 28px;
    border-bottom:2px #5162a8 solid;
    color:#5162a8;
    display:inline-block;
  }
  .gender-box {
    height: 30px;
    display: inline-block;
    line-height: 30px;
  }
  .gender-box > div {
    display:inline-block;
    line-height: 30px;
    vertical-align:top;
  }
  .gender-box span {
    float:left;
    font-size:0.26rem;
    color:#666;
  }
  .gender-box input {
    width:initial;
    height:initial;
    float:left;
    position:relative;
    top:7px;
  }
  .company-owner label {
    padding-right:10px;
  }
  .company-owner > div {
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    color:#666 !important;
  }
  .title-box {
    line-height: 22px;
  }
  .tips-box {
    font-size: 13px;
    text-align: center;
    padding: 0 40px;
    padding-top:100px;
  }
  .tips-box a {
    padding-left:10px;
    color:#5162a8;
  }
  .tips-box span > div img {
    width:45px;
    border:3px #5162a8 solid;
    border-radius:50%;
    padding:15px;
    margin-bottom:20px;
  }
  input[type="text"] {
    -webkit-appearance:none;
  }
  select[name="type"] {
    padding-left:5px !important;
  }
  select {
    -webkit-appearance:none;
    background:#fff !important;
  }
  .img-sanjiao {
    position:absolute;
    right: 8px;
    top: 6px;
    width: 20px;
  }
}
</style>
