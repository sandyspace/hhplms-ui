<template>
  <div class="contactus-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <div class="lxwm-box">
          <div class="contact">
            <div class="">
              <a href="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E6%AD%A6%E6%B1%89%E8%88%B9%E8%88%B6%E5%9B%BD%E9%99%85%E5%B9%BF%E5%9C%BA&c=218&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&wd2=%E6%AD%A6%E6%B1%89%E5%B8%82%E6%B1%9F%E5%B2%B8%E5%8C%BA&sug_forward=87b42f39856244ad9d82ea2d&src=1/vt="><img src="static/images/lxwm-img-1.png" style="width:100%;"></a></div>
            <div>
              <div>热线电话：</div>
              <a href="tel:027-87302928">027-87302928</a>
              <a href="tel:4001127199">4001127199</a></div>
          </div>
          <div class="contact lxwm-bottom">
            <div class="">
              <a href="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E8%88%B9%E8%88%B6%E5%9B%BD%E9%99%851818&c=218&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&wd2=%E6%AD%A6%E6%B1%89%E5%B8%82%E6%AD%A6%E6%98%8C%E5%8C%BA&sug_forward=cee3584940e6bc388936eec3&src=1/vt="><img src="static/images/lxwm-img-2.png" style="width:100%;"></a></div>
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
  background: #fff;
  .section-box-5{
    background: url(/static/images/lxwm-bg.png) no-repeat;
    background-size: 100% 100%;
  }
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
      text-align: left;
  }
  .contact > div:nth-last-of-type(1) > div{
      padding-bottom: 10px;
      font-size: 15px;
      text-align: left;
  }
  .contact a{
      color: #182166 !important;
      padding-right: 15px;
      text-decoration: underline;
      font-weight: bold;
      font-size: 18px;
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
