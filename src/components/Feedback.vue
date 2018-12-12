<template>
  <div class="feedback-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <div class="logo-img">
          <img src="static/images/feedback-top.jpg">
        </div>
        <div v-if="success" class="tu9-wrapper clear">
          <div class="tjcg">您的留言提交成功，稍后会尽快联系您！</div>
        </div>
        <div v-else class="tu9-wrapper clear">
          <form action="" class="submitForm">
            <div class="form_item">
              <label for="">标题：</label>
              <input type="text" name="title" v-model="form.title" placeholder="请输入标题" maxlength="20"></div>
            <div class="form_item">
              <label for="">电话：</label>
              <input type="text" name="contactMobile" v-model="form.mobile" placeholder="请输入您的电话" maxlength="11"></div>
            <div class="form_item">
              <label for="">姓名：</label>
              <input type="text" name="contact" v-model="form.name" placeholder="请输入您的姓名" maxlength="20"></div>
            <div class="form_item">
              <label for="">留言：</label>
              <textarea name="content" v-model="form.content" cols="30" rows="10" placeholder="请输入您的留言详情" maxlength="200"></textarea>
            </div>
            <div><span id="errorMsg" class="error-msg">{{errorMessage}}</span></div>
            <div class="form_item" style="margin:0">
              <label style="width:60px;"></label>
              <div class="submit-btn" @click="commit">提交</div>
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
  name: 'Feedback',
  data () {
    return {
      form: {
        title: '',
        mobile: '',
        name: '',
        content: ''
      },
      errorMessage: '',
      success: false
    }
  },
  mounted: function () {},
  methods: {
    commit: function () {
      this.errorMessage = ''
      var title = this.form.title
      var mobile = this.form.mobile
      var name = this.form.name
      var content = this.form.content

      if(title == ''){
        this.errorMessage = '请输入标题'
        return false;
      }
      if(mobile == ''){
        this.errorMessage = '请输入联系电话'
        return false;
      }
      if(!this.G.isPoneAvailable(mobile)){
        this.errorMessage = '请输入有效的手机号码'
        return false;
      }
      if(name == ''){
        $this.errorMessage = '请输入联系人'
        return false;
      }
      if(content == ''){
        this.errorMessage = '请输入留言'
        return false;
      }
      this.$http.post('/api/sys/feedbacks', {
        'contact': name,
        'contactMobile': mobile,
        'content': content,
        'title': title
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
  .feedback-wrap{
    height: 100%;
    background: #f6f9fb;
    background-size: 100% 100%;

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
      width: 60px;
      height: 30px;
      margin-top: 3px;
    }
    .form_item {
      overflow:hidden;
      margin: 20px 0;
      display:flex;
      padding:0 28px;
    }
    .form_item:nth-of-type(1) {
      margin-top:0;
    }
    .form_item .submit-btn {
      background:#122b88;
      color:#fff;
      border:navajowhite;
      width: 100px;
      height: 40px;
      border-radius: 2.5px;
      font-size: 15px;
      margin-left: 0;
      text-align:center;
      line-height: 40px;
    }
    .submitForm input,.submitForm textarea {
      display: inline-block;
      width: 250px;
      border: 1px #eee solid;
      padding-left: 5px;
    }
    .submitForm textarea {
      height:100px;
      padding-top:6px;
    }
    .submitForm input {
      height: 34px;
    }
    .balloon-container {
      height:100%;
    }
    .tu9-wrapper {
      position:initial;
      left:initial;
      top:initial;
      transform:initial;
      margin-top:-30px;
      z-index:1000;
      position:relative;
    }
    .logo-img img {
      width:100%;
    }
    #errorMsg {
      font-size:14px;
      color:red;
      line-height:40px;
      padding-left:10px;
    }
    .tjcg {
      font-size:16px;
      text-align:center;
      padding-top:20px;
      color:#ff6868;
    }
}
</style>
