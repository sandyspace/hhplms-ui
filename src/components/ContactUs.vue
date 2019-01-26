<template>
  <div class="contactus-wrap">
    <div class="section section-box-5">
      <div class="balloon-container">
        <div class="lxwm-box">
          <div class="contact">
            <div class="">
              <a href="https://m.amap.com/search/mapview/poiid=B0FFIJP5W9&keywords=%E8%88%B9%E8%88%B6%E5%9B%BD%E9%99%85%E5%B9%BF%E5%9C%BA"><img src="static/images/lxwm-img-1.png" style="width:100%;"></a></div>
            <div>
              <div>热线电话：</div>
              <a href="tel:027-87302928">027-82337199</a>
              </div>
          </div>
          <div class="contact lxwm-bottom">
            <div class="">
              <a href="https://m.amap.com/search/mapview/keywords=%E8%88%B9%E8%88%B6%E5%9B%BD%E9%99%851818&city=420106&poiid=B0FFGWI3EZ"><img src="static/images/lxwm-img-2.png" style="width:100%;"></a></div>
            <div>
              <div>热线电话：</div>
              <a href="tel:027-87302928">027-87302928</a>
              </div>
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
    background: url(../../static/images/lxwm-bg.png) no-repeat;
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
