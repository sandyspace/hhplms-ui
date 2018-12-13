<template>
  <div class="contactus-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <div class="lxwm-box">
          <div class="contact">
            <div class="">
              <img src="static/images/lxwm-img-1.png" style="width:100%;"></div>
            <div>
              <div>热线电话：</div>
              <a href="tel:027-87302928">027-87302928</a>
              <a href="tel:4001127199">4001127199</a></div>
          </div>
          <div class="contact lxwm-bottom">
            <div class="">
              <img src="static/images/lxwm-img-2.png" style="width:100%;"></div>
            <div>
              <div>热线电话：</div>
              <a href="tel:027-87302928">027-87302928</a>
              <a href="tel:4001127199">4001127199</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 

export default {
  name: 'ContactUs',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.contactus-wrap{
  height: 100%;
  background: url(/static/images/lxwm-bg.png) no-repeat;
  background-size: 100% 100%;

  .section{
    overflow: initial;
  }
  .lxwm-box{
      padding:30px 20px;
      font-size: 0.3rem;
      color: #182166;
  }
  .contact{
      margin-bottom: 30px;
  }
  .contact > div:nth-last-of-type(1){
      margin-top: 15px;
  }
  .contact > div:nth-last-of-type(1) > div{
      padding-bottom: 10px;
  }
  .contact a{
      color: #182166 !important;
      padding-right: 15px;
      text-decoration: underline;
      font-weight: bold;
      font-size: 0.35rem;
  }
  .contact a:nth-last-of-type(1){
      padding-right:0;
  }
  .lxwm-bottom{
      border-top: 1px #eee solid;
      padding-top: 35px;
      margin-top: 40px;
  }
}
</style>
